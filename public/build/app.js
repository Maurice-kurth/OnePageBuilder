(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _js_DefaultApp_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/DefaultApp.vue */ "./assets/js/DefaultApp.vue");
/* harmony import */ var _js_BuilderForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/BuilderForm.vue */ "./assets/js/BuilderForm.vue");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application

 //import "./js/forms.js";



 //createApp(DefaultApp).mount("#vue-app");

(0,vue__WEBPACK_IMPORTED_MODULE_2__.createApp)(_js_BuilderForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"]).mount("#vue-builder-form");

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/BuilderForm.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/BuilderForm.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _FormSections_InfosGenerales_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSections/InfosGenerales.vue */ "./assets/js/FormSections/InfosGenerales.vue");
/* harmony import */ var _FormSections_HeroSection_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormSections/HeroSection.vue */ "./assets/js/FormSections/HeroSection.vue");
/* harmony import */ var _FormSections_ThemeColorPicker_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormSections/ThemeColorPicker.vue */ "./assets/js/FormSections/ThemeColorPicker.vue");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    InfosGenerales: _FormSections_InfosGenerales_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    HeroSection: _FormSections_HeroSection_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    ThemeColorPicker: _FormSections_ThemeColorPicker_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      monMessage: "Hello from Vue !",
      successMessage: false,
      nomSite: "",
      presentationSite: "",
      siteLogo: "",
      temporaryLogoUrl: "",
      previousLogo: "/images/uploads/adminlcdz/sitelogo.png",
      products: [{
        name: "Produit 0",
        price: 0
      }],
      // themeColors is an array of objects with 2 properties: name (string) and colors: (array of strings)
      baseThemeColors: [{
        name: "red",
        colors: ["#f44336", "#e91e63", "#9c27b0"]
      }, {
        name: "orange",
        colors: ["#ff9800", "#ffc107", "#ffeb3b"]
      }, {
        name: "lightblue",
        colors: ["#2196f3", "#03a9f4", "#00bcd4"]
      }],
      themeColors: "",
      pickedThemeColors: []
    };
  },
  computed: {
    siteUrl: function siteUrl() {
      return "builder/site/" + this.nomSite;
    }
  },
  watch: {
    themeColors: function themeColors(newVal, oldVal) {
      this.pickedThemeColors = newVal.split(","); //make themeColorsArray a named array with keys primary, secondary, tertiary

      this.pickedThemeColors = {
        primary: this.pickedThemeColors[0],
        secondary: this.pickedThemeColors[1],
        tertiary: this.pickedThemeColors[2]
      };
      console.log(this.pickedThemeColors);
    }
  },
  mounted: function mounted() {
    var _this = this;

    //Utiliser avec AJAX une route contenant en JSON  les données du site de la BDD pour prépeupler le formulaire
    console.log("Vuejs monté");
    axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/siteinfo")["catch"](function (error) {
      console.log("erreur 500 sur le get");
    }).then(function (response) {
      console.log(response);

      _this.populateFieldsFromApi(response.data);
    });
  },
  methods: {
    addProduct: function addProduct() {
      this.products.push({
        name: "",
        price: 0
      });
    },
    removeProduct: function removeProduct() {
      this.products.pop();
    },
    updateNomSite: function updateNomSite(nomSite) {
      this.nomSite = nomSite;
    },
    handleLogoUpload: function handleLogoUpload(uploadedLogo) {
      this.siteLogo = uploadedLogo;
      this.temporaryLogoUrl = URL.createObjectURL(uploadedLogo);
    },
    updatePresentationSite: function updatePresentationSite(presentationSite) {
      this.presentationSite = presentationSite;
    },
    updateThemeColors: function updateThemeColors(newThemeColors) {
      this.themeColors = newThemeColors;
    },
    formSubmit: function formSubmit() {
      this.saveToDb();
    },
    //Prepopulate form fields with data from API
    populateFieldsFromApi: function populateFieldsFromApi(data) {
      this.nomSite = data.nomSite;
      this.presentationSite = data.descriptionSite;
      this.products = data.products || this.products;
    },
    //Database stuff
    saveToDb: function saveToDb() {
      var _this2 = this;

      var formData = new FormData();

      if (this.siteLogo != null) {
        formData.append("siteLogo", this.siteLogo);
      }

      formData.append("nom_site", this.nomSite);
      formData.append("presentationSite", this.presentationSite);
      formData.append("products", JSON.stringify(this.products));
      formData.append("themeColors", JSON.stringify(this.pickedThemeColors));
      axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/jsform", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        _this2.successMessage = "Formulaire envoyé avec succès";
        console.log(formData);
      })["catch"](function (error) {
        console.log(formData);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/DefaultApp.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/DefaultApp.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: "",
      hello: ""
    };
  },
  methods: {
    refreshHello: function refreshHello() {
      var _this = this;

      if (this.name) {
        fetch("/api/helloword/" + this.name, {
          method: "GET"
        }).then(function (response) {
          return response.json();
        }).then(function (result) {
          return _this.hello = result;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/HeroSection.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/HeroSection.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "HeroSection",
  props: {
    presentationSite: String
  },
  methods: {
    ChildUpdatePresentationSite: function ChildUpdatePresentationSite(event) {
      this.$emit("update-presentationSite", event.target.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/InfosGenerales.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/InfosGenerales.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InfosGenerales",
  props: {
    nomSite: String,
    siteLogo: String
  },
  methods: {
    ChildUpdateNomSite: function ChildUpdateNomSite(event) {
      this.$emit("update-nomSite", event.target.value);
    },
    ChildHandleLogoUpload: function ChildHandleLogoUpload(event) {
      var uploadedLogo = event.target.files[0];
      this.$emit("logo-upload", uploadedLogo);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/ThemeColorPicker.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/ThemeColorPicker.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ThemeColorPicker",
  props: {
    themeColors: String,
    baseThemeColors: Array
  },
  methods: {
    ChildUpdateThemeColors: function ChildUpdateThemeColors(event) {
      this.$emit("update-themeColors", event.target.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/BuilderForm.vue?vue&type=template&id=875dc7f2":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/BuilderForm.vue?vue&type=template&id=875dc7f2 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _hoisted_1 = {
  "class": "card container article p-3 my-6"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h2", null, "Formulaire pour les informations de votre site web", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "vue-form my-4"
};
var _hoisted_4 = {
  "class": "infos-header"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h3", null, "2 - Bandeau héros et thème", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "infos-produits"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", {
  "class": "is-flex is-align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h3", {
  "class": "mx-4"
}, "Produits"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
  type: "checkbox",
  name: "activated"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("label", {
  "for": "activated"
}, "Activé")], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "columns is-multiline"
};
var _hoisted_9 = {
  "class": "column is-one-quarter"
};
var _hoisted_10 = {
  "class": "field"
};
var _hoisted_11 = {
  "class": "control"
};
var _hoisted_12 = ["onUpdate:modelValue"];
var _hoisted_13 = ["onUpdate:modelValue"];
var _hoisted_14 = {
  style: {
    "margin-top": "30px"
  },
  "class": "field"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("p", {
  "class": "control"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("button", {
  type: "submit",
  "class": "button is-info"
}, "Valider")], -1
/* HOISTED */
);

var _hoisted_16 = {
  key: 0
};
var _hoisted_17 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InfosGenerales = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("InfosGenerales");

  var _component_HeroSection = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("HeroSection");

  var _component_ThemeColorPicker = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("ThemeColorPicker");

  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($data.monMessage), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_1__.withModifiers)(function () {
      return $options.formSubmit && $options.formSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_InfosGenerales, {
    nomSite: $data.nomSite,
    siteLogo: $data.siteLogo ? $data.temporaryLogoUrl : $data.previousLogo,
    onUpdateNomSite: $options.updateNomSite,
    onLogoUpload: $options.handleLogoUpload
  }, null, 8
  /* PROPS */
  , ["nomSite", "siteLogo", "onUpdateNomSite", "onLogoUpload"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("section", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_HeroSection, {
    presentationSite: $data.presentationSite,
    onUpdatePresentationSite: $options.updatePresentationSite
  }, null, 8
  /* PROPS */
  , ["presentationSite", "onUpdatePresentationSite"]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_ThemeColorPicker, {
    themeColors: $data.themeColors,
    baseThemeColors: $data.baseThemeColors,
    onUpdateThemeColors: $options.updateThemeColors
  }, null, 8
  /* PROPS */
  , ["themeColors", "baseThemeColors", "onUpdateThemeColors"])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Section Produits "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("section", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderList)($data.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
      "class": "input",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return product.name = $event;
      },
      placeholder: "Nom du produit"
    }, null, 8
    /* PROPS */
    , _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelText, product.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
      "class": "input",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return product.price = $event;
      },
      placeholder: "prix du produit"
    }, null, 8
    /* PROPS */
    , _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelText, product.price]])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("button", {
    type: "button",
    "class": "button is-info mr-4",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addProduct && $options.addProduct.apply($options, arguments);
    })
  }, " Ajouter un produit "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("button", {
    type: "button",
    "class": "button is-danger",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.removeProduct && $options.removeProduct.apply($options, arguments);
    })
  }, " Supprimer un produit ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Fin Section Produits "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Envoi du formulaire "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_14, [_hoisted_15, $data.successMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($data.successMessage), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("a", {
    "class": "button is-success",
    href: $options.siteUrl
  }, "Voir le site ", 8
  /* PROPS */
  , _hoisted_17)])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)("v-if", true)])], 32
  /* HYDRATE_EVENTS */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/DefaultApp.vue?vue&type=template&id=51637270":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/DefaultApp.vue?vue&type=template&id=51637270 ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelText, $data.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.refreshHello && $options.refreshHello.apply($options, arguments);
    })
  }, "Demander un bonjour !"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($data.hello), 513
  /* TEXT, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_1__.vShow, !!$data.hello]])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/HeroSection.vue?vue&type=template&id=06b05996":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/HeroSection.vue?vue&type=template&id=06b05996 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "my-4"
}, "Petite présentation de votre site", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "columns"
};
var _hoisted_3 = {
  "class": "column"
};
var _hoisted_4 = {
  "class": "field"
};
var _hoisted_5 = {
  "class": "control"
};
var _hoisted_6 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "textarea",
    type: "textarea",
    value: $props.presentationSite,
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.ChildUpdatePresentationSite && $options.ChildUpdatePresentationSite.apply($options, arguments);
    }),
    placeholder: "Tagline de votre site ..."
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_6)])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/InfosGenerales.vue?vue&type=template&id=c4304454":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/InfosGenerales.vue?vue&type=template&id=c4304454 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  "class": "infos-site"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "1 - Informations générales", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "columns"
};
var _hoisted_4 = {
  "class": "column"
};
var _hoisted_5 = {
  "class": "field"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Nom de votre Site", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "control"
};
var _hoisted_8 = ["value"];
var _hoisted_9 = {
  "class": "field"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "label"
}, "Logo du site", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "control is-flex is-align-items-center"
};
var _hoisted_12 = {
  "class": "form-logo--input"
};
var _hoisted_13 = {
  "class": "form-logo--container mx-4"
};
var _hoisted_14 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" début infos générales "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "input",
    type: "text",
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.ChildUpdateNomSite && $options.ChildUpdateNomSite.apply($options, arguments);
    }),
    value: $props.nomSite,
    placeholder: "Le nom de votre site"
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_8)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "input",
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.ChildHandleLogoUpload && $options.ChildHandleLogoUpload.apply($options, arguments);
    }),
    type: "file"
  }, null, 32
  /* HYDRATE_EVENTS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.siteLogo,
    alt: "logo du site"
  }, null, 8
  /* PROPS */
  , _hoisted_14)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" fin infos générales ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/ThemeColorPicker.vue?vue&type=template&id=14f68866":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/ThemeColorPicker.vue?vue&type=template&id=14f68866 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");



