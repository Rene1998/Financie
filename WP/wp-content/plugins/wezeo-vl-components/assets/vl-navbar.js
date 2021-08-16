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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "582b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".btn[data-v-207b8d39]{font-weight:300}.z-btn[data-v-207b8d39]{border-radius:0;padding:10px 15px;border-bottom:3px solid transparent}.z-btn[data-v-207b8d39]:hover{border-bottom:3px solid #1eaee1;border-radius:0}.z-btn:hover .nav-link[data-v-207b8d39]{color:#1eaee1!important}.z-btn[data-v-207b8d39]:focus{box-shadow:none;border-bottom:3px solid #1eaee1}.card[data-v-207b8d39]{border:none}.card .card-img-top[data-v-207b8d39]{border-radius:4px}*[data-v-207b8d39]{font-family:Helvetica Neue,sans-serif!important}.hardcode-text h4[data-v-207b8d39]{font-size:24px;font-weight:700}.hardcode-text p[data-v-207b8d39]{font-size:18px;font-weight:400}.timestamp[data-v-207b8d39]{color:#898989}.fake[data-v-207b8d39]{opacity:.2}.navbar[data-v-207b8d39]{height:63px;background:#fff;justify-content:space-between}.navbar .pre-skoly[data-v-207b8d39]{min-width:120px!important}.navbar .osobne-financie[data-v-207b8d39]{box-shadow:none!important}.navbar .nav-link[data-v-207b8d39]:hover{color:#1eaee1!important}.navbar hr[data-v-207b8d39]{width:30px;height:0;border:0 5px solid #f3f4f5;transform:rotate(90deg)}.navbar .navbar-collapse[data-v-207b8d39]{flex-grow:unset}.hover-none[data-v-207b8d39]:hover{border-color:transparent!important}[data-v-207b8d39] li.nav-item.d-sm-none.d-md-block.active :focus-visible{display:none!important;outline:none!important;box-shadow:none!important}[data-v-207b8d39] a{font-weight:400!important;font-size:16px!important;box-shadow:none}[data-v-207b8d39] a .bi{font-size:20px}[data-v-207b8d39] .navbar-nav>.osobne-financie:hover{border-bottom:3px solid #1eaee1}[data-v-207b8d39] .navbar-nav>.osobne-financie:hover>a{color:#1eaee1!important}[data-v-207b8d39] .navbar-nav>.pre-skoly:hover{border-bottom:3px solid #ffa800}[data-v-207b8d39] .navbar-nav>.pre-skoly:hover>a{color:#ffa800!important}[data-v-207b8d39] .navbar-nav>.pre-skoly .dropdown-item{color:#192949!important}[data-v-207b8d39] .navbar-nav>.pre-skoly .dropdown-item:hover{color:#ffa800!important}[data-v-207b8d39] .nav-item{border:1px solid transparent;border-bottom:3px solid transparent;border-radius:0}[data-v-207b8d39] .nav-item a{height:61px;padding:18px 15px;border:none;border-radius:0;box-shadow:none}[data-v-207b8d39] .nav-item a:hover{border-bottom:none}[data-v-207b8d39] .activeOsobne-financie{border-bottom:3px solid #1eaee1}[data-v-207b8d39] .activeOsobne-financie a{color:#1eaee1!important}[data-v-207b8d39] .activePre-skoly{border-bottom:3px solid #ffa800}[data-v-207b8d39] .activePre-skoly a{color:#ffa800!important}[data-v-207b8d39] .activePre-skoly .dropdown-item{color:#192949!important}[data-v-207b8d39] .activePre-skoly .dropdown-item:hover{color:#ffa800!important}[data-v-207b8d39] a{color:#192949!important}[data-v-207b8d39] .dropdown-toggle:after{display:none}[data-v-207b8d39] .dropdown-menu{min-width:230px!important;min-height:138px!important;border:none;border-radius:0!important;box-shadow:0 10px 10px -10px rgba(33,35,38,.1)}[data-v-207b8d39] .dropdown-menu a{padding:4px 24px!important;margin:6px 0 0!important;max-height:32px!important}[data-v-207b8d39] a:hover{background-color:#fff!important}[data-v-207b8d39] .dropdown-item{margin-top:6px}[data-v-207b8d39] .nav-link:focus{outline:none!important}@media only screen and (max-width:420px){.navbar[data-v-207b8d39]{max-width:420px}.osobne-financie[data-v-207b8d39]{display:none!important}.pre-skoly[data-v-207b8d39]{max-width:92px}.logo[data-v-207b8d39]{width:102px;height:27px}}@media only screen and (max-width:350px){.navbar[data-v-207b8d39]{max-width:350}.osobne-financie[data-v-207b8d39]{display:none!important}.pre-skoly[data-v-207b8d39]{max-width:92px}.logo[data-v-207b8d39]{width:102px;height:27px}}.dropdown:hover>.dropdown-menu[data-v-207b8d39]{display:block}", "",{"version":3,"sources":["/Users/marko/Documents/GitHub/financie/app/src/plugins/financie/_theme/bootsrap/buttons.scss","/Users/marko/Documents/GitHub/financie/app/src/plugins/financie/_theme/bootsrap/card.scss","/Users/marko/Documents/GitHub/financie/app/src/plugins/financie/_theme/fonts.scss","/Users/marko/Documents/GitHub/financie/app/src/plugins/financie/_theme/index.scss","/Users/marko/Documents/GitHub/financie/app/src/vis-layout-webcomponents/vl-navbar/vl-navbar.vue"],"names":[],"mappings":"AAAA,sBACE,eAAgB,CACjB,wBAGC,eAAkB,CAClB,iBAAkB,CAClB,mCAAoC,CAHtC,8BAKI,+BAAgC,CAChC,eAAkB,CANtB,wCAQM,uBAAyB,CAR/B,8BAYI,eAAgB,CAChB,+BAAgC,CACjC,uBCjBC,WAAY,CADhB,qCAGQ,iBAAkB,CACrB,mBCHH,+CAAmD,CACpD,mCAIG,cAAe,CACf,eAAgB,CAHpB,kCAMI,cAAe,CACf,eAAgB,CACjB,4BAGD,aAAc,CCZhB,uBACC,UAAY,CCwDb,yBACI,WAAY,CACZ,eAAgB,CAChB,6BAA8B,CAHlC,oCAOQ,yBAA2B,CAPnC,0CAWQ,yBAA2B,CAXnC,yCAgBQ,uBAAyB,CAhBjC,4BAoBQ,UAAW,CACX,QAAW,CACX,0BAA4B,CAC5B,uBAAwB,CAvBhC,0CA2BQ,eAAgB,CACnB,mCAKG,kCAAoC,CACvC,yEAMD,sBAAwB,CACxB,sBAAwB,CACxB,yBAA2B,CAE9B,oBAGG,yBAA2B,CAC3B,wBAA0B,CAC1B,eAAgB,CAHnB,wBAMO,cAAe,CAhBvB,qDAuBY,+BAAgC,CAvB5C,uDA0BgB,uBAAyB,CA1BzC,+CAkCY,+BAAgC,CAlC5C,iDAqCgB,uBAAyB,CArCzC,wDAyCY,uBAAyB,CAzCrC,8DA2CgB,uBAAyB,CA3CzC,4BAoDI,4BAA6B,CAC7B,mCAAoC,CACpC,eAAkB,CAtDtB,8BAyDQ,WAAY,CACZ,iBAAkB,CAClB,WAAY,CACZ,eAAgB,CAChB,eAAgB,CA7DxB,oCAkEY,kBAAmB,CAlE/B,yCAwEI,+BAAgC,CAxEpC,2CA2EQ,uBAAyB,CA3EjC,mCAgFI,+BAAgC,CAhFpC,qCAmFQ,uBAAwB,CAnFhC,kDAuFQ,uBAAyB,CAvFjC,wDA0FY,uBAAyB,CAC5B,oBAKL,uBAAyB,CAhG7B,yCAoGI,YAAa,CApGjB,iCAyGI,yBAA2B,CAC3B,0BAA4B,CAC5B,WAAa,CACb,yBAA6B,CAC7B,8CAAqD,CA7GzD,mCAgHQ,0BAA4B,CAC5B,wBAA8B,CAC9B,yBAA2B,CAE9B,0BAKD,+BAAoC,CAzHxC,iCA6HI,cAAe,CA7HnB,kCAiII,sBAAwB,CAC3B,yCAKG,yBACI,eAAgB,CACnB,kCAGG,sBAAwB,CAC3B,4BAGG,cAAe,CAClB,uBAGG,WAAY,CACZ,WAAY,CACf,CAGL,yCACI,yBACI,aAAc,CACjB,kCAGG,sBAAwB,CAE3B,4BAGG,cAAe,CAClB,uBAGG,WAAY,CACZ,WAAY,CACf,CAGL,gDACI,aAAc","file":"vl-navbar.vue","sourcesContent":[".btn {\n  font-weight: 300;\n}\n\n.z-btn {\n  border-radius: 0px;\n  padding: 10px 15px;\n  border-bottom: 3px solid transparent;\n  &:hover {\n    border-bottom: 3px solid #1eaee1;\n    border-radius: 0px;\n    .nav-link {\n      color: #1eaee1 !important;\n    }\n  }\n  &:focus {\n    box-shadow: none;\n    border-bottom: 3px solid #1eaee1;\n  }\n}\n\n",".card {\n    border: none;\n    .card-img-top{\n        border-radius: 4px;\n    }\n}","* {\n  font-family: \"Helvetica Neue\" sans-serif !important;\n}\n\n.hardcode-text {\n  h4 {\n    font-size: 24px;\n    font-weight: 700;\n  }\n  p {\n    font-size: 18px;\n    font-weight: 400;\n  }\n}\n.timestamp {\n  color: #898989;\n}\n","@import './bootsrap/buttons.scss';\n@import './bootsrap/card.scss';\n@import './fonts.scss';\n.fake {\n\topacity: 0.2;\n}\n\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../plugins/financie/_theme/index.scss';\n.navbar {\n    height: 63px;\n    background: #fff;\n    justify-content: space-between;\n\n\n    .pre-skoly{\n        min-width: 120px !important;\n    }    \n\n    .osobne-financie{\n        box-shadow: none !important;\n    }\n\n\n    .nav-link:hover {\n        color: #1eaee1 !important;\n    }\n\n    hr {\n        width: 30px;\n        height: 0px;\n        border: 0, 5px solid #f3f4f5;\n        transform: rotate(90deg);\n    }\n\n    .navbar-collapse {\n        flex-grow: unset;\n    }\n}\n\n.hover-none{\n    &:hover{\n        border-color: transparent !important;\n    }\n}\n/deep/ {\n\n\n&li.nav-item.d-sm-none.d-md-block.active :focus-visible{\n    display: none !important;\n    outline: none !important;\n    box-shadow: none !important;\n\n}    \n\n&a {\n    font-weight: 400 !important;\n    font-size: 16px !important;\n    box-shadow: none;\n\n    .bi{\n        font-size: 20px;\n    }\n}\n\n&.navbar-nav{\n    &>.osobne-financie {\n        &:hover{\n            border-bottom: 3px solid #1eaee1;\n\n            &>a{\n                color: #1eaee1 !important;\n            }\n        }\n\n    }\n\n    &>.pre-skoly {\n        &:hover{\n            border-bottom: 3px solid #ffa800;\n\n            &>a{\n                color: #ffa800 !important;\n            }\n        }\n        .dropdown-item {\n            color: #192949 !important;\n            &:hover {\n                color: #ffa800 !important;\n            }\n        }\n\n    }\n}\n\n\n&.nav-item {\n    border: 1px solid transparent;\n    border-bottom: 3px solid transparent;\n    border-radius: 0px;\n    \n     a {\n        height: 61px;\n        padding: 18px 15px;\n        border: none;\n        border-radius: 0;\n        box-shadow: none;\n      \n\n        &:hover {\n\n            border-bottom: none;\n        }\n     }\n}\n\n&.activeOsobne-financie {\n    border-bottom: 3px solid #1eaee1;\n\n    a {\n        color: #1eaee1 !important;\n    }\n}\n\n&.activePre-skoly {\n    border-bottom: 3px solid #ffa800;\n\n    a {\n        color: #ffa800!important;\n    }\n\n    .dropdown-item {\n        color: #192949 !important;\n\n        &:hover {\n            color: #ffa800 !important;\n        }\n    }\n}\n\n&a {\n    color: #192949 !important;\n}\n\n&.dropdown-toggle::after {\n    display: none;\n}\n\n&.dropdown-menu {\n\n    min-width: 230px !important;\n    min-height: 138px !important;\n    border: none ;\n    border-radius: 0px !important;\n    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;\n\n    a{\n        padding: 4px 24px !important;\n        margin: 6px 0px 0px !important;\n        max-height: 32px !important;\n\n    }\n\n}\n\n&a:hover {\n    background-color: #ffffff !important;\n}\n\n&.dropdown-item {\n    margin-top: 6px;\n}\n\n&.nav-link:focus {\n    outline: none !important;\n}\n\n}\n\n@media only screen and (max-width: 420px) {\n    .navbar {\n        max-width: 420px;\n    }\n\n    .osobne-financie {\n        display: none !important;\n    }\n\n    .pre-skoly {\n        max-width: 92px;\n    }\n\n    .logo {\n        width: 102px;\n        height: 27px;\n    }\n}\n\n@media only screen and (max-width: 350px) {\n    .navbar {\n        max-width: 350;\n    }\n\n    .osobne-financie {\n        display: none !important;\n\n    }\n\n    .pre-skoly {\n        max-width: 92px;\n    }\n\n    .logo {\n        width: 102px;\n        height: 27px;\n    }\n}\n\n.dropdown:hover > .dropdown-menu {\n    display: block;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","VUE_APP_API_URL":"https://financie.hybridlab.dev/ocms/api/","VUE_APP_DOMAIN_TITLE":"Financie","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4789d0e7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vis-layout-webcomponents/vl-navbar/vl-navbar.vue?vue&type=template&id=207b8d39&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('link',{attrs:{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"}}),_c('link',{attrs:{"type":"text/css","rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"}}),_c('nav',{staticClass:"navbar navbar-expand navbar-light d-flex align-items-center "},[_c('a',{staticClass:"navbar-brand",attrs:{"href":"./home"}},[_c('img',{staticClass:"logo",attrs:{"src":__webpack_require__("afc1"),"alt":"logo"}})]),_c('div',{staticClass:"navbar-nav  d-flex align-items-center"},[_c('li',{staticClass:"nav-item osobne-financie d-none d-sm-none d-md-block",class:{'activeOsobne-financie': _vm.osobneFinanciepage}},[_c('a',{staticClass:"btn bp-3 d-flex align-items-center",attrs:{"href":"./osobne-financie-byvanie"}},[_vm._v("Osobné financie")])]),_c('hr',{staticClass:"m-0"}),_c('li',{staticClass:"nav-item pre-skoly dropdown",class:{'activePre-skoly': _vm.preSkolypage}},[_c('a',{staticClass:"pl-3 pr-3 nav-link dropdown-toggle pre-skoly bp-3 d-flex align-items-center text-center justify-content-center ",attrs:{"href":"#","id":"navbarDropdown","role":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v(" Pre školy ")]),_vm._m(0)]),_c('hr',{staticClass:"m-0"}),_vm._m(1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-menu dropdown-menu-right nav-item ",attrs:{"aria-labelledby":"navbarDropdown"}},[_c('a',{staticClass:"dropdown-item",attrs:{"href":"./pre-skoly-zakladna-skola-1-stupen-1-rocnik-ucebne-materialy"}},[_vm._v("Základná škola 1. stupeň")]),_c('a',{staticClass:"dropdown-item",attrs:{"href":"./pre-skoly-zakladna-skola-2-stupen-5-rocnik-ucebne-materialy"}},[_vm._v("Základná škola 2. stupeň")]),_c('a',{staticClass:"dropdown-item",attrs:{"href":"./pre-skoly-stredna-skola-1-rocnik-ucebne-materialy"}},[_vm._v(" Stredná škola")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"hover-none nav-item d-flex align-items-center justify-content-center"},[_c('a',{staticClass:"nav-item ",attrs:{"href":"#"}},[_c('i',{staticClass:"bi bi-search fake "})])])}]


// CONCATENATED MODULE: ./src/vis-layout-webcomponents/vl-navbar/vl-navbar.vue?vue&type=template&id=207b8d39&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vis-layout-webcomponents/vl-navbar/vl-navbar.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vl_navbarvue_type_script_lang_js_shadow = ({
  data() {
    return {
      osobneFinanciepage: false,
      preSkolypage: false
    };
  },

  mounted() {
    this.osobneFinanciepage = window.location.pathname.startsWith('/osobne-financie'), this.preSkolypage = window.location.pathname.startsWith('/pre-skoly');
  }

});
// CONCATENATED MODULE: ./src/vis-layout-webcomponents/vl-navbar/vl-navbar.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var vl_navbar_vl_navbarvue_type_script_lang_js_shadow = (vl_navbarvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/vis-layout-webcomponents/vl-navbar/vl-navbar.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("7461")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  vl_navbar_vl_navbarvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "207b8d39",
  null
  ,true
)

/* harmony default export */ var vl_navbarshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('vl-navbar', vue_wc_wrapper(external_Vue_default.a, vl_navbarshadow))

/***/ }),

/***/ "7461":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_navbar_vue_vue_type_style_index_0_id_207b8d39_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f919");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_navbar_vue_vue_type_style_index_0_id_207b8d39_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_navbar_vue_vue_type_style_index_0_id_207b8d39_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_navbar_vue_vue_type_style_index_0_id_207b8d39_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_navbar_vue_vue_type_style_index_0_id_207b8d39_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "afc1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.f12352be.svg";

/***/ }),

/***/ "f919":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("582b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("62a145a3", content, shadowRoot)
};

/***/ })

/******/ });
//# sourceMappingURL=vl-navbar.js.map