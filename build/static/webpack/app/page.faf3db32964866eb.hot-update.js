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

/***/ "(app-pages-browser)/./components/notification.js":
/*!************************************!*\
  !*** ./components/notification.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotificationState: function() { return /* binding */ NotificationState; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"(app-pages-browser)/./components/icons.js\");\n\n\nfunction NotificationState(param) {\n    let { getPopUpStyle, handleToggle, handleConfirmation } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabindex: \"-1\",\n        className: \"\".concat(getPopUpStyle(), \" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"relative p-4 w-full max-w-md max-h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"relative bg-white rounded-lg shadow\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: handleToggle,\n                            class: \"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center\",\n                            \"data-modal-hide\": \"popup-modal\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.IconClose, {\n                                    className: \"w-full text-[#1FBBC2] h-full\",\n                                    stroke: \"#1FBBC2\",\n                                    fill: \"#1FBBC2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"sr-only\",\n                                    children: \"Close modal\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"p-4 md:p-5 text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_1__.IconExclamation, {\n                                    className: \"w-12 text-[#1FBBC2] h-12 my-3 mx-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    class: \"mb-5 text-lg  text-gray-500 dark:text-gray-400\",\n                                    children: \"Are you sure you want to delete this product?\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-modal-hide\": \"popup-modal\",\n                                    type: \"button\",\n                                    class: \"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2\",\n                                    children: \"Yes, Im sure\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-modal-hide\": \"popup-modal\",\n                                    type: \"button\",\n                                    class: \"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\",\n                                    children: \"No, cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = NotificationState;\nvar _c;\n$RefreshReg$(_c, \"NotificationState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFFN0MsU0FBU0Usa0JBQWtCLEtBSWpDO1FBSmlDLEVBQ2hDQyxhQUFhLEVBQ2JDLFlBQVksRUFDWkMsa0JBQWtCLEVBQ25CLEdBSmlDO0lBS2hDLHFCQUNFLDhEQUFDQztRQUNDQyxVQUFTO1FBQ1RDLFdBQVcsR0FBbUIsT0FBaEJMLGlCQUFnQjtrQkFFOUIsNEVBQUNHO1lBQ0NHLE9BQVE7c0JBRVIsNEVBQUNIO2dCQUFJRyxPQUFNOzBCQUNULDRFQUFDSDtvQkFBSUcsT0FBTTs7c0NBQ1QsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxTQUFTUjs0QkFDVEssT0FBTTs0QkFDTkksbUJBQWdCOzs4Q0FFaEIsOERBQUNiLDZDQUFTQTtvQ0FDUlEsV0FBVTtvQ0FDVk0sUUFBTztvQ0FDUEMsTUFBSzs7Ozs7OzhDQUVQLDhEQUFDQztvQ0FBS1AsT0FBTTs4Q0FBVTs7Ozs7Ozs7Ozs7O3NDQUV4Qiw4REFBQ0g7NEJBQUlHLE9BQU07OzhDQUNULDhEQUFDUixtREFBZUE7b0NBQUNPLFdBQVU7Ozs7Ozs4Q0FDM0IsOERBQUNTO29DQUFHUixPQUFNOzhDQUFpRDs7Ozs7OzhDQUczRCw4REFBQ0M7b0NBQ0NHLG1CQUFnQjtvQ0FDaEJGLE1BQUs7b0NBQ0xGLE9BQU07OENBQ1A7Ozs7Ozs4Q0FHRCw4REFBQ0M7b0NBQ0NHLG1CQUFnQjtvQ0FDaEJGLE1BQUs7b0NBQ0xGLE9BQU07OENBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0tBckRnQlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RpZmljYXRpb24uanM/NzE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uQ2xvc2UsIEljb25FeGNsYW1hdGlvbiB9IGZyb20gXCIuL2ljb25zXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb3RpZmljYXRpb25TdGF0ZSh7XHJcbiAgZ2V0UG9wVXBTdHlsZSxcclxuICBoYW5kbGVUb2dnbGUsXHJcbiAgaGFuZGxlQ29uZmlybWF0aW9uLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgIGNsYXNzTmFtZT17YCR7Z2V0UG9wVXBTdHlsZSgpfSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzJgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9e2BvdmVyZmxvdy15LWF1dG8gb3ZlcmZsb3cteC1oaWRkZW4gdG9wLTAgcmlnaHQtMCBsZWZ0LTAgei01MCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIG1kOmluc2V0LTAgbWF4LWgtZnVsbGB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgcC00IHctZnVsbCBtYXgtdy1tZCBtYXgtaC1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3dcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cclxuICAgICAgICAgICAgICBjbGFzcz1cImFic29sdXRlIHRvcC0zIGVuZC0yLjUgdGV4dC1ncmF5LTQwMCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ncmF5LTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbGcgdGV4dC1zbSB3LTggaC04IG1zLWF1dG8gaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICBkYXRhLW1vZGFsLWhpZGU9XCJwb3B1cC1tb2RhbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SWNvbkNsb3NlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1bIzFGQkJDMl0gaC1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMxRkJCQzJcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMxRkJCQzJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+Q2xvc2UgbW9kYWw8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC00IG1kOnAtNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxJY29uRXhjbGFtYXRpb24gY2xhc3NOYW1lPVwidy0xMiB0ZXh0LVsjMUZCQkMyXSBoLTEyIG15LTMgbXgtYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWItNSB0ZXh0LWxnICB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2R1Y3Q/XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1vZGFsLWhpZGU9XCJwb3B1cC1tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXJlZC0zMDAgZGFyazpmb2N1czpyaW5nLXJlZC04MDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBtZS0yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBZZXMsIEltIHN1cmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1vZGFsLWhpZGU9XCJwb3B1cC1tb2RhbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctZ3JheS0yMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNSBweS0yLjUgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czp6LTEwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTm8sIGNhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiSWNvbkNsb3NlIiwiSWNvbkV4Y2xhbWF0aW9uIiwiTm90aWZpY2F0aW9uU3RhdGUiLCJnZXRQb3BVcFN0eWxlIiwiaGFuZGxlVG9nZ2xlIiwiaGFuZGxlQ29uZmlybWF0aW9uIiwiZGl2IiwidGFiaW5kZXgiLCJjbGFzc05hbWUiLCJjbGFzcyIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZGF0YS1tb2RhbC1oaWRlIiwic3Ryb2tlIiwiZmlsbCIsInNwYW4iLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/notification.js\n"));

/***/ })

});