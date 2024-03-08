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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\nfunction getLocation() {\r\n  const location = prompt(\"Please enter your location:\");\r\n  return location;\r\n}\r\n\r\nasync function getWeather() {\r\n  const location = getLocation();\r\n  try {\r\n    const response = await fetch(\r\n      `https://api.weatherapi.com/v1/current.json?key=b40bbce6ac554f4fbf1142551240203&q=${location}`,\r\n      { mode: \"cors\" }\r\n    );\r\n    const weatherDataJson = await response.json();\r\n    const weatherData = formatWeatherJson(weatherDataJson);\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateUi)(weatherData.name, weatherData.region, weatherData.country);\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n}\r\nfunction formatWeatherJson(weatherDataJson){\r\n  const weatherData = {\r\n    name: weatherDataJson.location.name,\r\n    region: weatherDataJson.location.region,\r\n    country: weatherDataJson.location.country,\r\n    temp: weatherDataJson.current.temp_c,\r\n    isDay: weatherDataJson.current.is_day,\r\n    condition: weatherDataJson.current.condition.text,\r\n    windSpeed: weatherDataJson.current.wind_kph,\r\n    uv: weatherDataJson.current.uv,\r\n    humidity: weatherDataJson.current.humidity,\r\n    visibility: weatherDataJson.current.vis_km,\r\n    feelslike: weatherDataJson.current.feelslike_c,\r\n  }\r\n  return weatherData;\r\n}\r\ngetWeather();\r\n\n\n//# sourceURL=webpack://taqs/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateUi: () => (/* binding */ updateUi)\n/* harmony export */ });\nconst nameEl = document.querySelector(\"#name\");\r\nconst regionEl = document.querySelector(\"#region\");\r\nconst countryEl = document.querySelector(\"#country\");\r\n\r\nfunction updateUi(name, region, country) {\r\n  nameEl.textContent = name;\r\n  regionEl.textContent = `${region}, `;\r\n  countryEl.textContent = country;\r\n}\n\n//# sourceURL=webpack://taqs/./src/ui.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;