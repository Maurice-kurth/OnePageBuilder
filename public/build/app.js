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
/* harmony import */ var _js_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/forms.js */ "./assets/js/forms.js");
/* harmony import */ var _js_forms_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_forms_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _js_DefaultApp_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/DefaultApp.vue */ "./assets/js/DefaultApp.vue");
/* harmony import */ var _js_BuilderForm_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/BuilderForm.vue */ "./assets/js/BuilderForm.vue");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application






(0,vue__WEBPACK_IMPORTED_MODULE_3__.createApp)(_js_DefaultApp_vue__WEBPACK_IMPORTED_MODULE_4__["default"]).mount("#vue-app");
(0,vue__WEBPACK_IMPORTED_MODULE_3__.createApp)(_js_BuilderForm_vue__WEBPACK_IMPORTED_MODULE_5__["default"]).mount("#vue-builder-form");

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

/***/ "./assets/js/forms.js":
/*!****************************!*\
  !*** ./assets/js/forms.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

var button = document.querySelectorAll(".addProduct ");
button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //Duplicate each text input field inside .productFields except the button and append it to .productFields
    var productFields = document.querySelector(".productFields");
    var clone = productFields.cloneNode(true);
    clone.querySelector(".addProduct").remove();
    productFields.after(clone);
  });
});

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      monMessage: "Hello from Vue !",
      successMessage: false,
      nomSite: "",
      presentationSite: "",
      siteLogo: "",
      products: [{
        name: "Produit 1",
        price: 10
      }],
      themeColors: "",
      themeColorsArray: []
    };
  },
  computed: {
    siteUrl: function siteUrl() {
      return "builder/site/" + this.nomSite;
    }
  },
  watch: {
    themeColors: function themeColors(newVal, oldVal) {
      this.themeColorsArray = newVal.split(","); //make themeColorsArray a named array with keys primary, secondary, tertiary

      this.themeColorsArray = {
        primary: this.themeColorsArray[0],
        secondary: this.themeColorsArray[1],
        tertiary: this.themeColorsArray[2]
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    //Utiliser avec AJAX une route contenant en JSON  les données du site de la BDD pour prépeupler le formulaire
    console.log("Vuejs monté");
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("/api/siteinfo")["catch"](function (error) {
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
    handleLogoUpload: function handleLogoUpload(event) {
      this.siteLogo = event.target.files[0];
      console.log(this.siteLogo);
    },
    formSubmit: function formSubmit() {
      this.saveToDb();
    },
    populateFieldsFromApi: function populateFieldsFromApi(data) {
      this.nomSite = data.nomSite;
      this.presentationSite = data.descriptionSite;
      this.products = data.products || this.products;
    },
    saveToDb: function saveToDb() {
      var _this2 = this;

      var formData = new FormData();

      if (this.siteLogo != null) {
        formData.append("siteLogo", this.siteLogo);
      }

      formData.append("nom_site", this.nomSite);
      formData.append("presentationSite", this.presentationSite);
      formData.append("products", JSON.stringify(this.products));
      formData.append("themeColors", JSON.stringify(this.themeColorsArray));
      axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/jsform", formData, {
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
  "class": "infos-site"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h3", null, "Informations générales", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "columns"
};
var _hoisted_7 = {
  "class": "column"
};
var _hoisted_8 = {
  "class": "field"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("label", {
  "class": "label"
}, "Nom de votre Site", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "control"
};
var _hoisted_11 = {
  "class": "field"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("label", {
  "class": "label"
}, "Logo du site", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "control"
};
var _hoisted_14 = {
  "class": "infos-header"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h3", null, "Bandeau héros et thème", -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "columns"
};
var _hoisted_17 = {
  "class": "column"
};
var _hoisted_18 = {
  "class": "field"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("label", {
  "class": "label"
}, "Petite présentation de votre site", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "control"
};
var _hoisted_21 = {
  "class": "is-flex colorPicker-column"
};
var _hoisted_22 = {
  "class": "colorPicker-container"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", {
  "class": "colorPicker-color darkBlue"
}, null, -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "colorPicker-container"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", {
  "class": "colorPicker-color pink"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "infos-produits"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("span", {
  "class": "columns is-align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
  type: "checkbox",
  name: "activated"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("label", {
  "for": "activated"
}, "Activé"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h3", null, "Produits")], -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "columns is-multiline"
};
var _hoisted_29 = {
  "class": "column is-one-quarter"
};
var _hoisted_30 = {
  "class": "field"
};
var _hoisted_31 = {
  "class": "control"
};
var _hoisted_32 = ["onUpdate:modelValue"];
var _hoisted_33 = ["onUpdate:modelValue"];
var _hoisted_34 = {
  style: {
    "margin-top": "30px"
  },
  "class": "field"
};
var _hoisted_35 = {
  "class": "control"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("button", {
  type: "submit",
  "class": "button is-success"
}, "Valider", -1
/* HOISTED */
);

