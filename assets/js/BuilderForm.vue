<template>
  <div class="card container article p-6 my-6">
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
                  <input class="input" type="file" />
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
                    placeholder="Ce site sert à ..."
                  />
                </div>
              </div>
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
            <div v-for="product in products">
              <div class="field column is-one-quarter">
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
            <button type="button" class="button is-success" @click="addProduct">
              Ajouter un produit
            </button>
          </div>
        </section>
        <!-- Fin Section Produits -->

        <!-- Envoi du formulaire -->
        <div style="margin-top: 30px" class="field">
          <p class="control">
            <button type="submit" class="button is-success">Valider</button>
          </p>
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
      nomSite: "",
      presentationSite: "",
      products: [
        {
          name: "Produit 1",
          price: 10,
        },
      ],
    };
  },
  mounted() {
    //Utiliser avec AJAX une route contenant en JSON  les données du site de la BDD pour prépeupler le formulaire
    console.log("Vuejs monté");
    axios.get("/api/siteinfo").then((response) => {
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
    formSubmit() {
      this.savetoDb();
    },
    populateFieldsFromApi(data) {
      this.nomSite = data.nomSite;
      this.presentationSite = data.presentationSite;
      this.products = data.products;
    },
    saveToDb() {
      axios
        .post("/api/jsform", {
          nomSite: this.nomSite,
          presentationSite: this.presentationSite,
        })
        .then((response) => {
          if (response.status == 200) {
            console.log("it worked !");
          } else {
            console.log("it failed !");
          }
        });
    },
  },
};
</script>
