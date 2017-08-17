/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_style_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sass_style_scss__);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: ReferenceError: autoprefixer is not defined\n    at Object.plugins (C:\\Users\\chihye\\Desktop\\FDS\\sass-with-webpack\\webpack.config.js:24:17)\n    at Object.parseOptions (C:\\Users\\chihye\\Desktop\\FDS\\sass-with-webpack\\node_modules\\postcss-loader\\lib\\options.js:5:37)\n    at Promise.resolve.then (C:\\Users\\chihye\\Desktop\\FDS\\sass-with-webpack\\node_modules\\postcss-loader\\lib\\index.js:64:27)\n    at process._tickCallback (internal/process/next_tick.js:103:7)\n    at runLoaders (C:\\Users\\chihye\\Desktop\\FDS\\sass-with-webpack\\node_modules\\webpack\\lib\\NormalModule.js:194:19)\n    at C:\\Users\\chihye\\Desktop\\FDS\\sass-with-webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\Users\\chihye\\Desktop\\FDS\\sass-with-webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\Users\\chihye\\Desktop\\FDS\\sass-with-webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (C:\\Users\\chihye\\Desktop\\FDS\\sass-with-webpack\\node_modules\\postcss-loader\\lib\\index.js:176:71)\n    at process._tickCallback (internal/process/next_tick.js:103:7)");

/***/ })
/******/ ]);