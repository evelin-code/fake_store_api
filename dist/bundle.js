/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Product/Product.css":
/*!********************************************!*\
  !*** ./src/components/Product/Product.css ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.container-product {\r\n  width: 250px;\r\n  padding: 20px;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  border-radius: 18px;\r\n  box-shadow: 0px 0px 10px 0px rgba(211, 211, 211, 0.5);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.container-product:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0px 0px 10px 0px rgba(126, 130, 252, 0.5);\r\n}\r\n\r\n.img-product {\r\n  width: 200px; \r\n  height: 200px;\r\n}\r\n \r\n.container-product h1 {\r\n  font-size: 24px;\r\n  color: #333;\r\n  margin-bottom: 10px;\r\n}\r\n \r\n.container-product p {\r\n  font-size: 16px;\r\n  color: #666;\r\n  margin-bottom: 10px;\r\n}\r\n \r\n.container-product small {\r\n  font-size: 14px;\r\n  color: #999;\r\n  margin-bottom: 10px;\r\n}\r\n \r\n.container-product p:last-child {\r\n  font-size: 20px;\r\n  color: #333;\r\n  margin-bottom: 20px;\r\n}\r\n \r\n.container-product button {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n  transition: transform 0.3s ease;\r\n  border-radius: 18px;\r\n}\r\n \r\n.container-product button:hover {\r\n  background-color: #0056b3;\r\n  transform: translateY(-5px);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://laboratoriosemana10/./src/components/Product/Product.css?");

/***/ }),

/***/ "./src/screens/dashboard.css":
/*!***********************************!*\
  !*** ./src/screens/dashboard.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.navbar {\r\n  background-color: #333;\r\n  overflow: hidden;\r\n}\r\n \r\n.navbar ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n \r\n.navbar li {\r\n  float: left;\r\n}\r\n \r\n.navbar button {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  background-color: inherit;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n \r\n.navbar button:hover {\r\n  background-color: #111;\r\n} \r\n\r\n.container-dashboard {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 20px;\r\n  width: 70%;\r\n  margin: 0 auto; /* Centrar el contenedor */\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .container-dashboard {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .container-dashboard {\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://laboratoriosemana10/./src/screens/dashboard.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://laboratoriosemana10/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://laboratoriosemana10/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Product/Product.ts":
/*!*******************************************!*\
  !*** ./src/components/Product/Product.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Attribute: () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.css */ \"./src/components/Product/Product.css\");\n\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"image\"] = \"image\";\n    Attribute[\"name\"] = \"name\";\n    Attribute[\"description\"] = \"description\";\n    Attribute[\"category\"] = \"category\";\n    Attribute[\"rating\"] = \"rating\";\n    Attribute[\"price\"] = \"price\";\n})(Attribute || (Attribute = {}));\nclass Product extends HTMLElement {\n    static get observedAttributes() {\n        const classAttribute = {\n            image: null,\n            name: null,\n            description: null,\n            category: null,\n            rating: null,\n            price: null,\n        };\n        return Object.keys(classAttribute);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <div class=\"container-product\">\r\n          <img class=\"img-product\" src=\"${this.image}\">\r\n          <h1>${this.name}</h1>\r\n          <p>${this.description}</p>\r\n          <small>${this.category}</small> - <small>${this.rating}</small>\r\n          <p>${this.price}</p>\r\n          <button onclick=\"alert('¡Bienvenido a GeeksforGeeks!')\">Haz clic aquí</button>\r\n        </div>\r\n      `;\n            const cssMyComponent = this.ownerDocument.createElement('style');\n            cssMyComponent.textContent = _Product_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            this.shadowRoot.appendChild(cssMyComponent);\n        }\n    }\n}\ncustomElements.define('product-container', Product);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n\n\n//# sourceURL=webpack://laboratoriosemana10/./src/components/Product/Product.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n\nclass initContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <dashboard-container></dashboard-container>\r\n      `;\n        }\n    }\n}\ncustomElements.define('init-container', initContainer);\n\n\n//# sourceURL=webpack://laboratoriosemana10/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.css */ \"./src/screens/dashboard.css\");\n/* harmony import */ var _components_Product_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Product/Product */ \"./src/components/Product/Product.ts\");\n/* harmony import */ var _services_getProduts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/getProduts */ \"./src/services/getProduts.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n        this.loadProducts();\n    }\n    loadProducts() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const products = yield (0,_services_getProduts__WEBPACK_IMPORTED_MODULE_2__.getProducts)();\n                this.renderProducts(products);\n            }\n            catch (error) {\n                console.error('Error al cargar los productos:', error);\n            }\n        });\n    }\n    renderProducts(products) {\n        var _a;\n        const productContainer = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.container-dashboard');\n        if (productContainer) {\n            products.forEach(product => {\n                const productElement = document.createElement('product-container');\n                productElement.image = product.image;\n                productElement.name = product.title;\n                productElement.description = product.description;\n                productElement.category = product.category;\n                productElement.rating = product.rating.rate.toString();\n                productElement.price = product.price;\n                productContainer.appendChild(productElement);\n            });\n        }\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <div class=\"navbar\">\r\n          <ul>\r\n            <li><button id=\"homeButton\">Home</button></li>\r\n            <li><button id=\"cartButton\">Carrito de Compras</button></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"container-dashboard\"></div>\r\n      `;\n            const cssMyComponent = this.ownerDocument.createElement('style');\n            cssMyComponent.textContent = _dashboard_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            this.shadowRoot.appendChild(cssMyComponent);\n        }\n    }\n}\ncustomElements.define('dashboard-container', Dashboard);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);\n\n\n//# sourceURL=webpack://laboratoriosemana10/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getProduts.ts":
/*!************************************!*\
  !*** ./src/services/getProduts.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProducts: () => (/* binding */ getProducts)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getProducts() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const response = yield fetch('https://fakestoreapi.com/products');\n            if (!response.ok) {\n                throw new Error('Error al obtener los productos');\n            }\n            const products = yield response.json();\n            return products;\n        }\n        catch (error) {\n            console.error('Error:', error);\n            return [];\n        }\n    });\n}\n\n\n//# sourceURL=webpack://laboratoriosemana10/./src/services/getProduts.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;