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

/***/ "(app-pages-browser)/./components/pagination.js":
/*!**********************************!*\
  !*** ./components/pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pagination: function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Pagination(param) {\n    let { items, pageSize, currentPage, onPageChange } = param;\n    const pagesCount = Math.ceil(items / pageSize);\n    if (pagesCount === 1) return null;\n    const pages = Array.from({\n        length: pagesCount\n    }, (_, i)=>i + 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            class: \"inline-flex -space-x-px text-base\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentPage === 1,\n                        onClick: ()=>onPageChange(currentPage - 1),\n                        className: \"flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg disabled:bg-gray-200 disabled:cursor-default border-e-0 hover:bg-gray-100 hover:text-gray-700\",\n                        children: \"<\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\pagination.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\pagination.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this),\n                pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            onClick: ()=>onPageChange(page),\n                            className: \"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 \".concat(currentPage === page ? \"bg-[#1FBBC2] text-gray-700\" : \"hover:bg-gray-100 hover:text-gray-700\"),\n                            children: page\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\pagination.js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this)\n                    }, page, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\pagination.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: currentPage === pagesCount,\n                        onClick: ()=>onPageChange(currentPage + 1),\n                        className: \"flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg disabled:bg-gray-200 disabled:cursor-default hover:bg-gray-100 hover:text-gray-700\",\n                        children: \">\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\pagination.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\pagination.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\pagination.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\pagination.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxTQUFTQSxXQUFXLEtBQThDO1FBQTlDLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRSxHQUE5QztJQUN6QixNQUFNQyxhQUFhQyxLQUFLQyxJQUFJLENBQUNOLFFBQVFDO0lBQ3JDLElBQUlHLGVBQWUsR0FBRyxPQUFPO0lBQzdCLE1BQU1HLFFBQVFDLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRTjtJQUFXLEdBQUcsQ0FBQ08sR0FBR0MsSUFBTUEsSUFBSTtJQUMvRCxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO1lBQUdDLE9BQU07OzhCQUNSLDhEQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQ0NDLFVBQVVoQixnQkFBZ0I7d0JBQzFCaUIsU0FBUyxJQUFNaEIsYUFBYUQsY0FBYzt3QkFDMUNrQixXQUFVO2tDQUVUOzs7Ozs7Ozs7OztnQkFHSmIsTUFBTWMsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDTjtrQ0FDQyw0RUFBQ087NEJBQ0NDLE1BQUs7NEJBQ0xMLFNBQVMsSUFBTWhCLGFBQWFtQjs0QkFDNUJGLFdBQVcseUdBSVYsT0FIQ2xCLGdCQUFnQm9CLE9BQ1osK0JBQ0E7c0NBR0xBOzs7Ozs7dUJBVklBOzs7Ozs4QkFjWCw4REFBQ047OEJBQ0MsNEVBQUNDO3dCQUNDQyxVQUFVaEIsZ0JBQWdCRTt3QkFDMUJlLFNBQVMsSUFBTWhCLGFBQWFELGNBQWM7d0JBQzFDa0IsV0FBVTtrQ0FFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0tBM0NnQnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5qcz8zMjhhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgaXRlbXMsIHBhZ2VTaXplLCBjdXJyZW50UGFnZSwgb25QYWdlQ2hhbmdlIH0pIHtcclxuICBjb25zdCBwYWdlc0NvdW50ID0gTWF0aC5jZWlsKGl0ZW1zIC8gcGFnZVNpemUpXHJcbiAgaWYgKHBhZ2VzQ291bnQgPT09IDEpIHJldHVybiBudWxsXHJcbiAgY29uc3QgcGFnZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwYWdlc0NvdW50IH0sIChfLCBpKSA9PiBpICsgMSlcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdj5cclxuICAgICAgPHVsIGNsYXNzPVwiaW5saW5lLWZsZXggLXNwYWNlLXgtcHggdGV4dC1iYXNlXCI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShjdXJyZW50UGFnZSAtIDEpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTggcHgtMyBsZWFkaW5nLXRpZ2h0IHRleHQtZ3JheS01MDAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWwtbGcgZGlzYWJsZWQ6YmctZ3JheS0yMDAgZGlzYWJsZWQ6Y3Vyc29yLWRlZmF1bHQgYm9yZGVyLWUtMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1wiPFwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtwYWdlfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKHBhZ2UpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTMgaC04IGxlYWRpbmctdGlnaHQgdGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwICR7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA9PT0gcGFnZVxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctWyMxRkJCQzJdIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gcGFnZXNDb3VudH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKGN1cnJlbnRQYWdlICsgMSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCBweC0zIGxlYWRpbmctdGlnaHQgdGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtci1sZyBkaXNhYmxlZDpiZy1ncmF5LTIwMCBkaXNhYmxlZDpjdXJzb3ItZGVmYXVsdCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1wiPlwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsIml0ZW1zIiwicGFnZVNpemUiLCJjdXJyZW50UGFnZSIsIm9uUGFnZUNoYW5nZSIsInBhZ2VzQ291bnQiLCJNYXRoIiwiY2VpbCIsInBhZ2VzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJuYXYiLCJ1bCIsImNsYXNzIiwibGkiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJtYXAiLCJwYWdlIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/pagination.js\n"));

/***/ })

});