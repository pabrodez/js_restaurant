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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/modules/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/pre.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/pre.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/side_1.jpg */ \"./src/img/side_1.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/main_1.jpg */ \"./src/img/main_1.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/dessert_1.jpg */ \"./src/img/dessert_1.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../img/chef_2.jpg */ \"./src/img/chef_2.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  box-sizing: border-box; }\\n\\n:root {\\n  /* palette credit https://coolors.co/dcdcdd-c5c3c6-46494c-4c5c68-1985a1 */\\n  --white: rgba(220, 220, 221, 1);\\n  --dark-white: rgba(249, 249, 249, 1);\\n  --grey: rgba(197, 195, 198, 1);\\n  --semi-black: rgba(70, 73, 76, 1);\\n  --dark-blue: rgba(76, 92, 104, 1);\\n  --light-blue: rgba(25, 133, 161, 1); }\\n\\nhtml {\\n  scroll-behavior: smooth; }\\n\\nbody {\\n  font-family: 'Varela Round', sans-serif;\\n  overflow-x: hidden;\\n  overflow-y: scroll; }\\n\\n#header {\\n  position: relative;\\n  height: 100vh;\\n  width: 100%;\\n  background: repeating-radial-gradient(circle at 50% 100%, #85969d, #a49999 40%);\\n  background-attachment: fixed;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center; }\\n  #header h1 {\\n    z-index: 3;\\n    top: 2.5vh;\\n    position: sticky;\\n    font-size: 20vh;\\n    text-align: center;\\n    transition: transform 1s, font-size 1.5s;\\n    color: var(--white); }\\n    #header h1 #subheading {\\n      font-size: 0.5em; }\\n    #header h1.translateX {\\n      font-family: 'Montserrat', sans-serif;\\n      transform: translateX(-37vw);\\n      font-size: 2em;\\n      letter-spacing: 0.2em;\\n      text-transform: uppercase; }\\n      #header h1.translateX span#subheading {\\n        display: none; }\\n  #header #arrow {\\n    content: \\\"\\\";\\n    position: absolute;\\n    bottom: 0;\\n    width: 10px;\\n    height: 10px;\\n    border-top: 1px solid black;\\n    border-right: 1px solid black;\\n    transform: rotate(150grad);\\n    transform-origin: top right; }\\n  #header nav {\\n    display: none;\\n    opacity: 0;\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n    height: 10vh;\\n    width: 100%;\\n    transition: opacity 1.5s ease-in-out;\\n    padding: 0 30vw 0 30vw;\\n    background-color: var(--dark-blue);\\n    border-bottom: solid 0.2em var(--grey);\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    font-family: 'Montserrat', sans-serif;\\n    letter-spacing: 0.5em;\\n    text-transform: lowercase;\\n    color: var(--white);\\n    /* dimgray */ }\\n    #header nav.visible {\\n      opacity: 1; }\\n    #header nav a {\\n      padding-right: 1em;\\n      cursor: pointer;\\n      transition: background 0.25s ease-in-out; }\\n      #header nav a:hover {\\n        background: dimgray; }\\n\\n#main {\\n  height: 80vh;\\n  width: 100%;\\n  background-color: var(--dark-white);\\n  display: flex;\\n  align-items: center; }\\n  #main #menu-wrapper {\\n    height: 100%;\\n    width: 100%;\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    grid-template-rows: repeat(3, 1fr);\\n    grid-gap: 5%;\\n    padding: 5% 20%; }\\n    #main #menu-wrapper .menu-section {\\n      border-radius: 5px;\\n      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);\\n      border-radius: 10px;\\n      border: 5px solid whitesmoke; }\\n    #main #menu-wrapper #menu-starters {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n      background-position: center;\\n      grid-column: 1 / span 2;\\n      grid-row: 1;\\n      background-size: cover; }\\n    #main #menu-wrapper #menu-mains {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n      background-position: center;\\n      grid-column: 2 / span 2;\\n      grid-row: 2;\\n      background-size: cover; }\\n    #main #menu-wrapper #menu-desserts {\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n      background-position: center;\\n      grid-column: 1 / span 2;\\n      grid-row: 3;\\n      background-size: cover; }\\n  #main img {\\n    object-fit: cover;\\n    max-width: 100%; }\\n  #main #starters-list, #main #mains-list, #main #desserts-list {\\n    height: 100%;\\n    width: 50%;\\n    margin: auto;\\n    overflow-y: auto;\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\n    grid-gap: 2%; }\\n    #main #starters-list figure, #main #mains-list figure, #main #desserts-list figure {\\n      position: relative; }\\n      #main #starters-list figure figcaption, #main #mains-list figure figcaption, #main #desserts-list figure figcaption {\\n        display: none;\\n        position: absolute;\\n        top: 50%;\\n        left: 50%;\\n        transform: translate(-50%, -50%);\\n        color: white;\\n        text-align: center;\\n        font-size: 1.2rem;\\n        font-weight: 700;\\n        letter-spacing: 0.2rem; }\\n      #main #starters-list figure img, #main #mains-list figure img, #main #desserts-list figure img {\\n        filter: grayscale(0);\\n        transition: filter 0.2s;\\n        border-radius: 10px;\\n        border: 3px solid whitesmoke;\\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25); }\\n      #main #starters-list figure:hover img, #main #mains-list figure:hover img, #main #desserts-list figure:hover img {\\n        filter: grayscale(80%); }\\n      #main #starters-list figure:hover figcaption, #main #mains-list figure:hover figcaption, #main #desserts-list figure:hover figcaption {\\n        display: block; }\\n  #main #about-wrapper {\\n    height: 100%;\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center; }\\n    #main #about-wrapper #chef-pic {\\n      height: 80%;\\n      width: 30%;\\n      margin-right: 17%;\\n      position: relative;\\n      background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n      background-position: center;\\n      background-size: cover;\\n      border-radius: 10px;\\n      box-shadow: 0 0 1em 0.1em rgba(0, 0, 0, 0.25);\\n      /* take out for clip */\\n      /* clip-path: circle(78.68% at 96.20% 75.01%); */ }\\n      #main #about-wrapper #chef-pic::after {\\n        content: \\\"\\\";\\n        position: absolute;\\n        top: 0;\\n        right: 0;\\n        height: 100%;\\n        width: 50%;\\n        background: linear-gradient(to right, transparent, var(--dark-white)); }\\n      #main #about-wrapper #chef-pic #chef-description {\\n        position: absolute;\\n        left: 80%;\\n        bottom: 10%;\\n        width: 70%;\\n        z-index: 5;\\n        color: var(--semi-black); }\\n        #main #about-wrapper #chef-pic #chef-description::after {\\n          display: inline-block;\\n          content: \\\"\\\";\\n          width: 130%;\\n          height: 0.1em;\\n          background: linear-gradient(to left, firebrick, transparent); }\\n  #main #home-wrapper {\\n    height: 100%;\\n    width: 60%;\\n    position: relative;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: center;\\n    margin: auto; }\\n    #main #home-wrapper header {\\n      position: absolute;\\n      top: 25%;\\n      color: var(--light-blue);\\n      text-shadow: 0 0.08em 0 var(--grey);\\n      font-size: 2.5em;\\n      letter-spacing: 0.5em;\\n      text-align: center;\\n      text-transform: uppercase;\\n      line-height: 1.5;\\n      font-family: 'Montserrat', sans-serif; }\\n    #main #home-wrapper blockquote {\\n      position: relative;\\n      opacity: 0.15;\\n      letter-spacing: 0.25em;\\n      text-align: center; }\\n    #main #home-wrapper p {\\n      font-style: italic;\\n      font-size: 2rem; }\\n      #main #home-wrapper p::before {\\n        content: \\\"\\\\201C\\\";\\n        font-family: 'Montserrat', sans-serif;\\n        font-size: 6.5em;\\n        font-weight: 700;\\n        position: absolute;\\n        top: -0.25em;\\n        left: -0.55em;\\n        opacity: 0.2; }\\n    #main #home-wrapper span {\\n      font-style: none; }\\n\\n#footer {\\n  height: 10vh;\\n  width: 100%;\\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.25);\\n  background-color: var(--dark-blue);\\n  color: var(--white);\\n  font-size: 0.8rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around; }\\n  #footer td:nth-of-type(odd) {\\n    padding-right: 1.5em; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/pre.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/img/chef_2.jpg":
/*!****************************!*\
  !*** ./src/img/chef_2.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/chef_2.jpg\");\n\n//# sourceURL=webpack:///./src/img/chef_2.jpg?");

/***/ }),