var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h4", {
  "class": "my-4"
}, "Choix du thème de couleur", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "is-flex colorPicker-column"
};
var _hoisted_3 = {
  "class": "colorPicker-container"
};
var _hoisted_4 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Color Picker "), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderList)($props.baseThemeColors, function (color) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", {
      "class": "colorPicker-color",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)({
        'background-color': color.name
      })
    }, null, 4
    /* STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
      name: "themeColor",
      type: "radio",
      onChange: _cache[0] || (_cache[0] = function () {
        return $options.ChildUpdateThemeColors && $options.ChildUpdateThemeColors.apply($options, arguments);
      }),
      value: color.colors
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_4)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/BuilderForm.vue":
/*!***********************************!*\
  !*** ./assets/js/BuilderForm.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BuilderForm_vue_vue_type_template_id_875dc7f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderForm.vue?vue&type=template&id=875dc7f2 */ "./assets/js/BuilderForm.vue?vue&type=template&id=875dc7f2");
/* harmony import */ var _BuilderForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuilderForm.vue?vue&type=script&lang=js */ "./assets/js/BuilderForm.vue?vue&type=script&lang=js");
/* harmony import */ var F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BuilderForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BuilderForm_vue_vue_type_template_id_875dc7f2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/js/BuilderForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/js/DefaultApp.vue":
/*!**********************************!*\
  !*** ./assets/js/DefaultApp.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DefaultApp_vue_vue_type_template_id_51637270__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultApp.vue?vue&type=template&id=51637270 */ "./assets/js/DefaultApp.vue?vue&type=template&id=51637270");
/* harmony import */ var _DefaultApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultApp.vue?vue&type=script&lang=js */ "./assets/js/DefaultApp.vue?vue&type=script&lang=js");
/* harmony import */ var F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DefaultApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DefaultApp_vue_vue_type_template_id_51637270__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/js/DefaultApp.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/js/FormSections/HeroSection.vue":
/*!************************************************!*\
  !*** ./assets/js/FormSections/HeroSection.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroSection_vue_vue_type_template_id_06b05996__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSection.vue?vue&type=template&id=06b05996 */ "./assets/js/FormSections/HeroSection.vue?vue&type=template&id=06b05996");
/* harmony import */ var _HeroSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroSection.vue?vue&type=script&lang=js */ "./assets/js/FormSections/HeroSection.vue?vue&type=script&lang=js");
/* harmony import */ var F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HeroSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HeroSection_vue_vue_type_template_id_06b05996__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/js/FormSections/HeroSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/js/FormSections/InfosGenerales.vue":
/*!***************************************************!*\
  !*** ./assets/js/FormSections/InfosGenerales.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfosGenerales_vue_vue_type_template_id_c4304454__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfosGenerales.vue?vue&type=template&id=c4304454 */ "./assets/js/FormSections/InfosGenerales.vue?vue&type=template&id=c4304454");
/* harmony import */ var _InfosGenerales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfosGenerales.vue?vue&type=script&lang=js */ "./assets/js/FormSections/InfosGenerales.vue?vue&type=script&lang=js");
/* harmony import */ var F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InfosGenerales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InfosGenerales_vue_vue_type_template_id_c4304454__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/js/FormSections/InfosGenerales.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/js/FormSections/ThemeColorPicker.vue":
/*!*****************************************************!*\
  !*** ./assets/js/FormSections/ThemeColorPicker.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ThemeColorPicker_vue_vue_type_template_id_14f68866__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeColorPicker.vue?vue&type=template&id=14f68866 */ "./assets/js/FormSections/ThemeColorPicker.vue?vue&type=template&id=14f68866");
/* harmony import */ var _ThemeColorPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeColorPicker.vue?vue&type=script&lang=js */ "./assets/js/FormSections/ThemeColorPicker.vue?vue&type=script&lang=js");
/* harmony import */ var F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_wamp64_www_LCDZ_OnePage_onepage_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ThemeColorPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ThemeColorPicker_vue_vue_type_template_id_14f68866__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/js/FormSections/ThemeColorPicker.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/js/BuilderForm.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./assets/js/BuilderForm.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuilderForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/BuilderForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/js/DefaultApp.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./assets/js/DefaultApp.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultApp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/DefaultApp.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/js/FormSections/HeroSection.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./assets/js/FormSections/HeroSection.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeroSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/HeroSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/js/FormSections/InfosGenerales.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./assets/js/FormSections/InfosGenerales.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfosGenerales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfosGenerales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfosGenerales.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/InfosGenerales.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/js/FormSections/ThemeColorPicker.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./assets/js/FormSections/ThemeColorPicker.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThemeColorPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThemeColorPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ThemeColorPicker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/ThemeColorPicker.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/js/BuilderForm.vue?vue&type=template&id=875dc7f2":
/*!*****************************************************************!*\
  !*** ./assets/js/BuilderForm.vue?vue&type=template&id=875dc7f2 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderForm_vue_vue_type_template_id_875dc7f2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderForm_vue_vue_type_template_id_875dc7f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuilderForm.vue?vue&type=template&id=875dc7f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/BuilderForm.vue?vue&type=template&id=875dc7f2");


/***/ }),

/***/ "./assets/js/DefaultApp.vue?vue&type=template&id=51637270":
/*!****************************************************************!*\
  !*** ./assets/js/DefaultApp.vue?vue&type=template&id=51637270 ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultApp_vue_vue_type_template_id_51637270__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DefaultApp_vue_vue_type_template_id_51637270__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DefaultApp.vue?vue&type=template&id=51637270 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/DefaultApp.vue?vue&type=template&id=51637270");


/***/ }),

/***/ "./assets/js/FormSections/HeroSection.vue?vue&type=template&id=06b05996":
/*!******************************************************************************!*\
  !*** ./assets/js/FormSections/HeroSection.vue?vue&type=template&id=06b05996 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroSection_vue_vue_type_template_id_06b05996__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HeroSection_vue_vue_type_template_id_06b05996__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HeroSection.vue?vue&type=template&id=06b05996 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/HeroSection.vue?vue&type=template&id=06b05996");


/***/ }),

/***/ "./assets/js/FormSections/InfosGenerales.vue?vue&type=template&id=c4304454":
/*!*********************************************************************************!*\
  !*** ./assets/js/FormSections/InfosGenerales.vue?vue&type=template&id=c4304454 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfosGenerales_vue_vue_type_template_id_c4304454__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfosGenerales_vue_vue_type_template_id_c4304454__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfosGenerales.vue?vue&type=template&id=c4304454 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/InfosGenerales.vue?vue&type=template&id=c4304454");


/***/ }),

