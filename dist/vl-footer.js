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

/***/ "2568":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logodark.08302a6c.svg";

/***/ }),

/***/ "2c6f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eb7f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("bf01c2de", content, shadowRoot)
};

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4789d0e7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vis-layout-webcomponents/vl-footer/vl-footer.vue?vue&type=template&id=6d48119e&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('link',{attrs:{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css","integrity":"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l","crossorigin":"anonymous"}}),_c('footer',{class:{'PreSkolyFooter': _vm.page}},[_vm._m(0),_c('div',{staticClass:"container-fluid copyright-main p-0"},[_c('div',{staticClass:"container copyright-container"},[_c('div',{staticClass:"row copyright-row d-sm-flex align-items-center ml-3"},[_c('a',{attrs:{"href":"./home"}},[(_vm.page)?_c('img',{staticClass:"mr-3",attrs:{"src":__webpack_require__("2568"),"alt":"logo"}}):_c('img',{staticClass:"mr-3",attrs:{"src":__webpack_require__("c0a6"),"alt":"logo"}})]),_vm._m(1),_vm._m(2)])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row footer-row d-flex align-content-center pt-3 ml-0"},[_c('div',{staticClass:"col-12 col-lg-3 col-sm-6 main-footer"},[_c('h5',{staticClass:"text-left"},[_vm._v(" Životné situácie ")]),_c('ul',{staticClass:"pl-0 list-unstyled"},[_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"/osobne-financie-auto"}},[_vm._v("Auto")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"/osobne-financie-praca-a-dane"}},[_vm._v("Práce a dane")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-rodina-a-deti"}},[_vm._v("Rodina a deti")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-byvanie"}},[_vm._v("Bývanie")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-dochodok"}},[_vm._v("Dôchodok")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-exekucia"}},[_vm._v("Exekúcia")])])])]),_c('div',{staticClass:"col-12 col-lg-3 col-sm-6"},[_c('h5',{staticClass:"text-left"},[_vm._v("Finančné produkty")]),_c('ul',{staticClass:"pl-0 list-unstyled"},[_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-poistenie"}},[_vm._v("Poistenie")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-hypotekarny-uver"}},[_vm._v("Hypotekárny úver")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-uver-na-spotrebu"}},[_vm._v("Úver na spotrebu")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-investovanie"}},[_vm._v("Investovanie")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-ucty-a-karty"}},[_vm._v("Účty a karty")])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"./osobne-financie-fintech"}},[_vm._v("Fintech")])])])]),_c('div',{staticClass:"col-3 d-none d-lg-block"},[_c('h5',{staticClass:"text-left"},[_vm._v("Pomôcky")]),_c('ul',{staticClass:"pl-0 list-unstyled"},[_c('li',{staticClass:"footer-li fake"},[_c('a',{attrs:{"href":"#!"}},[_vm._v("Porovnania")])]),_c('li',{staticClass:"footer-li fake"},[_c('a',{attrs:{"href":"#!"}},[_vm._v("Nástrahy")])]),_c('li',{staticClass:"footer-li fake"},[_c('a',{attrs:{"href":"#!"}},[_vm._v("Kalkulačky")])]),_c('li',{staticClass:"footer-li fake"},[_c('a',{attrs:{"href":"#!"}},[_vm._v("Slovník ")])])])]),_c('div',{staticClass:"col-3"},[_c('ul',{staticClass:"pl-0 list-unstyled"},[_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"o-nas/#dozvite-sa-o-nas-viac"}},[_c('h5',[_vm._v(" O nás ")])])]),_c('li',{staticClass:"footer-li"},[_c('a',{attrs:{"href":"o-nas/#kontaktujte-nas"}},[_c('h5',[_vm._v(" Kontakt ")])])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"copy m-0"},[_vm._v(" © 2021 "),_c('a',{staticClass:"financie-link",attrs:{"href":"#"}},[_vm._v("www.financie.sk")]),_vm._v(" Všetky práva vyhradené. ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ml-auto d-none d-lg-block"},[_c('a',{attrs:{"href":"./home"}},[_c('a',{staticClass:"btn footer-navigation rounded-0"},[_vm._v("Osobné financie")])]),_c('a',{attrs:{"href":"./pre-skoly-zakladna-skola-1-stupen-1-rocnik"}},[_c('a',{staticClass:"btn footer-navigation rounded-0"},[_vm._v("Pre školy")])])])}]


// CONCATENATED MODULE: ./src/vis-layout-webcomponents/vl-footer/vl-footer.vue?vue&type=template&id=6d48119e&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vis-layout-webcomponents/vl-footer/vl-footer.vue?vue&type=script&lang=js&shadow
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
/* harmony default export */ var vl_footervue_type_script_lang_js_shadow = ({
  data() {
    return {
      page: false
    };
  },

  mounted() {
    this.page = window.location.pathname.startsWith('/pre-skoly');
    console.log(this.page, window.location.pathname);
  }

});
// CONCATENATED MODULE: ./src/vis-layout-webcomponents/vl-footer/vl-footer.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var vl_footer_vl_footervue_type_script_lang_js_shadow = (vl_footervue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/vis-layout-webcomponents/vl-footer/vl-footer.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("7058")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  vl_footer_vl_footervue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d48119e",
  null
  ,true
)

/* harmony default export */ var vl_footershadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('vl-footer', vue_wc_wrapper(external_Vue_default.a, vl_footershadow))

/***/ }),