/***/ "./src/img/dessert_1.jpg":
/*!*******************************!*\
  !*** ./src/img/dessert_1.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/dessert_1.jpg\");\n\n//# sourceURL=webpack:///./src/img/dessert_1.jpg?");

/***/ }),

/***/ "./src/img/main_1.jpg":
/*!****************************!*\
  !*** ./src/img/main_1.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/main_1.jpg\");\n\n//# sourceURL=webpack:///./src/img/main_1.jpg?");

/***/ }),

/***/ "./src/img/main_2.jpg":
/*!****************************!*\
  !*** ./src/img/main_2.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/main_2.jpg\");\n\n//# sourceURL=webpack:///./src/img/main_2.jpg?");

/***/ }),

/***/ "./src/img/main_3.jpg":
/*!****************************!*\
  !*** ./src/img/main_3.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/main_3.jpg\");\n\n//# sourceURL=webpack:///./src/img/main_3.jpg?");

/***/ }),

/***/ "./src/img/main_4.jpg":
/*!****************************!*\
  !*** ./src/img/main_4.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/main_4.jpg\");\n\n//# sourceURL=webpack:///./src/img/main_4.jpg?");

/***/ }),

/***/ "./src/img/side_1.jpg":
/*!****************************!*\
  !*** ./src/img/side_1.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/side_1.jpg\");\n\n//# sourceURL=webpack:///./src/img/side_1.jpg?");

/***/ }),

