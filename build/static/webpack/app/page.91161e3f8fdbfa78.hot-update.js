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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_card_card_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/card/card-info */ \"(app-pages-browser)/./components/card/card-info.js\");\n/* harmony import */ var _components_card_card_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/card/card-preview */ \"(app-pages-browser)/./components/card/card-preview.js\");\n/* harmony import */ var _components_info_get_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/info/get-info */ \"(app-pages-browser)/./components/info/get-info.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./components/header.js\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/icons */ \"(app-pages-browser)/./components/icons.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sidebar */ \"(app-pages-browser)/./components/sidebar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/pagination */ \"(app-pages-browser)/./components/pagination.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst paginate = (items, pageNumber, pageSize)=>{\n    const startIndex = (pageNumber - 1) * pageSize;\n    return items.slice(startIndex, startIndex + pageSize);\n};\nfunction Home() {\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);\n    const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [indexCustomer, setIndexCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);\n    const [pageSize, setPageSize] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(_components_header__WEBPACK_IMPORTED_MODULE_4__.SIZE_PAGINATE[0]);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_components_info_get_info__WEBPACK_IMPORTED_MODULE_3__.getHistory)();\n            setCustomer(data);\n            setLoading(true);\n        };\n        fetchData();\n    }, []);\n    const onPageChange = (page)=>{\n        setCurrentPage(page);\n    };\n    const handleInfoChange = (id)=>{\n        setIndexCustomer(id);\n    };\n    const handlePageSizeChange = (size)=>{\n        setPageSize(size);\n    };\n    const paginatedCustomer = paginate(customer, currentPage, pageSize);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_6__.SideBar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {\n                        handlePageSizeChange: handlePageSizeChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"z-20 flex\",\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"lg:w-[68%] w-full flex flex-col gap-5 -mt-9 mb-14 animate-fade animate-duration-300\",\n                                    children: [\n                                        paginatedCustomer.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_card_preview__WEBPACK_IMPORTED_MODULE_2__.CardPreview, {\n                                                InfoChange: handleInfoChange,\n                                                customer: item,\n                                                id: index\n                                            }, index, false, {\n                                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, this)),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mx-auto my-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination__WEBPACK_IMPORTED_MODULE_8__.Pagination, {\n                                                items: customer.length,\n                                                currentPage: currentPage,\n                                                pageSize: pageSize,\n                                                onPageChange: onPageChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-[32%] hidden lg:block -mt-40\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_card_info__WEBPACK_IMPORTED_MODULE_1__.CardInfo, {\n                                        customer: customer[indexCustomer]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center w-full h-96\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_5__.IconLoading, {\n                                    className: \"w-8 h-8 animate-spin text-gray-200 fill-[#1FBBC2]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"sr-only\",\n                                    children: \"Loading...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\app\\\\page.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"sj7c4cQDoe3XLZsGtKPqGkTRgJQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDTTtBQUNMO0FBQ0k7QUFDWDtBQUNGO0FBQ0g7QUFDUztBQUVwRCxNQUFNVSxXQUFXLENBQUNDLE9BQU9DLFlBQVlDO0lBQ25DLE1BQU1DLGFBQWEsQ0FBQ0YsYUFBYSxLQUFLQztJQUN0QyxPQUFPRixNQUFNSSxLQUFLLENBQUNELFlBQVlBLGFBQWFEO0FBQzlDO0FBRWUsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZSxlQUFlQyxpQkFBaUIsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ0ssVUFBVVksWUFBWSxHQUFHakIsK0NBQVFBLENBQUNKLDZEQUFhLENBQUMsRUFBRTtJQUV6REcsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsWUFBWTtZQUNoQixNQUFNQyxPQUFPLE1BQU16QixxRUFBVUE7WUFDN0JrQixZQUFZTztZQUNaTCxXQUFXO1FBQ2I7UUFDQUk7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRSxlQUFlLENBQUNDO1FBQ3BCWCxlQUFlVztJQUNqQjtJQUNBLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QlAsaUJBQWlCTztJQUNuQjtJQUVBLE1BQU1DLHVCQUF1QixDQUFDQztRQUM1QlIsWUFBWVE7SUFDZDtJQUVBLE1BQU1DLG9CQUFvQnhCLFNBQVNTLFVBQVVGLGFBQWFKO0lBRTFELHFCQUNFLDhEQUFDc0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUM5Qix3REFBT0E7Ozs7OzBCQUNSLDhEQUFDNkI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDakMsc0RBQU1BO3dCQUFDNkIsc0JBQXNCQTs7Ozs7O2tDQUM5Qiw4REFBQ0s7d0JBQUtELFdBQVU7a0NBQ2JmLHdCQUNDOzs4Q0FDRSw4REFBQ2M7b0NBQUlDLFdBQVU7O3dDQUNaRixrQkFBa0JJLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDNUIsOERBQUN2QyxzRUFBV0E7Z0RBQ1Z3QyxZQUFZWDtnREFDWlgsVUFBVW9CO2dEQUNWUixJQUFJUzsrQ0FDQ0E7Ozs7O3NEQUdULDhEQUFDTDs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQzNCLDhEQUFVQTtnREFDVEUsT0FBT1EsU0FBU3VCLE1BQU07Z0RBQ3RCekIsYUFBYUE7Z0RBQ2JKLFVBQVVBO2dEQUNWZSxjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSXBCLDhEQUFDTztvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ3BDLGdFQUFRQTt3Q0FBQ21CLFVBQVVBLFFBQVEsQ0FBQ0ksY0FBYzs7Ozs7Ozs7Ozs7O3lEQUkvQyw4REFBQ1k7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDL0IsMERBQVdBO29DQUFDK0IsV0FBVTs7Ozs7OzhDQUN2Qiw4REFBQ087b0NBQUtDLE9BQU07OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDO0dBckV3QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IENhcmRJbmZvIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jYXJkL2NhcmQtaW5mb1wiXG5pbXBvcnQgeyBDYXJkUHJldmlldyB9IGZyb20gXCJAL2NvbXBvbmVudHMvY2FyZC9jYXJkLXByZXZpZXdcIlxuaW1wb3J0IHsgZ2V0SGlzdG9yeSB9IGZyb20gXCJAL2NvbXBvbmVudHMvaW5mby9nZXQtaW5mb1wiXG5pbXBvcnQgeyBIZWFkZXIsIFNJWkVfUEFHSU5BVEUgfSBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRlclwiXG5pbXBvcnQgeyBJY29uTG9hZGluZyB9IGZyb20gXCJAL2NvbXBvbmVudHMvaWNvbnNcIlxuaW1wb3J0IHsgU2lkZUJhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2lkZWJhclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2luYXRpb25cIlxuXG5jb25zdCBwYWdpbmF0ZSA9IChpdGVtcywgcGFnZU51bWJlciwgcGFnZVNpemUpID0+IHtcbiAgY29uc3Qgc3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiBwYWdlU2l6ZVxuICByZXR1cm4gaXRlbXMuc2xpY2Uoc3RhcnRJbmRleCwgc3RhcnRJbmRleCArIHBhZ2VTaXplKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaW5kZXhDdXN0b21lciwgc2V0SW5kZXhDdXN0b21lcl0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlKFNJWkVfUEFHSU5BVEVbMF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0SGlzdG9yeSgpXG4gICAgICBzZXRDdXN0b21lcihkYXRhKVxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIH1cbiAgICBmZXRjaERhdGEoKVxuICB9LCBbXSlcblxuICBjb25zdCBvblBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpXG4gIH1cbiAgY29uc3QgaGFuZGxlSW5mb0NoYW5nZSA9IChpZCkgPT4ge1xuICAgIHNldEluZGV4Q3VzdG9tZXIoaWQpXG4gIH1cblxuICBjb25zdCBoYW5kbGVQYWdlU2l6ZUNoYW5nZSA9IChzaXplKSA9PiB7XG4gICAgc2V0UGFnZVNpemUoc2l6ZSlcbiAgfVxuXG4gIGNvbnN0IHBhZ2luYXRlZEN1c3RvbWVyID0gcGFnaW5hdGUoY3VzdG9tZXIsIGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgPFNpZGVCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGxcIj5cbiAgICAgICAgPEhlYWRlciBoYW5kbGVQYWdlU2l6ZUNoYW5nZT17aGFuZGxlUGFnZVNpemVDaGFuZ2V9IC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInotMjAgZmxleFwiPlxuICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LVs2OCVdIHctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC01IC1tdC05IG1iLTE0IGFuaW1hdGUtZmFkZSBhbmltYXRlLWR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgIHtwYWdpbmF0ZWRDdXN0b21lci5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2FyZFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgSW5mb0NoYW5nZT17aGFuZGxlSW5mb0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG15LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjdXN0b21lci5sZW5ndGh9IC8vIDEwMFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IC8vIDFcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfSAvLyAxMFxuICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e29uUGFnZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzMyJV0gaGlkZGVuIGxnOmJsb2NrIC1tdC00MFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkSW5mbyBjdXN0b21lcj17Y3VzdG9tZXJbaW5kZXhDdXN0b21lcl19IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtOTZcIj5cbiAgICAgICAgICAgICAgPEljb25Mb2FkaW5nIGNsYXNzTmFtZT1cInctOCBoLTggYW5pbWF0ZS1zcGluIHRleHQtZ3JheS0yMDAgZmlsbC1bIzFGQkJDMl1cIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDYXJkSW5mbyIsIkNhcmRQcmV2aWV3IiwiZ2V0SGlzdG9yeSIsIkhlYWRlciIsIlNJWkVfUEFHSU5BVEUiLCJJY29uTG9hZGluZyIsIlNpZGVCYXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhZ2luYXRpb24iLCJwYWdpbmF0ZSIsIml0ZW1zIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwic3RhcnRJbmRleCIsInNsaWNlIiwiSG9tZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbmRleEN1c3RvbWVyIiwic2V0SW5kZXhDdXN0b21lciIsInNldFBhZ2VTaXplIiwiZmV0Y2hEYXRhIiwiZGF0YSIsIm9uUGFnZUNoYW5nZSIsInBhZ2UiLCJoYW5kbGVJbmZvQ2hhbmdlIiwiaWQiLCJoYW5kbGVQYWdlU2l6ZUNoYW5nZSIsInNpemUiLCJwYWdpbmF0ZWRDdXN0b21lciIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJJbmZvQ2hhbmdlIiwibGVuZ3RoIiwic3BhbiIsImNsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});