/***/ "7058":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_footer_vue_vue_type_style_index_0_id_6d48119e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2c6f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_footer_vue_vue_type_style_index_0_id_6d48119e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_footer_vue_vue_type_style_index_0_id_6d48119e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_footer_vue_vue_type_style_index_0_id_6d48119e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vl_footer_vue_vue_type_style_index_0_id_6d48119e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ "c0a6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-osobne-financie.27b434ce.svg";

/***/ }),

/***/ "eb7f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".btn[data-v-6d48119e]{font-weight:300}.z-btn[data-v-6d48119e]{border-radius:0;padding:10px 15px;border-bottom:3px solid transparent}.z-btn[data-v-6d48119e]:hover{border-bottom:3px solid #1eaee1;border-radius:0}.z-btn:hover .nav-link[data-v-6d48119e]{color:#1eaee1!important}.z-btn[data-v-6d48119e]:focus{box-shadow:none;border-bottom:3px solid #1eaee1}.card[data-v-6d48119e]{border:none}.card .card-img-top[data-v-6d48119e]{border-radius:4px}*[data-v-6d48119e]{font-family:Helvetica Neue,sans-serif!important}.hardcode-text h4[data-v-6d48119e]{font-size:24px;font-weight:700}.hardcode-text p[data-v-6d48119e]{font-size:18px;font-weight:400}.timestamp[data-v-6d48119e]{color:#898989}.fake[data-v-6d48119e]{opacity:.2}footer[data-v-6d48119e]{background:#19283b}footer .footer-row[data-v-6d48119e]{min-height:310px}@media (max-width:575px){footer .main-footer[data-v-6d48119e]{padding-top:10px}}footer a[data-v-6d48119e]{text-decoration:none;font-size:14px;line-height:30px}footer a[data-v-6d48119e],footer a[data-v-6d48119e]:hover,footer h5[data-v-6d48119e]{color:#fff}footer h5[data-v-6d48119e]{font-size:15px;font-weight:700}footer .footer-navigation[data-v-6d48119e]{border-radius:0;padding:10px 15px;border-bottom:3px solid transparent}footer .footer-navigation[data-v-6d48119e]:hover{border-bottom:3px solid #1eaee1;border-radius:0}footer p[data-v-6d48119e]{font-size:14px;color:#fff}footer .copyright-row[data-v-6d48119e]{background:#19283b;min-height:80px}footer .copyright-row img[data-v-6d48119e]{vertical-align:baseline}footer .copyright-row .financie-link[data-v-6d48119e]{color:#1eaee1;font-size:14px}@media (max-width:500px){footer .copyright-row .copy[data-v-6d48119e]{font-size:13px}}footer .copyright-row .btn[data-v-6d48119e]{padding:21.5px 15px}footer .copyright-row .btna[data-v-6d48119e]:hover{color:#1eaee1!important}.PreSkolyFooter[data-v-6d48119e]{background:#ffa800}.PreSkolyFooter .footer-row[data-v-6d48119e]{min-height:310px}@media (max-width:575px){.PreSkolyFooter .main-footer[data-v-6d48119e]{padding-top:10px}}.PreSkolyFooter a[data-v-6d48119e]{text-decoration:none;font-size:14px;line-height:30px;color:#19283b}.PreSkolyFooter a[data-v-6d48119e]:hover{color:#19283b}.PreSkolyFooter h5[data-v-6d48119e]{font-size:15px;color:#19283b;font-weight:700}.PreSkolyFooter .footer-navigation[data-v-6d48119e]{border-radius:0;padding:10px 15px;border-bottom:3px solid transparent}.PreSkolyFooter .footer-navigation[data-v-6d48119e]:hover{border-bottom:3px solid #19283b;border-radius:0}.PreSkolyFooter p[data-v-6d48119e]{font-size:14px}.PreSkolyFooter .copyright-row[data-v-6d48119e]{background:#ffa800;min-height:80px}.PreSkolyFooter .copyright-row img[data-v-6d48119e]{vertical-align:baseline}.PreSkolyFooter .copyright-row .financie-link[data-v-6d48119e]{color:#19283b;font-size:14px}@media (max-width:500px){.PreSkolyFooter .copyright-row .copy[data-v-6d48119e]{font-size:13px}}.PreSkolyFooter .copyright-row .btn[data-v-6d48119e]{padding:21.5px 15px}.PreSkolyFooter .copyright-row .btna[data-v-6d48119e]:hover{color:#1eaee1!important}", "",{"version":3,"sources":["/Users/marko/Documents/GitHub/financie/app/src/plugins/financie/_theme/bootsrap/buttons.scss","/Users/marko/Documents/GitHub/financie/app/src/plugins/financie/_theme/bootsrap/card.scss","/Users/marko/Documents/GitHub/financie/app/src/plugins/financie/_theme/fonts.scss","/Users/marko/Documents/GitHub/financie/app/src/plugins/financie/_theme/index.scss","/Users/marko/Documents/GitHub/financie/app/src/vis-layout-webcomponents/vl-footer/vl-footer.vue"],"names":[],"mappings":"AAAA,sBACE,eAAgB,CACjB,wBAGC,eAAkB,CAClB,iBAAkB,CAClB,mCAAoC,CAHtC,8BAKI,+BAAgC,CAChC,eAAkB,CANtB,wCAQM,uBAAyB,CAR/B,8BAYI,eAAgB,CAChB,+BAAgC,CACjC,uBCjBC,WAAY,CADhB,qCAGQ,iBAAkB,CACrB,mBCHH,+CAAmD,CACpD,mCAIG,cAAe,CACf,eAAgB,CAHpB,kCAMI,cAAe,CACf,eAAgB,CACjB,4BAGD,aAAc,CCZhB,uBACC,UAAY,CCiIb,wBACE,kBAAmB,CADrB,oCAGI,gBAAiB,CAClB,yBAJH,qCAQK,gBAAiB,CACjB,CATL,0BAaI,oBAAqB,CACrB,cAAe,CACf,gBACc,CAhBlB,qFAgBI,UAUc,CA1BlB,2BAwBI,cAAe,CAElB,eAAiB,CA1BlB,2CA8BC,eAAkB,CAClB,iBAAkB,CAClB,mCAAoC,CAhCrC,iDAoCC,+BAAgC,CAC9B,eAAkB,CArCrB,0BAyCG,cAAe,CACf,UAAc,CA1CjB,uCA8CI,kBAAmB,CACnB,eAAgB,CA/CpB,2CAkDE,uBAAuB,CAlDzB,sDAsDM,aAAc,CACjB,cAAe,CACb,yBAxDL,6CA2DG,cAAe,CACf,CA5DH,4CA+DM,mBAAoB,CA/D1B,mDAiEQ,uBAAyB,CAC1B,iCAML,kBAAmB,CADrB,6CAGI,gBAAiB,CAClB,yBAJH,8CAQK,gBAAiB,CACjB,CATL,mCAaI,oBAAqB,CACrB,cAAe,CACf,gBAAiB,CACjB,aAAc,CAhBlB,yCAoBG,aAAc,CApBjB,oCAwBI,cAAe,CACf,aAAc,CACjB,eAAiB,CA1BlB,oDA8BC,eAAkB,CAClB,iBAAkB,CAClB,mCAAoC,CAhCrC,0DAoCC,+BAAgC,CAC9B,eAAkB,CArCrB,mCAyCG,cAAe,CAzClB,gDA6CI,kBAAmB,CACnB,eAAgB,CA9CpB,oDAiDE,uBAAuB,CAjDzB,+DAoDM,aAAc,CACjB,cAAe,CACb,yBAtDL,sDAyDQ,cAAe,CAChB,CA1DP,qDA6DM,mBAAoB,CA7D1B,4DA+DQ,uBAAyB","file":"vl-footer.vue","sourcesContent":[".btn {\n  font-weight: 300;\n}\n\n.z-btn {\n  border-radius: 0px;\n  padding: 10px 15px;\n  border-bottom: 3px solid transparent;\n  &:hover {\n    border-bottom: 3px solid #1eaee1;\n    border-radius: 0px;\n    .nav-link {\n      color: #1eaee1 !important;\n    }\n  }\n  &:focus {\n    box-shadow: none;\n    border-bottom: 3px solid #1eaee1;\n  }\n}\n\n",".card {\n    border: none;\n    .card-img-top{\n        border-radius: 4px;\n    }\n}","* {\n  font-family: \"Helvetica Neue\" sans-serif !important;\n}\n\n.hardcode-text {\n  h4 {\n    font-size: 24px;\n    font-weight: 700;\n  }\n  p {\n    font-size: 18px;\n    font-weight: 400;\n  }\n}\n.timestamp {\n  color: #898989;\n}\n","@import './bootsrap/buttons.scss';\n@import './bootsrap/card.scss';\n@import './fonts.scss';\n.fake {\n\topacity: 0.2;\n}\n\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../plugins/financie/_theme/index.scss';\nfooter {\n  background: #19283b;\n  .footer-row {\n    min-height: 310px;\n  }\n\n  @media (max-width: 575px) {\n\t\t.main-footer {\n\t  \t\tpadding-top: 10px;\n  \t\t}\n  }\n\n  a {\n    text-decoration: none;\n    font-size: 14px;\n    line-height: 30px;\n    color: #FFFFFF;\n  }\n\n  a:hover {\n\t  color: #FFFFFF;\n  }\n\n  h5 {\n    font-size: 15px;\n    color: #FFFFFF;\n\tfont-weight: bold;\n  }\n\n  .footer-navigation {\n\tborder-radius: 0px;\n\tpadding: 10px 15px;\n\tborder-bottom: 3px solid transparent;\n  }\n  \n  .footer-navigation:hover {\n\tborder-bottom: 3px solid #1eaee1;\n  \tborder-radius: 0px;\n  }\n\n  p {\n\t  font-size: 14px;\n\t  color: #FFFFFF;\n  }\n\n  .copyright-row {\n    background: #19283b;\n    min-height: 80px;\n\n\timg {\n\t\tvertical-align:baseline;\n\t}\n\n    .financie-link {\n      color: #1eaee1;\n\t  font-size: 14px;\n    }\n    @media (max-width: 500px) {\n\t\t.copy {\n\t\t\tfont-size: 13px;\n\t\t}\n    }\n    .btn {\n      padding: 21.5px 15px;\n      &a:hover {\n        color: #1eaee1 !important;\n      }\n    }\n  }\n}\n\n.PreSkolyFooter {\n  background: #FFA800;\n  .footer-row {\n    min-height: 310px;\n  }\n\n  @media (max-width: 575px) {\n\t\t.main-footer {\n\t  \t\tpadding-top: 10px;\n  \t\t}\n  }\n  \n  a {\n    text-decoration: none;\n    font-size: 14px;\n    line-height: 30px;\n    color: #19283b;\n  }\n\n  a:hover {\n\t  color: #19283b;\n  }\n\n  h5 {\n    font-size: 15px;\n    color: #19283b;\n\tfont-weight: bold;\n  }\n\n  .footer-navigation {\n\tborder-radius: 0px;\n\tpadding: 10px 15px;\n\tborder-bottom: 3px solid transparent;\n  }\n  \n  .footer-navigation:hover {\n\tborder-bottom: 3px solid #19283b;\n  \tborder-radius: 0px;\n  }\n\n  p {\n\t  font-size: 14px;\n  }\n\n  .copyright-row {\n    background: #FFA800;\n    min-height: 80px;\n\n\timg {\n\t\tvertical-align:baseline;\n\t}\n    .financie-link {\n      color: #19283b;\n\t  font-size: 14px;\n    }\n    @media (max-width: 500px) {\n      .copy {\n        font-size: 13px;\n      }\n    }\n    .btn {\n      padding: 21.5px 15px;\n      &a:hover {\n        color: #1eaee1 !important;\n      }\n    }\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ })

/******/ });
//# sourceMappingURL=vl-footer.js.map