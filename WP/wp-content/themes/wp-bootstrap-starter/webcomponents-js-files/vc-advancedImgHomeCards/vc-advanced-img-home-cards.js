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

/***/ "26b8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image3.f9ae077e.png";

/***/ }),

/***/ "330e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image6.200b0a00.png";

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

/***/ "543a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image2.6a82217a.png";

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
    if (value === '' || value === name) {
      return true
    }
    return value != null
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
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
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
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5394e6cf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vis-webcomponents/vc-advancedImgHomeCards/vc-advancedImgHomeCards.vue?vue&type=template&id=34ccf9e3&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},_vm._l((_vm.advancedImgHomeCards),function(advancedImgHomeCard){return _c('div',{key:advancedImgHomeCard.id,staticClass:"col-12 col-lg-4 col-md-6"},[_c('div',{staticClass:"card mb-2 border border-0 m-2",attrs:{"tag":"article"}},[_c('router-link',{attrs:{"to":'/osobne-financie/' + advancedImgHomeCard.link}},[_c('img',{staticClass:"card-img-top",attrs:{"src":_vm.cardImg(advancedImgHomeCard),"alt":"Image"}}),_c('h4',{staticClass:"card-title d-flex align-items-center"},[_vm._v(" "+_vm._s(advancedImgHomeCard.title)+" ")]),_c('p',{staticClass:"card-text d-flex mb-5"},[_vm._v(" "+_vm._s(advancedImgHomeCard.content)+" ")])]),_c('div',{staticClass:"hb"},[_c('div',{staticClass:"card-body hb d-flex justify-content-between mr-2"},[_c('div',[_c('router-link',{attrs:{"to":'/osobne-financie/clanky/' + advancedImgHomeCard.link1}},[_c('h6',{staticClass:"mb-0"},[_vm._v(" "+_vm._s(advancedImgHomeCard.titulok1)+" ")])])],1),_c('div',[_c('router-link',{attrs:{"to":'/osobne-financie/clanky/' + advancedImgHomeCard.link1}},[_c('a',{staticClass:"blue card-link"},[_c('i',{staticClass:"bi bi-arrow-right"})])])],1)]),_c('hr',{staticClass:"hb m-0"})]),_c('div',{staticClass:"hb"},[_c('div',{staticClass:"card-body hb d-flex justify-content-between mr-2"},[_c('div',[_c('router-link',{attrs:{"to":'/osobne-financie/clanky/' + advancedImgHomeCard.link2}},[_c('h6',{staticClass:"mb-0"},[_vm._v(" "+_vm._s(advancedImgHomeCard.titulok2)+" ")])])],1),_c('div',[_c('router-link',{attrs:{"to":'/osobne-financie/clanky/' + advancedImgHomeCard.link2}},[_c('a',{staticClass:"blue card-link"},[_c('i',{staticClass:"bi bi-arrow-right"})])])],1)]),_c('hr',{staticClass:"hb m-0"})]),_c('div',{staticClass:"hb"},[_c('div',{staticClass:"card-body hb d-flex justify-content-between mr-2"},[_c('div',[_c('router-link',{attrs:{"to":'/osobne-financie/clanky/' + advancedImgHomeCard.link3}},[_c('h6',{staticClass:"mb-0"},[_vm._v(" "+_vm._s(advancedImgHomeCard.titulok3)+" ")])])],1),_c('div',[_c('router-link',{attrs:{"to":'/osobne-financie/clanky/' + advancedImgHomeCard.link3}},[_c('a',{staticClass:"blue card-link"},[_c('i',{staticClass:"bi bi-arrow-right"})])])],1)]),_c('hr',{staticClass:"hb m-0"})]),_c('div',[_c('div',{staticClass:"card-body hb d-flex justify-content-between mr-2"},[_c('div',[_c('router-link',{attrs:{"to":'/osobne-financie/clanky/' + advancedImgHomeCard.link4}},[_c('h6',{staticClass:"mb-0"},[_vm._v(" "+_vm._s(advancedImgHomeCard.titulok4)+" ")])])],1),_c('div',[_c('router-link',{attrs:{"to":'/osobne-financie/clanky/' + advancedImgHomeCard.link}},[_c('a',{staticClass:"blue card-link"},[_c('i',{staticClass:"bi bi-arrow-right"})])])],1)])])],1)])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vis-webcomponents/vc-advancedImgHomeCards/vc-advancedImgHomeCards.vue?vue&type=template&id=34ccf9e3&scoped=true&shadow

// CONCATENATED MODULE: ./src/vis-blocks/vis-home/osobne-financie_content_linky.js
const poistenie = {
  title: 'Nenechaj všetko na náhodu',
  content: 'Prečo si uzavrieť poistenie? Kedy možno vypovedať zmluvu?',
  image: 'image1.png',
  link: 'poistenie',
  titulok1: 'Životné poistenie',
  link1: 'zivotnePoistenie',
  titulok2: 'Poistenie auta (neživotné poistenie)',
  link2: 'poistenieAuta',
  titulok3: 'Poistenie nehnuteľnosti/domácnosti',
  link3: 'poistenieNehnutelnosti',
  titulok4: 'Cestovné poistenie',
  link4: 'cestovnePoistenie',
  defaultLink: 'poistenie'
};
const hypotekarnyUver = {
  title: 'Bývajte vo vlastnom',
  content: 'Variabilná úroková  sadzba, Fixácia, Americká hypotéka',
  image: 'image2.png',
  link: 'hypotekarny-uver',
  titulok1: 'Hypotekárny úver - nadobudnutie bývania',
  link1: 'hypotekarnyUver',
  titulok2: 'Americká hypotéka',
  link2: 'americkaHypoteka',
  titulok3: 'Žiadosť o úver',
  link3: 'ziadostOUver',
  titulok4: 'Splácanie úveru',
  link4: 'splacanieUveru',
  defaultLink: 'hypotekarny-uver'
};
const uverNaSpotrebu = {
  title: 'Financujte svoje túžby',
  content: 'Úrokové sadzby – p.a., p.m., p.s., Refinancovanie',
  image: 'image3.png',
  link: 'uver-na-spotrebu',
  titulok1: 'Spotrebný úver',
  link1: 'spotrebnyUver',
  titulok2: 'Krátkodobé úvery',
  link2: 'kratkodobeUvery',
  titulok3: 'Čerpanie a splácanie',
  link3: 'cerpacnieASplacanie',
  titulok4: 'Nebankové úvery a pôžičky',
  link4: 'nebankoveUveryAPozicky',
  defaultLink: 'uver-na-spotrebu'
};
const investovanie = {
  title: 'Cesta k prvej investícií',
  content: 'Čo sú dividendy? Akcia? Dlhopis?',
  image: 'image4.png',
  link: 'investovanie',
  titulok1: 'Základy investovania',
  link1: 'zakladyInvestovania',
  titulok2: 'Základné Investičné Príležitosti',
  link2: 'zakladneInvesticnePrilezitosti',
  titulok3: 'Investičné princípy',
  link3: 'investicnePrincipy',
  titulok4: 'Aktívne vs. pasívne investovanie',
  link4: 'aktivnePasivneInvestovanie',
  defaultLink: 'investovanie'
};
const bankoveUctyAPlatobneKarty = {
  title: 'Orientujte sa v bankách',
  content: 'IBAN, SEPA, SWIFT-BIC, Embosovaná platobná karta',
  image: 'image5.png',
  link: 'bankove-ucty-a-platobne-karty',
  titulok1: 'Bežný Účet',
  link1: 'beznyUcet',
  titulok2: 'Sporiaci Účet',
  link2: 'sporiaciUcet',
  titulok3: 'Kreditná Karta',
  link3: 'kreditnaKarta',
  titulok4: 'Debetná Karta',
  link4: 'debetnaKarta',
  defaultLink: 'bankove-ucty-a-platobne-karty'
};
const fintech = {
  title: 'Technológie a peniaze',
  content: 'Neobanka, Peer-to-peer lending, Crowdfunding, Kryptomeny',
  image: 'image6.png',
  link: 'fintech',
  titulok1: 'Internet a Mobile Banking',
  link1: 'internetAMobileBanking',
  titulok2: 'Neobanky (N26, 365.)',
  link2: 'neobanky',
  titulok3: 'Finančné platformy',
  link3: 'financnePlatformy',
  titulok4: 'Tu nieco pojde',
  link4: 'tuNiecoPojde',
  defaultLink: 'fintech'
};
/* harmony default export */ var osobne_financie_content_linky = ({
  poistenie: poistenie,
  'hypotekarny-uver': hypotekarnyUver,
  'uver-na-spotrebu': uverNaSpotrebu,
  investovanie: investovanie,
  'bankove-ucty-a-platobne-karty': bankoveUctyAPlatobneKarty,
  fintech: fintech
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vis-webcomponents/vc-advancedImgHomeCards/vc-advancedImgHomeCards.vue?vue&type=script&lang=js&shadow
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

/* harmony default export */ var vc_advancedImgHomeCardsvue_type_script_lang_js_shadow = ({
  data() {
    return {
      advancedImgHomeCards: osobne_financie_content_linky
    };
  },

  methods: {
    cardImg(card) {
      return __webpack_require__("d849")(`./${card.image}`);
    }

  }
});
// CONCATENATED MODULE: ./src/vis-webcomponents/vc-advancedImgHomeCards/vc-advancedImgHomeCards.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var vc_advancedImgHomeCards_vc_advancedImgHomeCardsvue_type_script_lang_js_shadow = (vc_advancedImgHomeCardsvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/vis-webcomponents/vc-advancedImgHomeCards/vc-advancedImgHomeCards.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("f3df")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  vc_advancedImgHomeCards_vc_advancedImgHomeCardsvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "34ccf9e3",
  null
  ,true
)

/* harmony default export */ var vc_advancedImgHomeCardsshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('vc-advanced-img-home-cards', vue_wc_wrapper(external_Vue_default.a, vc_advancedImgHomeCardsshadow))

/***/ }),

/***/ "5ac6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image4.f9cd450b.png";

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

/***/ "8bad":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image5.0a45bc0d.png";

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "8cd8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".card img[data-v-34ccf9e3]{min-height:210px}.card .card-title[data-v-34ccf9e3]{min-height:80px;color:#192949;font-weight:700;font-style:normal}.card .div[data-v-34ccf9e3]{line-height:24px}.card-text[data-v-34ccf9e3]{text-decoration:none;color:#192949;min-height:3vw}.card-body[data-v-34ccf9e3]{padding:10px;padding-left:0!important;padding-right:0!important}.card-body h6[data-v-34ccf9e3]{font-size:16px;line-height:30px color #192949;font-weight:400}a[data-v-34ccf9e3]{color:#19283b}a[data-v-34ccf9e3]:hover{color:#1eaee1;text-decoration:none!important}.hb[data-v-34ccf9e3]:hover{color:#1eaee1!important}.hb:hover a[data-v-34ccf9e3]{color:#1eaee1}.hb:hover hr[data-v-34ccf9e3]{border-top:1px solid #1eaee1!important}", "",{"version":3,"sources":["C:/Users/42190/Desktop/Openlab/Financie/app/src/vis-webcomponents/vc-advancedImgHomeCards/C:/Users/42190/Desktop/Openlab/Financie/app/src/vis-webcomponents/vc-advancedImgHomeCards/C:/Users/42190/Desktop/Openlab/Financie/app/src/vis-webcomponents/vc-advancedImgHomeCards/vc-advancedImgHomeCards.vue"],"names":[],"mappings":"AAgHA,2BAEE,gBAAiB,CAFnB,mCAME,eAAgB,CAChB,aAAc,CACd,eAAiB,CACjB,iBAAkB,CATpB,4BAaE,gBAAiB,CACjB,4BAGD,oBAAqB,CACrB,aAAc,CACd,cAAe,CACf,4BAEA,YAAa,CACb,wBAA4B,CAC5B,yBAA6B,CAH9B,+BAME,cAAe,CACf,8BAA+B,CAC/B,eAAgB,CAChB,mBAID,aAAc,CADf,yBAIE,aAAc,CACd,8BAAgC,CAChC,2BAID,uBAAyB,CAD1B,6BAIE,aAAc,CAJhB,8BAQE,sCAAwC","file":"vc-advancedImgHomeCards.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.card {\r\n\timg {\r\n\t\tmin-height: 210px;\r\n\t}\r\n\r\n\t.card-title {\r\n\t\tmin-height: 80px;\r\n\t\tcolor: #192949;\r\n\t\tfont-weight: bold;\r\n\t\tfont-style: normal;\r\n\t}\r\n\r\n\t.div {\r\n\t\tline-height: 24px;\r\n\t}\r\n}\r\n.card-text {\r\n\ttext-decoration: none;\r\n\tcolor: #192949;\r\n\tmin-height: 3vw;\r\n}\r\n.card-body {\r\n\tpadding: 10px;\r\n\tpadding-left: 0px !important;\r\n\tpadding-right: 0px !important;\r\n\r\n\th6 {\r\n\t\tfont-size: 16px;\r\n\t\tline-height: 30px color #192949;\r\n\t\tfont-weight: 400;\r\n\t}\r\n}\r\n\r\na {\r\n\tcolor: #19283B;\r\n\r\n\t&:hover {\r\n\t\tcolor: #1eaee1;\r\n\t\ttext-decoration: none !important;\r\n\t}\r\n}\r\n\r\n.hb:hover {\r\n\tcolor: #1eaee1 !important;\r\n\r\n\ta {\r\n\t\tcolor: #1eaee1;\r\n\t}\r\n\r\n\thr {\r\n\t\tborder-top: 1px solid #1eaee1 !important;\r\n\t}\r\n}\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d849":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./image1.png": "ece0",
	"./image2.png": "543a",
	"./image3.png": "26b8",
	"./image4.png": "5ac6",
	"./image5.png": "8bad",
	"./image6.png": "330e"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "d849";

/***/ }),

/***/ "d8b2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8cd8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("76caec2b", content, shadowRoot)
};

/***/ }),

/***/ "ece0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image1.887691b4.png";

/***/ }),

/***/ "f3df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vc_advancedImgHomeCards_vue_vue_type_style_index_0_id_34ccf9e3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d8b2");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vc_advancedImgHomeCards_vue_vue_type_style_index_0_id_34ccf9e3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vc_advancedImgHomeCards_vue_vue_type_style_index_0_id_34ccf9e3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vc_advancedImgHomeCards_vue_vue_type_style_index_0_id_34ccf9e3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vc_advancedImgHomeCards_vue_vue_type_style_index_0_id_34ccf9e3_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

/******/ });
//# sourceMappingURL=vc-advanced-img-home-cards.js.map