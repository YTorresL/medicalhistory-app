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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_card_card_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/card/card-info */ \"(app-pages-browser)/./components/card/card-info.js\");\n/* harmony import */ var _components_card_card_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/card/card-preview */ \"(app-pages-browser)/./components/card/card-preview.js\");\n/* harmony import */ var _components_info_get_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/info/get-info */ \"(app-pages-browser)/./components/info/get-info.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./components/header.js\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/icons */ \"(app-pages-browser)/./components/icons.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sidebar */ \"(app-pages-browser)/./components/sidebar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/pagination */ \"(app-pages-browser)/./components/pagination.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst SIZE_PAGINATE = [\n    10,\n    20,\n    30\n];\nconst paginate = (items, pageNumber, pageSize)=>{\n    const startIndex = (pageNumber - 1) * pageSize;\n    return items.slice(startIndex, startIndex + pageSize);\n};\nfunction Home() {\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [indexCustomer, setIndexCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);\n    const [pageSize] = SIZE_PAGINATE[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_components_info_get_info__WEBPACK_IMPORTED_MODULE_3__.getHistory)();\n            setCustomer(data);\n            setLoading(true);\n        };\n        fetchData();\n    }, []);\n    const onPageChange = (page)=>{\n        setCurrentPage(page);\n    };\n    const handleInfoChange = (id)=>{\n        setIndexCustomer(id);\n    };\n    const paginatedCustomer = paginate(customer, currentPage, pageSize);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_6__.SideBar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"z-20 flex\",\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"lg:w-[68%] w-full flex flex-col gap-5 -mt-9 mb-14 animate-fade animate-duration-300\",\n                                    children: [\n                                        paginatedCustomer.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_card_preview__WEBPACK_IMPORTED_MODULE_2__.CardPreview, {\n                                                InfoChange: handleInfoChange,\n                                                customer: item,\n                                                id: index\n                                            }, index, false, {\n                                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 19\n                                            }, this)),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mx-auto my-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination__WEBPACK_IMPORTED_MODULE_8__.Pagination, {\n                                                items: customer.length,\n                                                currentPage: currentPage,\n                                                pageSize: pageSize,\n                                                onPageChange: onPageChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[32%] hidden lg:block -mt-40\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_card_info__WEBPACK_IMPORTED_MODULE_1__.CardInfo, {\n                                        customer: customer[indexCustomer]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center w-full h-96\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_5__.IconLoading, {\n                                    className: \"w-8 h-8 animate-spin text-gray-200 fill-[#1FBBC2]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"sr-only\",\n                                    children: \"Loading...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"/IGQEsa4PSgflr88DHh4dB0odk0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDTTtBQUNMO0FBQ1g7QUFDSTtBQUNGO0FBQ0g7QUFDUztBQUVwRCxNQUFNUyxnQkFBZ0I7SUFBQztJQUFJO0lBQUk7Q0FBRztBQUVsQyxNQUFNQyxXQUFXLENBQUNDLE9BQU9DLFlBQVlDO0lBQ25DLE1BQU1DLGFBQWEsQ0FBQ0YsYUFBYSxLQUFLQztJQUN0QyxPQUFPRixNQUFNSSxLQUFLLENBQUNELFlBQVlBLGFBQWFEO0FBQzlDO0FBRWUsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZ0IsZUFBZUMsaUJBQWlCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNNLFNBQVMsR0FBR0osYUFBYSxDQUFDLEVBQUU7SUFFbkNILGdEQUFTQSxDQUFDO1FBQ1IsTUFBTW1CLFlBQVk7WUFDaEIsTUFBTUMsT0FBTyxNQUFNeEIscUVBQVVBO1lBQzdCa0IsWUFBWU07WUFDWkosV0FBVztRQUNiO1FBQ0FHO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUUsZUFBZSxDQUFDQztRQUNwQlYsZUFBZVU7SUFDakI7SUFDQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEJOLGlCQUFpQk07SUFDbkI7SUFFQSxNQUFNQyxvQkFBb0JyQixTQUFTUyxVQUFVRixhQUFhSjtJQUUxRCxxQkFDRSw4REFBQ21CO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDNUIsd0RBQU9BOzs7OzswQkFDUiw4REFBQzJCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQzlCLHNEQUFNQTs7Ozs7a0NBQ1AsOERBQUMrQjt3QkFBS0QsV0FBVTtrQ0FDYlosd0JBQ0M7OzhDQUNFLDhEQUFDVztvQ0FBSUMsV0FBVTs7d0NBQ1pGLGtCQUFrQkksR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUM1Qiw4REFBQ3BDLHNFQUFXQTtnREFDVnFDLFlBQVlUO2dEQUNaVixVQUFVaUI7Z0RBQ1ZOLElBQUlPOytDQUNDQTs7Ozs7c0RBR1QsOERBQUNMOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDekIsOERBQVVBO2dEQUNURyxPQUFPUSxTQUFTb0IsTUFBTTtnREFDdEJ0QixhQUFhQTtnREFDYkosVUFBVUE7Z0RBQ1ZjLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJcEIsOERBQUNLO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDakMsZ0VBQVFBO3dDQUFDbUIsVUFBVUEsUUFBUSxDQUFDSSxjQUFjOzs7Ozs7Ozs7Ozs7eURBSS9DLDhEQUFDUzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUM3QiwwREFBV0E7b0NBQUM2QixXQUFVOzs7Ozs7OENBQ3ZCLDhEQUFDTztvQ0FBS0MsT0FBTTs4Q0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEM7R0FqRXdCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgQ2FyZEluZm8gfSBmcm9tIFwiQC9jb21wb25lbnRzL2NhcmQvY2FyZC1pbmZvXCJcbmltcG9ydCB7IENhcmRQcmV2aWV3IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jYXJkL2NhcmQtcHJldmlld1wiXG5pbXBvcnQgeyBnZXRIaXN0b3J5IH0gZnJvbSBcIkAvY29tcG9uZW50cy9pbmZvL2dldC1pbmZvXCJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyXCJcbmltcG9ydCB7IEljb25Mb2FkaW5nIH0gZnJvbSBcIkAvY29tcG9uZW50cy9pY29uc1wiXG5pbXBvcnQgeyBTaWRlQmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9zaWRlYmFyXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiXG5cbmNvbnN0IFNJWkVfUEFHSU5BVEUgPSBbMTAsIDIwLCAzMF1cblxuY29uc3QgcGFnaW5hdGUgPSAoaXRlbXMsIHBhZ2VOdW1iZXIsIHBhZ2VTaXplKSA9PiB7XG4gIGNvbnN0IHN0YXJ0SW5kZXggPSAocGFnZU51bWJlciAtIDEpICogcGFnZVNpemVcbiAgcmV0dXJuIGl0ZW1zLnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2luZGV4Q3VzdG9tZXIsIHNldEluZGV4Q3VzdG9tZXJdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3BhZ2VTaXplXSA9IFNJWkVfUEFHSU5BVEVbMF1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRIaXN0b3J5KClcbiAgICAgIHNldEN1c3RvbWVyKGRhdGEpXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgfVxuICAgIGZldGNoRGF0YSgpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uUGFnZUNoYW5nZSA9IChwYWdlKSA9PiB7XG4gICAgc2V0Q3VycmVudFBhZ2UocGFnZSlcbiAgfVxuICBjb25zdCBoYW5kbGVJbmZvQ2hhbmdlID0gKGlkKSA9PiB7XG4gICAgc2V0SW5kZXhDdXN0b21lcihpZClcbiAgfVxuXG4gIGNvbnN0IHBhZ2luYXRlZEN1c3RvbWVyID0gcGFnaW5hdGUoY3VzdG9tZXIsIGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgPFNpZGVCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGxcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ6LTIwIGZsZXhcIj5cbiAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy1bNjglXSB3LWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtNSAtbXQtOSBtYi0xNCBhbmltYXRlLWZhZGUgYW5pbWF0ZS1kdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICB7cGFnaW5hdGVkQ3VzdG9tZXIubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhcmRQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIEluZm9DaGFuZ2U9e2hhbmRsZUluZm9DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBteS0zXCI+XG4gICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y3VzdG9tZXIubGVuZ3RofSAvLyAxMDBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSAvLyAxXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX0gLy8gMTBcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtvblBhZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVszMiVdIGhpZGRlbiBsZzpibG9jayAtbXQtNDBcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZEluZm8gY3VzdG9tZXI9e2N1c3RvbWVyW2luZGV4Q3VzdG9tZXJdfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTk2XCI+XG4gICAgICAgICAgICAgIDxJY29uTG9hZGluZyBjbGFzc05hbWU9XCJ3LTggaC04IGFuaW1hdGUtc3BpbiB0ZXh0LWdyYXktMjAwIGZpbGwtWyMxRkJCQzJdXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FyZEluZm8iLCJDYXJkUHJldmlldyIsImdldEhpc3RvcnkiLCJIZWFkZXIiLCJJY29uTG9hZGluZyIsIlNpZGVCYXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhZ2luYXRpb24iLCJTSVpFX1BBR0lOQVRFIiwicGFnaW5hdGUiLCJpdGVtcyIsInBhZ2VOdW1iZXIiLCJwYWdlU2l6ZSIsInN0YXJ0SW5kZXgiLCJzbGljZSIsIkhvbWUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW5kZXhDdXN0b21lciIsInNldEluZGV4Q3VzdG9tZXIiLCJmZXRjaERhdGEiLCJkYXRhIiwib25QYWdlQ2hhbmdlIiwicGFnZSIsImhhbmRsZUluZm9DaGFuZ2UiLCJpZCIsInBhZ2luYXRlZEN1c3RvbWVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkluZm9DaGFuZ2UiLCJsZW5ndGgiLCJzcGFuIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});