!function(o){function t(c){if(i[c])return i[c].exports;var e=i[c]={i:c,l:!1,exports:{}};return o[c].call(e.exports,e,e.exports,t),e.l=!0,e.exports}var i={};t.m=o,t.c=i,t.i=function(o){return o},t.d=function(o,i,c){t.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:c})},t.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(i,"a",i),i},t.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},t.p="js/",t(t.s=9)}({9:function(o,t,i){"use strict";var c="/static/cosmeticsyou/fonts/",e=["/static/cosmeticsyou/css/main.css","/static/cosmeticsyou/css/fonts.css","/static/cosmeticsyou/js/main.js","/static/cosmeticsyou/js/registration.js",c+"Politica/Politica.eot",c+"Politica/Politica.ttf",c+"Politica/Politica.woff",c+"Politica/Politica.woff2",c+"Politica/Politica.svg",c+"Politica/Politica-Bold.eot",c+"Politica/Politica-Bold.ttf",c+"Politica/Politica-Bold.woff",c+"Politica/Politica-Bold.woff2",c+"Politica/Politica-Bold.svg",c+"Politica/Politica-ExtraBold.eot",c+"Politica/Politica-ExtraBold.svg",c+"Politica/Politica-ExtraBold.ttf",c+"Politica/Politica-ExtraBold.woff",c+"Politica/Politica-ExtraBold.woff2",c+"Roboto/Roboto-Regular.eot",c+"Roboto/Roboto-Regular.svg",c+"Roboto/Roboto-Regular.ttf",c+"Roboto/Roboto-Regular.woff",c+"Roboto/Roboto-Regular.woff2",c+"Roboto/Roboto-Bold.eot",c+"Roboto/Roboto-Bold.svg",c+"Roboto/Roboto-Bold.ttf",c+"Roboto/Roboto-Bold.woff",c+"Roboto/Roboto-Bold.woff2",c+"Roboto/Roboto-Italic.eot",c+"Roboto/Roboto-Italic.svg",c+"Roboto/Roboto-Italic.ttf",c+"Roboto/Roboto-Italic.woff",c+"Roboto/Roboto-Italic.woff2"];self.addEventListener("install",function(o){o.waitUntil(caches.open("cosmeticsyou-cache-v1").then(function(o){return o.addAll(e)}).catch(function(o){console.log(o,1)}))}),self.addEventListener("fetch",function(o){o.respondWith(caches.match(o.request).then(function(t){if(t)return t;var i=o.request.clone();return fetch(i).then(function(t){if(!t||200!==t.status||"basic"!==t.type)return t;var i=t.clone();return caches.open("cosmeticsyou-cache-v1").then(function(t){t.put(o.request,i)}),t}).catch(function(o){console.log(o,3)})}).catch(function(o){console.log(o,2)}))})}});