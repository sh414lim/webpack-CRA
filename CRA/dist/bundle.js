/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("//dom 보다 단순 한  형태의 돔\nfunction createDOM(node) {\n  if (typeof node === \"string\") {\n    return document.createTextNode(node);\n  }\n\n  var elememt = document.createElement(node.tag);\n  node.children.map(createDOM).forEach(elememt.appendChild.bind(elememt));\n  return elememt;\n}\n\nvar vdom = {\n  tag: \"p\",\n  props: {},\n  children: [{\n    tag: \"h1\",\n    props: {},\n    children: [\"react make\"]\n  }, {\n    tag: \"ul\",\n    props: {},\n    children: [{\n      tag: \"li\",\n      props: {},\n      children: [\"first item\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"second item\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"three item\"]\n    }]\n  }]\n}; //dom\n\ndocument.querySelector(\"#root\").appendChild(createDOM(vdom));\n\n//# sourceURL=webpack://webpack-crm/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;