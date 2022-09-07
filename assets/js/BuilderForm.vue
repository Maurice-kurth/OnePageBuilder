<template>
  <div class="card article p-6 my-6">
    <h2 class="is-bold is-size-3">Informations générales</h2>
    <p>{{ monMessage }}</p>
    <div class="vue-form my-4">
      <form @submit.prevent="formSubmit">
        <div class="field">
          <label class="label">Nom de votre Site</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="nomSite"
              placeholder="Monsite.com"
            />
          </div>
        </div>
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
        <div class="field">
          <p class="control">
            <button type="submit" class="button is-success">Valider</button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      monMessage: "Hello from Vue !",
      nomSite: "",
      presentationSite: "",
    };
  },
  methods: {
    formSubmit() {
      console.log("Form submitted");
      console.log(this.nomSite);
      console.log(this.presentationSite);
    },
  },
};
</script>
