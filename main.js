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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst searchBtn = document.querySelector(\".search-btn\");\r\n\r\nfunction getLocation() {\r\n  let location;\r\n  if(!location) {\r\n    location = prompt(\"Please enter your location:\");\r\n  }\r\n  return location;\r\n}\r\n\r\nasync function getWeather() {\r\n  const location = getLocation();\r\n  try {\r\n    const response = await fetch(\r\n      `https://api.weatherapi.com/v1/forecast.json?key=b40bbce6ac554f4fbf1142551240203&q=${location}&days=10`,\r\n      { mode: \"cors\" }\r\n    );\r\n    const weatherDataJson = await response.json();\r\n    const weatherData = formatWeatherJson(weatherDataJson);\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateUi)(\r\n      weatherData,\r\n    );\r\n    const hourlyChart = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateHourlyGraph)(\r\n      weatherData\r\n    );\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateWeeklyForecast)(weatherData);\r\n    const guageChart = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateUvgGauge)(weatherData);\r\n    searchBtn.addEventListener(\"click\",() => {\r\n      hourlyChart.destroy();\r\n      guageChart.destroy();\r\n    })\r\n  } catch (error) {\r\n  }\r\n}\r\nfunction formatWeatherJson(weatherDataJson) {\r\n  const weatherData = {\r\n    name: weatherDataJson.location.name,\r\n    region: weatherDataJson.location.region,\r\n    country: weatherDataJson.location.country,\r\n    temp: weatherDataJson.current.temp_c,\r\n    isDay: weatherDataJson.current.is_day,\r\n    condition: weatherDataJson.current.condition.text,\r\n    conditionIcon: null,\r\n    windSpeed: weatherDataJson.current.wind_kph,\r\n    windDegree: weatherDataJson.current.wind_degree,\r\n    windDir: weatherDataJson.current.wind_dir,\r\n    uv: weatherDataJson.current.uv,\r\n    sunrise: weatherDataJson.forecast.forecastday[0].astro.sunrise,\r\n    sunset: weatherDataJson.forecast.forecastday[0].astro.sunset,\r\n    humidity: weatherDataJson.current.humidity,\r\n    visibility: weatherDataJson.current.vis_km,\r\n    feelslike: weatherDataJson.current.feelslike_c,\r\n    morningTemp: weatherDataJson.forecast.forecastday[0].hour[6].temp_c,\r\n    afternoonTemp: weatherDataJson.forecast.forecastday[0].hour[12].temp_c,\r\n    eveningTemp: weatherDataJson.forecast.forecastday[0].hour[18].temp_c,\r\n    nightTemp: weatherDataJson.forecast.forecastday[0].hour[21].temp_c,\r\n    days: {\r\n      0: {\r\n        date: weatherDataJson.forecast.forecastday[1].date,\r\n        temp: weatherDataJson.forecast.forecastday[1].day.avgtemp_c,\r\n        condition: weatherDataJson.forecast.forecastday[1].day.condition.text,\r\n        conditionIcon: null,\r\n      },\r\n      1: {\r\n        date: weatherDataJson.forecast.forecastday[2].date,\r\n        temp: weatherDataJson.forecast.forecastday[2].day.avgtemp_c,\r\n        condition: weatherDataJson.forecast.forecastday[2].day.condition.text,\r\n        conditionIcon: null,\r\n      },\r\n      2: {\r\n        date: weatherDataJson.forecast.forecastday[3].date,\r\n        temp: weatherDataJson.forecast.forecastday[3].day.avgtemp_c,\r\n        condition: weatherDataJson.forecast.forecastday[3].day.condition.text,\r\n        conditionIcon: null,\r\n      },\r\n      3: {\r\n        date: weatherDataJson.forecast.forecastday[4].date,\r\n        temp: weatherDataJson.forecast.forecastday[4].day.avgtemp_c,\r\n        condition: weatherDataJson.forecast.forecastday[4].day.condition.text,\r\n        conditionIcon: null,\r\n      },\r\n      4: {\r\n        date: weatherDataJson.forecast.forecastday[5].date,\r\n        temp: weatherDataJson.forecast.forecastday[5].day.avgtemp_c,\r\n        condition: weatherDataJson.forecast.forecastday[5].day.condition.text,\r\n        conditionIcon: null,\r\n      },\r\n      5: {\r\n        date: weatherDataJson.forecast.forecastday[6].date,\r\n        temp: weatherDataJson.forecast.forecastday[6].day.avgtemp_c,\r\n        condition: weatherDataJson.forecast.forecastday[6].day.condition.text,\r\n        conditionIcon: null,\r\n      },\r\n      6: {\r\n        date: weatherDataJson.forecast.forecastday[7].date,\r\n        temp: weatherDataJson.forecast.forecastday[7].day.avgtemp_c,\r\n        condition: weatherDataJson.forecast.forecastday[7].day.condition.text,\r\n        conditionIcon: null,\r\n      },\r\n      7: {\r\n        date: weatherDataJson.forecast.forecastday[8].date,\r\n        temp: weatherDataJson.forecast.forecastday[8].day.avgtemp_c,\r\n        condition: weatherDataJson.forecast.forecastday[8].day.condition.text,\r\n        conditionIcon: null,\r\n      },\r\n      8: {\r\n        date: weatherDataJson.forecast.forecastday[9].date,\r\n        temp: weatherDataJson.forecast.forecastday[9].day.avgtemp_c,\r\n        condition: weatherDataJson.forecast.forecastday[9].day.condition.text,\r\n        conditionIcon: null,\r\n      }\r\n    },\r\n  };\r\n  return weatherData;\r\n}\r\ngetWeather();\r\nsearchBtn.addEventListener('click', () => {\r\n  getWeather();\r\n});\n\n//# sourceURL=webpack://taqs/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetUi: () => (/* binding */ resetUi),\n/* harmony export */   updateHourlyGraph: () => (/* binding */ updateHourlyGraph),\n/* harmony export */   updateUi: () => (/* binding */ updateUi),\n/* harmony export */   updateUvgGauge: () => (/* binding */ updateUvgGauge),\n/* harmony export */   updateWeeklyForecast: () => (/* binding */ updateWeeklyForecast)\n/* harmony export */ });\nconst nameEl = document.querySelector(\"#name\");\r\nconst regionEl = document.querySelector(\"#region\");\r\nconst countryEl = document.querySelector(\"#country\");\r\nconst tempEl = document.querySelector(\"#temp\");\r\nconst conditionTextEl = document.querySelector(\"#condition-text\");\r\nconst condtiionIconEl = document.querySelector(\"#condition-icon\");\r\n\r\nconst morningTempEl = document.querySelector(\"#morning-temp\");\r\nconst afternoonTempEl = document.querySelector(\"#afternoon-temp\");\r\nconst eveningTempEl = document.querySelector(\"#evening-temp\");\r\nconst nightTempEl = document.querySelector(\"#night-temp\");\r\n\r\nconst dateEl = document.querySelector(\".date\");\r\nconst dayEls = document.querySelectorAll(\".day\");\r\n\r\nconst weeklyIcons = document.querySelectorAll(\".weekly-icon\");\r\nconst weeklyTemps = document.querySelectorAll(\".weekly-temp\");\r\n\r\nconst windSpeed = document.querySelector(\"#wind-speed\");\r\nconst windDegreeAndDir = document.querySelector(\"#degree-dir\");\r\n\r\nconst uvIndexP = document.querySelector(\"#uv-index\");\r\n\r\nconst sunriseP = document.querySelector(\"#sunrise-time\");\r\nconst sunsetP = document.querySelector(\"#sunset-time\");\r\n\r\nconst humidityP = document.querySelector(\"#humidity\");\r\nconst visibilityP = document.querySelector(\"#visibility\");\r\nconst feelsLikeP = document.querySelector(\"#feels-like\");\r\n\r\nfunction updateUi(weatherData) {\r\n  nameEl.textContent = weatherData.name;\r\n  regionEl.textContent = `${weatherData.region}, `;\r\n  countryEl.textContent = weatherData.country;\r\n  tempEl.textContent = weatherData.temp + \"° C\";\r\n  conditionTextEl.textContent = weatherData.condition;\r\n\r\n  switch (true) {\r\n    case weatherData.condition.toLowerCase().includes(\"clear\"):\r\n      if (weatherData.isDay == 1) {\r\n        weatherData.conditionIcon =\r\n          \"https://img.icons8.com/3d-fluency/188/sun.png\";\r\n      } else {\r\n        weatherData.conditionIcon =\r\n          \"https://img.icons8.com/3d-fluency/188/moon-symbol.png\";\r\n      }\r\n      break;\r\n    case weatherData.condition.toLowerCase().includes(\"cloud\"):\r\n      weatherData.conditionIcon =\r\n        \"https://img.icons8.com/3d-fluency/188/private-cloud-storage\";\r\n      break;\r\n    case weatherData.condition.toLowerCase().includes(\"rain\"):\r\n      weatherData.conditionIcon = \"https://img.icons8.com/3d-fluency/188/storm\";\r\n      break;\r\n    case weatherData.condition.toLowerCase().includes(\"snow\"):\r\n      weatherData.conditionIcon = \"https://img.icons8.com/3d-fluency/188/snow\";\r\n      break;\r\n    case weatherData.condition.toLowerCase().includes(\"sun\"):\r\n      weatherData.conditionIcon =\r\n        \"https://img.icons8.com/3d-fluency/188/sun.png\";\r\n    default:\r\n      weatherData.conditionIcon =\r\n        \"https://img.icons8.com/3d-fluency/188/sun.png\";\r\n  }\r\n\r\n  condtiionIconEl.src = weatherData.conditionIcon;\r\n\r\n  morningTempEl.textContent = weatherData.morningTemp + \"° C\";\r\n  afternoonTempEl.textContent = weatherData.afternoonTemp + \"° C\";\r\n  eveningTempEl.textContent = weatherData.eveningTemp + \"° C\";\r\n  nightTempEl.textContent = weatherData.nightTemp + \"° C\";\r\n\r\n  let date = new Date();\r\n  const day = date.toLocaleDateString(\"en-US\", { weekday: \"long\" });\r\n  const month = date.toLocaleDateString(\"en-US\", { month: \"long\" });\r\n  const year = date.getFullYear();\r\n  date = `${day}, ${month} ${date.getDate()}, ${year}`;\r\n  dateEl.textContent = date;\r\n\r\n  windSpeed.textContent = weatherData.windSpeed + \" km/h\";\r\n  windDegreeAndDir.textContent =\r\n    weatherData.windDegree + \"°\" + weatherData.windDir;\r\n\r\n  uvIndexP.textContent = weatherData.uv + \" UV\";\r\n  sunriseP.textContent = weatherData.sunrise;\r\n  sunsetP.textContent = weatherData.sunset;\r\n\r\n  humidityP.textContent = weatherData.humidity + \"%\";\r\n  visibilityP.textContent = weatherData.visibility + \"km\";\r\n  feelsLikeP.textContent = weatherData.feelslike + \"° C\"; \r\n}\r\n\r\nfunction updateHourlyGraph(weatherData) {\r\n  const canvas = document.getElementById(\"temp-chart\").getContext(\"2d\");\r\n  const labels = [\"\", \"\", \"\", \"\"];\r\n  const data = {\r\n    labels,\r\n    datasets: [\r\n      {\r\n        label: \"Temperature (°C)\",\r\n        tension: 0.4,\r\n        pointStyle: \"circle\",\r\n        data: [\r\n          weatherData.morningTemp,\r\n          weatherData.afternoonTemp,\r\n          weatherData.eveningTemp,\r\n          weatherData.nightTemp,\r\n        ],\r\n        borderColor: \"#bf8000\", // Red line\r\n      },\r\n    ],\r\n  };\r\n  const myChart = new Chart(canvas, {\r\n    type: \"line\", // Specify the chart type (line in this case)\r\n    data: data,\r\n    options: {\r\n      scales: {\r\n        x: {\r\n          grid: {\r\n            display: false,\r\n          },\r\n        },\r\n        y: {\r\n          grid: {\r\n            display: false,\r\n          },\r\n          ticks: {\r\n            display: false,\r\n          },\r\n        },\r\n      },\r\n      plugins: {\r\n        legend: {\r\n          display: false,\r\n        },\r\n      },\r\n    },\r\n  });\r\n  return myChart;\r\n}\r\n\r\nfunction updateUvgGauge(weatherData) {\r\n  const ctx = document.querySelector(\"#uv-index-canvas\").getContext(\"2d\");\r\n  const value = weatherData.uv;\r\n  const guageChart = new Chart(ctx, {\r\n    type: \"doughnut\",\r\n    data: {\r\n      datasets: [\r\n        {\r\n          data: [value, 12 - value],\r\n          backgroundColor: [\"#bf8000\", \"#5f481d\"],\r\n          borderWidth: 0\r\n        },\r\n      ],\r\n    },\r\n    options: {\r\n      cutoutPercentage: 0, // Adjust for gauge thickness\r\n      rotation: 270, // Start at bottom\r\n      circumference: 180, // Half circle\r\n      legend: {\r\n        display: false // Hide legend\r\n      },\r\n      ticks: {\r\n        display: true, // Hide default ticks\r\n        min: 0,\r\n        max: 11,\r\n        stepSize: 1,\r\n      },\r\n      fontColor: \"#fff\",\r\n      animation: {\r\n        animateRotate: true, // Disable rotation animation\r\n        animateScale: false  // Enable scale animation (optional)\r\n      }\r\n    },\r\n  });\r\n  return guageChart;\r\n}\r\n\r\nfunction updateWeeklyForecast(weatherData) {\r\n  for (let i = 0; i < dayEls.length; i++) {\r\n    const formatedDate = convertDateToText(weatherData.days[i].date);\r\n    dayEls[i].textContent = formatedDate;\r\n\r\n    switch (true) {\r\n      case weatherData.days[i].condition.toLowerCase().includes(\"clear\"):\r\n        if (weatherData.isDay == 1) {\r\n          weatherData.days[i].conditionIcon =\r\n            \"https://img.icons8.com/3d-fluency/188/sun.png\";\r\n        } else {\r\n          weatherData.days[i].conditionIcon =\r\n            \"https://img.icons8.com/3d-fluency/188/moon-symbol.png\";\r\n        }\r\n        break;\r\n      case weatherData.days[i].condition.includes(\"cloud\"):\r\n        weatherData.conditionIcon =\r\n          \"https://img.icons8.com/3d-fluency/188/private-cloud-storage\";\r\n        break;\r\n      case weatherData.days[i].condition.toLowerCase().includes(\"rain\"):\r\n        weatherData.days[i].conditionIcon =\r\n          \"https://img.icons8.com/3d-fluency/188/storm\";\r\n        break;\r\n      case weatherData.days[i].condition.toLowerCase().includes(\"snow\"):\r\n        weatherData.days[i].conditionIcon =\r\n          \"https://img.icons8.com/3d-fluency/188/snow\";\r\n        break;\r\n      case weatherData.days[i].condition.toLowerCase().includes(\"sun\"):\r\n        weatherData.days[i].conditionIcon =\r\n          \"https://img.icons8.com/3d-fluency/188/sun.png\";\r\n      default:\r\n        weatherData.days[i].conditionIcon =\r\n          \"https://img.icons8.com/3d-fluency/188/sun.png\";\r\n    }\r\n    weeklyIcons[i].src = weatherData.days[i].conditionIcon;\r\n    weeklyTemps[i].textContent = weatherData.days[i].temp + \"°\";\r\n  }\r\n}\r\n\r\nfunction convertDateToText(dateString) {\r\n  const daysOfWeek = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"];\r\n  const dateObject = daysOfWeek[new Date(dateString).getDay()];\r\n  return dateObject;\r\n}\r\n\r\nfunction resetUi() {\r\n  nameEl.textContent = \"\";\r\n  regionEl.textContent = \"\";\r\n  countryEl.textContent = \"\";\r\n  tempEl.textContent = \"\";\r\n  conditionTextEl.textContent = \"\";\r\n  condtiionIconEl.src = \"#\"\r\n\r\n  morningTempEl.textContent = \"\";\r\n  afternoonTempEl.textContent = \"\";\r\n  eveningTempEl.textContent = \"\";\r\n  nightTempEl.textContent = \"\";\r\n\r\n  dateEl.textContent = \"\";\r\n  dayEls.forEach((element) => {\r\n    element.textContent = \"\";\r\n  })\r\n  weeklyIcons.forEach((icon) => {\r\n    icon.src = \"#\"\r\n  })\r\n  weeklyTemps.forEach((temp) => {\r\n    temp.textContent = \"\";\r\n  })\r\n  windSpeed.textContent = \"\";\r\n  windDegreeAndDir.textContent = \"\";\r\n  uvIndexP.textContent = \"\";\r\n  sunriseP.textContent = \"\";\r\n  sunsetP.textContent = \"\";\r\n}\n\n//# sourceURL=webpack://taqs/./src/ui.js?");

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