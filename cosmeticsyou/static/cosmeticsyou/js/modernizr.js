"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (a) {
  return typeof a === "undefined" ? "undefined" : _typeof2(a);
} : function (a) {
  return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a === "undefined" ? "undefined" : _typeof2(a);
};!function (a, b, c) {
  function d(a, b) {
    return ("undefined" == typeof a ? "undefined" : _typeof(a)) === b;
  }function e() {
    var a, b, c, e, f, g, h;for (var i in v) {
      if (v.hasOwnProperty(i)) {
        if (a = [], b = v[i], b.name && (a.push(b.name.toLowerCase()), b.options && b.options.aliases && b.options.aliases.length)) for (c = 0; c < b.options.aliases.length; c++) {
          a.push(b.options.aliases[c].toLowerCase());
        }for (e = d(b.fn, "function") ? b.fn() : b.fn, f = 0; f < a.length; f++) {
          g = a[f], h = g.split("."), 1 === h.length ? x[h[0]] = e : (!x[h[0]] || x[h[0]] instanceof Boolean || (x[h[0]] = new Boolean(x[h[0]])), x[h[0]][h[1]] = e), u.push((e ? "" : "no-") + h.join("-"));
        }
      }
    }
  }function f(a) {
    var b = B.className,
        c = x._config.classPrefix || "";if (C && (b = b.baseVal), x._config.enableJSClass) {
      var d = new RegExp("(^|\\s)" + c + "no-js(\\s|$)");b = b.replace(d, "$1" + c + "js$2");
    }x._config.enableClasses && (b += " " + c + a.join(" " + c), C ? B.className.baseVal = b : B.className = b);
  }function g(a, b) {
    if ("object" == ("undefined" == typeof a ? "undefined" : _typeof(a))) for (var c in a) {
      D(a, c) && g(c, a[c]);
    } else {
      a = a.toLowerCase();var d = a.split("."),
          e = x[d[0]];if (2 == d.length && (e = e[d[1]]), "undefined" != typeof e) return x;b = "function" == typeof b ? b() : b, 1 == d.length ? x[d[0]] = b : (!x[d[0]] || x[d[0]] instanceof Boolean || (x[d[0]] = new Boolean(x[d[0]])), x[d[0]][d[1]] = b), f([(b && 0 != b ? "" : "no-") + d.join("-")]), x._trigger(a, b);
    }return x;
  }function h() {
    return "function" != typeof b.createElement ? b.createElement(arguments[0]) : C ? b.createElementNS.call(b, "http://www.w3.org/2000/svg", arguments[0]) : b.createElement.apply(b, arguments);
  }function i(a) {
    return a.replace(/([A-Z])/g, function (a, b) {
      return "-" + b.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function j(a, b) {
    return !!~("" + a).indexOf(b);
  }function k(a, b) {
    return a - 1 === b || a === b || a + 1 === b;
  }function l() {
    var a = b.body;return a || (a = h(C ? "svg" : "body"), a.fake = !0), a;
  }function m(a, c, d, e) {
    var f,
        g,
        i,
        j,
        k = "modernizr",
        m = h("div"),
        n = l();if (parseInt(d, 10)) for (; d--;) {
      i = h("div"), i.id = e ? e[d] : k + (d + 1), m.appendChild(i);
    }return f = h("style"), f.type = "text/css", f.id = "s" + k, (n.fake ? n : m).appendChild(f), n.appendChild(m), f.styleSheet ? f.styleSheet.cssText = a : f.appendChild(b.createTextNode(a)), m.id = k, n.fake && (n.style.background = "", n.style.overflow = "hidden", j = B.style.overflow, B.style.overflow = "hidden", B.appendChild(n)), g = c(m, a), n.fake ? (n.parentNode.removeChild(n), B.style.overflow = j, B.offsetHeight) : m.parentNode.removeChild(m), !!g;
  }function n(a) {
    return a.replace(/([a-z])-([a-z])/g, function (a, b, c) {
      return b + c.toUpperCase();
    }).replace(/^-/, "");
  }function o(b, d) {
    var e = b.length;if ("CSS" in a && "supports" in a.CSS) {
      for (; e--;) {
        if (a.CSS.supports(i(b[e]), d)) return !0;
      }return !1;
    }if ("CSSSupportsRule" in a) {
      for (var f = []; e--;) {
        f.push("(" + i(b[e]) + ":" + d + ")");
      }return f = f.join(" or "), m("@supports (" + f + ") { #modernizr { position: absolute; } }", function (a) {
        return "absolute" == getComputedStyle(a, null).position;
      });
    }return c;
  }function p(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function q(a, b, c) {
    var e;for (var f in a) {
      if (a[f] in b) return c === !1 ? a[f] : (e = b[a[f]], d(e, "function") ? p(e, c || b) : e);
    }return !1;
  }function r(a, b, e, f) {
    function g() {
      k && (delete V.style, delete V.modElem);
    }if (f = !d(f, "undefined") && f, !d(e, "undefined")) {
      var i = o(a, e);if (!d(i, "undefined")) return i;
    }for (var k, l, m, p, q, r = ["modernizr", "tspan", "samp"]; !V.style && r.length;) {
      k = !0, V.modElem = h(r.shift()), V.style = V.modElem.style;
    }for (m = a.length, l = 0; m > l; l++) {
      if (p = a[l], q = V.style[p], j(p, "-") && (p = n(p)), V.style[p] !== c) {
        if (f || d(e, "undefined")) return g(), "pfx" != b || p;try {
          V.style[p] = e;
        } catch (a) {}if (V.style[p] != q) return g(), "pfx" != b || p;
      }
    }return g(), !1;
  }function s(a, b, c, e, f) {
    var g = a.charAt(0).toUpperCase() + a.slice(1),
        h = (a + " " + S.join(g + " ") + g).split(" ");return d(b, "string") || d(b, "undefined") ? r(h, b, e, f) : (h = (a + " " + Q.join(g + " ") + g).split(" "), q(h, b, c));
  }function t(a, b, d) {
    return s(a, c, c, b, d);
  }var u = [],
      v = [],
      w = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(a, b) {
      var c = this;setTimeout(function () {
        b(c[a]);
      }, 0);
    }, addTest: function addTest(a, b, c) {
      v.push({ name: a, fn: b, options: c });
    }, addAsyncTest: function addAsyncTest(a) {
      v.push({ name: null, fn: a });
    } },
      x = function x() {};x.prototype = w, x = new x(), x.addTest("cookies", function () {
    try {
      b.cookie = "cookietest=1";var a = -1 != b.cookie.indexOf("cookietest=");return b.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", a;
    } catch (a) {
      return !1;
    }
  }), x.addTest("cors", "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest()), x.addTest("customprotocolhandler", function () {
    if (!navigator.registerProtocolHandler) return !1;try {
      navigator.registerProtocolHandler("thisShouldFail");
    } catch (a) {
      return a instanceof TypeError;
    }return !1;
  }), x.addTest("customevent", "CustomEvent" in a && "function" == typeof a.CustomEvent), x.addTest("dataview", "undefined" != typeof DataView && "getFloat64" in DataView.prototype), x.addTest("eventlistener", "addEventListener" in a), x.addTest("geolocation", "geolocation" in navigator), x.addTest("history", function () {
    var b = navigator.userAgent;return (-1 === b.indexOf("Android 2.") && -1 === b.indexOf("Android 4.0") || -1 === b.indexOf("Mobile Safari") || -1 !== b.indexOf("Chrome") || -1 !== b.indexOf("Windows Phone")) && a.history && "pushState" in a.history;
  }), x.addTest("ie8compat", !a.addEventListener && !!b.documentMode && 7 === b.documentMode), x.addTest("json", "JSON" in a && "parse" in JSON && "stringify" in JSON), x.addTest("xdomainrequest", "XDomainRequest" in a);var y = a.CSS;x.addTest("cssescape", !!y && "function" == typeof y.escape);var z = "CSS" in a && "supports" in a.CSS,
      A = "supportsCSS" in a;x.addTest("supports", z || A), x.addTest("microdata", "getItems" in b), x.addTest("picture", "HTMLPictureElement" in a), x.addTest("devicemotion", "DeviceMotionEvent" in a), x.addTest("deviceorientation", "DeviceOrientationEvent" in a), x.addTest("xhrresponsetype", function () {
    if ("undefined" == typeof XMLHttpRequest) return !1;var a = new XMLHttpRequest();return a.open("get", "/", !0), "response" in a;
  }()), x.addTest("xhr2", "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest());var B = b.documentElement;x.addTest("contextmenu", "contextMenu" in B && "HTMLMenuItemElement" in a), x.addTest("cssall", "all" in B.style), x.addTest("classlist", "classList" in B);var C = "svg" === B.nodeName.toLowerCase();C || !function (a, b) {
    function c(a, b) {
      var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
    }function d() {
      var a = t.elements;return "string" == typeof a ? a.split(" ") : a;
    }function e(a, b) {
      var c = t.elements;"string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, j(b);
    }function f(a) {
      var b = s[a[q]];return b || (b = {}, r++, a[q] = r, s[r] = b), b;
    }function g(a, c, d) {
      if (c || (c = b), l) return c.createElement(a);d || (d = f(c));var e;return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e);
    }function h(a, c) {
      if (a || (a = b), l) return a.createDocumentFragment();c = c || f(a);for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) {
        e.createElement(h[g]);
      }return e;
    }function i(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return t.shivMethods ? g(c, a, b) : b.createElem(c);
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
      }) + ");return n}")(t, b.frag);
    }function j(a) {
      a || (a = b);var d = f(a);return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || i(a, d), a;
    }var k,
        l,
        m = "3.7.3",
        n = a.html5 || {},
        o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        q = "_html5shiv",
        r = 0,
        s = {};!function () {
      try {
        var a = b.createElement("a");a.innerHTML = "<xyz></xyz>", k = "hidden" in a, l = 1 == a.childNodes.length || function () {
          b.createElement("a");var a = b.createDocumentFragment();return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement;
        }();
      } catch (a) {
        k = !0, l = !0;
      }
    }();var t = { elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: m, shivCSS: n.shivCSS !== !1, supportsUnknownElements: l, shivMethods: n.shivMethods !== !1, type: "default", shivDocument: j, createElement: g, createDocumentFragment: h, addElements: e };a.html5 = t, j(b), "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports && (module.exports = t);
  }("undefined" != typeof a ? a : this, b);var D;!function () {
    var a = {}.hasOwnProperty;D = d(a, "undefined") || d(a.call, "undefined") ? function (a, b) {
      return b in a && d(a.constructor.prototype[b], "undefined");
    } : function (b, c) {
      return a.call(b, c);
    };
  }(), w._l = {}, w.on = function (a, b) {
    this._l[a] || (this._l[a] = []), this._l[a].push(b), x.hasOwnProperty(a) && setTimeout(function () {
      x._trigger(a, x[a]);
    }, 0);
  }, w._trigger = function (a, b) {
    if (this._l[a]) {
      var c = this._l[a];setTimeout(function () {
        var a, d;for (a = 0; a < c.length; a++) {
          (d = c[a])(b);
        }
      }, 0), delete this._l[a];
    }
  }, x._q.push(function () {
    w.addTest = g;
  }), x.addAsyncTest(function () {
    var a = new Image();a.onerror = function () {
      g("exiforientation", !1, { aliases: ["exif-orientation"] });
    }, a.onload = function () {
      g("exiforientation", 2 !== a.width, { aliases: ["exif-orientation"] });
    }, a.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q==";
  });var E = function () {
    function a(a, b) {
      var e;return !!a && (b && "string" != typeof b || (b = h(b || "div")), a = "on" + a, e = a in b, !e && d && (b.setAttribute || (b = h("div")), b.setAttribute(a, ""), e = "function" == typeof b[a], b[a] !== c && (b[a] = c), b.removeAttribute(a)), e);
    }var d = !("onblur" in b.documentElement);return a;
  }();w.hasEvent = E, x.addTest("inputsearchevent", E("search")), x.addTest("userdata", !!h("div").addBehavior), x.addTest("adownload", !a.externalHost && "download" in h("a")), x.addTest("bgpositionshorthand", function () {
    var a = h("a"),
        b = a.style,
        c = "right 10px bottom 10px";return b.cssText = "background-position: " + c + ";", b.backgroundPosition === c;
  }), x.addTest("multiplebgs", function () {
    var a = h("a").style;return a.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(a.background);
  }), x.addTest("csspointerevents", function () {
    var a = h("a").style;return a.cssText = "pointer-events:auto", "auto" === a.pointerEvents;
  }), x.addTest("cssremunit", function () {
    var a = h("a").style;try {
      a.fontSize = "3rem";
    } catch (a) {}return (/rem/.test(a.fontSize)
    );
  }), x.addTest("rgba", function () {
    var a = h("a").style;return a.cssText = "background-color:rgba(150,255,150,.5)", ("" + a.backgroundColor).indexOf("rgba") > -1;
  }), x.addTest("preserve3d", function () {
    var a = h("a"),
        b = h("a");a.style.cssText = "display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);", b.style.cssText = "display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);", a.appendChild(b), B.appendChild(a);var c = b.getBoundingClientRect();return B.removeChild(a), c.width && c.width < 4;
  }), x.addTest("dataset", function () {
    var a = h("div");return a.setAttribute("data-a-b", "c"), !(!a.dataset || "c" !== a.dataset.aB);
  }), x.addTest("progressbar", h("progress").max !== c), x.addTest("meter", h("meter").max !== c), x.addTest("capture", "capture" in h("input")), x.addTest("fileinput", function () {
    if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;var a = h("input");return a.type = "file", !a.disabled;
  }), x.addTest("formattribute", function () {
    var a,
        c = h("form"),
        d = h("input"),
        e = h("div"),
        f = "formtest" + new Date().getTime(),
        g = !1;c.id = f;try {
      d.setAttribute("form", f);
    } catch (c) {
      b.createAttribute && (a = b.createAttribute("form"), a.nodeValue = f, d.setAttributeNode(a));
    }return e.appendChild(c), e.appendChild(d), B.appendChild(e), g = c.elements && 1 === c.elements.length && d.form == c, e.parentNode.removeChild(e), g;
  }), x.addTest("placeholder", "placeholder" in h("input") && "placeholder" in h("textarea")), x.addTest("imgcrossorigin", "crossOrigin" in h("img")), x.addTest("scriptasync", "async" in h("script")), x.addTest("textareamaxlength", !!("maxLength" in h("textarea")));var F = h("input"),
      G = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
      H = {};x.input = function (b) {
    for (var c = 0, d = b.length; d > c; c++) {
      H[b[c]] = !!(b[c] in F);
    }return H.list && (H.list = !(!h("datalist") || !a.HTMLDataListElement)), H;
  }(G);var I = "search tel url email datetime date month week time datetime-local number range color".split(" "),
      J = {};x.inputtypes = function (a) {
    for (var d, e, f, g = a.length, h = "1)", i = 0; g > i; i++) {
      F.setAttribute("type", d = a[i]), f = "text" !== F.type && "style" in F, f && (F.value = h, F.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(d) && F.style.WebkitAppearance !== c ? (B.appendChild(F), e = b.defaultView, f = e.getComputedStyle && "textfield" !== e.getComputedStyle(F, null).WebkitAppearance && 0 !== F.offsetHeight, B.removeChild(F)) : /^(search|tel)$/.test(d) || (f = /^(url|email)$/.test(d) ? F.checkValidity && F.checkValidity() === !1 : F.value != h)), J[a[i]] = !!f;
    }return J;
  }(I);var K = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];w._prefixes = K, x.addTest("csscalc", function () {
    var a = "width:",
        b = "calc(10px);",
        c = h("a");return c.style.cssText = a + K.join(b + a), !!c.style.length;
  }), x.addTest("cubicbezierrange", function () {
    var a = h("a");return a.style.cssText = K.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "), !!a.style.length;
  }), x.addTest("cssgradients", function () {
    for (var a, b = "background-image:", c = "gradient(linear,left top,right bottom,from(#9f9),to(white));", d = "", e = 0, f = K.length - 1; f > e; e++) {
      a = 0 === e ? "to " : "", d += b + K[e] + "linear-gradient(" + a + "left top, #9f9, white);";
    }x._config.usePrefixes && (d += b + "-webkit-" + c);var g = h("a"),
        i = g.style;return i.cssText = d, ("" + i.backgroundImage).indexOf("gradient") > -1;
  }), x.addTest("opacity", function () {
    var a = h("a").style;return a.cssText = K.join("opacity:.55;"), /^0.55$/.test(a.opacity);
  }), x.addTest("hsla", function () {
    var a = h("a").style;return a.cssText = "background-color:hsla(120,40%,100%,.5)", j(a.backgroundColor, "rgba") || j(a.backgroundColor, "hsla");
  });var L = function L(a) {
    if ("undefined" == typeof XMLHttpRequest) return !1;var b = new XMLHttpRequest();b.open("get", "/", !0);try {
      b.responseType = a;
    } catch (a) {
      return !1;
    }return "response" in b && b.responseType == a;
  };x.addTest("xhrresponsetypearraybuffer", L("arraybuffer")), x.addTest("xhrresponsetypeblob", L("blob")), x.addTest("xhrresponsetypedocument", L("document")), x.addTest("xhrresponsetypejson", L("json")), x.addTest("xhrresponsetypetext", L("text"));var M = function () {
    var b = a.matchMedia || a.msMatchMedia;return b ? function (a) {
      var c = b(a);return c && c.matches || !1;
    } : function (b) {
      var c = !1;return m("@media " + b + " { #modernizr { position: absolute; } }", function (b) {
        c = "absolute" == (a.getComputedStyle ? a.getComputedStyle(b, null) : b.currentStyle).position;
      }), c;
    };
  }();w.mq = M, x.addTest("mediaqueries", M("only all"));var N = w.testStyles = m;x.addTest("unicoderange", function () {
    return x.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}', function (a) {
      for (var b = [".", ".", "m", "m"], c = 0; c < b.length; c++) {
        var d = h("span");d.innerHTML = b[c], d.className = c % 2 ? "mono" : "", a.appendChild(d), b[c] = d.clientWidth;
      }return b[0] !== b[1] && b[2] === b[3];
    });
  }), x.addTest("unicode", function () {
    var a,
        b = h("span"),
        c = h("span");return N("#modernizr{font-family:Arial,sans;font-size:300em;}", function (d) {
      b.innerHTML = C ? "妇" : "&#5987;", c.innerHTML = C ? "☆" : "&#9734;", d.appendChild(b), d.appendChild(c), a = "offsetWidth" in b && b.offsetWidth !== c.offsetWidth;
    }), a;
  }), x.addTest("checked", function () {
    return N("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function (a) {
      var b = h("input");return b.setAttribute("type", "checkbox"), b.setAttribute("checked", "checked"), a.appendChild(b), 20 === b.offsetLeft;
    });
  });var O = function () {
    var a = navigator.userAgent,
        b = a.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
        c = a.match(/w(eb)?osbrowser/gi),
        d = a.match(/windows phone/gi) && a.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
        e = 533 > b && a.match(/android/gi);return c || e || d;
  }();O ? x.addTest("fontface", !1) : N('@font-face {font-family:"font";src:url("https://")}', function (a, c) {
    var d = b.getElementById("smodernizr"),
        e = d.sheet || d.styleSheet,
        f = e ? e.cssRules && e.cssRules[0] ? e.cssRules[0].cssText : e.cssText || "" : "",
        g = /src/i.test(f) && 0 === f.indexOf(c.split(" ")[0]);x.addTest("fontface", g);
  }), N('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function (a) {
    x.addTest("generatedcontent", a.offsetHeight >= 7);
  }), x.addTest("cssinvalid", function () {
    return N("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}", function (a) {
      var b = h("input");return b.required = !0, a.appendChild(b), b.clientWidth > 10;
    });
  }), N("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function (a) {
    x.addTest("lastchild", a.lastChild.offsetWidth > a.firstChild.offsetWidth);
  }, 2), N("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function (a) {
    for (var b = a.getElementsByTagName("div"), c = !0, d = 0; 5 > d; d++) {
      c = c && b[d].offsetWidth === d % 2 + 1;
    }x.addTest("nthchild", c);
  }, 5), N("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function (b) {
    var c = b.firstChild;c.innerHTML = "This is a text written in Arial", x.addTest("subpixelfont", !!a.getComputedStyle && "44px" !== a.getComputedStyle(c, null).getPropertyValue("width"));
  }, 1, ["subpixel"]), x.addTest("cssvalid", function () {
    return N("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function (a) {
      var b = h("input");return a.appendChild(b), b.clientWidth > 10;
    });
  }), N("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function (b) {
    var c = b.childNodes[2],
        d = b.childNodes[1],
        e = b.childNodes[0],
        f = parseInt((d.offsetWidth - d.clientWidth) / 2, 10),
        g = e.clientWidth / 100,
        h = e.clientHeight / 100,
        i = parseInt(50 * Math.max(g, h), 10),
        j = parseInt((a.getComputedStyle ? getComputedStyle(c, null) : c.currentStyle).width, 10);x.addTest("cssvmaxunit", k(i, j) || k(i, j - f));
  }, 3), N("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function (b) {
    var c = b.childNodes[2],
        d = b.childNodes[1],
        e = b.childNodes[0],
        f = parseInt((d.offsetWidth - d.clientWidth) / 2, 10),
        g = e.clientWidth / 100,
        h = e.clientHeight / 100,
        i = parseInt(50 * Math.min(g, h), 10),
        j = parseInt((a.getComputedStyle ? getComputedStyle(c, null) : c.currentStyle).width, 10);x.addTest("cssvminunit", k(i, j) || k(i, j - f));
  }, 3), N("#modernizr { width: 50vw; }", function (b) {
    var c = parseInt(a.innerWidth / 2, 10),
        d = parseInt((a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).width, 10);x.addTest("cssvwunit", d == c);
  }), x.addTest("oninput", function () {
    var c,
        d = h("input");if (d.setAttribute("oninput", "return"), E("oninput", B) || "function" == typeof d.oninput) return !0;try {
      var e = b.createEvent("KeyboardEvent");c = !1;var f = function f(a) {
        c = !0, a.preventDefault(), a.stopPropagation();
      };e.initKeyEvent("keypress", !0, !0, a, !1, !1, !1, !1, 0, "e".charCodeAt(0)), B.appendChild(d), d.addEventListener("input", f, !1), d.focus(), d.dispatchEvent(e), d.removeEventListener("input", f, !1), B.removeChild(d);
    } catch (a) {
      c = !1;
    }return c;
  }), x.addTest("formvalidation", function () {
    var b = h("form");if (!("checkValidity" in b && "addEventListener" in b)) return !1;if ("reportValidity" in b) return !0;var c,
        d = !1;return x.formvalidationapi = !0, b.addEventListener("submit", function (b) {
      (!a.opera || a.operamini) && b.preventDefault(), b.stopPropagation();
    }, !1), b.innerHTML = '<input name="modTest" required="required" /><button></button>', N("#modernizr form{position:absolute;top:-99999em}", function (a) {
      a.appendChild(b), c = b.getElementsByTagName("input")[0], c.addEventListener("invalid", function (a) {
        d = !0, a.preventDefault(), a.stopPropagation();
      }, !1), x.formvalidationmessage = !!c.validationMessage, b.getElementsByTagName("button")[0].click();
    }), d;
  });var P = "Moz O ms Webkit",
      Q = w._config.usePrefixes ? P.toLowerCase().split(" ") : [];w._domPrefixes = Q;var R = function R(a, b) {
    var c = !1,
        d = h("div"),
        e = d.style;if (a in e) {
      var f = Q.length;for (e[a] = b, c = e[a]; f-- && !c;) {
        e[a] = "-" + Q[f] + "-" + b, c = e[a];
      }
    }return "" === c && (c = !1), c;
  };w.prefixedCSSValue = R, x.addTest("fileinputdirectory", function () {
    var a = h("input"),
        b = "directory";if (a.type = "file", b in a) return !0;for (var c = 0, d = Q.length; d > c; c++) {
      if (Q[c] + b in a) return !0;
    }return !1;
  });var S = w._config.usePrefixes ? P.split(" ") : [];w._cssomPrefixes = S;var T = function T(b) {
    var d,
        e = K.length,
        f = a.CSSRule;if ("undefined" == typeof f) return c;if (!b) return !1;if (b = b.replace(/^@/, ""), d = b.replace(/-/g, "_").toUpperCase() + "_RULE", d in f) return "@" + b;for (var g = 0; e > g; g++) {
      var h = K[g],
          i = h.toUpperCase() + "_" + d;if (i in f) return "@-" + h.toLowerCase() + "-" + b;
    }return !1;
  };w.atRule = T, x.addTest("canvas", function () {
    var a = h("canvas");return !(!a.getContext || !a.getContext("2d"));
  }), x.addTest("canvastext", function () {
    return x.canvas !== !1 && "function" == typeof h("canvas").getContext("2d").fillText;
  }), x.addTest("emoji", function () {
    if (!x.canvastext) return !1;var b = a.devicePixelRatio || 1,
        c = 12 * b,
        d = h("canvas"),
        e = d.getContext("2d");return e.fillStyle = "#f00", e.textBaseline = "top", e.font = "32px Arial", e.fillText("🐨", 0, 0), 0 !== e.getImageData(c, c, 1, 1).data[0];
  });var U = { elem: h("modernizr") };x._q.push(function () {
    delete U.elem;
  });var V = { style: U.elem.style };x._q.unshift(function () {
    delete V.style;
  }), w.testProp = function (a, b, d) {
    return r([a], c, b, d);
  }, w.testAllProps = s, w.testAllProps = t, x.addTest("ligatures", t("fontFeatureSettings", '"liga" 1')), x.addTest("cssanimations", t("animationName", "a", !0)), x.addTest("backgroundcliptext", function () {
    return t("backgroundClip", "text");
  }), x.addTest("bgpositionxy", function () {
    return t("backgroundPositionX", "3px", !0) && t("backgroundPositionY", "5px", !0);
  }), x.addTest("bgrepeatround", t("backgroundRepeat", "round")), x.addTest("bgrepeatspace", t("backgroundRepeat", "space")), x.addTest("backgroundsize", t("backgroundSize", "100%", !0)), x.addTest("bgsizecover", t("backgroundSize", "cover")), x.addTest("borderimage", t("borderImage", "url() 1", !0)), x.addTest("borderradius", t("borderRadius", "0px", !0)), x.addTest("boxshadow", t("boxShadow", "1px 1px", !0)), x.addTest("boxsizing", t("boxSizing", "border-box", !0) && (b.documentMode === c || b.documentMode > 7)), function () {
    x.addTest("csscolumns", function () {
      var a = !1,
          b = t("columnCount");try {
        (a = !!b) && (a = new Boolean(a));
      } catch (a) {}return a;
    });for (var a, b, c = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], d = 0; d < c.length; d++) {
      a = c[d].toLowerCase(), b = t("column" + c[d]), ("breakbefore" === a || "breakafter" === a || "breakinside" == a) && (b = b || t(c[d])), x.addTest("csscolumns." + a, b);
    }
  }(), x.addTest("ellipsis", t("textOverflow", "ellipsis")), x.addTest("cssfilters", function () {
    if (x.supports) return t("filter", "blur(2px)");var a = h("a");return a.style.cssText = K.join("filter:blur(2px); "), !!a.style.length && (b.documentMode === c || b.documentMode > 9);
  }), x.addTest("flexbox", t("flexBasis", "1px", !0)), x.addTest("flexboxlegacy", t("boxDirection", "reverse", !0)), x.addTest("flexboxtweener", t("flexAlign", "end", !0)), x.addTest("flexwrap", t("flexWrap", "wrap", !0)), x.addAsyncTest(function () {
    function c() {
      function e() {
        try {
          var a = h("div"),
              c = h("span"),
              d = a.style,
              e = 0,
              f = 0,
              g = !1,
              i = b.body.firstElementChild || b.body.firstChild;return a.appendChild(c), c.innerHTML = "Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.", b.body.insertBefore(a, i), d.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;", e = c.offsetHeight, f = c.offsetWidth, d.cssText = "position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;" + K.join("hyphens:auto; "), g = c.offsetHeight != e || c.offsetWidth != f, b.body.removeChild(a), a.removeChild(c), g;
        } catch (a) {
          return !1;
        }
      }function f(a, c) {
        try {
          var d = h("div"),
              e = h("span"),
              f = d.style,
              g = 0,
              i = !1,
              j = !1,
              k = !1,
              l = b.body.firstElementChild || b.body.firstChild;return f.cssText = "position:absolute;top:0;left:0;overflow:visible;width:1.25em;", d.appendChild(e), b.body.insertBefore(d, l), e.innerHTML = "mm", g = e.offsetHeight, e.innerHTML = "m" + a + "m", j = e.offsetHeight > g, c ? (e.innerHTML = "m<br />m", g = e.offsetWidth, e.innerHTML = "m" + a + "m", k = e.offsetWidth > g) : k = !0, j === !0 && k === !0 && (i = !0), b.body.removeChild(d), d.removeChild(e), i;
        } catch (a) {
          return !1;
        }
      }function i(c) {
        try {
          var d,
              e = h("input"),
              f = h("div"),
              g = "lebowski",
              i = !1,
              j = b.body.firstElementChild || b.body.firstChild;f.innerHTML = g + c + g, b.body.insertBefore(f, j), b.body.insertBefore(e, f), e.setSelectionRange ? (e.focus(), e.setSelectionRange(0, 0)) : e.createTextRange && (d = e.createTextRange(), d.collapse(!0), d.moveEnd("character", 0), d.moveStart("character", 0), d.select());try {
            a.find ? i = a.find(g + g) : (d = a.self.document.body.createTextRange(), i = d.findText(g + g));
          } catch (a) {
            i = !1;
          }return b.body.removeChild(f), b.body.removeChild(e), i;
        } catch (a) {
          return !1;
        }
      }return b.body || b.getElementsByTagName("body")[0] ? (g("csshyphens", function () {
        if (!t("hyphens", "auto", !0)) return !1;try {
          return e();
        } catch (a) {
          return !1;
        }
      }), g("softhyphens", function () {
        try {
          return f("&#173;", !0) && f("&#8203;", !1);
        } catch (a) {
          return !1;
        }
      }), void g("softhyphensfind", function () {
        try {
          return i("&#173;") && i("&#8203;");
        } catch (a) {
          return !1;
        }
      })) : void setTimeout(c, d);
    }var d = 300;setTimeout(c, d);
  }), x.addTest("cssmask", t("maskRepeat", "repeat-x", !0)), x.addTest("overflowscrolling", t("overflowScrolling", "touch", !0)), x.addTest("shapes", t("shapeOutside", "content-box", !0)), x.addTest("csstransforms", function () {
    return -1 === navigator.userAgent.indexOf("Android 2.") && t("transform", "scale(1)", !0);
  }), x.addTest("csstransforms3d", function () {
    var a = !!t("perspective", "1px", !0),
        b = x._config.usePrefixes;if (a && (!b || "webkitPerspective" in B.style)) {
      var c,
          d = "#modernizr{width:0;height:0}";x.supports ? c = "@supports (perspective: 1px)" : (c = "@media (transform-3d)", b && (c += ",(-webkit-transform-3d)")), c += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", N(d + c, function (b) {
        a = 7 === b.offsetWidth && 18 === b.offsetHeight;
      });
    }return a;
  }), x.addTest("csstransitions", t("transition", "all", !0)), x.addTest("csspseudotransitions", function () {
    var b = !1;if (!x.csstransitions || !a.getComputedStyle) return b;var c = '#modernizr:before { content:" "; font-size:5px;' + x._prefixes.join("transition:0s 100s;") + "}#modernizr.trigger:before { font-size:10px; }";return x.testStyles(c, function (c) {
      a.getComputedStyle(c, ":before").getPropertyValue("font-size"), c.className += "trigger", b = "5px" === a.getComputedStyle(c, ":before").getPropertyValue("font-size");
    }), b;
  });var W = w.prefixed = function (a, b, c) {
    return 0 === a.indexOf("@") ? T(a) : (-1 != a.indexOf("-") && (a = n(a)), b ? s(a, b, c) : s(a, "pfx"));
  },
      X = (w.prefixedCSS = function (a) {
    var b = W(a);return b && i(b);
  }, W("crypto", a));x.addTest("crypto", !!W("subtle", X)), x.addTest("forcetouch", function () {
    return !!E(W("mouseforcewillbegin", a, !1), a) && MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
  }), x.addTest("intl", !!W("Intl", a));var Y,
      X = W("crypto", a);if (X && "getRandomValues" in X && "Uint32Array" in a) {
    var Z = new Uint32Array(10),
        $ = X.getRandomValues(Z);Y = $ && d($[0], "number");
  }x.addTest("getrandomvalues", !!Y), x.addTest("backgroundblendmode", W("backgroundBlendMode", "text")), x.addTest("objectfit", !!W("objectFit"), { aliases: ["object-fit"] }), x.addTest("wrapflow", function () {
    var a = W("wrapFlow");if (!a || C) return !1;var b = a.replace(/([A-Z])/g, function (a, b) {
      return "-" + b.toLowerCase();
    }).replace(/^ms-/, "-ms-"),
        d = h("div"),
        e = h("div"),
        f = h("span");e.style.cssText = "position: absolute; left: 50px; width: 100px; height: 20px;" + b + ":end;", f.innerText = "X", d.appendChild(e), d.appendChild(f), B.appendChild(d);var g = f.offsetLeft;return B.removeChild(d), e = f = d = c, 150 == g;
  }), x.addTest("requestautocomplete", !!W("requestAutocomplete", h("form")));var _;try {
    _ = W("indexedDB", a);
  } catch (a) {}x.addTest("indexeddb", !!_), _ && x.addTest("indexeddb.deletedatabase", "deleteDatabase" in _), x.addAsyncTest(function () {
    var b,
        c,
        d,
        e = "detect-blob-support",
        f = !1;try {
      b = W("indexedDB", a);
    } catch (a) {}if (!x.indexeddb || !x.indexeddb.deletedatabase) return !1;try {
      b.deleteDatabase(e).onsuccess = function () {
        c = b.open(e, 1), c.onupgradeneeded = function () {
          c.result.createObjectStore("store");
        }, c.onsuccess = function () {
          d = c.result;try {
            d.transaction("store", "readwrite").objectStore("store").put(new Blob(), "key"), f = !0;
          } catch (a) {
            f = !1;
          } finally {
            g("indexeddbblob", f), d.close(), b.deleteDatabase(e);
          }
        };
      };
    } catch (a) {
      g("indexeddbblob", !1);
    }
  }), e(), f(u), delete w.addTest, delete w.addAsyncTest;for (var aa = 0; aa < x._q.length; aa++) {
    x._q[aa]();
  }a.Modernizr = x;
}(window, document);
//# sourceMappingURL=modernizr.js.map