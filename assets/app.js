/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import "./styles/app.css";

// start the Stimulus application
import "./bootstrap";

//import "./js/forms.js";
import "./js/mobilemenu.js";

import "./js/onepagescripts.js";

import { createApp } from "vue";
import DefaultApp from "./js/DefaultApp.vue";
import BuilderForm from "./js/BuilderForm.vue";

//createApp(DefaultApp).mount("#vue-app");
createApp(BuilderForm).mount("#vue-builder-form");
