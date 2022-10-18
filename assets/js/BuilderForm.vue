<template>
  <div class="card container article px-4 py-4 my-6">
    <h2>Formulaire pour les informations de votre site web</h2>
    <p>{{ monMessage }}</p>
    <div class="vue-form my-4">
      <form @submit.prevent="formSubmit">
        <!-- Infos générales sur le site : Nom - Logo (url/fichier)  -->

        <InfosGenerales :nomSite="nomSite" :username="username"
          :siteLogo="siteLogo ? temporaryLogoUrl : previousLogo"
          @update-nomSite="updateNomSite" @logo-upload="handleLogoUpload" />
        <!-- Héro et Thème du site : Tagline - Couleurs du thème (array/string) -->
        <section class="infos-header">
          <h3>2 - Bandeau héros et thème</h3>
          <HeroSection :presentationSite="presentationSite"
            @update-presentationSite="updatePresentationSite" />
          <ThemeColorPicker :themeColors="themeColors"
            :baseThemeColors="baseThemeColors"
            @update-themeColors="updateThemeColors" />

        </section>
        <!--  Section Produits ou services : Produits (array) -->
        <ProduitsSection :products="products" @remove-product="removeProduct"
          @add-product="addProduct" />

        <!-- Section FAQ -->
        <FaqSection :faqElements="faqElements" @add-question="addFaqQuestion"
          @remove-question="removeFaqQuestion" />
        <!-- Envoi du formulaire -->
        <div style="margin-top: 30px" class="field">
          <p class="control">
            <button type="submit" class="button is-info">Enregistrer les
              modifications</button>
          </p>
          <div v-if="successMessage">
            <p>
              {{ successMessage }}
            </p>
            <a class="button is-success" :href="siteUrl">Voir le site </a>
          </div>
        </div>
        <!-- Fin du formulaire -->
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import InfosGenerales from "./FormSections/InfosGenerales.vue";
import HeroSection from "./FormSections/HeroSection.vue";
import ThemeColorPicker from "./FormSections/ThemeColorPicker.vue";
import ProduitsSection from "./FormSections/ProduitsSection.vue";
import FaqSection from "./FormSections/FaqSection.vue";
export default {
  components: {
    InfosGenerales,
    HeroSection,
    ThemeColorPicker,
    ProduitsSection,
    FaqSection,
  },
  data() {
    return {
      monMessage: "Hello from Vue !",
      successMessage: false,
      nomSite: "",
      presentationSite: "",
      siteLogo: "",
      username: "",
      temporaryLogoUrl: "",
      faqElements: [
        {
          question: "Q1",
          reponse: "R1",
          isClosed: false
        },
      ],
      products: [
        {
          name: "Produit 0",
          price: 0,
        },
      ],
      // themeColors is an array of objects with 2 properties: name (string) and colors: (array of strings)
      //Order of colors in the array is important, it will be used to generate the palette with :
      // 1 = Primary color, 2 = Background color, 3 = Accent color
      baseThemeColors: [
        {
          name: "darkblue",
          colors: ["#2b2d42", "#8d99ae", "#edf2f4"],
        },
        {
          name: "DarkRed",
          colors: ["#8c1c13", "#bf4342", "#e7d7c1"],
        },
        {
          name: "DarkOliveGreen",
          colors: ["#2c6e49", "#4c956c", "#fefee3"],
        },
        {
          name: "DarkSlateGray",
          colors: ["#08090a", "#a7a2a9", "#f4f7f5"],
        },
        {
          name: "Gold",
          colors: ["#ffd100", "#ffee32", "#d6d6d6"],
        },
        {
          name: "pink",
          colors: ["#ffeef4", "#f283b6", "#f5b7c7"],
        }
      ],
      themeColors: "",
      pickedThemeColors: [],
    };
  },
  computed: {
    siteUrl() {
      return "builder/site/" + this.nomSite;
    },
    previousLogo() {
      return "/images/uploads/" + this.username + "/sitelogo.png";
    }
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
  created() {
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
    addFaqQuestion() {
      this.faqElements.push({ question: "", reponse: "", isClosed: false });
    },
    removeFaqQuestion() {
      this.faqElements.pop();
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
      this.username = data.username;
      this.faqElements = data.faq || this.faqElements;
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
      formData.append("faq", JSON.stringify(this.faqElements));
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
