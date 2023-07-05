/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/example.css":
/*!********************************!*\
  !*** ./src/styles/example.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sedna/./src/styles/example.css?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sedna/./src/styles/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_example_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/example.css */ \"./src/styles/example.css\");\n/* harmony import */ var _scripts_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/style.js */ \"./src/scripts/style.js\");\n/* harmony import */ var _scripts_style_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_style_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/form.js */ \"./src/scripts/form.js\");\n/* harmony import */ var _scripts_form_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_form_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_swiper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/swiper.js */ \"./src/scripts/swiper.js\");\n/* harmony import */ var _scripts_swiper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_swiper_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// library.emailValidation();\n// library.userNameValidation();\n// library.userMobValidation();\n// import { emailValidation, userNameValidation, userMobValidation } from './scripts/form';\n\n\n//# sourceURL=webpack://sedna/./src/index.js?");

/***/ }),

/***/ "./src/scripts/form.js":
/*!*****************************!*\
  !*** ./src/scripts/form.js ***!
  \*****************************/
/***/ (() => {

eval("window.emailValidation = function () {\n    const userEmailField = document.getElementById(\"userEmail\");\n    const userEmail = document.getElementById(\"userEmail\").value;\n    const emailPattern = /^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;\n    if (userEmail.match(emailPattern)) {\n        userEmailField.setAttribute(\"aria-invalid\", \"false\");\n        document.getElementById(\"userEmailErr\").innerText = \"\";\n    } else {\n        userEmailField.setAttribute(\"aria-invalid\", \"true\");\n        document.getElementById(\"userEmailErr\").innerText = \"You have entered an invalid email address!\";\n    }\n};\nwindow.userNameValidation = function () {\n    const userNameField = document.getElementById(\"userName\");\n    const userName = document.getElementById(\"userName\").value;\n    let userNamePattern = /^[A-Za-z]{7,29}$/;\n    if (userName.match(userNamePattern)) {\n        userNameField.setAttribute(\"aria-invalid\", \"false\");\n        document.getElementById(\"userNameErr\").innerText = \"\";\n    } else {\n        userNameField.setAttribute(\"aria-invalid\", \"true\");\n        document.getElementById(\"userNameErr\").innerText = \"username is invalid!\";\n    }\n};\nwindow.userMobValidation = function () {\n    const userMobField = document.getElementById(\"userMob\");\n    const userMob = document.getElementById(\"userMob\").value;\n    const mobilePattern = /^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$/;\n    if (userMob.match(mobilePattern)) {\n        userMobField.setAttribute(\"aria-invalid\", \"false\");\n        document.getElementById(\"userMobErr\").innerText = \"\";\n    } else {\n        userMobField.setAttribute(\"aria-invalid\", \"true\");\n        document.getElementById(\"userMobErr\").innerText = \"Mobile number is invalid!\";\n    }\n};\n\nconst pswd = document.getElementById(\"password\");\nconst userPassword = document.querySelector(\".userPassword\");\nconst passwordChar = document.querySelector(\".char\");\nconst specialChar = document.querySelector(\".spcl_char\");\nconst lowerchar = document.querySelector(\".lowerchar\");\nconst upperchar = document.querySelector(\".upperchar\");\nconst numberVal = document.querySelector(\".num_val\");\n\npswd.onfocus = () => {\n    document.querySelector(\".password_err\").style.visibility = \"visible\";\n};\npswd.onblur = () => {\n    document.querySelector(\".password_err\").style.visibility = \"hidden\";\n};\n\npswd.onkeyup = () => {\n    const smallCharacterPattern = /[a-z]/g;\n    const upperCharacterPattern = /[A-Z]/g;\n    const numberPattern = /[0-9]/g;\n    const specialCharPattern = /[`!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?~]/;\n    let validPass = 0;\n\n    // length\n    if (pswd.value.length < 8) {\n        passwordChar.classList.remove(\"valid\");\n        passwordChar.classList.add(\"invalid\");\n    } else {\n        passwordChar.classList.add(\"valid\");\n        passwordChar.classList.remove(\"invalid\");\n        validPass += 1;\n    }\n\n    // specialcharacter\n    if (pswd.value.match(specialCharPattern)) {\n        specialChar.classList.remove(\"invalid\");\n        specialChar.classList.add(\"valid\");\n        validPass += 1;\n    } else {\n        specialChar.classList.add(\"invalid\");\n        specialChar.classList.remove(\"valid\");\n    }\n\n    // lowecase\n    if (pswd.value.match(smallCharacterPattern)) {\n        lowerchar.classList.remove(\"invalid\");\n        lowerchar.classList.add(\"valid\");\n        validPass += 1;\n    } else {\n        lowerchar.classList.add(\"invalid\");\n        lowerchar.classList.remove(\"valid\");\n    }\n\n    // uppercase\n    if (pswd.value.match(upperCharacterPattern)) {\n        upperchar.classList.remove(\"invalid\");\n        upperchar.classList.add(\"valid\");\n        validPass += 1;\n    } else {\n        upperchar.classList.add(\"invalid\");\n        upperchar.classList.remove(\"valid\");\n    }\n\n    // number check\n    if (pswd.value.match(numberPattern)) {\n        numberVal.classList.remove(\"invalid\");\n        numberVal.classList.add(\"valid\");\n        validPass += 1;\n    } else {\n        numberVal.classList.add(\"invalid\");\n        numberVal.classList.remove(\"valid\");\n    }\n\n    if (validPass == 5) {\n        pswd.setAttribute(\"aria-invalid\", \"false\");\n        userPassword.innerText = \"\";\n    } else {\n        pswd.setAttribute(\"aria-invalid\", \"true\");\n        userPassword.innerText = \"Password is invalid!\";\n\n    }\n}\n\n\n\n//# sourceURL=webpack://sedna/./src/scripts/form.js?");

/***/ }),

