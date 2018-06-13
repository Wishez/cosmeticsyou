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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n\n  var youtube = document.querySelectorAll('.youtube');\n\n  for (var i = 0; i < youtube.length; i++) {\n\n    var source = 'https://img.youtube.com/vi/' + youtube[i].dataset.embed + '/sddefault.jpg';\n\n    var image = new Image();\n    image.src = source;\n    image.addEventListener('load', function () {\n      youtube[i].appendChild(image);\n    }(i));\n\n    youtube[i].addEventListener('click', function () {\n\n      var iframe = document.createElement('iframe');\n\n      iframe.setAttribute('frameborder', '0');\n      iframe.setAttribute('allowfullscreen', '');\n      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed + '?rel=0&showinfo=0&autoplay=1');\n\n      this.innerHTML = '';\n      this.appendChild(iframe);\n    });\n  };\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL21lZGlhLmpzP2UxMWMiXSwic291cmNlc0NvbnRlbnQiOlsiKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHlvdXR1YmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLnlvdXR1YmUnICk7XHJcblx0XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB5b3V0dWJlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcclxuICAgIHZhciBzb3VyY2UgPSAnaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJysgeW91dHViZVtpXS5kYXRhc2V0LmVtYmVkICsnL3NkZGVmYXVsdC5qcGcnO1xyXG5cdFx0XHJcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHlvdXR1YmVbIGkgXS5hcHBlbmRDaGlsZCggaW1hZ2UgKTtcclxuICAgIH0oIGkgKSApO1xyXG5cclxuICAgIHlvdXR1YmVbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2lmcmFtZScgKTtcclxuXHJcbiAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoICdmcmFtZWJvcmRlcicsICcwJyApO1xyXG4gICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCAnYWxsb3dmdWxsc2NyZWVuJywgJycgKTtcclxuICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSggJ3NyYycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nKyB0aGlzLmRhdGFzZXQuZW1iZWQgKyc/cmVsPTAmc2hvd2luZm89MCZhdXRvcGxheT0xJyApO1xyXG5cclxuICAgICAgdGhpcy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgdGhpcy5hcHBlbmRDaGlsZCggaWZyYW1lICk7XHJcbiAgICB9ICk7XHRcclxuICB9O1xyXG5cdFxyXG59ICkoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9tZWRpYS5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ })

/******/ });