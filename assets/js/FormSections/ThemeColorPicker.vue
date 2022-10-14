<template>
    <!-- Color Picker -->
    <h4 class="my-4">Choix du thème de couleur</h4>
    <div class="is-flex colorPicker-column">
        <div v-for="color in baseThemeColors " class="colorPicker-container">
            <div class="colorPicker-color "
                :style="{'background-color':color.name}"></div>
            <input name="themeColor" type="radio"
                @change="ChildUpdateThemeColors" :value="color.colors" />
        </div>
    </div>
</template>

<script>
export default {
    name: "ThemeColorPicker",
    props: {
        themeColors: String,
        baseThemeColors: Array,
    },
    methods: {
        ChildUpdateThemeColors(event) {
            this.$emit("update-themeColors", event.target.value);
        },
    },
}
</script>