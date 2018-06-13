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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 1. Open cache\n// 2. Cache files\n// 3. Confirm whether all the requored assets are cached or not\n\nvar CACHE_NAME = 'cosmeticsyou-cache-v1';\nvar staticCssPath = '/static/cosmeticsyou/css/';\nvar staticJsPath = '/static/cosmeticsyou/js/';\nvar staticFontPath = '/static/cosmeticsyou/fonts/';\nvar staticImagesPath = '/static/cosmeticsyou/img/';\nvar icons = staticImagesPath + 'icons/';\n\nvar urlsToCache = [staticCssPath + 'main.css', staticCssPath + 'fonts.css', staticJsPath + 'main.js', staticJsPath + 'media.js', staticFontPath + 'Politica/Politica.eot', staticFontPath + 'Politica/Politica.ttf', staticFontPath + 'Politica/Politica.woff', staticFontPath + 'Politica/Politica.woff2', staticFontPath + 'Politica/Politica.svg', staticFontPath + 'Politica/Politica-Bold.eot', staticFontPath + 'Politica/Politica-Bold.ttf', staticFontPath + 'Politica/Politica-Bold.woff', staticFontPath + 'Politica/Politica-Bold.woff2', staticFontPath + 'Politica/Politica-Bold.svg', staticFontPath + 'Politica/Politica-ExtraBold.eot', staticFontPath + 'Politica/Politica-ExtraBold.svg', staticFontPath + 'Politica/Politica-ExtraBold.ttf', staticFontPath + 'Politica/Politica-ExtraBold.woff', staticFontPath + 'Politica/Politica-ExtraBold.woff2', staticFontPath + 'Roboto/Roboto-Regular.eot', staticFontPath + 'Roboto/Roboto-Regular.svg', staticFontPath + 'Roboto/Roboto-Regular.ttf', staticFontPath + 'Roboto/Roboto-Regular.woff', staticFontPath + 'Roboto/Roboto-Regular.woff2', staticFontPath + 'Roboto/Roboto-Bold.eot', staticFontPath + 'Roboto/Roboto-Bold.svg', staticFontPath + 'Roboto/Roboto-Bold.ttf', staticFontPath + 'Roboto/Roboto-Bold.woff', staticFontPath + 'Roboto/Roboto-Bold.woff2', staticFontPath + 'Roboto/Roboto-Italic.eot', staticFontPath + 'Roboto/Roboto-Italic.svg', staticFontPath + 'Roboto/Roboto-Italic.ttf', staticFontPath + 'Roboto/Roboto-Italic.woff', staticFontPath + 'Roboto/Roboto-Italic.woff2', staticImagesPath + 'slides/hike.jpg', staticImagesPath + 'slides/business.jpg', staticImagesPath + 'slides/registration.jpg', staticImagesPath + 'slides/team.jpg', staticImagesPath + 'slides/quest.jpg', staticImagesPath + 'chains/programm.jpg', staticImagesPath + 'chains/group.jpg', staticImagesPath + 'chains/gifts.jpg', staticImagesPath + 'chains/stage.jpg', staticImagesPath + 'steps/w_step_1.jpg', staticImagesPath + 'steps/w_step_2.jpg', staticImagesPath + 'steps/w_step_3.png', staticImagesPath + 'steps/w_step_4.jpg', staticImagesPath + 'steps/m_step_4.jpg', icons + 'shopping_bag.png', icons + 'white_user.png', icons + 'white-phone.png', icons + 'contacts.png', icons + 'callback.png', icons + 'gift.png', icons + 'calendar.png', icons + 'user_card.png', icons + 'phone.png', icons + 'envelope.png', icons + 'city.png', icons + 'region.png', staticImagesPath + 'ladder/putin.svg', staticImagesPath + 'ladder/gentleman.png', staticImagesPath + 'ladder/knight.png', staticImagesPath + 'ladder/warrior.png', staticImagesPath + 'ladder/man.png'];\n\nself.addEventListener('install', function (e) {\n  e.waitUntil(caches.open(CACHE_NAME).then(function (cache) {\n    return cache.addAll(urlsToCache);\n  }));\n});\n\nself.addEventListener('activate', function (e) {\n  e.waitUntil(caches.keys().then(function (keyList) {\n    return Promise.all(keyList.map(function (key) {\n      if (key !== CACHE_NAME) {\n        return caches.delete(key);\n      }\n    }));\n  }));\n\n  return self.clients.claim();\n});\n\nself.addEventListener('fetch', function (event) {\n  event.respondWith(cache.match(event.request).then(function (response) {\n    return response || fetch(event.request);\n  }));\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3N3LmpzP2Q2NmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gMS4gT3BlbiBjYWNoZVxyXG4vLyAyLiBDYWNoZSBmaWxlc1xyXG4vLyAzLiBDb25maXJtIHdoZXRoZXIgYWxsIHRoZSByZXF1b3JlZCBhc3NldHMgYXJlIGNhY2hlZCBvciBub3RcclxuXHJcbnZhciBDQUNIRV9OQU1FID0gJ2Nvc21ldGljc3lvdS1jYWNoZS12MSc7XHJcbnZhciBzdGF0aWNDc3NQYXRoID0gJy9zdGF0aWMvY29zbWV0aWNzeW91L2Nzcy8nO1xyXG52YXIgc3RhdGljSnNQYXRoID0gJy9zdGF0aWMvY29zbWV0aWNzeW91L2pzLyc7XHJcbnZhciBzdGF0aWNGb250UGF0aCA9ICcvc3RhdGljL2Nvc21ldGljc3lvdS9mb250cy8nOyBcclxudmFyIHN0YXRpY0ltYWdlc1BhdGggPSAnL3N0YXRpYy9jb3NtZXRpY3N5b3UvaW1nLyc7IFxyXG52YXIgaWNvbnMgPSBzdGF0aWNJbWFnZXNQYXRoICsgJ2ljb25zLyc7XHJcblxyXG52YXIgdXJsc1RvQ2FjaGUgPSBbXHJcbiAgc3RhdGljQ3NzUGF0aCArICdtYWluLmNzcycsXHJcbiAgc3RhdGljQ3NzUGF0aCArICdmb250cy5jc3MnLFxyXG5cclxuICBzdGF0aWNKc1BhdGggKyAnbWFpbi5qcycsXHJcbiAgc3RhdGljSnNQYXRoICsgJ21lZGlhLmpzJyxcclxuXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUG9saXRpY2EvUG9saXRpY2EuZW90JyxcclxuICBzdGF0aWNGb250UGF0aCArICdQb2xpdGljYS9Qb2xpdGljYS50dGYnLFxyXG4gIHN0YXRpY0ZvbnRQYXRoICsgJ1BvbGl0aWNhL1BvbGl0aWNhLndvZmYnLFxyXG4gIHN0YXRpY0ZvbnRQYXRoICsgJ1BvbGl0aWNhL1BvbGl0aWNhLndvZmYyJyxcclxuICBzdGF0aWNGb250UGF0aCArICdQb2xpdGljYS9Qb2xpdGljYS5zdmcnLFxyXG5cclxuICBzdGF0aWNGb250UGF0aCArICdQb2xpdGljYS9Qb2xpdGljYS1Cb2xkLmVvdCcsXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUG9saXRpY2EvUG9saXRpY2EtQm9sZC50dGYnLFxyXG4gIHN0YXRpY0ZvbnRQYXRoICsgJ1BvbGl0aWNhL1BvbGl0aWNhLUJvbGQud29mZicsXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUG9saXRpY2EvUG9saXRpY2EtQm9sZC53b2ZmMicsXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUG9saXRpY2EvUG9saXRpY2EtQm9sZC5zdmcnLFxyXG5cclxuICBzdGF0aWNGb250UGF0aCArICdQb2xpdGljYS9Qb2xpdGljYS1FeHRyYUJvbGQuZW90JyxcclxuICBzdGF0aWNGb250UGF0aCArICdQb2xpdGljYS9Qb2xpdGljYS1FeHRyYUJvbGQuc3ZnJyxcclxuICBzdGF0aWNGb250UGF0aCArICdQb2xpdGljYS9Qb2xpdGljYS1FeHRyYUJvbGQudHRmJyxcclxuICBzdGF0aWNGb250UGF0aCArICdQb2xpdGljYS9Qb2xpdGljYS1FeHRyYUJvbGQud29mZicsXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUG9saXRpY2EvUG9saXRpY2EtRXh0cmFCb2xkLndvZmYyJyxcclxuXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUm9ib3RvL1JvYm90by1SZWd1bGFyLmVvdCcsXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUm9ib3RvL1JvYm90by1SZWd1bGFyLnN2ZycsXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicsXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUm9ib3RvL1JvYm90by1SZWd1bGFyLndvZmYnLFxyXG4gIHN0YXRpY0ZvbnRQYXRoICsgJ1JvYm90by9Sb2JvdG8tUmVndWxhci53b2ZmMicsXHJcblxyXG4gIHN0YXRpY0ZvbnRQYXRoICsgJ1JvYm90by9Sb2JvdG8tQm9sZC5lb3QnLFxyXG4gIHN0YXRpY0ZvbnRQYXRoICsgJ1JvYm90by9Sb2JvdG8tQm9sZC5zdmcnLFxyXG4gIHN0YXRpY0ZvbnRQYXRoICsgJ1JvYm90by9Sb2JvdG8tQm9sZC50dGYnLFxyXG4gIHN0YXRpY0ZvbnRQYXRoICsgJ1JvYm90by9Sb2JvdG8tQm9sZC53b2ZmJyxcclxuICBzdGF0aWNGb250UGF0aCArICdSb2JvdG8vUm9ib3RvLUJvbGQud29mZjInLFxyXG5cclxuICBzdGF0aWNGb250UGF0aCArICdSb2JvdG8vUm9ib3RvLUl0YWxpYy5lb3QnLFxyXG4gIHN0YXRpY0ZvbnRQYXRoICsgJ1JvYm90by9Sb2JvdG8tSXRhbGljLnN2ZycsXHJcbiAgc3RhdGljRm9udFBhdGggKyAnUm9ib3RvL1JvYm90by1JdGFsaWMudHRmJyxcclxuICBzdGF0aWNGb250UGF0aCArICdSb2JvdG8vUm9ib3RvLUl0YWxpYy53b2ZmJyxcclxuICBzdGF0aWNGb250UGF0aCArICdSb2JvdG8vUm9ib3RvLUl0YWxpYy53b2ZmMicsXHJcblxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnc2xpZGVzL2hpa2UuanBnJyxcclxuICBzdGF0aWNJbWFnZXNQYXRoICsgJ3NsaWRlcy9idXNpbmVzcy5qcGcnLFxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnc2xpZGVzL3JlZ2lzdHJhdGlvbi5qcGcnLFxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnc2xpZGVzL3RlYW0uanBnJyxcclxuICBzdGF0aWNJbWFnZXNQYXRoICsgJ3NsaWRlcy9xdWVzdC5qcGcnLFxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnY2hhaW5zL3Byb2dyYW1tLmpwZycsXHJcbiAgc3RhdGljSW1hZ2VzUGF0aCArICdjaGFpbnMvZ3JvdXAuanBnJyxcclxuICBzdGF0aWNJbWFnZXNQYXRoICsgJ2NoYWlucy9naWZ0cy5qcGcnLFxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnY2hhaW5zL3N0YWdlLmpwZycsXHJcblxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnc3RlcHMvd19zdGVwXzEuanBnJyxcclxuICBzdGF0aWNJbWFnZXNQYXRoICsgJ3N0ZXBzL3dfc3RlcF8yLmpwZycsXHJcbiAgc3RhdGljSW1hZ2VzUGF0aCArICdzdGVwcy93X3N0ZXBfMy5wbmcnLFxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnc3RlcHMvd19zdGVwXzQuanBnJyxcclxuICBzdGF0aWNJbWFnZXNQYXRoICsgJ3N0ZXBzL21fc3RlcF80LmpwZycsXHJcblxyXG4gIGljb25zICsgJ3Nob3BwaW5nX2JhZy5wbmcnLFxyXG4gIGljb25zICsgJ3doaXRlX3VzZXIucG5nJyxcclxuICBpY29ucyArICd3aGl0ZS1waG9uZS5wbmcnLFxyXG4gIGljb25zICsgJ2NvbnRhY3RzLnBuZycsXHJcbiAgaWNvbnMgKyAnY2FsbGJhY2sucG5nJyxcclxuICBpY29ucyArICdnaWZ0LnBuZycsXHJcbiAgaWNvbnMgKyAnY2FsZW5kYXIucG5nJyxcclxuICBpY29ucyArICd1c2VyX2NhcmQucG5nJyxcclxuICBpY29ucyArICdwaG9uZS5wbmcnLFxyXG4gIGljb25zICsgJ2VudmVsb3BlLnBuZycsXHJcbiAgaWNvbnMgKyAnY2l0eS5wbmcnLFxyXG4gIGljb25zICsgJ3JlZ2lvbi5wbmcnLFxyXG5cclxuICBzdGF0aWNJbWFnZXNQYXRoICsgJ2xhZGRlci9wdXRpbi5zdmcnLFxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnbGFkZGVyL2dlbnRsZW1hbi5wbmcnLFxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnbGFkZGVyL2tuaWdodC5wbmcnLFxyXG4gIHN0YXRpY0ltYWdlc1BhdGggKyAnbGFkZGVyL3dhcnJpb3IucG5nJyxcclxuICBzdGF0aWNJbWFnZXNQYXRoICsgJ2xhZGRlci9tYW4ucG5nJ1xyXG5dO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZnVuY3Rpb24oZSkge1xyXG4gIGUud2FpdFVudGlsKFxyXG4gICAgY2FjaGVzXHJcbiAgICAgIC5vcGVuKENBQ0hFX05BTUUpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGNhY2hlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlLmFkZEFsbCh1cmxzVG9DYWNoZSk7XHJcbiAgICAgIH0pXHJcbiAgKTsgIFxyXG59KTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XHJcbiAgZS53YWl0VW50aWwoXHJcbiAgICBjYWNoZXMua2V5cygpLnRoZW4oZnVuY3Rpb24oa2V5TGlzdCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoa2V5TGlzdC5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgaWYgKGtleSAhPT0gQ0FDSEVfTkFNRSkge1xyXG4gICAgICAgICAgcmV0dXJuIGNhY2hlcy5kZWxldGUoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBzZWxmLmNsaWVudHMuY2xhaW0oKTtcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICBldmVudC5yZXNwb25kV2l0aChcclxuICAgIGNhY2hlLm1hdGNoKGV2ZW50LnJlcXVlc3QpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlIHx8IGZldGNoKGV2ZW50LnJlcXVlc3QpO1xyXG4gICAgfSlcclxuICApO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9zdy5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQThFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ })

/******/ });