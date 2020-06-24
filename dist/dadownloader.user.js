// ==UserScript==
// @name         Deviant Art Auto Downloader
// @namespace    victorique.moe
// @version      1.0.1
// @description  in test
// @author       Victorique
// @match        https://www.deviantart.com/*
// @grant        none
// @run-at       document-idle
// @require      https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js
// @require      https://cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js
// @icon         https://i.imgur.com/nx5ejHb.png
// @license      MIT
// ==/UserScript==
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("JSZip"));
	else if(typeof define === 'function' && define.amd)
		define(["JSZip"], factory);
	else if(typeof exports === 'object')
		exports["dadownloader"] = factory(require("JSZip"));
	else
		root["dadownloader"] = factory(root["JSZip"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_JSZip__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".daModal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 9999; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0); /* Fallback color */\r\n    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n.daModal div, .daModal h1, .daModal h2, .daModal h3, .daModal h4, .daModal h5, .daModal h6, .daModal p, .daModal ul, .daModal li, .daModal dd, .daModal dt {\r\n    color: #8f412c !important;\r\n}\r\n\r\n.FSmodalContent {\r\n    position: relative;\r\n    background-color: #141414;\r\n    color: #ffffff !important;\r\n    margin: auto;\r\n    padding: 0;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -webkit-animation-name: animatetop;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: animatetop;\r\n    animation-duration: 0.4s\r\n}\r\n\r\n\r\n.button {\r\n    background-color: #4CAF50; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 7px 21px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    -webkit-transition-duration: 0.4s; /* Safari */\r\n    transition-duration: 0.4s;\r\n    cursor: pointer;\r\n}\r\n\r\n.blackButton {\r\n    background-color: #141414;\r\n    color: white;\r\n    border: 2px solid #555555;\r\n}\r\n\r\n.blackButton:hover {\r\n    background-color: #555555;\r\n    color: white;\r\n}\r\n\r\n/* Add Animation */\r\n@-webkit-keyframes animatetop {\r\n    from {\r\n        top: -300px;\r\n        opacity: 0\r\n    }\r\n    to {\r\n        top: 0;\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes animatetop {\r\n    from {\r\n        top: -300px;\r\n        opacity: 0\r\n    }\r\n    to {\r\n        top: 0;\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n/* The Close Button */\r\n.FSclose {\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.FSclose:hover,\r\n.FSclose:focus {\r\n    color: #8f412c6e;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.FSmodalHeader {\r\n    padding: 0.5rem;\r\n    color: #8f412c;\r\n}\r\n\r\n.FSModalBody {\r\n    padding: 1rem;\r\n}\r\n\r\n.FSModalFooter {\r\n    color: white;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    padding: 0.5rem;\r\n    border-top: 1px solid #333232;\r\n\r\n}\r\n\r\n.FSmodalTitle {\r\n    margin-left: 1rem;\r\n}\r\n\r\n.awesomplete > ul {\r\n    color: #ff0000;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! JSZip */ "JSZip"), __webpack_require__(/*! ./engine/impl/UIEngine */ "./src/engine/impl/UIEngine.ts"), __webpack_require__(/*! ./manager/module/ImageResolverGallery */ "./src/manager/module/ImageResolverGallery.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, JSZip, UIEngine_1, ImageResolverGallery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Main = void 0;
    var Main;
    (function (Main) {
        let _images = [];
        let _intervalUid = 0;
        let _init = false;
        function doDownloadZip(files, title) {
            let zip = new JSZip();
            for (let img of files) {
                zip.file(img.title, img.image);
            }
            return zip.generateAsync({ type: "blob" }).then(blob => {
                saveAs(blob, title + ".zip");
            });
        }
        Main.doDownloadZip = doDownloadZip;
        function destroy() {
            if (!_init) {
                return;
            }
            _images = [];
            Main._uiEngine.destroy();
            _init = false;
        }
        async function doDownload(images) {
            let count = 0;
            let failedImages = [];
            let pArray = images.map(im => im.loadImage().then(() => {
                count++;
                Main._uiEngine.changeButtonText(`Downloading image ${count} of ${images.length}`);
            }).catch(() => {
                failedImages.push(im);
            }));
            await Promise.all(pArray).then(() => {
                if (failedImages.length > 0) {
                    return doDownload(failedImages);
                }
            });
            return Promise.resolve();
        }
        function init() {
            let load = () => {
                Main._uiEngine = new UIEngine_1.UIEngine(document);
                Main._uiEngine.buildUI();
                document.getElementById("downloadAllInit").addEventListener("click", async (ev) => {
                    ev.preventDefault();
                    Main._uiEngine.changeButtonText("Finding downloadable images...");
                    let username = document.querySelectorAll("#content-container [data-username]")[1].dataset.username;
                    // harcode for all images for now
                    let imageResolverGallery = new ImageResolverGallery_1.ImageResolverGallery();
                    _images = await imageResolverGallery.parse(username);
                    Main._uiEngine.changeButtonText(`Downloading ${_images.length} images...`);
                    // for(let image of _images){
                    //     await image.loadImage();
                    // }
                    if (_images.length === 0) {
                        alert("No images can be download, this is not an error, the artist has not got any images publicly available for download");
                    }
                    else {
                        await doDownload(_images);
                        await doDownloadZip(_images, `${username} - all images`);
                    }
                    destroy();
                });
            };
            if (_intervalUid == 0) {
                _intervalUid = window.setInterval(() => {
                    if (document.location.toString().includes("_adslot")) {
                        return;
                    }
                    let isRightPage = document.location.href.includes("gallery/all");
                    let widgetEixsts = document.getElementById("downloadAllInit");
                    if (widgetEixsts == null) {
                        _init = false;
                    }
                    if (isRightPage) {
                        if (!_init) {
                            _init = true;
                            load();
                        }
                    }
                    else {
                        destroy();
                    }
                }, 3000);
            }
        }
        Main.init = init;
    })(Main = exports.Main || (exports.Main = {}));
    Main.init();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/engine/impl/UIEngine.ts":
/*!*************************************!*\
  !*** ./src/engine/impl/UIEngine.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIEngine = void 0;
    class UIEngine {
        constructor(_doc) {
            this._doc = _doc;
            this._cssSelectorForInsert = "#content-container > div:last-child > div:nth-child(2) nav ._2IzNv a:last-child";
            this._el = null;
            this._el = null;
        }
        _insertAfter(newNode, referenceNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
        buildUI() {
            let buildButton = () => {
                let buttonTag = this._doc.createElement("a");
                buttonTag.classList.add("_3rUER");
                buttonTag.href = "#";
                buttonTag.id = "downloadAllInit";
                buttonTag.text = "Download All";
                return buttonTag;
            };
            this._el = buildButton();
            let appendAfter = this._doc.querySelector(this._cssSelectorForInsert);
            this._insertAfter(this._el, appendAfter);
        }
        destroy() {
            if (this._el != null) {
                this._el.remove();
                this._el = null;
            }
        }
        changeButtonText(text) {
            if (this._el != null) {
                this._el.innerHTML = text;
            }
        }
    }
    exports.UIEngine = UIEngine;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/manager/AbstractImageResolver.ts":
/*!**********************************************!*\
  !*** ./src/manager/AbstractImageResolver.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../model/IDAimage */ "./src/model/IDAimage.ts"), __webpack_require__(/*! ./impl/QueryEngine */ "./src/manager/impl/QueryEngine.ts"), __webpack_require__(/*! ../utils/HtmlExtractor */ "./src/utils/HtmlExtractor.ts"), __webpack_require__(/*! ../Main */ "./src/Main.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, IDAimage_1, QueryEngine_1, HtmlExtractor_1, Main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractImageResolver = void 0;
    class AbstractImageResolver {
        constructor() {
            this._queryEngine = new QueryEngine_1.QueryEngine();
            this._counter = 0;
        }
        async parse(userName) {
            let query = this.getQuery(userName);
            let rep = await this._doQuery(query);
            let returnArr = await this._parseResp(rep);
            while (rep.hasMore) {
                query.offset = rep.nextOffset;
                rep = await this._doQuery(query);
                returnArr = returnArr.concat(await this._parseResp(rep));
            }
            this._counter = 0;
            return returnArr;
        }
        _doQuery(query) {
            return this._queryEngine.query(query);
        }
        async _parseResp(rep) {
            let retArra = [];
            let results = rep.results;
            for (let result of results) {
                let r = result.deviation;
                if (r) {
                    if (r.isDownloadable) {
                        this._counter++;
                        r.url = await HtmlExtractor_1.HtmlExtractor.getDownloadUrl(r);
                        retArra.push(new IDAimage_1.IDAimage(r));
                        Main_1.Main._uiEngine.changeButtonText(`Downloadable images found: ${this._counter}`);
                    }
                }
            }
            return retArra;
        }
    }
    exports.AbstractImageResolver = AbstractImageResolver;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/manager/impl/QueryEngine.ts":
/*!*****************************************!*\
  !*** ./src/manager/impl/QueryEngine.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueryEngine = void 0;
    class QueryEngine {
        constructor() {
            this.baseUrl = "https://www.deviantart.com/_napi/da-user-profile/api/";
        }
        query(query) {
            let url = `${this.baseUrl}${query.method}?username=${query.username}&offset=${query.offset}&limit=${query.limit}`;
            return fetch(url).then(value => value.json()).then(json => json);
        }
    }
    exports.QueryEngine = QueryEngine;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/manager/module/ImageResolverGallery.ts":
/*!****************************************************!*\
  !*** ./src/manager/module/ImageResolverGallery.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../AbstractImageResolver */ "./src/manager/AbstractImageResolver.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractImageResolver_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageResolverGallery = void 0;
    class ImageResolverGallery extends AbstractImageResolver_1.AbstractImageResolver {
        getQuery(username) {
            return {
                limit: 24,
                method: "gallery/contents",
                offset: 0,
                username: username
            };
        }
    }
    exports.ImageResolverGallery = ImageResolverGallery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/model/IDAimage.ts":
/*!*******************************!*\
  !*** ./src/model/IDAimage.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IDAimage = void 0;
    class IDAimage {
        constructor(image) {
            this._actualImage = null;
            this._title = image.title + ".jpg";
            this.url = image.url;
            this._actualImage = null;
        }
        get title() {
            return this._title;
        }
        get src() {
            return this.url;
        }
        get isInit() {
            return this._actualImage != null;
        }
        get image() {
            if (!this.isInit) {
                throw new Error("Image has not been loaded yet");
            }
            return this._actualImage;
        }
        unloadImage() {
            this._actualImage = null;
        }
        loadImage() {
            if (this.isInit) {
                return Promise.resolve();
            }
            return Utils_1.AjaxUtils.loadImage(this.url).then(image => {
                this._actualImage = image;
            });
        }
    }
    exports.IDAimage = IDAimage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/utils/HtmlExtractor.ts":
/*!************************************!*\
  !*** ./src/utils/HtmlExtractor.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HtmlExtractor = void 0;
    var HtmlExtractor;
    (function (HtmlExtractor) {
        async function getDownloadUrl(responseQuery) {
            let query = responseQuery.url;
            let html = await (await fetch(query)).text();
            let domParser = new DOMParser();
            let document = domParser.parseFromString(html, "text/html");
            let root = document.getElementById("root");
            let downloadButton = root.querySelector("a[data-hook='download_button']");
            if (downloadButton == null) {
                alert("Unable to obtain download, exception not handled");
                throw new Error("Unable to obtain download");
            }
            return downloadButton.href;
        }
        HtmlExtractor.getDownloadUrl = getDownloadUrl;
    })(HtmlExtractor = exports.HtmlExtractor || (exports.HtmlExtractor = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../css/modal.css */ "./src/css/modal.css")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectUtil = exports.DomUtil = exports.MathUtil = exports.AjaxUtils = exports.delay = exports.QueryString = exports.HTTP_METHOD = void 0;
    var HTTP_METHOD;
    (function (HTTP_METHOD) {
        HTTP_METHOD["GET"] = "GET";
        HTTP_METHOD["POST"] = "POST";
        HTTP_METHOD["OPTIONS"] = "OPTIONS";
    })(HTTP_METHOD = exports.HTTP_METHOD || (exports.HTTP_METHOD = {}));
    exports.QueryString = (() => {
        if (typeof window == "undefined") {
            return {};
        }
        let query_string = {};
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=");
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = pair[1];
            }
            else if (typeof query_string[pair[0]] === "string") {
                query_string[pair[0]] = [query_string[pair[0]], pair[1]];
            }
            else {
                query_string[pair[0]].push(pair[1]);
            }
        }
        return query_string;
    })();
    async function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    exports.delay = delay;
    class AjaxUtils {
        static addParameter(url, parameterName, parameterValue, atStart = false) {
            let replaceDuplicates = true;
            let urlhash;
            let cl;
            if (url.indexOf('#') > 0) {
                cl = url.indexOf('#');
                urlhash = url.substring(url.indexOf('#'), url.length);
            }
            else {
                urlhash = '';
                cl = url.length;
            }
            let sourceUrl = url.substring(0, cl);
            let urlParts = sourceUrl.split("?");
            let newQueryString = "";
            if (urlParts.length > 1) {
                let parameters = urlParts[1].split("&");
                for (let i = 0; (i < parameters.length); i++) {
                    let parameterParts = parameters[i].split("=");
                    if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
                        if (newQueryString == "") {
                            newQueryString = "?";
                        }
                        else {
                            newQueryString += "&";
                        }
                        newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
                    }
                }
            }
            if (newQueryString == "") {
                newQueryString = "?";
            }
            if (atStart) {
                newQueryString = '?' + parameterName + "=" + parameterValue + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
            }
            else {
                if (newQueryString !== "" && newQueryString != '?')
                    newQueryString += "&";
                newQueryString += parameterName + "=" + (parameterValue ? parameterValue : '');
            }
            return urlParts[0] + newQueryString + urlhash;
        }
        static loadImage(url) {
            return new Promise((resolve, reject) => {
                try {
                    let xhr = new XMLHttpRequest();
                    xhr.open(HTTP_METHOD.GET, url);
                    xhr.responseType = "blob";
                    xhr.timeout = 20000;
                    xhr.onerror = () => {
                        reject("Network error.");
                    };
                    xhr.onload = () => {
                        if (xhr.status === 200) {
                            resolve(xhr.response);
                        }
                        else {
                            reject("Loading error:" + xhr.statusText);
                        }
                    };
                    xhr.ontimeout = () => {
                        reject("Network error.");
                    };
                    xhr.send();
                }
                catch (err) {
                    reject(err.message);
                }
            });
        }
    }
    exports.AjaxUtils = AjaxUtils;
    class EnumEx {
        static getNamesAndValues(e) {
            return EnumEx.getNames(e).map(n => ({ name: n, value: e[n] }));
        }
        /**
         * get the numValue associated with it's own key. if you want to get a TypeScript Enum based on an index you can use this
         * @param e
         * @param aName
         * @returns {string|null}
         */
        static loopBack(e, aName) {
            let keyValuePair = EnumEx.getNamesAndValues(e);
            for (let i = 0; i < keyValuePair.length; i++) {
                let obj = keyValuePair[i];
                if (obj.name === aName) {
                    return obj.name;
                }
            }
            return null;
        }
        static getNames(e) {
            return EnumEx.getObjValues(e).filter(v => typeof v === "string");
        }
        static getObjValues(e) {
            return Object.keys(e).map(k => e[k]);
        }
    }
    class MathUtil {
        static range(start, end) {
            // @ts-ignore
            return Array(end - start + 1).fill().map((_, idx) => start + idx);
        }
    }
    exports.MathUtil = MathUtil;
    class DomUtil {
        /**
         * Create a modal with the given options
         * @param options
         */
        static createModal(options) {
            function getStyle(styleObj) {
                let styleStr = "";
                if (styleObj) {
                    for (let key in styleObj) {
                        if (styleObj.hasOwnProperty(key)) {
                            styleStr += `${key}: ${styleObj[key]}; `;
                        }
                    }
                }
                return styleStr;
            }
            let id = null;
            if (ObjectUtil.validString(options.id)) {
                id = options.id;
            }
            else {
                id = ObjectUtil.guid();
            }
            let bodyStyle = getStyle(options.modalContentStyle);
            let styleStr = getStyle(options.modalBodyStyle);
            let html = `<div class="FetishModal" id="${id}"> 
                        <div class="FSmodalContent" style="${bodyStyle}"> 
                            <div class="FSmodalHeader"> 
                                <span class="FSclose">&times;</span> 
                                <h5 class="FSmodalTitle">${options.title}</h5> 
                            </div> 
                            <div class="FSModalBody" style="${styleStr}">${options.body}</div>`;
            if (ObjectUtil.validString(options.footer)) {
                html += ` <div class="FSModalFooter"> 
                         ${options.footer} 
                       </div>`;
            }
            html += `</div></div>`;
            let modal = DomUtil.createElementFromHTML(html);
            window.onclick = (event) => {
                if (event.target == modal) {
                    DomUtil.closeModal(modal);
                }
            };
            DomUtil.offOn(DomUtil.bySelector(".FSclose", modal), "click", e => {
                DomUtil.closeModal(modal);
            });
            return modal;
        }
        static bySelector(selector, el) {
            if (el) {
                return el.querySelector(selector);
            }
            return document.querySelector(selector);
        }
        static offOn(el, event, callBack, fireImmediately = false) {
            if (!el) {
                return;
            }
            let toTrigger;
            if (el instanceof Element) {
                toTrigger = el;
            }
            else {
                toTrigger = document.querySelector(el);
            }
            if (!toTrigger) {
                return;
            }
            toTrigger = DomUtil.off(toTrigger);
            DomUtil.on(toTrigger, event, callBack, fireImmediately);
        }
        static off(el) {
            if (!el) {
                return;
            }
            let newEl = el.cloneNode(false);
            while (el.hasChildNodes()) {
                newEl.appendChild(el.firstChild);
            }
            el.parentNode.replaceChild(newEl, el);
            return newEl;
        }
        static on(el, event, callBack, fireImmediately = false) {
            if (!el) {
                return;
            }
            let toTrigger;
            if (el instanceof Element) {
                toTrigger = el;
            }
            else {
                toTrigger = document.querySelector(el);
            }
            if (!toTrigger) {
                return;
            }
            toTrigger.addEventListener(event, callBack);
            if (fireImmediately) {
                toTrigger.dispatchEvent(new Event(event));
            }
        }
        static openModal(modal) {
            modal.style.display = "block";
        }
        static createElementFromHTML(htmlString) {
            let div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div.firstChild;
        }
        static closeModal(modal) {
            modal.style.display = "none";
        }
    }
    exports.DomUtil = DomUtil;
    class ObjectUtil {
        static guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
        static validString(...strings) {
            if (strings.length === 0) {
                return false;
            }
            for (let currString of strings) {
                if (typeof currString !== "string") {
                    return false;
                }
                if (currString.length === 0) {
                    return false;
                }
                if (currString.trim().length === 0) {
                    return true;
                }
            }
            return true;
        }
        static removeObjectFromArray(itemToRemove, arr) {
            let arrLen = arr.length;
            while (arrLen--) {
                let currentItem = arr[arrLen];
                if (itemToRemove === currentItem) {
                    arr.splice(arrLen, 1);
                }
            }
        }
    }
    exports.ObjectUtil = ObjectUtil;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "JSZip":
/*!************************!*\
  !*** external "JSZip" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_JSZip__;

/***/ })

/******/ });
});