/***/ "./src/modules/aboutSection.js":
/*!*************************************!*\
  !*** ./src/modules/aboutSection.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return aboutFun; });\nconst aboutFun = () => {\n  \n  // wrapper\n  let aboutWrapper = document.createElement('div');\n  aboutWrapper.setAttribute('id', 'about-wrapper');\n  // chef picture and description\n  let chefPic = document.createElement('figure');\n  chefPic.setAttribute('id', 'chef-pic');\n  chefPic.innerHTML = \"<figcaption id='chef-description'>\" + \n  \"Mauris turpis lectus, ullamcorper non ipsum in, dignissim commodo nibh. Integer nisl erat, condimentum in mattis sed, pretium at neque.\" +\n  \"<br><br>\" +\n  \"Quisque commodo at orci non posuere. Vivamus pulvinar ligula at est maximus vehicula. Vivamus quis odio magna. Donec enim dolor, maximus et sem non, vulputate sagittis ante. Donec ut aliquet. \" +\n  \"</figcaption>\";\n  aboutWrapper.appendChild(chefPic);\n  \n  return aboutWrapper;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/aboutSection.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return footerFunc; });\nconst footerFunc = () => {\n\n  let footerWrapper = document.createElement('section');\n  footerWrapper.setAttribute('id', 'footer');\n  let address = document.createElement('h3');\n  address.innerText = \"1116 Chester Rd, Stretford, Manchester M32 0HA\";\n  let contact = document.createElement('h3');\n  contact.innerText = \"07776 ******\";\n  let times = document.createElement('table');\n  times.innerHTML =\n  \"<tr><td>Tuesday - Sunday</td><td>4–10pm</td></tr>\" +\n  \"<tr><td>Monday</td><td>Closed</td></tr>\";\n  \n  [address, contact, times].forEach( n => footerWrapper.appendChild(n) );\n  \n  return footerWrapper;\n\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return headFunc; });\nconst headFunc = () => {\n  // wrapper\n  let headerWrapper = document.createElement('section')\n  headerWrapper.setAttribute('id', 'header');\n  // title and subtitle\n  let headerTitle = document.createElement('h1');\n  headerTitle.innerHTML = \"Samir's<br><span id='subheading'>Middle Eastern Cuisine</span>\"\n  // bottom arrow\n  let arrow = document.createElement('div');\n  arrow.setAttribute('id', 'arrow');\n  \n  // nav tab\n  let navBar = document.createElement('nav');\n  // links\n  let homeLink = document.createElement('a');\n  homeLink.innerText = \"Home\";\n  homeLink.setAttribute('id', 'home-link');\n  let menuLink = document.createElement('a');\n  menuLink.innerText = \"Menu\";\n  menuLink.setAttribute('id', 'menu-link');\n  let aboutLink = document.createElement('a');\n  aboutLink.innerText = \"About\";\n  aboutLink.setAttribute('id', 'about-link');\n  [homeLink, menuLink, aboutLink].forEach( a =>  navBar.appendChild(a));\n  \n  [headerTitle, navBar, arrow].forEach( a =>  headerWrapper.appendChild(a));\n  \n  return headerWrapper;\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/homeSection.js":
/*!************************************!*\
  !*** ./src/modules/homeSection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return homeFun; });\nconst homeFun = () => {\n  \n  // wrapper\n  let homeWrapper = document.createElement('div');\n  homeWrapper.setAttribute('id', 'home-wrapper');\n  // review quote\n  homeWrapper.innerHTML = \"<blockquote><p>A strong meze game</p></blockquote>\" +\n  \"<blockquote><p>the only place in Manchester – let alone Stretford - cooking up both Middle Eastern classics and typical Syrian dishes</p>\" +\n  \"<span>~Manchester Confidential</span></blockquote>\";\n  let homeTitle = document.createElement('header');\n  homeTitle.innerHTML = \"<h1>Welcome<br>to<br>Samir's</h1>\";\n  homeWrapper.appendChild(homeTitle);\n  \n  return homeWrapper;\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/homeSection.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/modules/header.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/modules/footer.js\");\n/* harmony import */ var _homeSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeSection.js */ \"./src/modules/homeSection.js\");\n/* harmony import */ var _aboutSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutSection.js */ \"./src/modules/aboutSection.js\");\n/* harmony import */ var _menuSection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuSection.js */ \"./src/modules/menuSection.js\");\n/* harmony import */ var _styles_pre_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pre.scss */ \"./src/styles/pre.scss\");\n/* harmony import */ var _styles_pre_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pre_scss__WEBPACK_IMPORTED_MODULE_5__);\n// TODO: change menu items from <div> to <article>\n\n\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\n// header\ncontent.appendChild(Object(_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n// wrapper for content of tabs\nlet mainSection = document.createElement('section');\nmainSection.setAttribute('id', 'main');\ncontent.appendChild(mainSection);\nmainSection.appendChild(Object(_homeSection_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()); // set home as default\nwindow.addEventListener('scroll', () => {\n  if ( window.pageYOffset >= (0.7 * document.querySelector('#header').offsetHeight) ) {\n    document.querySelector('nav').classList.add('visible');\n    document.querySelector('#header h1').classList.add('translateX');\n    document.querySelector('#header #arrow').style.display = \"none\";\n  } else {\n    document.querySelector('nav').classList.remove('visible');\n    document.querySelector('#header h1').classList.remove('translateX');\n    document.querySelector('#header #arrow').style.display = \"block\";\n  }\n});\n// add listeners to tabs\ndocument.querySelector('#menu-link').addEventListener('click', () => {\n  if ( mainSection.hasChildNodes() ) {\n    mainSection.removeChild(mainSection.childNodes[0]);\n    mainSection.appendChild(Object(_menuSection_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  } else {\n    mainSection.appendChild(Object(_menuSection_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  }\n})\ndocument.querySelector('#about-link').addEventListener('click', () => {\n  if ( mainSection.hasChildNodes() ) {\n    mainSection.removeChild(mainSection.childNodes[0]);\n    mainSection.appendChild(Object(_aboutSection_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  } else {\n    mainSection.appendChild(Object(_aboutSection_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  }\n});\ndocument.querySelector('#home-link').addEventListener('click', () => {\n  if ( mainSection.hasChildNodes() ) {\n    mainSection.removeChild(mainSection.childNodes[0]);\n    mainSection.appendChild(Object(_homeSection_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  } else {\n    mainSection.appendChild(Object(_homeSection_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  }\n});\n// footer\ncontent.appendChild(Object(_footer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/menuSection.js":
