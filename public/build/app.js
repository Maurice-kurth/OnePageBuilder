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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDdkIsQ0FGRCwwRUFHRSxDQUxKLENBTUksQ0FQTixFQWxIRjs7RUFBQSxDQTJISSxDQTVITixDQTZISSxDQWhJTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5TkNBQTdCLHVEQUFBQSxDQUFvQyxPQUFwQyxFQUFvQztJQUE3QkMsSUFBSSxFQUFDLE1BQXdCOzthQUFSSyxhQUFJTTs7RUFBSSxDQUFwQzs7RUFBQSxrREFBNEJOLGVBQzVCTix1REFBQUEsQ0FBNEQsUUFBNUQsRUFBNEQ7SUFBbkR5QixPQUFLO01BQUEsT0FBRWpCLHlFQUFGO0lBQUE7RUFBOEMsQ0FBNUQsRUFBOEIsdUJBQTlCLHVEQUNBUix1REFBQUEsQ0FBcUMsSUFBckMsRUFBcUMsSUFBckMsRUFBcUNLLG9EQUFBQSxDQUFiQyxXQUFhLENBQXJDLEVBQTZCO0VBQUE7RUFBN0IsR0FBNkIsNENBQWZBLFlBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ0gvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3RTtBQUNWO0FBQ0w7O0FBRXpELENBQXNIO0FBQ3RILGlDQUFpQywwSEFBZSxDQUFDLGdGQUFNLGFBQWEsa0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ3RDtBQUNWO0FBQ0w7O0FBRXhELENBQXNIO0FBQ3RILGlDQUFpQywwSEFBZSxDQUFDLCtFQUFNLGFBQWEsaUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCMkw7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0J1aWxkZXJGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRGVmYXVsdEFwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CdWlsZGVyRm9ybS52dWU/NzRjOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRGVmYXVsdEFwcC52dWU/MGQ0YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQnVpbGRlckZvcm0udnVlPzZkYWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0RlZmF1bHRBcHAudnVlPzFlNTQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgXCIuL2Jvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IFwiLi9qcy9mb3Jtcy5qc1wiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgRGVmYXVsdEFwcCBmcm9tIFwiLi9qcy9EZWZhdWx0QXBwLnZ1ZVwiO1xyXG5pbXBvcnQgQnVpbGRlckZvcm0gZnJvbSBcIi4vanMvQnVpbGRlckZvcm0udnVlXCI7XHJcblxyXG5jcmVhdGVBcHAoRGVmYXVsdEFwcCkubW91bnQoXCIjdnVlLWFwcFwiKTtcclxuY3JlYXRlQXBwKEJ1aWxkZXJGb3JtKS5tb3VudChcIiN2dWUtYnVpbGRlci1mb3JtXCIpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkUHJvZHVjdCBcIik7XHJcbmJ1dHRvbi5mb3JFYWNoKChidG4pID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvL0R1cGxpY2F0ZSBlYWNoIHRleHQgaW5wdXQgZmllbGQgaW5zaWRlIC5wcm9kdWN0RmllbGRzIGV4Y2VwdCB0aGUgYnV0dG9uIGFuZCBhcHBlbmQgaXQgdG8gLnByb2R1Y3RGaWVsZHNcclxuICAgIGNvbnN0IHByb2R1Y3RGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RGaWVsZHNcIik7XHJcbiAgICBjb25zdCBjbG9uZSA9IHByb2R1Y3RGaWVsZHMuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY2xvbmUucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9kdWN0XCIpLnJlbW92ZSgpO1xyXG4gICAgcHJvZHVjdEZpZWxkcy5hZnRlcihjbG9uZSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgY29udGFpbmVyIGFydGljbGUgcC0zIG15LTZcIj5cclxuICAgIDxoMj5Gb3JtdWxhaXJlIHBvdXIgbGVzIGluZm9ybWF0aW9ucyBkZSB2b3RyZSBzaXRlIHdlYjwvaDI+XHJcbiAgICA8cD57eyBtb25NZXNzYWdlIH19PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cInZ1ZS1mb3JtIG15LTRcIj5cclxuICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwiZm9ybVN1Ym1pdFwiPlxyXG4gICAgICAgIDwhLS0gZMOpYnV0IGluZm9zIGfDqW7DqXJhbGVzIC0tPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb3Mtc2l0ZVwiPlxyXG4gICAgICAgICAgPGgzPkluZm9ybWF0aW9ucyBnw6luw6lyYWxlczwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk5vbSBkZSB2b3RyZSBTaXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibm9tU2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZSBub20gZGUgdm90cmUgc2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+TG9nbyBkdSBzaXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJoYW5kbGVMb2dvVXBsb2FkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8IS0tIGZpbiBpbmZvcyBnw6luw6lyYWxlcyAtLT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImluZm9zLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgzPkJhbmRlYXUgaMOpcm9zIGV0IHRow6htZTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlBldGl0ZSBwcsOpc2VudGF0aW9uIGRlIHZvdHJlIHNpdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJlc2VudGF0aW9uU2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUYWdsaW5lIGRlIHZvdHJlIHNpdGUgLi4uXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSBDb2xvciBQaWNrZXIgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXMtZmxleCBjb2xvclBpY2tlci1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yUGlja2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvclBpY2tlci1jb2xvciBkYXJrQmx1ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInRoZW1lQ29sb3JcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0aGVtZUNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIiMwMDAwMDAsIzE1MDA1MCwjM0YwMDcxXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yUGlja2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvclBpY2tlci1jb2xvciBwaW5rXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGhlbWVDb2xvclwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInRoZW1lQ29sb3JzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiI0YwN0RFQSwjQTQ2MEVELCM5RkM5RjNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwhLS0gU2VjdGlvbiBQcm9kdWl0cyAtLT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImluZm9zLXByb2R1aXRzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbnMgaXMtYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYWN0aXZhdGVkXCIgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFjdGl2YXRlZFwiPkFjdGl2w6k8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aDM+UHJvZHVpdHM8L2gzPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwicHJvZHVjdCBpbiBwcm9kdWN0c1wiIGNsYXNzPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb2R1Y3QubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb20gZHUgcHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZHVjdC5wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcml4IGR1IHByb2R1aXRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzXCIgQGNsaWNrPVwiYWRkUHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgIEFqb3V0ZXIgdW4gcHJvZHVpdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlUHJvZHVjdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdXBwcmltZXIgdW4gcHJvZHVpdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8IS0tIEZpbiBTZWN0aW9uIFByb2R1aXRzIC0tPlxyXG5cclxuICAgICAgICA8IS0tIEVudm9pIGR1IGZvcm11bGFpcmUgLS0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDMwcHhcIiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gaXMtc3VjY2Vzc1wiPlZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInN1Y2Nlc3NNZXNzYWdlXCJcclxuICAgICAgICAgICAgICA+e3sgc3VjY2Vzc01lc3NhZ2UgfX0gPGEgOmhyZWY9XCJzaXRlVXJsXCI+Vm9pciBsZSBzaXRlIDwvYT48L3NwYW5cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbk1lc3NhZ2U6IFwiSGVsbG8gZnJvbSBWdWUgIVwiLFxyXG4gICAgICBzdWNjZXNzTWVzc2FnZTogZmFsc2UsXHJcbiAgICAgIG5vbVNpdGU6IFwiXCIsXHJcbiAgICAgIHByZXNlbnRhdGlvblNpdGU6IFwiXCIsXHJcbiAgICAgIHNpdGVMb2dvOiBcIlwiLFxyXG4gICAgICBwcm9kdWN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiUHJvZHVpdCAxXCIsXHJcbiAgICAgICAgICBwcmljZTogMTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgdGhlbWVDb2xvcnM6IFwiXCIsXHJcbiAgICAgIHRoZW1lQ29sb3JzQXJyYXk6IFtdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBzaXRlVXJsKCkge1xyXG4gICAgICByZXR1cm4gXCJidWlsZGVyL3NpdGUvXCIgKyB0aGlzLm5vbVNpdGU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHRoZW1lQ29sb3JzOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgdGhpcy50aGVtZUNvbG9yc0FycmF5ID0gbmV3VmFsLnNwbGl0KFwiLFwiKTtcclxuICAgICAgLy9tYWtlIHRoZW1lQ29sb3JzQXJyYXkgYSBuYW1lZCBhcnJheSB3aXRoIGtleXMgcHJpbWFyeSwgc2Vjb25kYXJ5LCB0ZXJ0aWFyeVxyXG4gICAgICB0aGlzLnRoZW1lQ29sb3JzQXJyYXkgPSB7XHJcbiAgICAgICAgcHJpbWFyeTogdGhpcy50aGVtZUNvbG9yc0FycmF5WzBdLFxyXG4gICAgICAgIHNlY29uZGFyeTogdGhpcy50aGVtZUNvbG9yc0FycmF5WzFdLFxyXG4gICAgICAgIHRlcnRpYXJ5OiB0aGlzLnRoZW1lQ29sb3JzQXJyYXlbMl0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIC8vVXRpbGlzZXIgYXZlYyBBSkFYIHVuZSByb3V0ZSBjb250ZW5hbnQgZW4gSlNPTiAgbGVzIGRvbm7DqWVzIGR1IHNpdGUgZGUgbGEgQkREIHBvdXIgcHLDqXBldXBsZXIgbGUgZm9ybXVsYWlyZVxyXG4gICAgY29uc29sZS5sb2coXCJWdWVqcyBtb250w6lcIik7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiL2FwaS9zaXRlaW5mb1wiKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJldXIgNTAwIHN1ciBsZSBnZXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGRzRnJvbUFwaShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhZGRQcm9kdWN0KCkge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZVByb2R1Y3QoKSB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMucG9wKCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlTG9nb1VwbG9hZChldmVudCkge1xyXG4gICAgICB0aGlzLnNpdGVMb2dvID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNpdGVMb2dvKTtcclxuICAgIH0sXHJcbiAgICBmb3JtU3VibWl0KCkge1xyXG4gICAgICB0aGlzLnNhdmVUb0RiKCk7XHJcbiAgICB9LFxyXG4gICAgcG9wdWxhdGVGaWVsZHNGcm9tQXBpKGRhdGEpIHtcclxuICAgICAgdGhpcy5ub21TaXRlID0gZGF0YS5ub21TaXRlO1xyXG4gICAgICB0aGlzLnByZXNlbnRhdGlvblNpdGUgPSBkYXRhLmRlc2NyaXB0aW9uU2l0ZTtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IGRhdGEucHJvZHVjdHMgfHwgdGhpcy5wcm9kdWN0cztcclxuICAgIH0sXHJcbiAgICBzYXZlVG9EYigpIHtcclxuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGlmICh0aGlzLnNpdGVMb2dvICE9IG51bGwpIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzaXRlTG9nb1wiLCB0aGlzLnNpdGVMb2dvKTtcclxuICAgICAgfVxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJub21fc2l0ZVwiLCB0aGlzLm5vbVNpdGUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcmVzZW50YXRpb25TaXRlXCIsIHRoaXMucHJlc2VudGF0aW9uU2l0ZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHMpKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidGhlbWVDb2xvcnNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50aGVtZUNvbG9yc0FycmF5KSk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYXBpL2pzZm9ybVwiLCBmb3JtRGF0YSwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIkZvcm11bGFpcmUgZW52b3nDqSBhdmVjIHN1Y2PDqHNcIjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibmFtZVwiIC8+XHJcbiAgPGJ1dHRvbiBAY2xpY2s9XCJyZWZyZXNoSGVsbG9cIj5EZW1hbmRlciB1biBib25qb3VyICE8L2J1dHRvbj5cclxuICA8aDEgdi1zaG93PVwiISFoZWxsb1wiPnt7IGhlbGxvIH19PC9oMT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgaGVsbG86IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcmVmcmVzaEhlbGxvKCkge1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7XHJcbiAgICAgICAgZmV0Y2goXCIvYXBpL2hlbGxvd29yZC9cIiArIHRoaXMubmFtZSwgeyBtZXRob2Q6IFwiR0VUXCIgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gKHRoaXMuaGVsbG8gPSByZXN1bHQpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg3NWRjN2YyXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0J1aWxkZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkY6XFxcXHdhbXA2NFxcXFx3d3dcXFxcTENEWlxcXFxPbmVQYWdlXFxcXG9uZXBhZ2VcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9qcy9CdWlsZGVyRm9ybS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiODc1ZGM3ZjJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc4NzVkYzdmMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzg3NWRjN2YyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CdWlsZGVyRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODc1ZGM3ZjJcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignODc1ZGM3ZjInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0RlZmF1bHRBcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxNjM3MjcwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGVmYXVsdEFwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGVmYXVsdEFwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJGOlxcXFx3YW1wNjRcXFxcd3d3XFxcXExDRFpcXFxcT25lUGFnZVxcXFxvbmVwYWdlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvanMvRGVmYXVsdEFwcC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNTE2MzcyNzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1MTYzNzI3MCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzUxNjM3MjcwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EZWZhdWx0QXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTYzNzI3MFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1MTYzNzI3MCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9EZWZhdWx0QXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0RlZmF1bHRBcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUFwcCIsIkRlZmF1bHRBcHAiLCJCdWlsZGVyRm9ybSIsIm1vdW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJvZHVjdEZpZWxkcyIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZSIsImNsb25lTm9kZSIsInJlbW92ZSIsImFmdGVyIiwiYXhpb3MiLCJkYXRhIiwibW9uTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwibm9tU2l0ZSIsInByZXNlbnRhdGlvblNpdGUiLCJzaXRlTG9nbyIsInByb2R1Y3RzIiwibmFtZSIsInByaWNlIiwidGhlbWVDb2xvcnMiLCJ0aGVtZUNvbG9yc0FycmF5IiwiY29tcHV0ZWQiLCJzaXRlVXJsIiwid2F0Y2giLCJuZXdWYWwiLCJvbGRWYWwiLCJzcGxpdCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsIm1vdW50ZWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiZXJyb3IiLCJ0aGVuIiwicmVzcG9uc2UiLCJwb3B1bGF0ZUZpZWxkc0Zyb21BcGkiLCJtZXRob2RzIiwiYWRkUHJvZHVjdCIsInB1c2giLCJyZW1vdmVQcm9kdWN0IiwicG9wIiwiaGFuZGxlTG9nb1VwbG9hZCIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JtU3VibWl0Iiwic2F2ZVRvRGIiLCJkZXNjcmlwdGlvblNpdGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3QiLCJoZWFkZXJzIiwiaGVsbG8iLCJyZWZyZXNoSGVsbG8iLCJmZXRjaCIsIm1ldGhvZCIsImpzb24iLCJyZXN1bHQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwidHlwZSIsInN0eWxlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzIiLCJfdG9EaXNwbGF5U3RyaW5nIiwiJGRhdGEiLCJvblN1Ym1pdCIsIiRvcHRpb25zIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF85IiwiJGV2ZW50IiwicGxhY2Vob2xkZXIiLCJfaG9pc3RlZF8xMiIsIm9uQ2hhbmdlIiwiX2hvaXN0ZWRfMTUiLCJfaG9pc3RlZF8xOSIsIl9ob2lzdGVkXzIzIiwidmFsdWUiLCJfaG9pc3RlZF8yNSIsIl9ob2lzdGVkXzI3IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJwcm9kdWN0Iiwib25DbGljayIsIl9ob2lzdGVkXzM2IiwiX2hvaXN0ZWRfMzciLCJocmVmIiwiX2hvaXN0ZWRfMzgiXSwic291cmNlUm9vdCI6IiJ9