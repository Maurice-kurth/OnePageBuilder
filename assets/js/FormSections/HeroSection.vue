<template>
  <h4 class="my-4">Petite présentation de votre site</h4>
  <div class=" columns">
    <div class="column">
      <div class="field">

        <div class="control">
          <input class="textarea" type="textarea" rows="5" cols="33"
            :value="presentationSite" @change="ChildUpdatePresentationSite"
            placeholder="Tagline de votre site ..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    presentationSite: String,
  },
  methods: {
    ChildUpdatePresentationSite(event) {
      this.$emit("update-presentationSite", event.target.value);
    },
  },
};
</script>