/***/ "./src/scripts/style.js":
/*!******************************!*\
  !*** ./src/scripts/style.js ***!
  \******************************/
/***/ (() => {

eval("const navbarSection = document.querySelector(\"#navbar\");\nconst header = document.querySelector(\"#header\");\nconst nav = document.querySelector(\"nav\");\nconst hero = document.querySelector(\".hero\");\n\nwindow.onscroll = function (e) {\n    const ScrollHeight = window.scrollY;\n    if (ScrollHeight > (hero.clientHeight - navbarSection.clientHeight)) {\n        header.classList.add(\"header_theme\");\n        nav.classList.add(\"pd--small\");\n    } else {\n        header.classList.remove(\"header_theme\");\n        nav.classList.remove(\"pd--small\");\n    }\n};\n\nconst diamond = document.querySelector(\".diamond_des\");\nconst device = document.querySelector(\".animate_ipad\");\nconst deviceTwo = document.querySelector(\".animate_iphone\");\nconst deviceThree = document.querySelector(\".animate_mac\");\nconst option = {\n    root: null,\n    rootMargin: \"100px\",\n    threshold: 1,\n}\nconst mobileOption = {\n    root: null,\n    rootMargin: \"100px\",\n    threshold: 0.1,\n}\nconst desktopOption = {\n    root: null,\n    rootMargin: \"100px\",\n    threshold: 0.1,\n}\nconst diamondOption = {\n    root: null,\n    rootMargin: \"100px\",\n    threshold: 0.1,\n}\n\nconst callback = (entries) => {\n    entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n            entry.target.classList.add('animate--fadein');\n        }\n    })\n}\n\nconst mobileCallback = (entries) => {\n    entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n            entry.target.classList.add('animate--btm-top-fade');\n        }\n    })\n}\nconst desktopCallback = (entries) => {\n    entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n            entry.target.classList.add('animate--rgt--left-fadein');\n        }\n    })\n}\nconst diamondCallback = (entries) => {\n    entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n            entry.target.classList.add('animate--bottom_fadein');\n        }\n    })\n}\n// Create a Observer\nconst Observer = new IntersectionObserver(callback, Option);\nconst MobileObserver = new IntersectionObserver(mobileCallback, mobileOption);\nconst DesktopObserver = new IntersectionObserver(desktopCallback, desktopOption);\nconst DiamondObserver = new IntersectionObserver(diamondCallback, diamondOption);\n\nObserver.observe(device);\nMobileObserver.observe(deviceTwo);\nDesktopObserver.observe(deviceThree);\nDiamondObserver.observe(diamond);\n\n\nconst menuIcon = document.querySelector(\".menu_icon\");\nconst userMenu = document.querySelector(\".user_menus\");\nlet icon =\n    document.querySelector(\".fa.fa-bars\");\n\nlet menuIconsStatus = true;\nmenuIcon.addEventListener(\"click\", function () {\n    menuIconsStatus = !menuIconsStatus;\n    if (menuIconsStatus) {\n        icon.setAttribute(\"class\", \"fa fa-close\");\n        userMenu.classList.add(\"active\");\n\n    } else {\n        icon.setAttribute(\"class\", \"fa fa-bars\");\n        userMenu.classList.remove(\"active\");\n    }\n})\n\n//# sourceURL=webpack://sedna/./src/scripts/style.js?");

/***/ }),

/***/ "./src/scripts/swiper.js":
/*!*******************************!*\
  !*** ./src/scripts/swiper.js ***!
  \*******************************/
/***/ (() => {

eval("window.onload = (event) => {\n    console.log(\"page is fully loaded\");\n    //  Initialize Swiper\n    let swiper = new Swiper(\".mySwiper\", {\n        slidesPerView: 1,\n        spaceBetween: 30,\n        loop: true,\n        grabCursor: true,\n        speed: 1000,\n        // effect: 'fade',\n        // fadeEffect: {\n        //     crossFade: true\n        // },\n        pagination: {\n            el: '.swiper-pagination',\n            clickable: true,\n        },\n        navigation: {\n            nextEl: \".swiper-button-next\",\n            prevEl: \".swiper-button-prev\",\n        },\n    });\n\n};\n\n\n//# sourceURL=webpack://sedna/./src/scripts/swiper.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;