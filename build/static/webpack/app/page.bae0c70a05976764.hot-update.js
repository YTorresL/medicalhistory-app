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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_card_card_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/card/card-info */ \"(app-pages-browser)/./components/card/card-info.js\");\n/* harmony import */ var _components_card_card_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/card/card-preview */ \"(app-pages-browser)/./components/card/card-preview.js\");\n/* harmony import */ var _components_info_get_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/info/get-info */ \"(app-pages-browser)/./components/info/get-info.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./components/header.js\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/icons */ \"(app-pages-browser)/./components/icons.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sidebar */ \"(app-pages-browser)/./components/sidebar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/pagination */ \"(app-pages-browser)/./components/pagination.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst pageSize = 10;\nfunction Home() {\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [indexCustomer, setIndexCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_components_info_get_info__WEBPACK_IMPORTED_MODULE_3__.getHistory)();\n            setCustomer(data);\n            setLoading(true);\n        };\n        fetchData();\n    }, []);\n    const onPageChange = (page)=>{\n        setCurrentPage(page);\n    };\n    const handleInfoChange = (id)=>{\n        setIndexCustomer(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_6__.SideBar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"z-20 flex\",\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"lg:w-[68%] w-full flex flex-col gap-5 -mt-9 mb-14 animate-fade animate-duration-300\",\n                                    children: customer.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_card_preview__WEBPACK_IMPORTED_MODULE_2__.CardPreview, {\n                                            InfoChange: handleInfoChange,\n                                            customer: item,\n                                            id: index\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[32%] hidden lg:block -mt-40\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_card_info__WEBPACK_IMPORTED_MODULE_1__.CardInfo, {\n                                        customer: customer[indexCustomer]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination__WEBPACK_IMPORTED_MODULE_8__.Pagination, {\n                                    items: customer.length,\n                                    currentPage: currentPage,\n                                    pageSize: pageSize,\n                                    onPageChange: onPageChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center w-full h-96\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_5__.IconLoading, {\n                                    className: \"w-8 h-8 animate-spin text-gray-200 fill-[#1FBBC2]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"sr-only\",\n                                    children: \"Loading...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"/IGQEsa4PSgflr88DHh4dB0odk0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDTTtBQUNMO0FBQ1g7QUFDSTtBQUNGO0FBQ0g7QUFDUztBQUVwRCxNQUFNUyxXQUFXO0FBRUYsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxlQUFlQyxpQkFBaUIsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsWUFBWTtZQUNoQixNQUFNQyxPQUFPLE1BQU1sQixxRUFBVUE7WUFDN0JZLFlBQVlNO1lBQ1pKLFdBQVc7UUFDYjtRQUNBRztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1FLGVBQWUsQ0FBQ0M7UUFDcEJWLGVBQWVVO0lBQ2pCO0lBQ0EsTUFBTUMsbUJBQW1CLENBQUNDO1FBQ3hCTixpQkFBaUJNO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDckIsd0RBQU9BOzs7OzswQkFDUiw4REFBQ29CO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3ZCLHNEQUFNQTs7Ozs7a0NBQ1AsOERBQUN3Qjt3QkFBS0QsV0FBVTtrQ0FDYlgsd0JBQ0M7OzhDQUNFLDhEQUFDVTtvQ0FBSUMsV0FBVTs4Q0FDWmIsU0FBU2UsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQzdCLHNFQUFXQTs0Q0FDVjhCLFlBQVlSOzRDQUNaVixVQUFVZ0I7NENBQ1ZMLElBQUlNOzJDQUNDQTs7Ozs7Ozs7Ozs4Q0FJWCw4REFBQ0w7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUMxQixnRUFBUUE7d0NBQUNhLFVBQVVBLFFBQVEsQ0FBQ0ksY0FBYzs7Ozs7Ozs7Ozs7OENBRTdDLDhEQUFDVCw4REFBVUE7b0NBQ1R3QixPQUFPbkIsU0FBU29CLE1BQU07b0NBQ3RCdEIsYUFBYUE7b0NBQ2JGLFVBQVVBO29DQUNWWSxjQUFjQTs7Ozs7Ozt5REFJbEIsOERBQUNJOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3RCLDBEQUFXQTtvQ0FBQ3NCLFdBQVU7Ozs7Ozs4Q0FDdkIsOERBQUNRO29DQUFLQyxPQUFNOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQztHQTVEd0J6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBDYXJkSW5mbyB9IGZyb20gXCJAL2NvbXBvbmVudHMvY2FyZC9jYXJkLWluZm9cIlxuaW1wb3J0IHsgQ2FyZFByZXZpZXcgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NhcmQvY2FyZC1wcmV2aWV3XCJcbmltcG9ydCB7IGdldEhpc3RvcnkgfSBmcm9tIFwiQC9jb21wb25lbnRzL2luZm8vZ2V0LWluZm9cIlxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9oZWFkZXJcIlxuaW1wb3J0IHsgSWNvbkxvYWRpbmcgfSBmcm9tIFwiQC9jb21wb25lbnRzL2ljb25zXCJcbmltcG9ydCB7IFNpZGVCYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3NpZGViYXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9wYWdpbmF0aW9uXCJcblxuY29uc3QgcGFnZVNpemUgPSAxMFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaW5kZXhDdXN0b21lciwgc2V0SW5kZXhDdXN0b21lcl0gPSB1c2VTdGF0ZSgwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEhpc3RvcnkoKVxuICAgICAgc2V0Q3VzdG9tZXIoZGF0YSlcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICB9XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgY29uc3Qgb25QYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlKVxuICB9XG4gIGNvbnN0IGhhbmRsZUluZm9DaGFuZ2UgPSAoaWQpID0+IHtcbiAgICBzZXRJbmRleEN1c3RvbWVyKGlkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgIDxTaWRlQmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiei0yMCBmbGV4XCI+XG4gICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctWzY4JV0gdy1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTUgLW10LTkgbWItMTQgYW5pbWF0ZS1mYWRlIGFuaW1hdGUtZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAge2N1c3RvbWVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJkUHJldmlld1xuICAgICAgICAgICAgICAgICAgICBJbmZvQ2hhbmdlPXtoYW5kbGVJbmZvQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMzIlXSBoaWRkZW4gbGc6YmxvY2sgLW10LTQwXCI+XG4gICAgICAgICAgICAgICAgPENhcmRJbmZvIGN1c3RvbWVyPXtjdXN0b21lcltpbmRleEN1c3RvbWVyXX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgaXRlbXM9e2N1c3RvbWVyLmxlbmd0aH0gLy8gMTAwXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSAvLyAxXG4gICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfSAvLyAxMFxuICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17b25QYWdlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtOTZcIj5cbiAgICAgICAgICAgICAgPEljb25Mb2FkaW5nIGNsYXNzTmFtZT1cInctOCBoLTggYW5pbWF0ZS1zcGluIHRleHQtZ3JheS0yMDAgZmlsbC1bIzFGQkJDMl1cIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDYXJkSW5mbyIsIkNhcmRQcmV2aWV3IiwiZ2V0SGlzdG9yeSIsIkhlYWRlciIsIkljb25Mb2FkaW5nIiwiU2lkZUJhciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFnaW5hdGlvbiIsInBhZ2VTaXplIiwiSG9tZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbmRleEN1c3RvbWVyIiwic2V0SW5kZXhDdXN0b21lciIsImZldGNoRGF0YSIsImRhdGEiLCJvblBhZ2VDaGFuZ2UiLCJwYWdlIiwiaGFuZGxlSW5mb0NoYW5nZSIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkluZm9DaGFuZ2UiLCJpdGVtcyIsImxlbmd0aCIsInNwYW4iLCJjbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/pagination.js":
/*!**********************************!*\
  !*** ./components/pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pagination: function() { return /* binding */ Pagination; }\n/* harmony export */ });\nfunction Pagination(params) {}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsV0FBV0MsTUFBTSxHQUFHO0tBQXBCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2luYXRpb24uanM/MzI4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gUGFnaW5hdGlvbihwYXJhbXMpIHt9XHJcbiJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwicGFyYW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/pagination.js\n"));

/***/ })

});