/***/ "./assets/js/FormSections/ThemeColorPicker.vue?vue&type=template&id=14f68866":
/*!***********************************************************************************!*\
  !*** ./assets/js/FormSections/ThemeColorPicker.vue?vue&type=template&id=14f68866 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThemeColorPicker_vue_vue_type_template_id_14f68866__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ThemeColorPicker_vue_vue_type_template_id_14f68866__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ThemeColorPicker.vue?vue&type=template&id=14f68866 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/js/FormSections/ThemeColorPicker.vue?vue&type=template&id=14f68866");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-5714f6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0REO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7V0FFSSxtQkFBVTtNQUNOLEtBQUtDLE9BQUwsQ0FBYUMsV0FBYixHQUEyQixtRUFBM0I7SUFDSDs7OztFQUh3QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7Q0FHQTs7QUFFQTtBQUNBO0NBR0E7O0FBQ0FHLDhDQUFTLENBQUNFLDJEQUFELENBQVQsQ0FBdUJDLEtBQXZCLENBQTZCLG1CQUE3Qjs7Ozs7Ozs7Ozs7Ozs7OztDQ2xCQTs7QUFDTyxJQUFNRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDRSx5SUFBRCxDQUE1QixFQU1QO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7RUFDYk0sVUFBVSxFQUFFO0lBQ1ZILGNBQWMsRUFBZEEsd0VBRFU7SUFFVkMsV0FBVyxFQUFYQSxzRUFGVTtJQUdWQyxnQkFBZ0IsRUFBaEJBLDJFQUFnQkE7RUFITixDQURDO0VBTWJFLElBTmEsa0JBTU47SUFDTCxPQUFPO01BQ0xDLFVBQVUsRUFBRSxrQkFEUDtNQUVMQyxjQUFjLEVBQUUsS0FGWDtNQUdMQyxPQUFPLEVBQUUsRUFISjtNQUlMQyxnQkFBZ0IsRUFBRSxFQUpiO01BS0xDLFFBQVEsRUFBRSxFQUxMO01BTUxDLGdCQUFnQixFQUFFLEVBTmI7TUFPTEMsWUFBWSxFQUFFLHdDQVBUO01BUUxDLFFBQVEsRUFBRSxDQUNSO1FBQ0VDLElBQUksRUFBRSxXQURSO1FBRUVDLEtBQUssRUFBRTtNQUZULENBRFEsQ0FSTDtNQWNMO01BQ0FDLGVBQWUsRUFBRSxDQUNmO1FBQ0VGLElBQUksRUFBRSxLQURSO1FBRUVHLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCO01BRlYsQ0FEZSxFQUtmO1FBQ0VILElBQUksRUFBRSxRQURSO1FBRUVHLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCO01BRlYsQ0FMZSxFQVNmO1FBQ0VILElBQUksRUFBRSxXQURSO1FBRUVHLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCO01BRlYsQ0FUZSxDQWZaO01BNkJMQyxXQUFXLEVBQUUsRUE3QlI7TUE4QkxDLGlCQUFpQixFQUFFO0lBOUJkLENBQVA7RUFnQ0QsQ0F2Q1k7RUF3Q2JDLFFBQVEsRUFBRTtJQUNSQyxPQURRLHFCQUNFO01BQ1IsT0FBTyxrQkFBa0IsS0FBS2IsT0FBOUI7SUFDRDtFQUhPLENBeENHO0VBNkNiYyxLQUFLLEVBQUU7SUFDTEosV0FBVyxFQUFFLHFCQUFVSyxNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtNQUNyQyxLQUFLTCxpQkFBTCxHQUF5QkksTUFBTSxDQUFDRSxLQUFQLENBQWEsR0FBYixDQUF6QixDQURxQyxDQUVyQzs7TUFDQSxLQUFLTixpQkFBTCxHQUF5QjtRQUN2Qk8sT0FBTyxFQUFFLEtBQUtQLGlCQUFMLENBQXVCLENBQXZCLENBRGM7UUFFdkJRLFNBQVMsRUFBRSxLQUFLUixpQkFBTCxDQUF1QixDQUF2QixDQUZZO1FBR3ZCUyxRQUFRLEVBQUUsS0FBS1QsaUJBQUwsQ0FBdUIsQ0FBdkI7TUFIYSxDQUF6QjtNQUtBVSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWCxpQkFBakI7SUFDRDtFQVZJLENBN0NNO0VBeURiWSxPQXpEYSxxQkF5REg7SUFBQTs7SUFDUjtJQUNBRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0lBQ0E5QixnREFBQSxDQUNPLGVBRFAsV0FFUyxVQUFDaUMsS0FBRCxFQUFXO01BQ2hCSixPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtJQUNELENBSkgsRUFLR0ksSUFMSCxDQUtRLFVBQUNDLFFBQUQsRUFBYztNQUNsQk4sT0FBTyxDQUFDQyxHQUFSLENBQVlLLFFBQVo7O01BQ0EsS0FBSSxDQUFDQyxxQkFBTCxDQUEyQkQsUUFBUSxDQUFDOUIsSUFBcEM7SUFDRCxDQVJIO0VBU0QsQ0FyRVk7RUFzRWJnQyxPQUFPLEVBQUU7SUFDUEMsVUFETyx3QkFDTTtNQUNYLEtBQUt6QixRQUFMLENBQWMwQixJQUFkLENBQW1CO1FBQ2pCekIsSUFBSSxFQUFFLEVBRFc7UUFFakJDLEtBQUssRUFBRTtNQUZVLENBQW5CO0lBSUQsQ0FOTTtJQU9QeUIsYUFQTywyQkFPUztNQUNkLEtBQUszQixRQUFMLENBQWM0QixHQUFkO0lBQ0QsQ0FUTTtJQVVQQyxhQVZPLHlCQVVPbEMsT0FWUCxFQVVnQjtNQUNyQixLQUFLQSxPQUFMLEdBQWVBLE9BQWY7SUFDRCxDQVpNO0lBYVBtQyxnQkFiTyw0QkFhVUMsWUFiVixFQWF3QjtNQUM3QixLQUFLbEMsUUFBTCxHQUFnQmtDLFlBQWhCO01BQ0EsS0FBS2pDLGdCQUFMLEdBQXdCa0MsR0FBRyxDQUFDQyxlQUFKLENBQW9CRixZQUFwQixDQUF4QjtJQUNELENBaEJNO0lBaUJQRyxzQkFqQk8sa0NBaUJnQnRDLGdCQWpCaEIsRUFpQmtDO01BQ3ZDLEtBQUtBLGdCQUFMLEdBQXdCQSxnQkFBeEI7SUFDRCxDQW5CTTtJQW9CUHVDLGlCQXBCTyw2QkFvQldDLGNBcEJYLEVBb0IyQjtNQUNoQyxLQUFLL0IsV0FBTCxHQUFtQitCLGNBQW5CO0lBQ0QsQ0F0Qk07SUF1QlBDLFVBdkJPLHdCQXVCTTtNQUNYLEtBQUtDLFFBQUw7SUFDRCxDQXpCTTtJQTBCUDtJQUNBZixxQkEzQk8saUNBMkJlL0IsSUEzQmYsRUEyQnFCO01BQzFCLEtBQUtHLE9BQUwsR0FBZUgsSUFBSSxDQUFDRyxPQUFwQjtNQUNBLEtBQUtDLGdCQUFMLEdBQXdCSixJQUFJLENBQUMrQyxlQUE3QjtNQUNBLEtBQUt2QyxRQUFMLEdBQWdCUixJQUFJLENBQUNRLFFBQUwsSUFBaUIsS0FBS0EsUUFBdEM7SUFDRCxDQS9CTTtJQWdDUDtJQUNBc0MsUUFqQ08sc0JBaUNJO01BQUE7O01BQ1QsSUFBSUUsUUFBTyxHQUFJLElBQUlDLFFBQUosRUFBZjs7TUFDQSxJQUFJLEtBQUs1QyxRQUFMLElBQWlCLElBQXJCLEVBQTJCO1FBQ3pCMkMsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQWhCLEVBQTRCLEtBQUs3QyxRQUFqQztNQUNGOztNQUNBMkMsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQWhCLEVBQTRCLEtBQUsvQyxPQUFqQztNQUNBNkMsUUFBUSxDQUFDRSxNQUFULENBQWdCLGtCQUFoQixFQUFvQyxLQUFLOUMsZ0JBQXpDO01BQ0E0QyxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUs1QyxRQUFwQixDQUE1QjtNQUNBd0MsUUFBUSxDQUFDRSxNQUFULENBQWdCLGFBQWhCLEVBQStCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLdEMsaUJBQXBCLENBQS9CO01BQ0FuQixpREFBQSxDQUNRLGFBRFIsRUFDdUJxRCxRQUR2QixFQUNpQztRQUM3Qk0sT0FBTyxFQUFFO1VBQ1AsZ0JBQWdCO1FBRFQ7TUFEb0IsQ0FEakMsRUFNR3pCLElBTkgsQ0FNUSxVQUFDQyxRQUFELEVBQWM7UUFDbEIsTUFBSSxDQUFDNUIsY0FBTCxHQUFzQiwrQkFBdEI7UUFDQXNCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZdUIsUUFBWjtNQUNELENBVEgsV0FVUyxVQUFDcEIsS0FBRCxFQUFXO1FBQ2hCSixPQUFPLENBQUNDLEdBQVIsQ0FBWXVCLFFBQVo7TUFDRCxDQVpIO0lBYUQ7RUF2RE07QUF0RUksQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBLGlFQUFlO0VBQ2JoRCxJQURhLGtCQUNOO0lBQ0wsT0FBTztNQUNMUyxJQUFJLEVBQUUsRUFERDtNQUVMOEMsS0FBSyxFQUFFO0lBRkYsQ0FBUDtFQUlELENBTlk7RUFPYnZCLE9BQU8sRUFBRTtJQUNQd0IsWUFETywwQkFDUTtNQUFBOztNQUNiLElBQUksS0FBSy9DLElBQVQsRUFBZTtRQUNiZ0QsS0FBSyxDQUFDLG9CQUFvQixLQUFLaEQsSUFBMUIsRUFBZ0M7VUFBRWlELE1BQU0sRUFBRTtRQUFWLENBQWhDLENBQUwsQ0FDRzdCLElBREgsQ0FDUSxVQUFDQyxRQUFEO1VBQUEsT0FBY0EsUUFBUSxDQUFDNkIsSUFBVCxFQUFkO1FBQUEsQ0FEUixFQUVHOUIsSUFGSCxDQUVRLFVBQUMrQixNQUFEO1VBQUEsT0FBYSxLQUFJLENBQUNMLEtBQUwsR0FBYUssTUFBMUI7UUFBQSxDQUZSO01BR0Y7SUFDRDtFQVBNO0FBUEksQ0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDVUEsaUVBQWU7RUFDYm5ELElBQUksRUFBRSxhQURPO0VBRWJvRCxLQUFLLEVBQUU7SUFDTHpELGdCQUFnQixFQUFFMEQ7RUFEYixDQUZNO0VBS2I5QixPQUFPLEVBQUU7SUFDUCtCLDJCQURPLHVDQUNxQkMsS0FEckIsRUFDNEI7TUFDakMsS0FBS0MsS0FBTCxDQUFXLHlCQUFYLEVBQXNDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBbkQ7SUFDRDtFQUhNO0FBTEksQ0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDdUJBLGlFQUFlO0VBQ2IxRCxJQUFJLEVBQUUsZ0JBRE87RUFFYm9ELEtBQUssRUFBRTtJQUNMMUQsT0FBTyxFQUFFMkQsTUFESjtJQUVMekQsUUFBUSxFQUFFeUQ7RUFGTCxDQUZNO0VBTWI5QixPQUFPLEVBQUU7SUFDUG9DLGtCQURPLDhCQUNZSixLQURaLEVBQ21CO01BQ3hCLEtBQUtDLEtBQUwsQ0FBVyxnQkFBWCxFQUE2QkQsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQTFDO0lBQ0QsQ0FITTtJQUlQRSxxQkFKTyxpQ0FJZUwsS0FKZixFQUlzQjtNQUMzQixJQUFJekIsWUFBVyxHQUFJeUIsS0FBSyxDQUFDRSxNQUFOLENBQWFJLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBbkI7TUFDQSxLQUFLTCxLQUFMLENBQVcsYUFBWCxFQUEwQjFCLFlBQTFCO0lBQ0Q7RUFQTTtBQU5JLENBQWY7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSxpRUFBZTtFQUNYOUIsSUFBSSxFQUFFLGtCQURLO0VBRVhvRCxLQUFLLEVBQUU7SUFDSGhELFdBQVcsRUFBRWlELE1BRFY7SUFFSG5ELGVBQWUsRUFBRTREO0VBRmQsQ0FGSTtFQU1YdkMsT0FBTyxFQUFFO0lBQ0x3QyxzQkFESyxrQ0FDa0JSLEtBRGxCLEVBQ3lCO01BQzFCLEtBQUtDLEtBQUwsQ0FBVyxvQkFBWCxFQUFpQ0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQTlDO0lBQ0g7RUFISTtBQU5FLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFSmJPLFNBQU07Ozs4QkFDVE0sdURBQUFBLENBQTJELElBQTNELEVBQTJELElBQTNELEVBQUksb0RBQUosRUFBc0Q7QUFBQTtBQUF0RDs7O0VBRUssU0FBTTs7O0VBS0UsU0FBTTs7OzhCQUNiQSx1REFBQUEsQ0FBbUMsSUFBbkMsRUFBbUMsSUFBbkMsRUFBSSw0QkFBSixFQUE4QjtBQUFBO0FBQTlCOzs7RUFTTyxTQUFNOzs7OEJBQ2JBLHVEQUFBQSxDQUlNLEtBSk4sRUFJTTtFQUpELFNBQU07QUFJTCxDQUpOLEVBQTBDLGNBQ3hDQSx1REFBQUEsQ0FBOEIsSUFBOUIsRUFBOEI7RUFBMUIsU0FBTTtBQUFvQixDQUE5QixFQUFpQixVQUFqQixDQUR3QyxlQUV4Q0EsdURBQUFBLENBQTBDLE9BQTFDLEVBQTBDO0VBQW5DQyxJQUFJLEVBQUMsVUFBOEI7RUFBbkJqRSxJQUFJLEVBQUM7QUFBYyxDQUExQyxDQUZ3QyxvRkFFR2dFLHVEQUFBQSxDQUNYLE9BRFcsRUFDWDtFQUE5QixPQUFJO0FBQTBCLENBRFcsRUFDekIsUUFEeUIsQ0FGSCxDQUExQzs7QUFBQTs7O0VBTUssU0FBTTs7O0VBQ3dCLFNBQU07OztFQUNoQyxTQUFNOzs7RUFDSixTQUFNOzs7OztFQXVCZEUsS0FBd0IsRUFBeEI7SUFBQTtFQUFBO0VBQXlCLFNBQU07OzsrQkFDbENGLHVEQUFBQSxDQUVJLEdBRkosRUFFSTtFQUZELFNBQU07QUFFTCxDQUZKLEVBQWtCLGNBQ2hCQSx1REFBQUEsQ0FBNkQsUUFBN0QsRUFBNkQ7RUFBckRDLElBQUksRUFBQyxRQUFnRDtFQUF2QyxTQUFNO0FBQWlDLENBQTdELEVBQTZDLFNBQTdDLENBRGdCLENBQWxCOztBQUFBOzs7Ozs7Ozs7Ozs7OzJEQXBEUkUsdURBQUFBLENBZ0VNLEtBaEVOLGNBZ0VNLENBL0RKQyxVQStESSxFQTlESkosdURBQUFBLENBQXVCLEdBQXZCLEVBQXVCLElBQXZCLEVBQXVCSyxvREFBQUEsQ0FBakJDLGdCQUFpQixDQUF2QixFQUFnQjtFQUFBO0VBQWhCLENBOERJLEVBN0RKTix1REFBQUEsQ0E0RE0sS0E1RE4sY0E0RE0sQ0EzREpBLHVEQUFBQSxDQTBETyxNQTFEUCxFQTBETztJQTFEQU8sUUFBTTtNQUFBLE9BQVVDLHFFQUFWO0lBQUEsR0FBb0IsV0FBcEI7RUEwRE4sQ0ExRFAsR0FDRUMsZ0RBQUFBLENBRW9FQyx5QkFGcEUsRUFFb0U7SUFGbkRoRixPQUFPLEVBQUU0RSxhQUUwQztJQURqRTFFLFFBQVEsRUFBRTBFLGlCQUFXQSxzQkFBWCxHQUE4QkEsa0JBQ3lCO0lBQWpFSyxlQUFjLEVBQUVILHNCQUFpRDtJQUFqQ0ksWUFBVyxFQUFFSjtFQUFvQixDQUZwRTs7RUFBQSwrREFHQVIsdURBQUFBLENBUVUsU0FSVixjQVFVLENBUFJhLFVBT1EsRUFOUkosZ0RBQUFBLENBQ3NESyxzQkFEdEQsRUFDc0Q7SUFEeENuRixnQkFBZ0IsRUFBRTJFLHNCQUNzQjtJQUFuRFMsd0JBQXVCLEVBQUVQO0VBQTBCLENBRHREOztFQUFBLG1EQU1RLEVBSlJDLGdEQUFBQSxDQUU0Q08sMkJBRjVDLEVBRTRDO0lBRnpCNUUsV0FBVyxFQUFFa0UsaUJBRVk7SUFEekNwRSxlQUFlLEVBQUVvRSxxQkFDd0I7SUFBekNXLG1CQUFrQixFQUFFVDtFQUFxQixDQUY1Qzs7RUFBQSw0REFJUSxDQVJWLEdBU0FVLHVEQUFBQSx3QkFDQWxCLHVEQUFBQSxDQTZCVSxTQTdCVixjQTZCVSxDQTVCUm1CLFVBNEJRLEVBdEJSbkIsdURBQUFBLENBV00sS0FYTixjQVdNLHdEQVZKRyx1REFBQUEsQ0FTTWlCLHlDQVROLEVBU00sSUFUTixFQVNNQywrQ0FBQUEsQ0FUaUJmLGNBU2pCLEVBVHlCLFVBQW5CZ0IsT0FBbUIsRUFBWjs2REFBbkJuQix1REFBQUEsQ0FTTSxLQVROLGNBU00sQ0FSSkgsdURBQUFBLENBT00sS0FQTixlQU9NLENBTkpBLHVEQUFBQSxDQUtNLEtBTE4sZUFLTSxxREFKSkEsdURBQUFBLENBQ2lDLE9BRGpDLEVBQ2lDO01BRDFCLFNBQU0sT0FDb0I7TUFEWkMsSUFBSSxFQUFDLE1BQ087O2VBRFNxQixPQUFPLENBQUN0RixPQUFJdUY7T0FDckI7TUFBL0JDLFdBQVcsRUFBQztJQUFtQixDQURqQzs7SUFBQSwrREFBMENGLE9BQU8sQ0FBQ3RGLE9BSTlDLHNEQUZKZ0UsdURBQUFBLENBQ2tDLE9BRGxDLEVBQ2tDO01BRDNCLFNBQU0sT0FDcUI7TUFEYkMsSUFBSSxFQUFDLE1BQ1E7O2VBRFFxQixPQUFPLENBQUNyRixRQUFLc0Y7T0FDckI7TUFBaENDLFdBQVcsRUFBQztJQUFvQixDQURsQzs7SUFBQSwrREFBMENGLE9BQU8sQ0FBQ3JGLFFBRTlDLENBTE4sQ0FNSSxDQVBOLENBUUksQ0FUTjtHQVNNLENBVE47O0VBQUEsQ0FVSSxFQVhOLENBc0JRLEVBVlIrRCx1REFBQUEsQ0FTTSxLQVROLEVBU00sSUFUTixFQVNNLENBUkpBLHVEQUFBQSxDQUdTLFFBSFQsRUFHUztJQUhEQyxJQUFJLEVBQUMsUUFHSjtJQUhhLFNBQU0scUJBR25CO0lBRk53QixPQUFLO01BQUEsT0FBRWpCLHFFQUFGO0lBQUE7RUFFQyxDQUhULEVBQ3NCLHNCQUR0QixDQVFJLEVBSkpSLHVEQUFBQSxDQUdTLFFBSFQsRUFHUztJQUhEQyxJQUFJLEVBQUMsUUFHSjtJQUhhLFNBQU0sa0JBR25CO0lBRk53QixPQUFLO01BQUEsT0FBRWpCLDJFQUFGO0lBQUE7RUFFQyxDQUhULEVBQ3lCLHdCQUR6QixDQUlJLENBVE4sQ0FVUSxDQTdCVixHQThCQVUsdURBQUFBLDRCQUVBQSx1REFBQUEsMkJBQ0FsQix1REFBQUEsQ0FVTSxLQVZOLGVBVU0sQ0FUSjBCLFdBU0ksRUFOT3BCLHdCQUFBQSw4Q0FBQUEsSUFBWEgsdURBQUFBLENBS00sS0FMTixFQUtNd0IsV0FMTixFQUtNLENBSkozQix1REFBQUEsQ0FFSSxHQUZKLEVBRUksSUFGSixFQUVJSyxvREFBQUEsQ0FEQ0Msb0JBQ0QsQ0FGSixFQUNtQjtFQUFBO0VBRG5CLENBSUksRUFESk4sdURBQUFBLENBQThELEdBQTlELEVBQThEO0lBQTNELFNBQU0sbUJBQXFEO0lBQWhDNEIsSUFBSSxFQUFFcEI7RUFBMEIsQ0FBOUQsRUFBNkMsZUFBN0MsRUFBMEQ7RUFBQTtFQUExRCxFQUEwRHFCLFdBQTFELENBQ0ksQ0FMTiwwRUFNSSxDQVZOLEVBL0NGOztFQUFBLENBMkRJLENBNUROLENBNkRJLENBaEVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lOQ0FBN0IsdURBQUFBLENBQW9DLE9BQXBDLEVBQW9DO0lBQTdCQyxJQUFJLEVBQUMsTUFBd0I7O2FBQVJLLGFBQUlpQjs7RUFBSSxDQUFwQzs7RUFBQSxrREFBNEJqQixlQUM1Qk4sdURBQUFBLENBQTRELFFBQTVELEVBQTREO0lBQW5EeUIsT0FBSztNQUFBLE9BQUVqQix5RUFBRjtJQUFBO0VBQThDLENBQTVELEVBQThCLHVCQUE5Qix1REFDQVIsdURBQUFBLENBQXFDLElBQXJDLEVBQXFDLElBQXJDLEVBQXFDSyxvREFBQUEsQ0FBYkMsV0FBYSxDQUFyQyxFQUE2QjtFQUFBO0VBQTdCLEdBQTZCLDRDQUFmQSxZQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJDRjdCTix1REFBQUEsQ0FBdUQsSUFBdkQsRUFBdUQ7RUFBbkQsU0FBTTtBQUE2QyxDQUF2RCxFQUFpQixtQ0FBakIsRUFBa0Q7QUFBQTtBQUFsRDs7O0VBQ0ssU0FBTTs7O0VBQ0osU0FBTTs7O0VBQ0osU0FBTTs7O0VBRUosU0FBTTs7OztxS0FMakI4QixZQUNBOUIsdURBQUFBLENBV00sS0FYTixjQVdNLENBVkpBLHVEQUFBQSxDQVNNLEtBVE4sY0FTTSxDQVJKQSx1REFBQUEsQ0FPTSxLQVBOLGNBT00sQ0FMSkEsdURBQUFBLENBSU0sS0FKTixjQUlNLENBSEpBLHVEQUFBQSxDQUU0QyxPQUY1QyxFQUU0QztJQUZyQyxTQUFNLFVBRStCO0lBRnBCQyxJQUFJLEVBQUMsVUFFZTtJQUZIUCxLQUFLLEVBQUVxQyx1QkFFSjtJQUR6Q0MsUUFBTTtNQUFBLE9BQUV4Qix1R0FBRjtJQUFBLEVBQ21DO0lBQTFDZ0IsV0FBVyxFQUFDO0VBQThCLENBRjVDOztFQUFBLGFBR0ksQ0FKTixDQUtJLENBUE4sQ0FRSSxDQVROLENBVUksQ0FYTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDQVMsU0FBTTs7OzhCQUNieEIsdURBQUFBLENBQW1DLElBQW5DLEVBQW1DLElBQW5DLEVBQUksNEJBQUosRUFBOEI7QUFBQTtBQUE5Qjs7O0VBQ0ssU0FBTTs7O0VBQ0osU0FBTTs7O0VBQ0osU0FBTTs7OzhCQUNUQSx1REFBQUEsQ0FBOEMsT0FBOUMsRUFBOEM7RUFBdkMsU0FBTTtBQUFpQyxDQUE5QyxFQUFxQixtQkFBckIsRUFBc0M7QUFBQTtBQUF0Qzs7O0VBQ0ssU0FBTTs7OztFQVVSLFNBQU07OzsrQkFDVEEsdURBQUFBLENBQXlDLE9BQXpDLEVBQXlDO0VBQWxDLFNBQU07QUFBNEIsQ0FBekMsRUFBcUIsY0FBckIsRUFBaUM7QUFBQTtBQUFqQzs7O0VBQ0ssU0FBTTs7O0VBQ0osU0FBTTs7O0VBT04sU0FBTTs7OztxS0EzQnJCa0IsdURBQUFBLDZCQUNBbEIsdURBQUFBLENBaUNVLFNBakNWLGNBaUNVLENBaENSSSxVQWdDUSxFQS9CUkosdURBQUFBLENBOEJNLEtBOUJOLGNBOEJNLENBN0JKQSx1REFBQUEsQ0E0Qk0sS0E1Qk4sY0E0Qk0sQ0EzQkpBLHVEQUFBQSxDQVdNLEtBWE4sY0FXTSxDQVZKaUMsVUFVSSxFQVRKakMsdURBQUFBLENBUU0sS0FSTixjQVFNLENBUEpBLHVEQUFBQSxDQU1FLE9BTkYsRUFNRTtJQUxBLFNBQU0sT0FLTjtJQUpBQyxJQUFJLEVBQUMsTUFJTDtJQUhDaUMsT0FBSztNQUFBLE9BQUUxQixxRkFBRjtJQUFBLEVBR047SUFGQ2QsS0FBSyxFQUFFcUMsY0FFUjtJQURBUCxXQUFXLEVBQUM7RUFDWixDQU5GOztFQUFBLGFBT0ksQ0FSTixDQVNJLENBWE4sQ0EyQkksRUFmSnhCLHVEQUFBQSxDQWNNLEtBZE4sY0FjTSxDQWJKbUMsV0FhSSxFQVpKbkMsdURBQUFBLENBV00sS0FYTixlQVdNLENBVkpBLHVEQUFBQSxDQU1NLEtBTk4sZUFNTSxDQUxKQSx1REFBQUEsQ0FJRSxPQUpGLEVBSUU7SUFIQSxTQUFNLE9BR047SUFGQ2dDLFFBQU07TUFBQSxPQUFFeEIsMkZBQUY7SUFBQSxFQUVQO0lBREFQLElBQUksRUFBQztFQUNMLENBSkY7O0VBQUEsQ0FLSSxDQU5OLENBVUksRUFISkQsdURBQUFBLENBRU0sS0FGTixlQUVNLENBREpBLHVEQUFBQSxDQUEwQyxLQUExQyxFQUEwQztJQUFwQ29DLEdBQUcsRUFBRUwsZUFBK0I7SUFBckJNLEdBQUcsRUFBQztFQUFpQixDQUExQzs7RUFBQSxjQUNJLENBRk4sQ0FHSSxDQVhOLENBWUksQ0FkTixDQWVJLENBNUJOLENBNkJJLENBOUJOLENBK0JRLENBakNWLEdBa0NBbkIsdURBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJDbENFbEIsdURBQUFBLENBQStDLElBQS9DLEVBQStDO0VBQTNDLFNBQU07QUFBcUMsQ0FBL0MsRUFBaUIsMkJBQWpCLEVBQTBDO0FBQUE7QUFBMUM7OztFQUNLLFNBQU07OztFQUNnQyxTQUFNOzs7O3FLQUhqRGtCLHVEQUFBQSxvQkFDQVksWUFDQTlCLHVEQUFBQSxDQU9NLEtBUE4sY0FPTSx3REFORkcsdURBQUFBLENBS01pQix5Q0FMTixFQUtNLElBTE4sRUFLTUMsK0NBQUFBLENBTGVVLHNCQUtmLEVBTDhCLFVBQXhCTyxLQUF3QixFQUFuQjs2REFBakJuQyx1REFBQUEsQ0FLTSxLQUxOLGNBS00sQ0FKRkgsdURBQUFBLENBQ21ELEtBRG5ELEVBQ21EO01BRDlDLFNBQU0sbUJBQ3dDO01BQTlDRSxLQUFLO1FBQUEsb0JBQXNCb0MsS0FBSyxDQUFDdEc7TUFBNUI7SUFBeUMsQ0FEbkQ7O0lBQUEsQ0FJRSxFQUZGZ0UsdURBQUFBLENBQzZELE9BRDdELEVBQzZEO01BRHREaEUsSUFBSSxFQUFDLFlBQ2lEO01BRHBDaUUsSUFBSSxFQUFDLE9BQytCO01BQXhEK0IsUUFBTTtRQUFBLE9BQUV4Qiw2RkFBRjtNQUFBLEVBQWtEO01BQXZCZCxLQUFLLEVBQUU0QyxLQUFLLENBQUNuRztJQUFVLENBRDdEOztJQUFBLGFBRUUsQ0FMTjtHQUtNLENBTE47O0VBQUEsQ0FNRSxFQVBOOzs7Ozs7Ozs7Ozs7Ozs7QUNISjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3RTtBQUNWO0FBQ0w7O0FBRXpELENBQXNIO0FBQ3RILGlDQUFpQywwSEFBZSxDQUFDLGdGQUFNLGFBQWEsa0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ3RDtBQUNWO0FBQ0w7O0FBRXhELENBQXNIO0FBQ3RILGlDQUFpQywwSEFBZSxDQUFDLCtFQUFNLGFBQWEsaUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ5RDtBQUNWO0FBQ0w7O0FBRXpELENBQXNIO0FBQ3RILGlDQUFpQywwSEFBZSxDQUFDLGdGQUFNLGFBQWEsa0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEI0RDtBQUNWO0FBQ0w7O0FBRTVELENBQXNIO0FBQ3RILGlDQUFpQywwSEFBZSxDQUFDLG1GQUFNLGFBQWEscUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEI4RDtBQUNWO0FBQ0w7O0FBRTlELENBQXNIO0FBQ3RILGlDQUFpQywwSEFBZSxDQUFDLHFGQUFNLGFBQWEsdUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCMkw7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQnVpbGRlckZvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9EZWZhdWx0QXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRm9ybVNlY3Rpb25zL0hlcm9TZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRm9ybVNlY3Rpb25zL0luZm9zR2VuZXJhbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRm9ybVNlY3Rpb25zL1RoZW1lQ29sb3JQaWNrZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQnVpbGRlckZvcm0udnVlPzc0YzkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0RlZmF1bHRBcHAudnVlPzBkNGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0Zvcm1TZWN0aW9ucy9IZXJvU2VjdGlvbi52dWU/NWY3ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRm9ybVNlY3Rpb25zL0luZm9zR2VuZXJhbGVzLnZ1ZT82M2M3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Gb3JtU2VjdGlvbnMvVGhlbWVDb2xvclBpY2tlci52dWU/ZDA3YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQnVpbGRlckZvcm0udnVlPzZkYWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0RlZmF1bHRBcHAudnVlPzFlNTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0Zvcm1TZWN0aW9ucy9IZXJvU2VjdGlvbi52dWU/YTgyZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRm9ybVNlY3Rpb25zL0luZm9zR2VuZXJhbGVzLnZ1ZT9lZDVkIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Gb3JtU2VjdGlvbnMvVGhlbWVDb2xvclBpY2tlci52dWU/MWI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XHJcblxyXG4vL2ltcG9ydCBcIi4vanMvZm9ybXMuanNcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IERlZmF1bHRBcHAgZnJvbSBcIi4vanMvRGVmYXVsdEFwcC52dWVcIjtcclxuaW1wb3J0IEJ1aWxkZXJGb3JtIGZyb20gXCIuL2pzL0J1aWxkZXJGb3JtLnZ1ZVwiO1xyXG5cclxuLy9jcmVhdGVBcHAoRGVmYXVsdEFwcCkubW91bnQoXCIjdnVlLWFwcFwiKTtcclxuY3JlYXRlQXBwKEJ1aWxkZXJGb3JtKS5tb3VudChcIiN2dWUtYnVpbGRlci1mb3JtXCIpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBjb250YWluZXIgYXJ0aWNsZSBwLTMgbXktNlwiPlxyXG4gICAgPGgyPkZvcm11bGFpcmUgcG91ciBsZXMgaW5mb3JtYXRpb25zIGRlIHZvdHJlIHNpdGUgd2ViPC9oMj5cclxuICAgIDxwPnt7IG1vbk1lc3NhZ2UgfX08L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwidnVlLWZvcm0gbXktNFwiPlxyXG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJmb3JtU3VibWl0XCI+XHJcbiAgICAgICAgPEluZm9zR2VuZXJhbGVzIDpub21TaXRlPVwibm9tU2l0ZVwiXHJcbiAgICAgICAgICA6c2l0ZUxvZ289XCJzaXRlTG9nbyA/IHRlbXBvcmFyeUxvZ29VcmwgOiBwcmV2aW91c0xvZ29cIlxyXG4gICAgICAgICAgQHVwZGF0ZS1ub21TaXRlPVwidXBkYXRlTm9tU2l0ZVwiIEBsb2dvLXVwbG9hZD1cImhhbmRsZUxvZ29VcGxvYWRcIiAvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb3MtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDM+MiAtIEJhbmRlYXUgaMOpcm9zIGV0IHRow6htZTwvaDM+XHJcbiAgICAgICAgICA8SGVyb1NlY3Rpb24gOnByZXNlbnRhdGlvblNpdGU9XCJwcmVzZW50YXRpb25TaXRlXCJcclxuICAgICAgICAgICAgQHVwZGF0ZS1wcmVzZW50YXRpb25TaXRlPVwidXBkYXRlUHJlc2VudGF0aW9uU2l0ZVwiIC8+XHJcbiAgICAgICAgICA8VGhlbWVDb2xvclBpY2tlciA6dGhlbWVDb2xvcnM9XCJ0aGVtZUNvbG9yc1wiXHJcbiAgICAgICAgICAgIDpiYXNlVGhlbWVDb2xvcnM9XCJiYXNlVGhlbWVDb2xvcnNcIlxyXG4gICAgICAgICAgICBAdXBkYXRlLXRoZW1lQ29sb3JzPVwidXBkYXRlVGhlbWVDb2xvcnNcIiAvPlxyXG5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPCEtLSBTZWN0aW9uIFByb2R1aXRzIC0tPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb3MtcHJvZHVpdHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpcy1mbGV4IGlzLWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJteC00XCI+UHJvZHVpdHM8L2gzPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFjdGl2YXRlZFwiIC8+IDxsYWJlbFxyXG4gICAgICAgICAgICAgIGZvcj1cImFjdGl2YXRlZFwiPkFjdGl2w6k8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJwcm9kdWN0IGluIHByb2R1Y3RzXCIgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwicHJvZHVjdC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbSBkdSBwcm9kdWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJwcm9kdWN0LnByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaXggZHUgcHJvZHVpdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGlzLWluZm8gbXItNFwiXHJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiYWRkUHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgIEFqb3V0ZXIgdW4gcHJvZHVpdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgU3VwcHJpbWVyIHVuIHByb2R1aXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPCEtLSBGaW4gU2VjdGlvbiBQcm9kdWl0cyAtLT5cclxuXHJcbiAgICAgICAgPCEtLSBFbnZvaSBkdSBmb3JtdWxhaXJlIC0tPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAzMHB4XCIgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGlzLWluZm9cIj5WYWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJzdWNjZXNzTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7eyBzdWNjZXNzTWVzc2FnZSB9fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIiA6aHJlZj1cInNpdGVVcmxcIj5Wb2lyIGxlIHNpdGUgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBJbmZvc0dlbmVyYWxlcyBmcm9tIFwiLi9Gb3JtU2VjdGlvbnMvSW5mb3NHZW5lcmFsZXMudnVlXCI7XHJcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi9Gb3JtU2VjdGlvbnMvSGVyb1NlY3Rpb24udnVlXCI7XHJcbmltcG9ydCBUaGVtZUNvbG9yUGlja2VyIGZyb20gXCIuL0Zvcm1TZWN0aW9ucy9UaGVtZUNvbG9yUGlja2VyLnZ1ZVwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgSW5mb3NHZW5lcmFsZXMsXHJcbiAgICBIZXJvU2VjdGlvbixcclxuICAgIFRoZW1lQ29sb3JQaWNrZXIsXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbW9uTWVzc2FnZTogXCJIZWxsbyBmcm9tIFZ1ZSAhXCIsXHJcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSxcclxuICAgICAgbm9tU2l0ZTogXCJcIixcclxuICAgICAgcHJlc2VudGF0aW9uU2l0ZTogXCJcIixcclxuICAgICAgc2l0ZUxvZ286IFwiXCIsXHJcbiAgICAgIHRlbXBvcmFyeUxvZ29Vcmw6IFwiXCIsXHJcbiAgICAgIHByZXZpb3VzTG9nbzogXCIvaW1hZ2VzL3VwbG9hZHMvYWRtaW5sY2R6L3NpdGVsb2dvLnBuZ1wiLFxyXG4gICAgICBwcm9kdWN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiUHJvZHVpdCAwXCIsXHJcbiAgICAgICAgICBwcmljZTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICAvLyB0aGVtZUNvbG9ycyBpcyBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggMiBwcm9wZXJ0aWVzOiBuYW1lIChzdHJpbmcpIGFuZCBjb2xvcnM6IChhcnJheSBvZiBzdHJpbmdzKVxyXG4gICAgICBiYXNlVGhlbWVDb2xvcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInJlZFwiLFxyXG4gICAgICAgICAgY29sb3JzOiBbXCIjZjQ0MzM2XCIsIFwiI2U5MWU2M1wiLCBcIiM5YzI3YjBcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgICAgY29sb3JzOiBbXCIjZmY5ODAwXCIsIFwiI2ZmYzEwN1wiLCBcIiNmZmViM2JcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImxpZ2h0Ymx1ZVwiLFxyXG4gICAgICAgICAgY29sb3JzOiBbXCIjMjE5NmYzXCIsIFwiIzAzYTlmNFwiLCBcIiMwMGJjZDRcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgdGhlbWVDb2xvcnM6IFwiXCIsXHJcbiAgICAgIHBpY2tlZFRoZW1lQ29sb3JzOiBbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgc2l0ZVVybCgpIHtcclxuICAgICAgcmV0dXJuIFwiYnVpbGRlci9zaXRlL1wiICsgdGhpcy5ub21TaXRlO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICB0aGVtZUNvbG9yczogZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIHRoaXMucGlja2VkVGhlbWVDb2xvcnMgPSBuZXdWYWwuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAvL21ha2UgdGhlbWVDb2xvcnNBcnJheSBhIG5hbWVkIGFycmF5IHdpdGgga2V5cyBwcmltYXJ5LCBzZWNvbmRhcnksIHRlcnRpYXJ5XHJcbiAgICAgIHRoaXMucGlja2VkVGhlbWVDb2xvcnMgPSB7XHJcbiAgICAgICAgcHJpbWFyeTogdGhpcy5waWNrZWRUaGVtZUNvbG9yc1swXSxcclxuICAgICAgICBzZWNvbmRhcnk6IHRoaXMucGlja2VkVGhlbWVDb2xvcnNbMV0sXHJcbiAgICAgICAgdGVydGlhcnk6IHRoaXMucGlja2VkVGhlbWVDb2xvcnNbMl0sXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGlja2VkVGhlbWVDb2xvcnMpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICAvL1V0aWxpc2VyIGF2ZWMgQUpBWCB1bmUgcm91dGUgY29udGVuYW50IGVuIEpTT04gIGxlcyBkb25uw6llcyBkdSBzaXRlIGRlIGxhIEJERCBwb3VyIHByw6lwZXVwbGVyIGxlIGZvcm11bGFpcmVcclxuICAgIGNvbnNvbGUubG9nKFwiVnVlanMgbW9udMOpXCIpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcIi9hcGkvc2l0ZWluZm9cIilcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyZXVyIDUwMCBzdXIgbGUgZ2V0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUZpZWxkc0Zyb21BcGkocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYWRkUHJvZHVjdCgpIHtcclxuICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHByaWNlOiAwLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVQcm9kdWN0KCkge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzLnBvcCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZU5vbVNpdGUobm9tU2l0ZSkge1xyXG4gICAgICB0aGlzLm5vbVNpdGUgPSBub21TaXRlO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUxvZ29VcGxvYWQodXBsb2FkZWRMb2dvKSB7XHJcbiAgICAgIHRoaXMuc2l0ZUxvZ28gPSB1cGxvYWRlZExvZ287XHJcbiAgICAgIHRoaXMudGVtcG9yYXJ5TG9nb1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodXBsb2FkZWRMb2dvKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVQcmVzZW50YXRpb25TaXRlKHByZXNlbnRhdGlvblNpdGUpIHtcclxuICAgICAgdGhpcy5wcmVzZW50YXRpb25TaXRlID0gcHJlc2VudGF0aW9uU2l0ZTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVUaGVtZUNvbG9ycyhuZXdUaGVtZUNvbG9ycykge1xyXG4gICAgICB0aGlzLnRoZW1lQ29sb3JzID0gbmV3VGhlbWVDb2xvcnM7XHJcbiAgICB9LFxyXG4gICAgZm9ybVN1Ym1pdCgpIHtcclxuICAgICAgdGhpcy5zYXZlVG9EYigpO1xyXG4gICAgfSxcclxuICAgIC8vUHJlcG9wdWxhdGUgZm9ybSBmaWVsZHMgd2l0aCBkYXRhIGZyb20gQVBJXHJcbiAgICBwb3B1bGF0ZUZpZWxkc0Zyb21BcGkoZGF0YSkge1xyXG4gICAgICB0aGlzLm5vbVNpdGUgPSBkYXRhLm5vbVNpdGU7XHJcbiAgICAgIHRoaXMucHJlc2VudGF0aW9uU2l0ZSA9IGRhdGEuZGVzY3JpcHRpb25TaXRlO1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gZGF0YS5wcm9kdWN0cyB8fCB0aGlzLnByb2R1Y3RzO1xyXG4gICAgfSxcclxuICAgIC8vRGF0YWJhc2Ugc3R1ZmZcclxuICAgIHNhdmVUb0RiKCkge1xyXG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgaWYgKHRoaXMuc2l0ZUxvZ28gIT0gbnVsbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNpdGVMb2dvXCIsIHRoaXMuc2l0ZUxvZ28pO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5vbV9zaXRlXCIsIHRoaXMubm9tU2l0ZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByZXNlbnRhdGlvblNpdGVcIiwgdGhpcy5wcmVzZW50YXRpb25TaXRlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0cykpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0aGVtZUNvbG9yc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnBpY2tlZFRoZW1lQ29sb3JzKSk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYXBpL2pzZm9ybVwiLCBmb3JtRGF0YSwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIkZvcm11bGFpcmUgZW52b3nDqSBhdmVjIHN1Y2PDqHNcIjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibmFtZVwiIC8+XHJcbiAgPGJ1dHRvbiBAY2xpY2s9XCJyZWZyZXNoSGVsbG9cIj5EZW1hbmRlciB1biBib25qb3VyICE8L2J1dHRvbj5cclxuICA8aDEgdi1zaG93PVwiISFoZWxsb1wiPnt7IGhlbGxvIH19PC9oMT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgaGVsbG86IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcmVmcmVzaEhlbGxvKCkge1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7XHJcbiAgICAgICAgZmV0Y2goXCIvYXBpL2hlbGxvd29yZC9cIiArIHRoaXMubmFtZSwgeyBtZXRob2Q6IFwiR0VUXCIgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gKHRoaXMuaGVsbG8gPSByZXN1bHQpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxoNCBjbGFzcz1cIm15LTRcIj5QZXRpdGUgcHLDqXNlbnRhdGlvbiBkZSB2b3RyZSBzaXRlPC9oND5cclxuICA8ZGl2IGNsYXNzPVwiIGNvbHVtbnNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0ZXh0YXJlYVwiIHR5cGU9XCJ0ZXh0YXJlYVwiIDp2YWx1ZT1cInByZXNlbnRhdGlvblNpdGVcIlxyXG4gICAgICAgICAgICBAY2hhbmdlPVwiQ2hpbGRVcGRhdGVQcmVzZW50YXRpb25TaXRlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYWdsaW5lIGRlIHZvdHJlIHNpdGUgLi4uXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIkhlcm9TZWN0aW9uXCIsXHJcbiAgcHJvcHM6IHtcclxuICAgIHByZXNlbnRhdGlvblNpdGU6IFN0cmluZyxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIENoaWxkVXBkYXRlUHJlc2VudGF0aW9uU2l0ZShldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KFwidXBkYXRlLXByZXNlbnRhdGlvblNpdGVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8IS0tIGTDqWJ1dCBpbmZvcyBnw6luw6lyYWxlcyAtLT5cclxuICA8c2VjdGlvbiBjbGFzcz1cImluZm9zLXNpdGVcIj5cclxuICAgIDxoMz4xIC0gSW5mb3JtYXRpb25zIGfDqW7DqXJhbGVzPC9oMz5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+Tm9tIGRlIHZvdHJlIFNpdGU8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIEBpbnB1dD1cIkNoaWxkVXBkYXRlTm9tU2l0ZVwiXHJcbiAgICAgICAgICAgICAgOnZhbHVlPVwibm9tU2l0ZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZSBub20gZGUgdm90cmUgc2l0ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+TG9nbyBkdSBzaXRlPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGlzLWZsZXggaXMtYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxvZ28tLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJDaGlsZEhhbmRsZUxvZ29VcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sb2dvLS1jb250YWluZXIgbXgtNFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgOnNyYz1cInNpdGVMb2dvXCIgYWx0PVwibG9nbyBkdSBzaXRlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbiAgPCEtLSBmaW4gaW5mb3MgZ8OpbsOpcmFsZXMgLS0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJJbmZvc0dlbmVyYWxlc1wiLFxyXG4gIHByb3BzOiB7XHJcbiAgICBub21TaXRlOiBTdHJpbmcsXHJcbiAgICBzaXRlTG9nbzogU3RyaW5nLFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgQ2hpbGRVcGRhdGVOb21TaXRlKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJ1cGRhdGUtbm9tU2l0ZVwiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIENoaWxkSGFuZGxlTG9nb1VwbG9hZChldmVudCkge1xyXG4gICAgICBsZXQgdXBsb2FkZWRMb2dvID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICB0aGlzLiRlbWl0KFwibG9nby11cGxvYWRcIiwgdXBsb2FkZWRMb2dvKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDwhLS0gQ29sb3IgUGlja2VyIC0tPlxyXG4gICAgPGg0IGNsYXNzPVwibXktNFwiPkNob2l4IGR1IHRow6htZSBkZSBjb3VsZXVyPC9oND5cclxuICAgIDxkaXYgY2xhc3M9XCJpcy1mbGV4IGNvbG9yUGlja2VyLWNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCJjb2xvciBpbiBiYXNlVGhlbWVDb2xvcnMgXCIgY2xhc3M9XCJjb2xvclBpY2tlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yUGlja2VyLWNvbG9yIFwiXHJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7J2JhY2tncm91bmQtY29sb3InOmNvbG9yLm5hbWV9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidGhlbWVDb2xvclwiIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiQ2hpbGRVcGRhdGVUaGVtZUNvbG9yc1wiIDp2YWx1ZT1cImNvbG9yLmNvbG9yc1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiVGhlbWVDb2xvclBpY2tlclwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB0aGVtZUNvbG9yczogU3RyaW5nLFxyXG4gICAgICAgIGJhc2VUaGVtZUNvbG9yczogQXJyYXksXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIENoaWxkVXBkYXRlVGhlbWVDb2xvcnMoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcInVwZGF0ZS10aGVtZUNvbG9yc1wiLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0J1aWxkZXJGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NzVkYzdmMlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0J1aWxkZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9CdWlsZGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJGOlxcXFx3YW1wNjRcXFxcd3d3XFxcXExDRFpcXFxcT25lUGFnZVxcXFxvbmVwYWdlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvanMvQnVpbGRlckZvcm0udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjg3NWRjN2YyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnODc1ZGM3ZjInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc4NzVkYzdmMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg3NWRjN2YyXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzg3NWRjN2YyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9EZWZhdWx0QXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTYzNzI3MFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RlZmF1bHRBcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RlZmF1bHRBcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiRjpcXFxcd2FtcDY0XFxcXHd3d1xcXFxMQ0RaXFxcXE9uZVBhZ2VcXFxcb25lcGFnZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2pzL0RlZmF1bHRBcHAudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjUxNjM3MjcwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNTE2MzcyNzAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1MTYzNzI3MCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGVmYXVsdEFwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE2MzcyNzBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNTE2MzcyNzAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0hlcm9TZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmIwNTk5NlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hlcm9TZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9IZXJvU2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJGOlxcXFx3YW1wNjRcXFxcd3d3XFxcXExDRFpcXFxcT25lUGFnZVxcXFxvbmVwYWdlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvanMvRm9ybVNlY3Rpb25zL0hlcm9TZWN0aW9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwNmIwNTk5NlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzA2YjA1OTk2JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDZiMDU5OTYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hlcm9TZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmIwNTk5NlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwNmIwNTk5NicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vSW5mb3NHZW5lcmFsZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM0MzA0NDU0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5mb3NHZW5lcmFsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZm9zR2VuZXJhbGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkY6XFxcXHdhbXA2NFxcXFx3d3dcXFxcTENEWlxcXFxPbmVQYWdlXFxcXG9uZXBhZ2VcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9qcy9Gb3JtU2VjdGlvbnMvSW5mb3NHZW5lcmFsZXMudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImM0MzA0NDU0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnYzQzMDQ0NTQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdjNDMwNDQ1NCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5mb3NHZW5lcmFsZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM0MzA0NDU0XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2M0MzA0NDU0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9UaGVtZUNvbG9yUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGY2ODg2NlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZW1lQ29sb3JQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RoZW1lQ29sb3JQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiRjpcXFxcd2FtcDY0XFxcXHd3d1xcXFxMQ0RaXFxcXE9uZVBhZ2VcXFxcb25lcGFnZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2pzL0Zvcm1TZWN0aW9ucy9UaGVtZUNvbG9yUGlja2VyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxNGY2ODg2NlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzE0ZjY4ODY2JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMTRmNjg4NjYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RoZW1lQ29sb3JQaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ZjY4ODY2XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzE0ZjY4ODY2JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CdWlsZGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CdWlsZGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0RlZmF1bHRBcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRGVmYXVsdEFwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0hlcm9TZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0hlcm9TZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vSW5mb3NHZW5lcmFsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vSW5mb3NHZW5lcmFsZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9UaGVtZUNvbG9yUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1RoZW1lQ29sb3JQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUFwcCIsIkRlZmF1bHRBcHAiLCJCdWlsZGVyRm9ybSIsIm1vdW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiYXhpb3MiLCJJbmZvc0dlbmVyYWxlcyIsIkhlcm9TZWN0aW9uIiwiVGhlbWVDb2xvclBpY2tlciIsImNvbXBvbmVudHMiLCJkYXRhIiwibW9uTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwibm9tU2l0ZSIsInByZXNlbnRhdGlvblNpdGUiLCJzaXRlTG9nbyIsInRlbXBvcmFyeUxvZ29VcmwiLCJwcmV2aW91c0xvZ28iLCJwcm9kdWN0cyIsIm5hbWUiLCJwcmljZSIsImJhc2VUaGVtZUNvbG9ycyIsImNvbG9ycyIsInRoZW1lQ29sb3JzIiwicGlja2VkVGhlbWVDb2xvcnMiLCJjb21wdXRlZCIsInNpdGVVcmwiLCJ3YXRjaCIsIm5ld1ZhbCIsIm9sZFZhbCIsInNwbGl0IiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwiY29uc29sZSIsImxvZyIsIm1vdW50ZWQiLCJnZXQiLCJlcnJvciIsInRoZW4iLCJyZXNwb25zZSIsInBvcHVsYXRlRmllbGRzRnJvbUFwaSIsIm1ldGhvZHMiLCJhZGRQcm9kdWN0IiwicHVzaCIsInJlbW92ZVByb2R1Y3QiLCJwb3AiLCJ1cGRhdGVOb21TaXRlIiwiaGFuZGxlTG9nb1VwbG9hZCIsInVwbG9hZGVkTG9nbyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInVwZGF0ZVByZXNlbnRhdGlvblNpdGUiLCJ1cGRhdGVUaGVtZUNvbG9ycyIsIm5ld1RoZW1lQ29sb3JzIiwiZm9ybVN1Ym1pdCIsInNhdmVUb0RiIiwiZGVzY3JpcHRpb25TaXRlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwiaGVhZGVycyIsImhlbGxvIiwicmVmcmVzaEhlbGxvIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwicmVzdWx0IiwicHJvcHMiLCJTdHJpbmciLCJDaGlsZFVwZGF0ZVByZXNlbnRhdGlvblNpdGUiLCJldmVudCIsIiRlbWl0IiwidGFyZ2V0IiwidmFsdWUiLCJDaGlsZFVwZGF0ZU5vbVNpdGUiLCJDaGlsZEhhbmRsZUxvZ29VcGxvYWQiLCJmaWxlcyIsIkFycmF5IiwiQ2hpbGRVcGRhdGVUaGVtZUNvbG9ycyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJ0eXBlIiwic3R5bGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMiIsIl90b0Rpc3BsYXlTdHJpbmciLCIkZGF0YSIsIm9uU3VibWl0IiwiJG9wdGlvbnMiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X0luZm9zR2VuZXJhbGVzIiwib25VcGRhdGVOb21TaXRlIiwib25Mb2dvVXBsb2FkIiwiX2hvaXN0ZWRfNSIsIl9jb21wb25lbnRfSGVyb1NlY3Rpb24iLCJvblVwZGF0ZVByZXNlbnRhdGlvblNpdGUiLCJfY29tcG9uZW50X1RoZW1lQ29sb3JQaWNrZXIiLCJvblVwZGF0ZVRoZW1lQ29sb3JzIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9ob2lzdGVkXzciLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsInByb2R1Y3QiLCIkZXZlbnQiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJfaG9pc3RlZF8xNSIsIl9ob2lzdGVkXzE2IiwiaHJlZiIsIl9ob2lzdGVkXzE3IiwiX2hvaXN0ZWRfMSIsIiRwcm9wcyIsIm9uQ2hhbmdlIiwiX2hvaXN0ZWRfNiIsIm9uSW5wdXQiLCJfaG9pc3RlZF8xMCIsInNyYyIsImFsdCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==