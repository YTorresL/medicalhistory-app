"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/create-info.js":
/*!***********************************!*\
  !*** ./components/create-info.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateInfo: function() { return /* binding */ CreateInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"(app-pages-browser)/./components/icons.js\");\n\n\nfunction CreateInfo(param) {\n    let { getCreateViewStyle, handleToggle } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(getCreateViewStyle(), \" bg-black/40 flex items-center justify-center z-[1000] top-0 bottom-0 right-0 left-0\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-5/6 p-3 bg-white rounded-lg h-5/6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between border-b border-[#EDEDED] pb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleToggle,\n                        className: \"flex p-2 items-center justify-center h-10 w-10  rounded-full bg-[#eeeeee] transition ease-out duration-150\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.IconClose, {\n                            className: \"w-full text- [#1FBBC2] h-full\",\n                            stroke: \"#1FBBC2\",\n                            fill: \"#1FBBC2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\create-info.js\",\n                            lineNumber: 15,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\create-info.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\create-info.js\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\create-info.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\create-info.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\create-info.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = CreateInfo;\nvar _c;\n$RefreshReg$(_c, \"CreateInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY3JlYXRlLWluZm8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtQztBQUU1QixTQUFTQyxXQUFXLEtBQW9DO1FBQXBDLEVBQUVDLGtCQUFrQixFQUFFQyxZQUFZLEVBQUUsR0FBcEM7SUFDekIscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVcsR0FBd0IsT0FBckJILHNCQUFxQjtrQkFFbkMsNEVBQUNFO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDs4QkFDQyw0RUFBQ0U7d0JBQ0NDLFNBQVNKO3dCQUNURSxXQUFVO2tDQUVWLDRFQUFDTCw2Q0FBU0E7NEJBQ1JLLFdBQVU7NEJBQ1ZHLFFBQU87NEJBQ1BDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckI7S0F2QmdCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NyZWF0ZS1pbmZvLmpzPzYxNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkNsb3NlIH0gZnJvbSBcIi4vaWNvbnNcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUluZm8oeyBnZXRDcmVhdGVWaWV3U3R5bGUsIGhhbmRsZVRvZ2dsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtnZXRDcmVhdGVWaWV3U3R5bGUoKX0gYmctYmxhY2svNDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgei1bMTAwMF0gdG9wLTAgYm90dG9tLTAgcmlnaHQtMCBsZWZ0LTBgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNS82IHAtMyBiZy13aGl0ZSByb3VuZGVkLWxnIGgtNS82XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItWyNFREVERURdIHBiLTNcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTAgdy0xMCAgcm91bmRlZC1mdWxsIGJnLVsjZWVlZWVlXSB0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SWNvbkNsb3NlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC0gWyMxRkJCQzJdIGgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjMUZCQkMyXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMUZCQkMyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiSWNvbkNsb3NlIiwiQ3JlYXRlSW5mbyIsImdldENyZWF0ZVZpZXdTdHlsZSIsImhhbmRsZVRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHJva2UiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/create-info.js\n"));

/***/ })

});