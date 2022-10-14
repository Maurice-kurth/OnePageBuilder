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

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("p", {
  "class": "control"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("button", {
  type: "submit",
  "class": "button is-info"
}, "Valider")], -1
/* HOISTED */
);

var _hoisted_36 = {
  key: 0
};
var _hoisted_37 = ["href"];
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
    "class": "button is-info mr-4",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.addProduct && $options.addProduct.apply($options, arguments);
    })
  }, " Ajouter un produit "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("button", {
    type: "button",
    "class": "button is-danger",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.removeProduct && $options.removeProduct.apply($options, arguments);
    })
  }, " Supprimer un produit ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Fin Section Produits "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(" Envoi du formulaire "), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", _hoisted_34, [_hoisted_35, $data.successMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($data.successMessage), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("a", {
    "class": "button is-success",
    href: $options.siteUrl
  }, "Voir le site ", 8
  /* PROPS */
  , _hoisted_37)])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)("v-if", true)])], 32
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0REO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7V0FFSSxtQkFBVTtNQUNOLEtBQUtDLE9BQUwsQ0FBYUMsV0FBYixHQUEyQixtRUFBM0I7SUFDSDs7OztFQUh3QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQUcsOENBQVMsQ0FBQ0MsMERBQUQsQ0FBVCxDQUFzQkUsS0FBdEIsQ0FBNEIsVUFBNUI7QUFDQUgsOENBQVMsQ0FBQ0UsMkRBQUQsQ0FBVCxDQUF1QkMsS0FBdkIsQ0FBNkIsbUJBQTdCOzs7Ozs7Ozs7Ozs7Ozs7O0NDbEJBOztBQUNPLElBQU1FLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNFLHlJQUFELENBQTVCLEVBTVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLElBQU1FLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixjQUExQixDQUFmO0FBQ0FGLE1BQU0sQ0FBQ0csT0FBUCxDQUFlLFVBQUNDLEdBQUQsRUFBUztFQUN0QkEsR0FBRyxDQUFDQyxnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFDQyxDQUFELEVBQU87SUFDbkM7SUFDQSxJQUFNQyxhQUFhLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixnQkFBdkIsQ0FBdEI7SUFDQSxJQUFNQyxLQUFLLEdBQUdGLGFBQWEsQ0FBQ0csU0FBZCxDQUF3QixJQUF4QixDQUFkO0lBQ0FELEtBQUssQ0FBQ0QsYUFBTixDQUFvQixhQUFwQixFQUFtQ0csTUFBbkM7SUFDQUosYUFBYSxDQUFDSyxLQUFkLENBQW9CSCxLQUFwQjtFQUNELENBTkQ7QUFPRCxDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzBJQTtBQUNBLGlFQUFlO0VBQ2JLLElBRGEsa0JBQ047SUFDTCxPQUFPO01BQ0xDLFVBQVUsRUFBRSxrQkFEUDtNQUVMQyxjQUFjLEVBQUUsS0FGWDtNQUdMQyxPQUFPLEVBQUUsRUFISjtNQUlMQyxnQkFBZ0IsRUFBRSxFQUpiO01BS0xDLFFBQVEsRUFBRSxFQUxMO01BTUxDLFFBQVEsRUFBRSxDQUNSO1FBQ0VDLElBQUksRUFBRSxXQURSO1FBRUVDLEtBQUssRUFBRTtNQUZULENBRFEsQ0FOTDtNQVlMQyxXQUFXLEVBQUUsRUFaUjtNQWFMQyxnQkFBZ0IsRUFBRTtJQWJiLENBQVA7RUFlRCxDQWpCWTtFQWtCYkMsUUFBUSxFQUFFO0lBQ1JDLE9BRFEscUJBQ0U7TUFDUixPQUFPLGtCQUFrQixLQUFLVCxPQUE5QjtJQUNEO0VBSE8sQ0FsQkc7RUF1QmJVLEtBQUssRUFBRTtJQUNMSixXQUFXLEVBQUUscUJBQVVLLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCO01BQ3JDLEtBQUtMLGdCQUFMLEdBQXdCSSxNQUFNLENBQUNFLEtBQVAsQ0FBYSxHQUFiLENBQXhCLENBRHFDLENBRXJDOztNQUNBLEtBQUtOLGdCQUFMLEdBQXdCO1FBQ3RCTyxPQUFPLEVBQUUsS0FBS1AsZ0JBQUwsQ0FBc0IsQ0FBdEIsQ0FEYTtRQUV0QlEsU0FBUyxFQUFFLEtBQUtSLGdCQUFMLENBQXNCLENBQXRCLENBRlc7UUFHdEJTLFFBQVEsRUFBRSxLQUFLVCxnQkFBTCxDQUFzQixDQUF0QjtNQUhZLENBQXhCO0lBS0Q7RUFUSSxDQXZCTTtFQWtDYlUsT0FsQ2EscUJBa0NIO0lBQUE7O0lBQ1I7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtJQUNBdkIsZ0RBQUEsQ0FDTyxlQURQLFdBRVMsVUFBQ3lCLEtBQUQsRUFBVztNQUNoQkgsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7SUFDRCxDQUpILEVBS0dHLElBTEgsQ0FLUSxVQUFDQyxRQUFELEVBQWM7TUFDbEJMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxRQUFaOztNQUNBLEtBQUksQ0FBQ0MscUJBQUwsQ0FBMkJELFFBQVEsQ0FBQzFCLElBQXBDO0lBQ0QsQ0FSSDtFQVNELENBOUNZO0VBK0NiNEIsT0FBTyxFQUFFO0lBQ1BDLFVBRE8sd0JBQ007TUFDWCxLQUFLdkIsUUFBTCxDQUFjd0IsSUFBZCxDQUFtQjtRQUNqQnZCLElBQUksRUFBRSxFQURXO1FBRWpCQyxLQUFLLEVBQUU7TUFGVSxDQUFuQjtJQUlELENBTk07SUFPUHVCLGFBUE8sMkJBT1M7TUFDZCxLQUFLekIsUUFBTCxDQUFjMEIsR0FBZDtJQUNELENBVE07SUFVUEMsZ0JBVk8sNEJBVVVDLEtBVlYsRUFVaUI7TUFDdEIsS0FBSzdCLFFBQUwsR0FBZ0I2QixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFoQjtNQUNBZixPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLakIsUUFBakI7SUFDRCxDQWJNO0lBY1BnQyxVQWRPLHdCQWNNO01BQ1gsS0FBS0MsUUFBTDtJQUNELENBaEJNO0lBaUJQWCxxQkFqQk8saUNBaUJlM0IsSUFqQmYsRUFpQnFCO01BQzFCLEtBQUtHLE9BQUwsR0FBZUgsSUFBSSxDQUFDRyxPQUFwQjtNQUNBLEtBQUtDLGdCQUFMLEdBQXdCSixJQUFJLENBQUN1QyxlQUE3QjtNQUNBLEtBQUtqQyxRQUFMLEdBQWdCTixJQUFJLENBQUNNLFFBQUwsSUFBaUIsS0FBS0EsUUFBdEM7SUFDRCxDQXJCTTtJQXNCUGdDLFFBdEJPLHNCQXNCSTtNQUFBOztNQUNULElBQUlFLFFBQU8sR0FBSSxJQUFJQyxRQUFKLEVBQWY7O01BQ0EsSUFBSSxLQUFLcEMsUUFBTCxJQUFpQixJQUFyQixFQUEyQjtRQUN6Qm1DLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFoQixFQUE0QixLQUFLckMsUUFBakM7TUFDRjs7TUFDQW1DLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFoQixFQUE0QixLQUFLdkMsT0FBakM7TUFDQXFDLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixrQkFBaEIsRUFBb0MsS0FBS3RDLGdCQUF6QztNQUNBb0MsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQWhCLEVBQTRCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLdEMsUUFBcEIsQ0FBNUI7TUFDQWtDLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixhQUFoQixFQUErQkMsSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBS2xDLGdCQUFwQixDQUEvQjtNQUNBWCxpREFBQSxDQUNRLGFBRFIsRUFDdUJ5QyxRQUR2QixFQUNpQztRQUM3Qk0sT0FBTyxFQUFFO1VBQ1AsZ0JBQWdCO1FBRFQ7TUFEb0IsQ0FEakMsRUFNR3JCLElBTkgsQ0FNUSxVQUFDQyxRQUFELEVBQWM7UUFDbEIsTUFBSSxDQUFDeEIsY0FBTCxHQUFzQiwrQkFBdEI7UUFDQW1CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0IsUUFBWjtNQUNELENBVEgsV0FVUyxVQUFDaEIsS0FBRCxFQUFXO1FBQ2hCSCxPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLFFBQVo7TUFDRCxDQVpIO0lBYUQ7RUE1Q007QUEvQ0ksQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklBLGlFQUFlO0VBQ2J4QyxJQURhLGtCQUNOO0lBQ0wsT0FBTztNQUNMTyxJQUFJLEVBQUUsRUFERDtNQUVMd0MsS0FBSyxFQUFFO0lBRkYsQ0FBUDtFQUlELENBTlk7RUFPYm5CLE9BQU8sRUFBRTtJQUNQb0IsWUFETywwQkFDUTtNQUFBOztNQUNiLElBQUksS0FBS3pDLElBQVQsRUFBZTtRQUNiMEMsS0FBSyxDQUFDLG9CQUFvQixLQUFLMUMsSUFBMUIsRUFBZ0M7VUFBRTJDLE1BQU0sRUFBRTtRQUFWLENBQWhDLENBQUwsQ0FDR3pCLElBREgsQ0FDUSxVQUFDQyxRQUFEO1VBQUEsT0FBY0EsUUFBUSxDQUFDeUIsSUFBVCxFQUFkO1FBQUEsQ0FEUixFQUVHMUIsSUFGSCxDQUVRLFVBQUMyQixNQUFEO1VBQUEsT0FBYSxLQUFJLENBQUNMLEtBQUwsR0FBYUssTUFBMUI7UUFBQSxDQUZSO01BR0Y7SUFDRDtFQVBNO0FBUEksQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VETk8sU0FBTTs7OzhCQUNUQyx1REFBQUEsQ0FBMkQsSUFBM0QsRUFBMkQsSUFBM0QsRUFBSSxvREFBSixFQUFzRDtBQUFBO0FBQXREOzs7RUFFSyxTQUFNOzs7RUFHRSxTQUFNOzs7OEJBQ2JBLHVEQUFBQSxDQUErQixJQUEvQixFQUErQixJQUEvQixFQUFJLHdCQUFKLEVBQTBCO0FBQUE7QUFBMUI7OztFQUNLLFNBQU07OztFQUNKLFNBQU07OztFQUNKLFNBQU07Ozs4QkFDVEEsdURBQUFBLENBQThDLE9BQTlDLEVBQThDO0VBQXZDLFNBQU07QUFBaUMsQ0FBOUMsRUFBcUIsbUJBQXJCLEVBQXNDO0FBQUE7QUFBdEM7OztFQUNLLFNBQU07OztFQVNSLFNBQU07OzsrQkFDVEEsdURBQUFBLENBQXlDLE9BQXpDLEVBQXlDO0VBQWxDLFNBQU07QUFBNEIsQ0FBekMsRUFBcUIsY0FBckIsRUFBaUM7QUFBQTtBQUFqQzs7O0VBQ0ssU0FBTTs7O0VBWVYsU0FBTTs7OytCQUNiQSx1REFBQUEsQ0FBK0IsSUFBL0IsRUFBK0IsSUFBL0IsRUFBSSx3QkFBSixFQUEwQjtBQUFBO0FBQTFCOzs7RUFDSyxTQUFNOzs7RUFDSixTQUFNOzs7RUFDSixTQUFNOzs7K0JBQ1RBLHVEQUFBQSxDQUE4RCxPQUE5RCxFQUE4RDtFQUF2RCxTQUFNO0FBQWlELENBQTlELEVBQXFCLG1DQUFyQixFQUFzRDtBQUFBO0FBQXREOzs7RUFDSyxTQUFNOzs7RUFZWixTQUFNOzs7RUFDSixTQUFNOzs7K0JBQ1RBLHVEQUFBQSxDQUE4QyxLQUE5QyxFQUE4QztFQUF6QyxTQUFNO0FBQW1DLENBQTlDLEVBQXVDLElBQXZDLEVBQXVDO0FBQUE7QUFBdkM7OztFQVFHLFNBQU07OzsrQkFDVEEsdURBQUFBLENBQTBDLEtBQTFDLEVBQTBDO0VBQXJDLFNBQU07QUFBK0IsQ0FBMUMsRUFBbUMsSUFBbkMsRUFBbUM7QUFBQTtBQUFuQzs7O0VBV0csU0FBTTs7OytCQUNiQSx1REFBQUEsQ0FJTyxNQUpQLEVBSU87RUFKRCxTQUFNO0FBSUwsQ0FKUCxFQUEyQyxjQUN6Q0EsdURBQUFBLENBQTBDLE9BQTFDLEVBQTBDO0VBQW5DQyxJQUFJLEVBQUMsVUFBOEI7RUFBbkIvQyxJQUFJLEVBQUM7QUFBYyxDQUExQyxDQUR5QyxlQUV6QzhDLHVEQUFBQSxDQUFxQyxPQUFyQyxFQUFxQztFQUE5QixPQUFJO0FBQTBCLENBQXJDLEVBQXVCLFFBQXZCLENBRnlDLGVBR3pDQSx1REFBQUEsQ0FBaUIsSUFBakIsRUFBaUIsSUFBakIsRUFBSSxVQUFKLENBSHlDLENBQTNDOztBQUFBOzs7RUFNSyxTQUFNOzs7RUFDd0IsU0FBTTs7O0VBQ2hDLFNBQU07OztFQUNKLFNBQU07Ozs7O0VBcUNkRSxLQUF3QixFQUF4QjtJQUFBO0VBQUE7RUFBeUIsU0FBTTs7OytCQUNsQ0YsdURBQUFBLENBRUksR0FGSixFQUVJO0VBRkQsU0FBTTtBQUVMLENBRkosRUFBa0IsY0FDaEJBLHVEQUFBQSxDQUE2RCxRQUE3RCxFQUE2RDtFQUFyREMsSUFBSSxFQUFDLFFBQWdEO0VBQXZDLFNBQU07QUFBaUMsQ0FBN0QsRUFBNkMsU0FBN0MsQ0FEZ0IsQ0FBbEI7O0FBQUE7Ozs7Ozs7MkRBM0hSRSx1REFBQUEsQ0F1SU0sS0F2SU4sY0F1SU0sQ0F0SUpDLFVBc0lJLEVBcklKSix1REFBQUEsQ0FBdUIsR0FBdkIsRUFBdUIsSUFBdkIsRUFBdUJLLG9EQUFBQSxDQUFqQkMsZ0JBQWlCLENBQXZCLEVBQWdCO0VBQUE7RUFBaEIsQ0FxSUksRUFwSUpOLHVEQUFBQSxDQW1JTSxLQW5JTixjQW1JTSxDQWxJSkEsdURBQUFBLENBaUlPLE1BaklQLEVBaUlPO0lBaklBTyxRQUFNO01BQUEsT0FBVUMscUVBQVY7SUFBQSxHQUFvQixXQUFwQjtFQWlJTixDQWpJUCxHQUNFQyx1REFBQUEsNkJBQ0FULHVEQUFBQSxDQTJCVSxTQTNCVixjQTJCVSxDQTFCUlUsVUEwQlEsRUF6QlJWLHVEQUFBQSxDQXdCTSxLQXhCTixjQXdCTSxDQXZCSkEsdURBQUFBLENBc0JNLEtBdEJOLGNBc0JNLENBckJKQSx1REFBQUEsQ0FVTSxLQVZOLGNBVU0sQ0FUSlcsVUFTSSxFQVJKWCx1REFBQUEsQ0FPTSxLQVBOLGVBT00scURBTkpBLHVEQUFBQSxDQUtFLE9BTEYsRUFLRTtJQUpBLFNBQU0sT0FJTjtJQUhBQyxJQUFJLEVBQUMsTUFHTDs7YUFGU0ssZ0JBQU9NO01BRWhCO0lBREFDLFdBQVcsRUFBQztFQUNaLENBTEY7O0VBQUEsa0RBR1dQLGdCQUdQLENBUE4sQ0FRSSxDQVZOLENBcUJJLEVBVkpOLHVEQUFBQSxDQVNNLEtBVE4sZUFTTSxDQVJKYyxXQVFJLEVBUEpkLHVEQUFBQSxDQU1NLEtBTk4sZUFNTSxDQUxKQSx1REFBQUEsQ0FJRSxPQUpGLEVBSUU7SUFIQSxTQUFNLE9BR047SUFGQ2UsUUFBTTtNQUFBLE9BQUVQLDBCQUFpQkksTUFBakIsQ0FBRjtJQUFBLEVBRVA7SUFEQVgsSUFBSSxFQUFDO0VBQ0wsQ0FKRjs7RUFBQSxDQUtJLENBTk4sQ0FPSSxDQVROLENBVUksQ0F0Qk4sQ0F1QkksQ0F4Qk4sQ0F5QlEsQ0EzQlYsR0E0QkFRLHVEQUFBQSwyQkFDQVQsdURBQUFBLENBc0NVLFNBdENWLGVBc0NVLENBckNSZ0IsV0FxQ1EsRUFwQ1JoQix1REFBQUEsQ0FjTSxLQWROLGVBY00sQ0FiSkEsdURBQUFBLENBWU0sS0FaTixlQVlNLENBWEpBLHVEQUFBQSxDQVVNLEtBVk4sZUFVTSxDQVRKaUIsV0FTSSxFQVJKakIsdURBQUFBLENBT00sS0FQTixlQU9NLHFEQU5KQSx1REFBQUEsQ0FLRSxPQUxGLEVBS0U7SUFKQSxTQUFNLFVBSU47SUFIQUMsSUFBSSxFQUFDLFVBR0w7O2FBRlNLLHlCQUFnQk07TUFFekI7SUFEQUMsV0FBVyxFQUFDO0VBQ1osQ0FMRjs7RUFBQSxrREFHV1AseUJBR1AsQ0FQTixDQVFJLENBVk4sQ0FXSSxDQVpOLENBYUksQ0FkTixDQW9DUSxFQXJCUkcsdURBQUFBLGtCQXFCUSxFQXBCUlQsdURBQUFBLENBbUJNLEtBbkJOLGVBbUJNLENBbEJKQSx1REFBQUEsQ0FRTSxLQVJOLGVBUU0sQ0FQSmtCLFdBT0ksc0RBTkpsQix1REFBQUEsQ0FLRSxPQUxGLEVBS0U7SUFKQTlDLElBQUksRUFBQyxZQUlMO0lBSEErQyxJQUFJLEVBQUMsT0FHTDs7YUFGU0ssb0JBQVdNO01BRXBCO0lBREFPLEtBQUssRUFBQztFQUNOLENBTEY7O0VBQUEsbURBR1diLG9CQUdQLENBUk4sQ0FrQkksRUFUSk4sdURBQUFBLENBUU0sS0FSTixlQVFNLENBUEpvQixXQU9JLHNEQU5KcEIsdURBQUFBLENBS0UsT0FMRixFQUtFO0lBSkE5QyxJQUFJLEVBQUMsWUFJTDtJQUhBK0MsSUFBSSxFQUFDLE9BR0w7O2FBRlNLLG9CQUFXTTtNQUVwQjtJQURBTyxLQUFLLEVBQUM7RUFDTixDQUxGOztFQUFBLG1EQUdXYixvQkFHUCxDQVJOLENBU0ksQ0FuQk4sQ0FvQlEsQ0F0Q1YsR0F1Q0FHLHVEQUFBQSx3QkFDQVQsdURBQUFBLENBMkNVLFNBM0NWLGVBMkNVLENBMUNScUIsV0EwQ1EsRUFwQ1JyQix1REFBQUEsQ0FtQk0sS0FuQk4sZUFtQk0sd0RBbEJKRyx1REFBQUEsQ0FpQk1tQix5Q0FqQk4sRUFpQk0sSUFqQk4sRUFpQk1DLCtDQUFBQSxDQWpCaUJqQixjQWlCakIsRUFqQnlCLFVBQW5Ca0IsT0FBbUIsRUFBWjs2REFBbkJyQix1REFBQUEsQ0FpQk0sS0FqQk4sZUFpQk0sQ0FoQkpILHVEQUFBQSxDQWVNLEtBZk4sZUFlTSxDQWRKQSx1REFBQUEsQ0FhTSxLQWJOLGVBYU0scURBWkpBLHVEQUFBQSxDQUtFLE9BTEYsRUFLRTtNQUpBLFNBQU0sT0FJTjtNQUhBQyxJQUFJLEVBQUMsTUFHTDs7ZUFGU3VCLE9BQU8sQ0FBQ3RFLE9BQUkwRDtPQUVyQjtNQURBQyxXQUFXLEVBQUM7SUFDWixDQUxGOztJQUFBLCtEQUdXVyxPQUFPLENBQUN0RSxPQVNmLHNEQU5KOEMsdURBQUFBLENBS0UsT0FMRixFQUtFO01BSkEsU0FBTSxPQUlOO01BSEFDLElBQUksRUFBQyxNQUdMOztlQUZTdUIsT0FBTyxDQUFDckUsUUFBS3lEO09BRXRCO01BREFDLFdBQVcsRUFBQztJQUNaLENBTEY7O0lBQUEsK0RBR1dXLE9BQU8sQ0FBQ3JFLFFBR2YsQ0FiTixDQWNJLENBZk4sQ0FnQkksQ0FqQk47R0FpQk0sQ0FqQk47O0VBQUEsQ0FrQkksRUFuQk4sQ0FvQ1EsRUFoQlI2Qyx1REFBQUEsQ0FlTSxLQWZOLEVBZU0sSUFmTixFQWVNLENBZEpBLHVEQUFBQSxDQU1TLFFBTlQsRUFNUztJQUxQQyxJQUFJLEVBQUMsUUFLRTtJQUpQLFNBQU0scUJBSUM7SUFITndCLE9BQUs7TUFBQSxPQUFFakIscUVBQUY7SUFBQTtFQUdDLENBTlQsRUFJQyxzQkFKRCxDQWNJLEVBUEpSLHVEQUFBQSxDQU1TLFFBTlQsRUFNUztJQUxQQyxJQUFJLEVBQUMsUUFLRTtJQUpQLFNBQU0sa0JBSUM7SUFITndCLE9BQUs7TUFBQSxPQUFFakIsMkVBQUY7SUFBQTtFQUdDLENBTlQsRUFJQyx3QkFKRCxDQU9JLENBZk4sQ0FnQlEsQ0EzQ1YsR0E0Q0FDLHVEQUFBQSw0QkFFQUEsdURBQUFBLDJCQUNBVCx1REFBQUEsQ0FVTSxLQVZOLGVBVU0sQ0FUSjBCLFdBU0ksRUFOT3BCLHdCQUFBQSw4Q0FBQUEsSUFBWEgsdURBQUFBLENBS00sS0FMTixFQUtNd0IsV0FMTixFQUtNLENBSkozQix1REFBQUEsQ0FFSSxHQUZKLEVBRUksSUFGSixFQUVJSyxvREFBQUEsQ0FEQ0Msb0JBQ0QsQ0FGSixFQUNtQjtFQUFBO0VBRG5CLENBSUksRUFESk4sdURBQUFBLENBQThELEdBQTlELEVBQThEO0lBQTNELFNBQU0sbUJBQXFEO0lBQWhDNEIsSUFBSSxFQUFFcEI7RUFBMEIsQ0FBOUQsRUFBNkMsZUFBN0MsRUFBMEQ7RUFBQTtFQUExRCxFQUEwRHFCLFdBQTFELENBQ0ksQ0FMTiwwRUFNSSxDQVZOLEVBdEhGOztFQUFBLENBa0lJLENBbklOLENBb0lJLENBdklOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lOQ0FBN0IsdURBQUFBLENBQW9DLE9BQXBDLEVBQW9DO0lBQTdCQyxJQUFJLEVBQUMsTUFBd0I7O2FBQVJLLGFBQUlNOztFQUFJLENBQXBDOztFQUFBLGtEQUE0Qk4sZUFDNUJOLHVEQUFBQSxDQUE0RCxRQUE1RCxFQUE0RDtJQUFuRHlCLE9BQUs7TUFBQSxPQUFFakIseUVBQUY7SUFBQTtFQUE4QyxDQUE1RCxFQUE4Qix1QkFBOUIsdURBQ0FSLHVEQUFBQSxDQUFxQyxJQUFyQyxFQUFxQyxJQUFyQyxFQUFxQ0ssb0RBQUFBLENBQWJDLFdBQWEsQ0FBckMsRUFBNkI7RUFBQTtFQUE3QixHQUE2Qiw0Q0FBZkEsWUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDSC9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdFO0FBQ1Y7QUFDTDs7QUFFekQsQ0FBc0g7QUFDdEgsaUNBQWlDLDBIQUFlLENBQUMsZ0ZBQU0sYUFBYSxrRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QndEO0FBQ1Y7QUFDTDs7QUFFeEQsQ0FBc0g7QUFDdEgsaUNBQWlDLDBIQUFlLENBQUMsK0VBQU0sYUFBYSxpRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEIyTDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQnVpbGRlckZvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9EZWZhdWx0QXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0J1aWxkZXJGb3JtLnZ1ZT83NGM5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9EZWZhdWx0QXBwLnZ1ZT8wZDRjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9CdWlsZGVyRm9ybS52dWU/NmRhYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvRGVmYXVsdEFwcC52dWU/MWU1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCBcIi4vYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgXCIuL2pzL2Zvcm1zLmpzXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCBEZWZhdWx0QXBwIGZyb20gXCIuL2pzL0RlZmF1bHRBcHAudnVlXCI7XHJcbmltcG9ydCBCdWlsZGVyRm9ybSBmcm9tIFwiLi9qcy9CdWlsZGVyRm9ybS52dWVcIjtcclxuXHJcbmNyZWF0ZUFwcChEZWZhdWx0QXBwKS5tb3VudChcIiN2dWUtYXBwXCIpO1xyXG5jcmVhdGVBcHAoQnVpbGRlckZvcm0pLm1vdW50KFwiI3Z1ZS1idWlsZGVyLWZvcm1cIik7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGRQcm9kdWN0IFwiKTtcclxuYnV0dG9uLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIC8vRHVwbGljYXRlIGVhY2ggdGV4dCBpbnB1dCBmaWVsZCBpbnNpZGUgLnByb2R1Y3RGaWVsZHMgZXhjZXB0IHRoZSBidXR0b24gYW5kIGFwcGVuZCBpdCB0byAucHJvZHVjdEZpZWxkc1xyXG4gICAgY29uc3QgcHJvZHVjdEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdEZpZWxkc1wiKTtcclxuICAgIGNvbnN0IGNsb25lID0gcHJvZHVjdEZpZWxkcy5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2R1Y3RcIikucmVtb3ZlKCk7XHJcbiAgICBwcm9kdWN0RmllbGRzLmFmdGVyKGNsb25lKTtcclxuICB9KTtcclxufSk7XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBjb250YWluZXIgYXJ0aWNsZSBwLTMgbXktNlwiPlxyXG4gICAgPGgyPkZvcm11bGFpcmUgcG91ciBsZXMgaW5mb3JtYXRpb25zIGRlIHZvdHJlIHNpdGUgd2ViPC9oMj5cclxuICAgIDxwPnt7IG1vbk1lc3NhZ2UgfX08L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwidnVlLWZvcm0gbXktNFwiPlxyXG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJmb3JtU3VibWl0XCI+XHJcbiAgICAgICAgPCEtLSBkw6lidXQgaW5mb3MgZ8OpbsOpcmFsZXMgLS0+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJpbmZvcy1zaXRlXCI+XHJcbiAgICAgICAgICA8aDM+SW5mb3JtYXRpb25zIGfDqW7DqXJhbGVzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+Tm9tIGRlIHZvdHJlIFNpdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJub21TaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlIG5vbSBkZSB2b3RyZSBzaXRlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5Mb2dvIGR1IHNpdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImhhbmRsZUxvZ29VcGxvYWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwhLS0gZmluIGluZm9zIGfDqW7DqXJhbGVzIC0tPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb3MtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDM+QmFuZGVhdSBow6lyb3MgZXQgdGjDqG1lPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+UGV0aXRlIHByw6lzZW50YXRpb24gZGUgdm90cmUgc2l0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcmVzZW50YXRpb25TaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhZ2xpbmUgZGUgdm90cmUgc2l0ZSAuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIENvbG9yIFBpY2tlciAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpcy1mbGV4IGNvbG9yUGlja2VyLWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3JQaWNrZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yUGlja2VyLWNvbG9yIGRhcmtCbHVlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGhlbWVDb2xvclwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInRoZW1lQ29sb3JzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiIzAwMDAwMCwjMTUwMDUwLCMzRjAwNzFcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3JQaWNrZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yUGlja2VyLWNvbG9yIHBpbmtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aGVtZUNvbG9yXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidGhlbWVDb2xvcnNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIjRjA3REVBLCNBNDYwRUQsIzlGQzlGM1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPCEtLSBTZWN0aW9uIFByb2R1aXRzIC0tPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb3MtcHJvZHVpdHNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29sdW1ucyBpcy1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhY3RpdmF0ZWRcIiAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWN0aXZhdGVkXCI+QWN0aXbDqTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz5Qcm9kdWl0czwvaDM+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJwcm9kdWN0IGluIHByb2R1Y3RzXCIgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZHVjdC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbSBkdSBwcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9kdWN0LnByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaXggZHUgcHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBpcy1pbmZvIG1yLTRcIlxyXG4gICAgICAgICAgICAgIEBjbGljaz1cImFkZFByb2R1Y3RcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWpvdXRlciB1biBwcm9kdWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVQcm9kdWN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1cHByaW1lciB1biBwcm9kdWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwhLS0gRmluIFNlY3Rpb24gUHJvZHVpdHMgLS0+XHJcblxyXG4gICAgICAgIDwhLS0gRW52b2kgZHUgZm9ybXVsYWlyZSAtLT5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMzBweFwiIGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBpcy1pbmZvXCI+VmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiB2LWlmPVwic3VjY2Vzc01lc3NhZ2VcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge3sgc3VjY2Vzc01lc3NhZ2UgfX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzXCIgOmhyZWY9XCJzaXRlVXJsXCI+Vm9pciBsZSBzaXRlIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbk1lc3NhZ2U6IFwiSGVsbG8gZnJvbSBWdWUgIVwiLFxyXG4gICAgICBzdWNjZXNzTWVzc2FnZTogZmFsc2UsXHJcbiAgICAgIG5vbVNpdGU6IFwiXCIsXHJcbiAgICAgIHByZXNlbnRhdGlvblNpdGU6IFwiXCIsXHJcbiAgICAgIHNpdGVMb2dvOiBcIlwiLFxyXG4gICAgICBwcm9kdWN0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiUHJvZHVpdCAxXCIsXHJcbiAgICAgICAgICBwcmljZTogMTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgdGhlbWVDb2xvcnM6IFwiXCIsXHJcbiAgICAgIHRoZW1lQ29sb3JzQXJyYXk6IFtdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBzaXRlVXJsKCkge1xyXG4gICAgICByZXR1cm4gXCJidWlsZGVyL3NpdGUvXCIgKyB0aGlzLm5vbVNpdGU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHRoZW1lQ29sb3JzOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgdGhpcy50aGVtZUNvbG9yc0FycmF5ID0gbmV3VmFsLnNwbGl0KFwiLFwiKTtcclxuICAgICAgLy9tYWtlIHRoZW1lQ29sb3JzQXJyYXkgYSBuYW1lZCBhcnJheSB3aXRoIGtleXMgcHJpbWFyeSwgc2Vjb25kYXJ5LCB0ZXJ0aWFyeVxyXG4gICAgICB0aGlzLnRoZW1lQ29sb3JzQXJyYXkgPSB7XHJcbiAgICAgICAgcHJpbWFyeTogdGhpcy50aGVtZUNvbG9yc0FycmF5WzBdLFxyXG4gICAgICAgIHNlY29uZGFyeTogdGhpcy50aGVtZUNvbG9yc0FycmF5WzFdLFxyXG4gICAgICAgIHRlcnRpYXJ5OiB0aGlzLnRoZW1lQ29sb3JzQXJyYXlbMl0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIC8vVXRpbGlzZXIgYXZlYyBBSkFYIHVuZSByb3V0ZSBjb250ZW5hbnQgZW4gSlNPTiAgbGVzIGRvbm7DqWVzIGR1IHNpdGUgZGUgbGEgQkREIHBvdXIgcHLDqXBldXBsZXIgbGUgZm9ybXVsYWlyZVxyXG4gICAgY29uc29sZS5sb2coXCJWdWVqcyBtb250w6lcIik7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiL2FwaS9zaXRlaW5mb1wiKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJldXIgNTAwIHN1ciBsZSBnZXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGRzRnJvbUFwaShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhZGRQcm9kdWN0KCkge1xyXG4gICAgICB0aGlzLnByb2R1Y3RzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZVByb2R1Y3QoKSB7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMucG9wKCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlTG9nb1VwbG9hZChldmVudCkge1xyXG4gICAgICB0aGlzLnNpdGVMb2dvID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNpdGVMb2dvKTtcclxuICAgIH0sXHJcbiAgICBmb3JtU3VibWl0KCkge1xyXG4gICAgICB0aGlzLnNhdmVUb0RiKCk7XHJcbiAgICB9LFxyXG4gICAgcG9wdWxhdGVGaWVsZHNGcm9tQXBpKGRhdGEpIHtcclxuICAgICAgdGhpcy5ub21TaXRlID0gZGF0YS5ub21TaXRlO1xyXG4gICAgICB0aGlzLnByZXNlbnRhdGlvblNpdGUgPSBkYXRhLmRlc2NyaXB0aW9uU2l0ZTtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IGRhdGEucHJvZHVjdHMgfHwgdGhpcy5wcm9kdWN0cztcclxuICAgIH0sXHJcbiAgICBzYXZlVG9EYigpIHtcclxuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGlmICh0aGlzLnNpdGVMb2dvICE9IG51bGwpIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzaXRlTG9nb1wiLCB0aGlzLnNpdGVMb2dvKTtcclxuICAgICAgfVxyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJub21fc2l0ZVwiLCB0aGlzLm5vbVNpdGUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcmVzZW50YXRpb25TaXRlXCIsIHRoaXMucHJlc2VudGF0aW9uU2l0ZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHMpKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwidGhlbWVDb2xvcnNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50aGVtZUNvbG9yc0FycmF5KSk7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYXBpL2pzZm9ybVwiLCBmb3JtRGF0YSwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIkZvcm11bGFpcmUgZW52b3nDqSBhdmVjIHN1Y2PDqHNcIjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibmFtZVwiIC8+XHJcbiAgPGJ1dHRvbiBAY2xpY2s9XCJyZWZyZXNoSGVsbG9cIj5EZW1hbmRlciB1biBib25qb3VyICE8L2J1dHRvbj5cclxuICA8aDEgdi1zaG93PVwiISFoZWxsb1wiPnt7IGhlbGxvIH19PC9oMT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgaGVsbG86IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcmVmcmVzaEhlbGxvKCkge1xyXG4gICAgICBpZiAodGhpcy5uYW1lKSB7XHJcbiAgICAgICAgZmV0Y2goXCIvYXBpL2hlbGxvd29yZC9cIiArIHRoaXMubmFtZSwgeyBtZXRob2Q6IFwiR0VUXCIgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gKHRoaXMuaGVsbG8gPSByZXN1bHQpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg3NWRjN2YyXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0J1aWxkZXJGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIkY6XFxcXHdhbXA2NFxcXFx3d3dcXFxcTENEWlxcXFxPbmVQYWdlXFxcXG9uZXBhZ2VcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcZGlzdFxcXFxleHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy9qcy9CdWlsZGVyRm9ybS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiODc1ZGM3ZjJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc4NzVkYzdmMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzg3NWRjN2YyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CdWlsZGVyRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODc1ZGM3ZjJcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignODc1ZGM3ZjInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0RlZmF1bHRBcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxNjM3MjcwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGVmYXVsdEFwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGVmYXVsdEFwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCJGOlxcXFx3YW1wNjRcXFxcd3d3XFxcXExDRFpcXFxcT25lUGFnZVxcXFxvbmVwYWdlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGRpc3RcXFxcZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvanMvRGVmYXVsdEFwcC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNTE2MzcyNzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1MTYzNzI3MCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzUxNjM3MjcwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EZWZhdWx0QXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTYzNzI3MFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1MTYzNzI3MCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQnVpbGRlckZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9EZWZhdWx0QXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0RlZmF1bHRBcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUFwcCIsIkRlZmF1bHRBcHAiLCJCdWlsZGVyRm9ybSIsIm1vdW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJvZHVjdEZpZWxkcyIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZSIsImNsb25lTm9kZSIsInJlbW92ZSIsImFmdGVyIiwiYXhpb3MiLCJkYXRhIiwibW9uTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwibm9tU2l0ZSIsInByZXNlbnRhdGlvblNpdGUiLCJzaXRlTG9nbyIsInByb2R1Y3RzIiwibmFtZSIsInByaWNlIiwidGhlbWVDb2xvcnMiLCJ0aGVtZUNvbG9yc0FycmF5IiwiY29tcHV0ZWQiLCJzaXRlVXJsIiwid2F0Y2giLCJuZXdWYWwiLCJvbGRWYWwiLCJzcGxpdCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsIm1vdW50ZWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiZXJyb3IiLCJ0aGVuIiwicmVzcG9uc2UiLCJwb3B1bGF0ZUZpZWxkc0Zyb21BcGkiLCJtZXRob2RzIiwiYWRkUHJvZHVjdCIsInB1c2giLCJyZW1vdmVQcm9kdWN0IiwicG9wIiwiaGFuZGxlTG9nb1VwbG9hZCIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JtU3VibWl0Iiwic2F2ZVRvRGIiLCJkZXNjcmlwdGlvblNpdGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3QiLCJoZWFkZXJzIiwiaGVsbG8iLCJyZWZyZXNoSGVsbG8iLCJmZXRjaCIsIm1ldGhvZCIsImpzb24iLCJyZXN1bHQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwidHlwZSIsInN0eWxlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzIiLCJfdG9EaXNwbGF5U3RyaW5nIiwiJGRhdGEiLCJvblN1Ym1pdCIsIiRvcHRpb25zIiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF85IiwiJGV2ZW50IiwicGxhY2Vob2xkZXIiLCJfaG9pc3RlZF8xMiIsIm9uQ2hhbmdlIiwiX2hvaXN0ZWRfMTUiLCJfaG9pc3RlZF8xOSIsIl9ob2lzdGVkXzIzIiwidmFsdWUiLCJfaG9pc3RlZF8yNSIsIl9ob2lzdGVkXzI3IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJwcm9kdWN0Iiwib25DbGljayIsIl9ob2lzdGVkXzM1IiwiX2hvaXN0ZWRfMzYiLCJocmVmIiwiX2hvaXN0ZWRfMzciXSwic291cmNlUm9vdCI6IiJ9