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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 1. Open cache\n// 2. Cache files\n// 3. Confirm whether all the requored assets are cached or not\n\nvar CACHE_NAME = 'cosmeticsyou-cache-v1';\nvar staticCssPath = '/static/cosmeticsyou/js/';\nvar staticJsPath = '/static/cosmeticsyou/';\n\nvar urlsToCache = [staticCssPath + '/main.css', staticJsPath + '/main.js', staticJsPath + '/modernizr.js'];\n\nself.addEventListener('install', function (e) {\n  e.waitUntil(caches.open(CACHE_NAME).then(function (cache) {\n    return cache.addAll(urlsToCache);\n  }).catch(function (err) {\n    console.log(err, 1);\n  }));\n});\n\nself.addEventListener('fetch', function (e) {\n  e.respondWith(caches.match(e.request).then(function (resp) {\n    if (resp) return resp;\n\n    var fetchRequest = e.request.clone();\n\n    return fetch(fetchRequest).then(function (resp) {\n      if (!resp || resp.status !== 200 || resp.type !== 'basic') {\n        return resp;\n      }\n      var responseToCache = resp.clone();\n\n      caches.open(CACHE_NAME).then(function (cache) {\n        cache.put(e.request, responseToCache);\n      });\n\n      return resp;\n    }).catch(function (err) {\n      console.log(err, 3);\n    });\n  }).catch(function (err) {\n    console.log(err, 2);\n  }));\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvc3cuanM/ZDY2YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAxLiBPcGVuIGNhY2hlXHJcbi8vIDIuIENhY2hlIGZpbGVzXHJcbi8vIDMuIENvbmZpcm0gd2hldGhlciBhbGwgdGhlIHJlcXVvcmVkIGFzc2V0cyBhcmUgY2FjaGVkIG9yIG5vdFxyXG5cclxudmFyIENBQ0hFX05BTUUgPSAnY29zbWV0aWNzeW91LWNhY2hlLXYxJztcclxudmFyIHN0YXRpY0Nzc1BhdGggPSAnL3N0YXRpYy9jb3NtZXRpY3N5b3UvanMvJztcclxudmFyIHN0YXRpY0pzUGF0aCA9ICcvc3RhdGljL2Nvc21ldGljc3lvdS8nOyBcclxuXHJcbnZhciB1cmxzVG9DYWNoZSA9IFtcclxuICBzdGF0aWNDc3NQYXRoICsgJy9tYWluLmNzcycsXHJcbiAgc3RhdGljSnNQYXRoICsgJy9tYWluLmpzJyxcclxuICBzdGF0aWNKc1BhdGggKyAnL21vZGVybml6ci5qcydcclxuXTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGZ1bmN0aW9uKGUpIHtcclxuICBlLndhaXRVbnRpbChcclxuICAgIGNhY2hlc1xyXG4gICAgICAub3BlbihDQUNIRV9OQU1FKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihjYWNoZSkge1xyXG4gICAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwodXJsc1RvQ2FjaGUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLCAxKTtcclxuICAgICAgfSlcclxuICApO1x0XHJcbn0pO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGZ1bmN0aW9uKGUpIHtcclxuICBlLnJlc3BvbmRXaXRoKFxyXG4gICAgY2FjaGVzLm1hdGNoKGUucmVxdWVzdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xyXG4gICAgICAgIGlmIChyZXNwKSBcclxuICAgICAgICAgIHJldHVybiByZXNwO1xyXG5cclxuICAgICAgICB2YXIgZmV0Y2hSZXF1ZXN0ID0gZS5yZXF1ZXN0LmNsb25lKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaChmZXRjaFJlcXVlc3QpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwKSB7XHJcbiAgICAgICAgICAgIGlmKCFyZXNwIHx8IHJlc3Auc3RhdHVzICE9PSAyMDAgfHwgcmVzcC50eXBlICE9PSAnYmFzaWMnKSB7XHJcblx0XHRcdCAgICAgICAgICAgICAgcmV0dXJuIHJlc3A7XHJcblx0XHRcdCAgICAgICAgICAgIH1cclxuXHRcdFx0ICAgICAgICAgICAgdmFyIHJlc3BvbnNlVG9DYWNoZSA9IHJlc3AuY2xvbmUoKTtcclxuXHRcdFx0ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhY2hlcy5vcGVuKENBQ0hFX05BTUUpXHJcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oY2FjaGUpIHtcclxuICAgICAgICAgICAgICAgIGNhY2hlLnB1dChlLnJlcXVlc3QsIHJlc3BvbnNlVG9DYWNoZSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgMyk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLCAyKTtcclxuICAgICAgfSlcclxuICApO1xyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvc3cuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ })

/******/ });