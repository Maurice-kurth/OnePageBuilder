<template>
  <div class="card container article px-4 py-4 my-6">
    <h2>Formulaire pour les informations de votre site web</h2>
    <p>{{ monMessage }}</p>
    <div class="vue-form my-4">
      <form @submit.prevent="formSubmit">
        <InfosGenerales :nomSite="nomSite"
          :siteLogo="siteLogo ? temporaryLogoUrl : previousLogo"
          @update-nomSite="updateNomSite" @logo-upload="handleLogoUpload" />
        <section class="infos-header">
          <h3>2 - Bandeau héros et thème</h3>
          <HeroSection :presentationSite="presentationSite"
            @update-presentationSite="updatePresentationSite" />
          <ThemeColorPicker :themeColors="themeColors"
            :baseThemeColors="baseThemeColors"
            @update-themeColors="updateThemeColors" />

        </section>
        <!-- Section Produits -->
        <section class="infos-produits">
          <div class="is-flex is-align-items-center">
            <h3 class="mx-4">Produits</h3>
            <input type="checkbox" name="activated" /> <label
              for="activated">Activé</label>
          </div>

          <div class="columns is-multiline">
            <div v-for="product in products" class="column is-one-quarter">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" v-model="product.name"
                    placeholder="Nom du produit" />
                  <input class="input" type="text" v-model="product.price"
                    placeholder="prix du produit" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button type="button" class="button is-info mr-4"
              @click="addProduct">
              Ajouter un produit
            </button>
            <button type="button" class="button is-danger"
              @click="removeProduct">
              Supprimer un produit
            </button>
          </div>
        </section>
        <!-- Fin Section Produits -->

        <!-- Envoi du formulaire -->
        <div style="margin-top: 30px" class="field">
          <p class="control">
            <button type="submit" class="button is-info">Valider</button>
          </p>
          <div v-if="successMessage">
            <p>
              {{ successMessage }}
            </p>
            <a class="button is-success" :href="siteUrl">Voir le site </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import InfosGenerales from "./FormSections/InfosGenerales.vue";
import HeroSection from "./FormSections/HeroSection.vue";
import ThemeColorPicker from "./FormSections/ThemeColorPicker.vue";
export default {
  components: {
    InfosGenerales,
    HeroSection,
    ThemeColorPicker,
  },
  data() {
    return {
      monMessage: "Hello from Vue !",
      successMessage: false,
      nomSite: "",
      presentationSite: "",
      siteLogo: "",
      temporaryLogoUrl: "",
      previousLogo: "/images/uploads/adminlcdz/sitelogo.png",
      products: [
        {
          name: "Produit 0",
          price: 0,
        },
      ],
      // themeColors is an array of objects with 2 properties: name (string) and colors: (array of strings)
      baseThemeColors: [
        {
          name: "red",
          colors: ["#f44336", "#e91e63", "#9c27b0"],
        },
        {
          name: "orange",
          colors: ["#ff9800", "#ffc107", "#ffeb3b"],
        },
        {
          name: "lightblue",
          colors: ["#2196f3", "#03a9f4", "#00bcd4"],
        },
      ],
      themeColors: "",
      pickedThemeColors: [],
    };
  },
  computed: {
    siteUrl() {
      return "builder/site/" + this.nomSite;
    },
  },
  watch: {
    themeColors: function (newVal, oldVal) {
      this.pickedThemeColors = newVal.split(",");
      //make themeColorsArray a named array with keys primary, secondary, tertiary
      this.pickedThemeColors = {
        primary: this.pickedThemeColors[0],
        secondary: this.pickedThemeColors[1],
        tertiary: this.pickedThemeColors[2],
      };
      console.log(this.pickedThemeColors);
    },
  },
  mounted() {
    //Utiliser avec AJAX une route contenant en JSON  les données du site de la BDD pour prépeupler le formulaire
    console.log("Vuejs monté");
    axios
      .get("/api/siteinfo")
      .catch((error) => {
        console.log("erreur 500 sur le get");
      })
      .then((response) => {
        console.log(response);
        this.populateFieldsFromApi(response.data);
      });
  },
  methods: {
    addProduct() {
      this.products.push({
        name: "",
        price: 0,
      });
    },
    removeProduct() {
      this.products.pop();
    },
    updateNomSite(nomSite) {
      this.nomSite = nomSite;
    },
    handleLogoUpload(uploadedLogo) {
      this.siteLogo = uploadedLogo;
      this.temporaryLogoUrl = URL.createObjectURL(uploadedLogo);
    },
    updatePresentationSite(presentationSite) {
      this.presentationSite = presentationSite;
    },
    updateThemeColors(newThemeColors) {
      this.themeColors = newThemeColors;
    },
    formSubmit() {
      this.saveToDb();
    },
    //Prepopulate form fields with data from API
    populateFieldsFromApi(data) {
      this.nomSite = data.nomSite;
      this.presentationSite = data.descriptionSite;
      this.products = data.products || this.products;
    },
    //Database stuff
    saveToDb() {
      let formData = new FormData();
      if (this.siteLogo != null) {
        formData.append("siteLogo", this.siteLogo);
      }
      formData.append("nom_site", this.nomSite);
      formData.append("presentationSite", this.presentationSite);
      formData.append("products", JSON.stringify(this.products));
      formData.append("themeColors", JSON.stringify(this.pickedThemeColors));
      axios
        .post("/api/jsform", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.successMessage = "Formulaire envoyé avec succès";
          console.log(formData);
        })
        .catch((error) => {
          console.log(formData);
        });
    },
  },
};
</script>
