<template>
  <!-- début infos générales -->
  <section class="infos-site">
    <h3>1 - Informations générales</h3>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Nom de votre Site</label>
          <div class="control">
            <input
              class="input"
              type="text"
              @input="ChildUpdateNomSite"
              :value="nomSite"
              placeholder="Le nom de votre site"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Logo du site</label>
          <div class="control is-flex is-align-items-center">
            <div class="form-logo--input">
              <input
                class="input"
                @change="ChildHandleLogoUpload"
                type="file"
              />
            </div>
            <div class="form-logo--container mx-4">
              <img :src="siteLogo" alt="logo du site" />
            </div>
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
  props: {
    nomSite: String,
    siteLogo: String,
  },
  methods: {
    ChildUpdateNomSite(event) {
      this.$emit("update-nomSite", event.target.value);
    },
    ChildHandleLogoUpload(event) {
      let uploadedLogo = event.target.files[0];
      this.$emit("logo-upload", uploadedLogo);
    },
  },
};
</script>