/*!************************************!*\
  !*** ./src/modules/menuSection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menuFun; });\n/* harmony import */ var _img_side_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/side_1.jpg */ \"./src/img/side_1.jpg\");\n/* harmony import */ var _img_main_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/main_1.jpg */ \"./src/img/main_1.jpg\");\n/* harmony import */ var _img_main_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/main_2.jpg */ \"./src/img/main_2.jpg\");\n/* harmony import */ var _img_main_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/main_3.jpg */ \"./src/img/main_3.jpg\");\n/* harmony import */ var _img_main_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/main_4.jpg */ \"./src/img/main_4.jpg\");\n/* harmony import */ var _img_dessert_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/dessert_1.jpg */ \"./src/img/dessert_1.jpg\");\n\n\n\n\n\n\n\nconst menuFun = () => {\n  // wrapper\n  let menuWrapper = document.createElement('div');\n  menuWrapper.setAttribute('id', 'menu-wrapper');\n  // starters\n  let starters = document.createElement('div');\n  starters.setAttribute('id', 'menu-starters');\n  starters.innerHTML = \"<figure><figcaption>Starters</figcaption></figure>\";\n  starters.addEventListener('click', () => {\n    let mainWrapper = document.querySelector('#main');\n    mainWrapper.removeChild(mainWrapper.childNodes[0]);\n    let startersList = document.createElement('div');\n    startersList.setAttribute('id', 'starters-list');\n    startersList.innerHTML = \"<figure><img src='./images/side_1.jpg'></img><figcaption>Tabbouleh</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Arabic Salad</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Fried Kibbeh</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Grilled Kibbeh</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Fattoush</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Falafel</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Aubergine Mutabbal</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Hummus</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Hummus with meat</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Cheese Puff pastry rolls</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Spinach pastries</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Chicken wings</figcaption></figure>\" +\n    \"<figure><img src='./images/side_1.jpg'></img><figcaption>Batata Harra</figcaption></figure>\";\n    mainWrapper.appendChild(startersList);\n  });\n  // mains\n  let mains = document.createElement('div');\n  mains.setAttribute('id', 'menu-mains');\n  mains.innerHTML = \"<figure><figcaption>Mains</figcaption></figure>\";\n  mains.addEventListener('click', () => {\n    let mainWrapper = document.querySelector('#main');\n    mainWrapper.removeChild(mainWrapper.childNodes[0]);\n    let mainsList = document.createElement('div');\n    mainsList.setAttribute('id', 'mains-list');\n    mainsList.innerHTML = \"<figure><img src='./images/main_1.jpg'></img><figcaption>Fish Fillet (Fridays)</figcaption></figure>\" +\n    \"<figure><img src='./images/main_2.jpg'></img><figcaption>Quzi</figcaption></figure>\" +\n    \"<figure><img src='./images/main_3.jpg'></img><figcaption>Chicken scallop</figcaption></figure>\" +\n    \"<figure><img src='./images/main_4.jpg'></img><figcaption>Chicken quesadilla</figcaption></figure>\" +\n    \"<figure><img src='./images/main_1.jpg'></img><figcaption>Grilled chicken on charcoal</figcaption></figure>\" +\n    \"<figure><img src='./images/main_2.jpg'></img><figcaption>Spicy Kebab with wallnut and Halloumi</figcaption></figure>\" +\n    \"<figure><img src='./images/main_3.jpg'></img><figcaption>Kebab with parsley and onions</figcaption></figure>\" +\n    \"<figure><img src='./images/main_4.jpg'></img><figcaption>Kebab with pistachio</figcaption></figure>\" +\n    \"<figure><img src='./images/main_1.jpg'></img><figcaption>Sheesh Tawooq</figcaption></figure>\" +\n    \"<figure><img src='./images/main_1.jpg'></img><figcaption>Shoqaf</figcaption></figure>\" +\n    \"<figure>?<figcaption>Daily specials</figcaption></figure>\";\n    mainWrapper.appendChild(mainsList);\n  });\n  // desserts\n  let desserts = document.createElement('div');\n  desserts.setAttribute('id', 'menu-desserts');\n  desserts.innerHTML = \"<figure><figcaption>Desserts</figcaption></figure>\";\n  desserts.addEventListener('click', () => {\n    let mainWrapper = document.querySelector('#main');\n    mainWrapper.removeChild(mainWrapper.childNodes[0]);\n    let dessertsList = document.createElement('div');\n    dessertsList.setAttribute('id', 'desserts-list');\n    dessertsList.innerHTML = \"<figure><img src='./images/dessert_1.jpg'></img><figcaption>Kunafah with cream</figcaption></figure>\" +\n    \"<figure><img src='../images/dessert_1.jpg'></img><figcaption>Qatayef</figcaption></figure>\";\n    mainWrapper.appendChild(dessertsList);\n  });\n  \n  // append menu sections to wrapper\n  [starters, mains, desserts].forEach( e => {\n    e.setAttribute('class', 'menu-section');\n    menuWrapper.appendChild(e);\n  });\n  \n  \n  return menuWrapper;\n  \n};\n\n\n\n//# sourceURL=webpack:///./src/modules/menuSection.js?");

/***/ }),

/***/ "./src/styles/pre.scss":
/*!*****************************!*\
  !*** ./src/styles/pre.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./pre.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/pre.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/pre.scss?");

/***/ })

/******/ });