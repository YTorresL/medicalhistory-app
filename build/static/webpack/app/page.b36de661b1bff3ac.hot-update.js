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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotificationState: function() { return /* binding */ NotificationState; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction NotificationState(param) {\n    let { getPopUpStyle, handleToggle, handleConfirmation } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabindex: \"-1\",\n        className: \"\".concat(getPopUpStyle(), \" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"relative p-4 w-full max-w-md max-h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"relative bg-white rounded-lg shadow dark:bg-gray-700\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: handleToggle,\n                            class: \"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white\",\n                            \"data-modal-hide\": \"popup-modal\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    class: \"w-3 h-3\",\n                                    \"aria-hidden\": \"true\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 14 14\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        stroke: \"currentColor\",\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"sr-only\",\n                                    children: \"Close modal\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"p-4 md:p-5 text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    class: \"mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200\",\n                                    \"aria-hidden\": \"true\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 20 20\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        stroke: \"currentColor\",\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    class: \"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400\",\n                                    children: \"Are you sure you want to delete this product?\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-modal-hide\": \"popup-modal\",\n                                    type: \"button\",\n                                    class: \"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2\",\n                                    children: \"Yes, Im sure\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-modal-hide\": \"popup-modal\",\n                                    type: \"button\",\n                                    class: \"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\",\n                                    children: \"No, cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\notification.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = NotificationState;\nvar _c;\n$RefreshReg$(_c, \"NotificationState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLGtCQUFrQixLQUlqQztRQUppQyxFQUNoQ0MsYUFBYSxFQUNiQyxZQUFZLEVBQ1pDLGtCQUFrQixFQUNuQixHQUppQztJQUtoQyxxQkFDRSw4REFBQ0M7UUFDQ0MsVUFBUztRQUNUQyxXQUFXLEdBQW1CLE9BQWhCTCxpQkFBZ0I7a0JBRTlCLDRFQUFDRztZQUNDRyxPQUFRO3NCQUVSLDRFQUFDSDtnQkFBSUcsT0FBTTswQkFDVCw0RUFBQ0g7b0JBQUlHLE9BQU07O3NDQUNULDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsU0FBU1I7NEJBQ1RLLE9BQU07NEJBQ05JLG1CQUFnQjs7OENBRWhCLDhEQUFDQztvQ0FDQ0wsT0FBTTtvQ0FDTk0sZUFBWTtvQ0FDWkMsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsU0FBUTs4Q0FFUiw0RUFBQ0M7d0NBQ0NDLFFBQU87d0NBQ1BDLGtCQUFlO3dDQUNmQyxtQkFBZ0I7d0NBQ2hCQyxnQkFBYTt3Q0FDYkMsR0FBRTs7Ozs7Ozs7Ozs7OENBR04sOERBQUNDO29DQUFLaEIsT0FBTTs4Q0FBVTs7Ozs7Ozs7Ozs7O3NDQUV4Qiw4REFBQ0g7NEJBQUlHLE9BQU07OzhDQUNULDhEQUFDSztvQ0FDQ0wsT0FBTTtvQ0FDTk0sZUFBWTtvQ0FDWkMsT0FBTTtvQ0FDTkMsTUFBSztvQ0FDTEMsU0FBUTs4Q0FFUiw0RUFBQ0M7d0NBQ0NDLFFBQU87d0NBQ1BDLGtCQUFlO3dDQUNmQyxtQkFBZ0I7d0NBQ2hCQyxnQkFBYTt3Q0FDYkMsR0FBRTs7Ozs7Ozs7Ozs7OENBR04sOERBQUNFO29DQUFHakIsT0FBTTs4Q0FBNEQ7Ozs7Ozs4Q0FHdEUsOERBQUNDO29DQUNDRyxtQkFBZ0I7b0NBQ2hCRixNQUFLO29DQUNMRixPQUFNOzhDQUNQOzs7Ozs7OENBR0QsOERBQUNDO29DQUNDRyxtQkFBZ0I7b0NBQ2hCRixNQUFLO29DQUNMRixPQUFNOzhDQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtLQTdFZ0JQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLmpzPzcxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvblN0YXRlKHtcclxuICBnZXRQb3BVcFN0eWxlLFxyXG4gIGhhbmRsZVRvZ2dsZSxcclxuICBoYW5kbGVDb25maXJtYXRpb24sXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgY2xhc3NOYW1lPXtgJHtnZXRQb3BVcFN0eWxlKCl9IHRvcC0xLzIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMmB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz17YG92ZXJmbG93LXktYXV0byBvdmVyZmxvdy14LWhpZGRlbiB0b3AtMCByaWdodC0wIGxlZnQtMCB6LTUwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWQ6aW5zZXQtMCBtYXgtaC1mdWxsYH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBwLTQgdy1mdWxsIG1heC13LW1kIG1heC1oLWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMyBlbmQtMi41IHRleHQtZ3JheS00MDAgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctZ3JheS0yMDAgaG92ZXI6dGV4dC1ncmF5LTkwMCByb3VuZGVkLWxnIHRleHQtc20gdy04IGgtOCBtcy1hdXRvIGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1tb2RhbC1oaWRlPVwicG9wdXAtbW9kYWxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTMgaC0zXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTQgMTRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwibTEgMSA2IDZtMCAwIDYgNk03IDdsNi02TTcgN2wtNiA2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+Q2xvc2UgbW9kYWw8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC00IG1kOnAtNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibXgtYXV0byBtYi00IHRleHQtZ3JheS00MDAgdy0xMiBoLTEyIGRhcms6dGV4dC1ncmF5LTIwMFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMCAxMVY2bTAgOGguMDFNMTkgMTBhOSA5IDAgMSAxLTE4IDAgOSA5IDAgMCAxIDE4IDBaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWItNSB0ZXh0LWxnIGZvbnQtbm9ybWFsIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvZHVjdD9cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGRhdGEtbW9kYWwtaGlkZT1cInBvcHVwLW1vZGFsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcmVkLTMwMCBkYXJrOmZvY3VzOnJpbmctcmVkLTgwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1lLTJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFllcywgSW0gc3VyZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGRhdGEtbW9kYWwtaGlkZT1cInBvcHVwLW1vZGFsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ncmF5LTIwMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1zbSBmb250LW1lZGl1bSBweC01IHB5LTIuNSBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvY3VzOnotMTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDAgZGFyazpib3JkZXItZ3JheS01MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNjAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBObywgY2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25TdGF0ZSIsImdldFBvcFVwU3R5bGUiLCJoYW5kbGVUb2dnbGUiLCJoYW5kbGVDb25maXJtYXRpb24iLCJkaXYiLCJ0YWJpbmRleCIsImNsYXNzTmFtZSIsImNsYXNzIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJkYXRhLW1vZGFsLWhpZGUiLCJzdmciLCJhcmlhLWhpZGRlbiIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJwYXRoIiwic3Ryb2tlIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJzdHJva2Utd2lkdGgiLCJkIiwic3BhbiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/notification.js\n"));

/***/ })

});