var _hoisted_37 = {
  key: 0
};
var _hoisted_38 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($data.monMessage), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("form", {
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_1__.withModifiers)(function () {
      return $options.formSubmit && $options.formSubmit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" début infos générales "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("section", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
    "class": "input",
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.nomSite = $event;
    }),
    placeholder: "Le nom de votre site"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelText, $data.nomSite]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
    "class": "input",
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.handleLogoUpload($event);
    }),
    type: "file"
  }, null, 32
  /* HYDRATE_EVENTS */
  )])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" fin infos générales "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("section", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
    "class": "textarea",
    type: "textarea",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.presentationSite = $event;
    }),
    placeholder: "Tagline de votre site ..."
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelText, $data.presentationSite]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Color Picker "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
    name: "themeColor",
    type: "radio",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.themeColors = $event;
    }),
    value: "#000000,#150050,#3F0071"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelRadio, $data.themeColors]])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
    name: "themeColor",
    type: "radio",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.themeColors = $event;
    }),
    value: "#F07DEA,#A460ED,#9FC9F3"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelRadio, $data.themeColors]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Section Produits "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("section", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_28, [((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderList)($data.products, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
      "class": "input",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return product.name = $event;
      },
      placeholder: "Nom du produit"
    }, null, 8
    /* PROPS */
    , _hoisted_32), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelText, product.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("input", {
      "class": "input",
      type: "text",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return product.price = $event;
      },
      placeholder: "prix du produit"
    }, null, 8
    /* PROPS */
    , _hoisted_33), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelText, product.price]])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("button", {
    type: "button",
    "class": "button is-success",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.addProduct && $options.addProduct.apply($options, arguments);
    })
  }, " Ajouter un produit "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("button", {
    type: "button",
    "class": "button is-danger",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.removeProduct && $options.removeProduct.apply($options, arguments);
    })
  }, " Supprimer un produit ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Fin Section Produits "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Envoi du formulaire "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("p", _hoisted_35, [_hoisted_36, $data.successMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("span", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($data.successMessage) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("a", {
    href: $options.siteUrl
  }, "Voir le site ", 8
  /* PROPS */
  , _hoisted_38)])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)("v-if", true)])])], 32
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-2dba54"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDdkIsQ0FGRCwwRUFHRSxDQUxKLENBTUksQ0FQTixFQWxIRjs7RUFBQSxDQTJISSxDQTVITixDQTZISSxDQWhJTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5TkNBQTdCLHVEQUFBQSxDQUFvQyxPQUFwQyxFQUFvQztJQUE3QkMsSUFBSSxFQUFDLE1BQXdCOzthQUFSSyxhQUFJTTs7RUFBSSxDQUFwQzs7RUFBQSxrREFBNEJOLGVBQzVCTix1REFBQUEsQ0FBNEQsUUFBNUQsRUFBNEQ7SUFBbkR5QixPQUFLO01BQUEsT0FBRWpCLHlFQUFGO0lBQUE7RUFBOEMsQ0FBNUQsRUFBOEIsdUJBQTlCLHVEQUNBUix1REFBQUEsQ0FBcUMsSUFBckMsRUFBcUMsSUFBckMsRUFBcUNLLG9EQUFBQSxDQUFiQyxXQUFhLENBQXJDLEVBQTZCO0VBQUE7RUFBN0IsR0FBNkIsNENBQWZBLFlBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ0gvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3RTtBQUNWO0FBQ0w7O0FBRXpELENBQXNIO0FBQ3RILGlDQUFpQywwSEFBZSxDQUFDLGdGQUFNLGFBQWEsa0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ3RDtBQUNWO0FBQ0w7O0FBRXhELENBQXNIO0FBQ3RILGlDQUFpQywwSEFBZSxDQUFDLCtFQUFNLGFBQWEsaUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCMkw7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0J1aWxkZXJGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRGVmYXVsdEFwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzlkNzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0J1aWxkZXJGb3JtLnZ1ZT83NGM5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9EZWZhdWx0QXBwLnZ1ZT8wZDRjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CdWlsZGVyRm9ybS52dWU/NmRhYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRGVmYXVsdEFwcC52dWU/MWU1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgXCIuL2pzL2Zvcm1zLmpzXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCBEZWZhdWx0QXBwIGZyb20gXCIuL2pzL0RlZmF1bHRBcHAudnVlXCI7XHJcbmltcG9ydCBCdWlsZGVyRm9ybSBmcm9tIFwiLi9qcy9CdWlsZGVyRm9ybS52dWVcIjtcclxuXHJcbmNyZWF0ZUFwcChEZWZhdWx0QXBwKS5tb3VudChcIiN2dWUtYXBwXCIpO1xyXG5jcmVhdGVBcHAoQnVpbGRlckZvcm0pLm1vdW50KFwiI3Z1ZS1idWlsZGVyLWZvcm1cIik7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGRQcm9kdWN0IFwiKTtcclxuYnV0dG9uLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIC8vRHVwbGljYXRlIGVhY2ggdGV4dCBpbnB1dCBmaWVsZCBpbnNpZGUgLnByb2R1Y3RGaWVsZHMgZXhjZXB0IHRoZSBidXR0b24gYW5kIGFwcGVuZCBpdCB0byAucHJvZHVjdEZpZWxkc1xyXG4gICAgY29uc3QgcHJvZHVjdEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdEZpZWxkc1wiKTtcclxuICAgIGNvbnN0IGNsb25lID0gcHJvZHVjdEZpZWxkcy5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2R1Y3RcIikucmVtb3ZlKCk7XHJcbiAgICBwcm9kdWN0RmllbGRzLmFmdGVyKGNsb25lKTtcclxuICB9KTtcclxufSk7XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBjb250YWluZXIgYXJ0aWNsZSBwLTMgbXktNlwiPlxyXG4gICAgPGgyPkZvcm11bGFpcmUgcG91ciBsZXMgaW5mb3JtYXRpb25zIGRlIHZvdHJlIHNpdGUgd2ViPC9oMj5cclxuICAgIDxwPnt7IG1vbk1lc3NhZ2UgfX08L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwidnVlLWZvcm0gbXktNFwiPlxyXG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJmb3JtU3VibWl0XCI+XHJcbiAgICAgICAgPCEtLSBkw6lidXQgaW5mb3MgZ8OpbsOpcmFsZXMgLS0+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJpbmZvcy1zaXRlXCI+XHJcbiAgICAgICAgICA8aDM+SW5mb3JtYXRpb25zIGfDqW7DqXJhbGVzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+Tm9tIGRlIHZvdHJlIFNpdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJub21TaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlIG5vbSBkZSB2b3RyZSBzaXRlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5Mb2dvIGR1IHNpdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImhhbmRsZUxvZ29VcGxvYWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwhLS0gZmluIGluZm9zIGfDqW7DqXJhbGVzIC0tPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb3MtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDM+QmFuZGVhdSBow6lyb3MgZXQgdGjDqG1lPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+UGV0aXRlIHByw6lzZW50YXRpb24gZGUgdm90cmUgc2l0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcmVzZW50YXRpb25TaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhZ2xpbmUgZGUgdm90cmUgc2l0ZSAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIENvbG9yIFBpY2tlciAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpcy1mbGV4IGNvbG9yUGlja2VyLWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3JQaWNrZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yUGlja2VyLWNvbG9yIGRhcmtCbHVlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGhlbWVDb2xvclwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInRoZW1lQ29sb3JzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiIzAwMDAwMCwjMTUwMDUwLCMzRjAwNzFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3JQaWNrZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yUGlja2VyLWNvbG9yIHBpbmtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aGVtZUNvbG9yXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidGhlbWVDb2xvcnNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIjRjA3REVBLCNBNDYwRUQsIzlGQzlGM1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPCEtLSBTZWN0aW9uIFByb2R1aXRzIC0tPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb3MtcHJvZHVpdHNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1ucyBpcy1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhY3RpdmF0ZWRcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWN0aXZhdGVkXCI+QWN0aXbDqTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5Qcm9kdWl0czwvaDM+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJwcm9kdWN0IGluIHByb2R1Y3RzXCIgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZHVjdC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbSBkdSBwcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9kdWN0LnByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaXggZHUgcHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIiBAY2xpY2s9XCJhZGRQcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgQWpvdXRlciB1biBwcm9kdWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVQcm9kdWN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1cHByaW1lciB1biBwcm9kdWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwhLS0gRmluIFNlY3Rpb24gUHJvZHVpdHMgLS0+XHJcblxyXG4gICAgICAgIDwhLS0gRW52b2kgZHUgZm9ybXVsYWlyZSAtLT5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMzBweFwiIGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzXCI+VmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwic3VjY2Vzc01lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgID57eyBzdWNjZXNzTWVzc2FnZSB9fSA8YSA6aHJlZj1cInNpdGVVcmxcIj5Wb2lyIGxlIHNpdGUgPC9hPjwvc3BhblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbW9uTWVzc2FnZTogXCJIZWxsbyBmcm9tIFZ1ZSAhXCIsXHJcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlOiBmYWxzZSxcclxuICAgICAgbm9tU2l0ZTogXCJcIixcclxuICAgICAgcHJlc2VudGF0aW9uU2l0ZTogXCJcIixcclxuICAgICAgc2l0ZUxvZ286IFwiXCIsXHJcbiAgICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJQcm9kdWl0IDFcIixcclxuICAgICAgICAgIHByaWNlOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB0aGVtZUNvbG9yczogXCJcIixcclxuICAgICAgdGhlbWVDb2xvcnNBcnJheTogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHNpdGVVcmwoKSB7XHJcbiAgICAgIHJldHVybiBcImJ1aWxkZXIvc2l0ZS9cIiArIHRoaXMubm9tU2l0ZTtcclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgdGhlbWVDb2xvcnM6IGZ1bmN0aW9uIChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICB0aGlzLnRoZW1lQ29sb3JzQXJyYXkgPSBuZXdWYWwuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAvL21ha2UgdGhlbWVDb2xvcnNBcnJheSBhIG5hbWVkIGFycmF5IHdpdGgga2V5cyBwcmltYXJ5LCBzZWNvbmRhcnksIHRlcnRpYXJ5XHJcbiAgICAgIHRoaXMudGhlbWVDb2xvcnNBcnJheSA9IHtcclxuICAgICAgICBwcmltYXJ5OiB0aGlzLnRoZW1lQ29sb3JzQXJyYXlbMF0sXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB0aGlzLnRoZW1lQ29sb3JzQXJyYXlbMV0sXHJcbiAgICAgICAgdGVydGlhcnk6IHRoaXMudGhlbWVDb2xvcnNBcnJheVsyXSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgLy9VdGlsaXNlciBhdmVjIEFKQVggdW5lIHJvdXRlIGNvbnRlbmFudCBlbiBKU09OICBsZXMgZG9ubsOpZXMgZHUgc2l0ZSBkZSBsYSBCREQgcG91ciBwcsOpcGV1cGxlciBsZSBmb3JtdWxhaXJlXHJcbiAgICBjb25zb2xlLmxvZyhcIlZ1ZWpzIG1vbnTDqVwiKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCIvYXBpL3NpdGVpbmZvXCIpXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycmV1ciA1MDAgc3VyIGxlIGdldFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucG9wdWxhdGVGaWVsZHNGcm9tQXBpKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFkZFByb2R1Y3QoKSB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBwcmljZTogMCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlUHJvZHVjdCgpIHtcclxuICAgICAgdGhpcy5wcm9kdWN0cy5wb3AoKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVMb2dvVXBsb2FkKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuc2l0ZUxvZ28gPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2l0ZUxvZ28pO1xyXG4gICAgfSxcclxuICAgIGZvcm1TdWJtaXQoKSB7XHJcbiAgICAgIHRoaXMuc2F2ZVRvRGIoKTtcclxuICAgIH0sXHJcbiAgICBwb3B1bGF0ZUZpZWxkc0Zyb21BcGkoZGF0YSkge1xyXG4gICAgICB0aGlzLm5vbVNpdGUgPSBkYXRhLm5vbVNpdGU7XHJcbiAgICAgIHRoaXMucHJlc2VudGF0aW9uU2l0ZSA9IGRhdGEuZGVzY3JpcHRpb25TaXRlO1xyXG4gICAgICB0aGlzLnByb2R1Y3RzID0gZGF0YS5wcm9kdWN0cyB8fCB0aGlzLnByb2R1Y3RzO1xyXG4gICAgfSxcclxuICAgIHNhdmVUb0RiKCkge1xyXG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgaWYgKHRoaXMuc2l0ZUxvZ28gIT0gbnVsbCkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNpdGVMb2dvXCIsIHRoaXMuc2l0ZUxvZ28pO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5vbV9zaXRlXCIsIHRoaXMubm9tU2l0ZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByZXNlbnRhdGlvblNpdGVcIiwgdGhpcy5wcmVzZW50YXRpb25TaXRlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0cykpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0aGVtZUNvbG9yc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRoZW1lQ29sb3JzQXJyYXkpKTtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChcIi9hcGkvanNmb3JtXCIsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IFwiRm9ybXVsYWlyZSBlbnZvecOpIGF2ZWMgc3VjY8Ooc1wiO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJuYW1lXCIgLz5cclxuICA8YnV0dG9uIEBjbGljaz1cInJlZnJlc2hIZWxsb1wiPkRlbWFuZGVyIHVuIGJvbmpvdXIgITwvYnV0dG9uPlxyXG4gIDxoMSB2LXNob3c9XCIhIWhlbGxvXCI+e3sgaGVsbG8gfX08L2gxPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBoZWxsbzogXCJcIixcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICByZWZyZXNoSGVsbG8oKSB7XHJcbiAgICAgIGlmICh0aGlzLm5hbWUpIHtcclxuICAgICAgICBmZXRjaChcIi9hcGkvaGVsbG93b3JkL1wiICsgdGhpcy5uYW1lLCB7IG1ldGhvZDogXCJHRVRcIiB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiAodGhpcy5oZWxsbyA9IHJlc3VsdCkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9CdWlsZGVyRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODc1ZGM3ZjJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdWlsZGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiRjpcXFxcd2FtcDY0XFxcXHd3d1xcXFxMQ0RaXFxcXE9uZVBhZ2VcXFxcb25lcGFnZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxkaXN0XFxcXGV4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL2pzL0J1aWxkZXJGb3JtLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI4NzVkYzdmMlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzg3NWRjN2YyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnODc1ZGM3ZjInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0J1aWxkZXJGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NzVkYzdmMlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc4NzVkYzdmMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRGVmYXVsdEFwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE2MzcyNzBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EZWZhdWx0QXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9EZWZhdWx0QXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkY6XFxcXHdhbXA2NFxcXFx3d3dcXFxcTENEWlxcXFxPbmVQYWdlXFxcXG9uZXBhZ2VcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9qcy9EZWZhdWx0QXBwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1MTYzNzI3MFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzUxNjM3MjcwJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNTE2MzcyNzAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RlZmF1bHRBcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxNjM3MjcwXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzUxNjM3MjcwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CdWlsZGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9CdWlsZGVyRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0RlZmF1bHRBcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRGVmYXVsdEFwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiY3JlYXRlQXBwIiwiRGVmYXVsdEFwcCIsIkJ1aWxkZXJGb3JtIiwibW91bnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcm9kdWN0RmllbGRzIiwicXVlcnlTZWxlY3RvciIsImNsb25lIiwiY2xvbmVOb2RlIiwicmVtb3ZlIiwiYWZ0ZXIiLCJheGlvcyIsImRhdGEiLCJtb25NZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJub21TaXRlIiwicHJlc2VudGF0aW9uU2l0ZSIsInNpdGVMb2dvIiwicHJvZHVjdHMiLCJuYW1lIiwicHJpY2UiLCJ0aGVtZUNvbG9ycyIsInRoZW1lQ29sb3JzQXJyYXkiLCJjb21wdXRlZCIsInNpdGVVcmwiLCJ3YXRjaCIsIm5ld1ZhbCIsIm9sZFZhbCIsInNwbGl0IiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwibW91bnRlZCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJlcnJvciIsInRoZW4iLCJyZXNwb25zZSIsInBvcHVsYXRlRmllbGRzRnJvbUFwaSIsIm1ldGhvZHMiLCJhZGRQcm9kdWN0IiwicHVzaCIsInJlbW92ZVByb2R1Y3QiLCJwb3AiLCJoYW5kbGVMb2dvVXBsb2FkIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImZvcm1TdWJtaXQiLCJzYXZlVG9EYiIsImRlc2NyaXB0aW9uU2l0ZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsImhlYWRlcnMiLCJoZWxsbyIsInJlZnJlc2hIZWxsbyIsImZldGNoIiwibWV0aG9kIiwianNvbiIsInJlc3VsdCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJ0eXBlIiwic3R5bGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMiIsIl90b0Rpc3BsYXlTdHJpbmciLCIkZGF0YSIsIm9uU3VibWl0IiwiJG9wdGlvbnMiLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzkiLCIkZXZlbnQiLCJwbGFjZWhvbGRlciIsIl9ob2lzdGVkXzEyIiwib25DaGFuZ2UiLCJfaG9pc3RlZF8xNSIsIl9ob2lzdGVkXzE5IiwiX2hvaXN0ZWRfMjMiLCJ2YWx1ZSIsIl9ob2lzdGVkXzI1IiwiX2hvaXN0ZWRfMjciLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsInByb2R1Y3QiLCJvbkNsaWNrIiwiX2hvaXN0ZWRfMzYiLCJfaG9pc3RlZF8zNyIsImhyZWYiLCJfaG9pc3RlZF8zOCJdLCJzb3VyY2VSb290IjoiIn0=