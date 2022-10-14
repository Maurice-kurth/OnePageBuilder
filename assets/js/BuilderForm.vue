<template>
  <div class="card container article p-3 my-6">
    <h2>Formulaire pour les informations de votre site web</h2>
    <p>{{ monMessage }}</p>
    <div class="vue-form my-4">
      <form @submit.prevent="formSubmit">
        <!-- début infos générales -->
        <section class="infos-site">
          <h3>Informations générales</h3>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Nom de votre Site</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="nomSite"
                    placeholder="Le nom de votre site"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Logo du site</label>
                <div class="control">
                  <input
                    class="input"
                    @change="handleLogoUpload($event)"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- fin infos générales -->
        <section class="infos-header">
          <h3>Bandeau héros et thème</h3>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Petite présentation de votre site</label>
                <div class="control">
                  <input
                    class="textarea"
                    type="textarea"
                    v-model="presentationSite"
                    placeholder="Tagline de votre site ..."
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Color Picker -->
          <div class="is-flex colorPicker-column">
            <div class="colorPicker-container">
              <div class="colorPicker-color darkBlue"></div>
              <input
                name="themeColor"
                type="radio"
                v-model="themeColors"
                value="#000000,#150050,#3F0071"
              />
            </div>
            <div class="colorPicker-container">
              <div class="colorPicker-color pink"></div>
              <input
                name="themeColor"
                type="radio"
                v-model="themeColors"
                value="#F07DEA,#A460ED,#9FC9F3"
              />
            </div>
          </div>
        </section>
        <!-- Section Produits -->
        <section class="infos-produits">
          <span class="columns is-align-items-center">
            <input type="checkbox" name="activated" />
            <label for="activated">Activé</label>
            <h3>Produits</h3>
          </span>

          <div class="columns is-multiline">
            <div v-for="product in products" class="column is-one-quarter">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    v-model="product.name"
                    placeholder="Nom du produit"
                  />
                  <input
                    class="input"
                    type="text"
                    v-model="product.price"
                    placeholder="prix du produit"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              class="button is-info mr-4"
              @click="addProduct"
            >
              Ajouter un produit
            </button>
            <button
              type="button"
              class="button is-danger"
              @click="removeProduct"
            >
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
export default {
  data() {
    return {
      monMessage: "Hello from Vue !",
      successMessage: false,
      nomSite: "",
      presentationSite: "",
      siteLogo: "",
      products: [
        {
          name: "Produit 1",
          price: 10,
        },
      ],
      themeColors: "",
      themeColorsArray: [],
    };
  },
  computed: {
    siteUrl() {
      return "builder/site/" + this.nomSite;
    },
  },
  watch: {
    themeColors: function (newVal, oldVal) {
      this.themeColorsArray = newVal.split(",");
      //make themeColorsArray a named array with keys primary, secondary, tertiary
      this.themeColorsArray = {
        primary: this.themeColorsArray[0],
        secondary: this.themeColorsArray[1],
        tertiary: this.themeColorsArray[2],
      };
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
    handleLogoUpload(event) {
      this.siteLogo = event.target.files[0];
      console.log(this.siteLogo);
    },
    formSubmit() {
      this.saveToDb();
    },
    populateFieldsFromApi(data) {
      this.nomSite = data.nomSite;
      this.presentationSite = data.descriptionSite;
      this.products = data.products || this.products;
    },
    saveToDb() {
      let formData = new FormData();
      if (this.siteLogo != null) {
        formData.append("siteLogo", this.siteLogo);
      }
      formData.append("nom_site", this.nomSite);
      formData.append("presentationSite", this.presentationSite);
      formData.append("products", JSON.stringify(this.products));
      formData.append("themeColors", JSON.stringify(this.themeColorsArray));
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
