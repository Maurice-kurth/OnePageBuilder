<template>
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
</template>

<script>
export default {
  name: "InfosGenerales",
  data() {
    return {
      nomSite: "",
      logoSite: "",
    };
  },
  methods: {
    handleLogoUpload(event) {
      this.logoSite = event.target.files[0];
    },
  },
};
</script>
