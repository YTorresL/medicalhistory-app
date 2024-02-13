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

/***/ "(app-pages-browser)/./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ \"(app-pages-browser)/./components/icons.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useOpen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useOpen */ \"(app-pages-browser)/./hooks/useOpen.js\");\n/* harmony import */ var _info_create_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info/create-info */ \"(app-pages-browser)/./components/info/create-info.js\");\n/* harmony import */ var _client_form_customer_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-form/customer-form */ \"(app-pages-browser)/./components/client-form/customer-form.js\");\n/* __next_internal_client_entry_do_not_use__ Header auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header(param) {\n    let { handlePageSizeChange } = param;\n    _s();\n    const [isLimitOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [isCreateOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const { toggleView: toggleLimitView, getViewStyle: getLimitViewStyle } = (0,_hooks_useOpen__WEBPACK_IMPORTED_MODULE_5__.useOpen)(isLimitOpen);\n    const { toggleView: toggleCreateView, getPopUpStyle: getCreateViewStyle } = (0,_hooks_useOpen__WEBPACK_IMPORTED_MODULE_5__.useOpen)(isCreateOpen);\n    const handleLimitToggle = ()=>toggleLimitView();\n    const handleCreateToggle = ()=>toggleCreateView();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-[#1FBBC2] h-60 pl-[6%] lg:pl-[4%] pr-[2%] text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between w-full h-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-lg font-bold\",\n                                children: \"Historia m\\xe9dica\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-2 h-2 mt-3 bg-white rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Optiluz, C.A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden border-2 border-white rounded-full w-11 h-11\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: \"/optiluz.jpg\",\n                                    className: \"object-cover object-center w-full h-full\",\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid items-center lg:w-[64%] w-10/12 h-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-2 lg:items-center lg:justify-between lg:flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-3 lg:w-3/5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"w-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"search\",\n                                            className: \"text-white sr-only\",\n                                            children: \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"search\",\n                                                    id: \"search\",\n                                                    autoComplete: \"off\",\n                                                    className: \"w-full px-5 py-3 rounded-full outline-none bg-white/20 white-input\",\n                                                    placeholder: \"Search\",\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    className: \"text-[#1FBBC2] absolute right-1 top-1/2 -translate-y-1/2 p-2 transition ease-out duration-150 bg-white hover:bg-[#eeeeee] rounded-full\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.IconSearch, {\n                                                        className: \"w-5 h-5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleCreateToggle,\n                                            className: \"flex p-2 items-center justify-center h-10 w-10 bg-white rounded-full hover:bg-[#eeeeee] transition ease-out duration-150\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.IconCreateOutline, {\n                                                className: \"w-full h-full\",\n                                                stroke: \"#1FBBC2\",\n                                                fill: \"#1FBBC2\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_info_create_info__WEBPACK_IMPORTED_MODULE_6__.CreateInfo, {\n                                            getCreateViewStyle: getCreateViewStyle,\n                                            handleToggle: handleCreateToggle,\n                                            title: \"Crear un cliente\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_form_customer_form__WEBPACK_IMPORTED_MODULE_7__.CustomerForm, {\n                                                handleCreateToggle: handleCreateToggle\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"flex items-center gap-1\",\n                            onClick: handleLimitToggle,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Mostrar menos de 5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_2__.IconDownOpenMini, {\n                                    className: \"w-7 h-7\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(getLimitViewStyle(), \" transition ease-out duration-150 absolute z-[500] shadow-xl shadow-black/5 bg-white top-[180px] right-[33%] w-56 grid rounded-lg border-[#EDEDED] border justify-center\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"text-[#1FBBC2] p-3 border-b border-[#EDEDED]\",\n                                    href: \"\",\n                                    children: \"Menos de 10\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"text-[#1FBBC2] p-3\",\n                                    href: \"\",\n                                    children: \"Menos de 20\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yalit\\\\OneDrive\\\\Desktop\\\\YTorres\\\\Dev\\\\Next.js\\\\medicalhistory-app\\\\components\\\\header.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"CTPpqSIqpYDA8QrtH5OBO+jmDuI=\", false, function() {\n    return [\n        _hooks_useOpen__WEBPACK_IMPORTED_MODULE_5__.useOpen,\n        _hooks_useOpen__WEBPACK_IMPORTED_MODULE_5__.useOpen\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM4QjtBQUMyQztBQUM3QztBQUNJO0FBQ1M7QUFDTTtBQUNXO0FBRW5ELFNBQVNTLE9BQU8sS0FBd0I7UUFBeEIsRUFBRUMsb0JBQW9CLEVBQUUsR0FBeEI7O0lBQ3JCLE1BQU0sQ0FBQ0MsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNPLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFaEMsTUFBTSxFQUFFUSxZQUFZQyxlQUFlLEVBQUVDLGNBQWNDLGlCQUFpQixFQUFFLEdBQ3BFVix1REFBT0EsQ0FBQ0s7SUFDVixNQUFNLEVBQUVFLFlBQVlJLGdCQUFnQixFQUFFQyxlQUFlQyxrQkFBa0IsRUFBRSxHQUN2RWIsdURBQU9BLENBQUNNO0lBRVYsTUFBTVEsb0JBQW9CLElBQU1OO0lBQ2hDLE1BQU1PLHFCQUFxQixJQUFNSjtJQUVqQyxxQkFDRSw4REFBQ0s7UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQW9COzs7Ozs7MENBQ2xDLDhEQUFDQztnQ0FBSUQsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRzswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDRjtnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ3ZCLGtEQUFLQTtvQ0FDSjJCLEtBQUs7b0NBQ0xKLFdBQVU7b0NBQ1ZLLE9BQU87b0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtoQiw4REFBQ0w7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDTztvQ0FBS1AsV0FBVTs7c0RBQ2QsOERBQUNROzRDQUFNQyxTQUFROzRDQUFTVCxXQUFVO3NEQUFxQjs7Ozs7O3NEQUd2RCw4REFBQ0M7NENBQUlELFdBQVU7OzhEQUNiLDhEQUFDVTtvREFDQ0MsTUFBSztvREFDTEMsSUFBRztvREFDSEMsY0FBYTtvREFDYmIsV0FBVTtvREFDVmMsYUFBWTtvREFDWkMsUUFBUTs7Ozs7OzhEQUVWLDhEQUFDQztvREFDQ0wsTUFBSztvREFDTFgsV0FBVTs4REFFViw0RUFBQ3BCLDhDQUFVQTt3REFBQ29CLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUk1Qiw4REFBQ0M7O3NEQUNDLDhEQUFDZTs0Q0FDQ0MsU0FBU25COzRDQUNURSxXQUFVO3NEQUVWLDRFQUFDdEIscURBQWlCQTtnREFDaEJzQixXQUFVO2dEQUNWa0IsUUFBTztnREFDUEMsTUFBSzs7Ozs7Ozs7Ozs7c0RBR1QsOERBQUNuQyx5REFBVUE7NENBQ1RZLG9CQUFvQkE7NENBQ3BCd0IsY0FBY3RCOzRDQUNkdUIsT0FBTTtzREFFTiw0RUFBQ3BDLG9FQUFZQTtnREFBQ2Esb0JBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSXhDLDhEQUFDa0I7NEJBQ0NoQixXQUFVOzRCQUNWaUIsU0FBU3BCOzs4Q0FFVCw4REFBQ007OENBQUs7Ozs7Ozs4Q0FDTiw4REFBQ3hCLG9EQUFnQkE7b0NBQUNxQixXQUFVOzs7Ozs7Ozs7Ozs7c0NBRTlCLDhEQUFDQzs0QkFDQ0QsV0FBVyxHQUF1QixPQUFwQlAscUJBQW9COzs4Q0FFbEMsOERBQUNaLGlEQUFJQTtvQ0FDSG1CLFdBQVU7b0NBQ1ZzQixNQUFNOzhDQUNQOzs7Ozs7OENBR0QsOERBQUN6QyxpREFBSUE7b0NBQUNtQixXQUFVO29DQUFxQnNCLE1BQU07OENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTNEO0dBbkdnQnBDOztRQUtaSCxtREFBT0E7UUFFUEEsbURBQU9BOzs7S0FQS0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyBJY29uQ3JlYXRlT3V0bGluZSwgSWNvbkRvd25PcGVuTWluaSwgSWNvblNlYXJjaCB9IGZyb20gXCIuL2ljb25zXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlT3BlbiB9IGZyb20gXCJAL2hvb2tzL3VzZU9wZW5cIlxyXG5pbXBvcnQgeyBDcmVhdGVJbmZvIH0gZnJvbSBcIi4vaW5mby9jcmVhdGUtaW5mb1wiXHJcbmltcG9ydCB7IEN1c3RvbWVyRm9ybSB9IGZyb20gXCIuL2NsaWVudC1mb3JtL2N1c3RvbWVyLWZvcm1cIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7IGhhbmRsZVBhZ2VTaXplQ2hhbmdlIH0pIHtcclxuICBjb25zdCBbaXNMaW1pdE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2lzQ3JlYXRlT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgeyB0b2dnbGVWaWV3OiB0b2dnbGVMaW1pdFZpZXcsIGdldFZpZXdTdHlsZTogZ2V0TGltaXRWaWV3U3R5bGUgfSA9XHJcbiAgICB1c2VPcGVuKGlzTGltaXRPcGVuKVxyXG4gIGNvbnN0IHsgdG9nZ2xlVmlldzogdG9nZ2xlQ3JlYXRlVmlldywgZ2V0UG9wVXBTdHlsZTogZ2V0Q3JlYXRlVmlld1N0eWxlIH0gPVxyXG4gICAgdXNlT3Blbihpc0NyZWF0ZU9wZW4pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpbWl0VG9nZ2xlID0gKCkgPT4gdG9nZ2xlTGltaXRWaWV3KClcclxuICBjb25zdCBoYW5kbGVDcmVhdGVUb2dnbGUgPSAoKSA9PiB0b2dnbGVDcmVhdGVWaWV3KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctWyMxRkJCQzJdIGgtNjAgcGwtWzYlXSBsZzpwbC1bNCVdIHByLVsyJV0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgaC0yMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+SGlzdG9yaWEgbcOpZGljYTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMiBoLTIgbXQtMyBiZy13aGl0ZSByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAgICA8c3Bhbj5PcHRpbHV6LCBDLkE8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBib3JkZXItMiBib3JkZXItd2hpdGUgcm91bmRlZC1mdWxsIHctMTEgaC0xMVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e1wiL29wdGlsdXouanBnXCJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy1mdWxsIGgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGl0ZW1zLWNlbnRlciBsZzp3LVs2NCVdIHctMTAvMTIgaC00MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiBsZzppdGVtcy1jZW50ZXIgbGc6anVzdGlmeS1iZXR3ZWVuIGxnOmZsZXgtcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGxnOnctMy81XCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSBweS0zIHJvdW5kZWQtZnVsbCBvdXRsaW5lLW5vbmUgYmctd2hpdGUvMjAgd2hpdGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bIzFGQkJDMl0gYWJzb2x1dGUgcmlnaHQtMSB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgcC0yIHRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTUwIGJnLXdoaXRlIGhvdmVyOmJnLVsjZWVlZWVlXSByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvblNlYXJjaCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMTAgdy0xMCBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgaG92ZXI6YmctWyNlZWVlZWVdIHRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkNyZWF0ZU91dGxpbmVcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMxRkJCQzJcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzFGQkJDMlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxDcmVhdGVJbmZvXHJcbiAgICAgICAgICAgICAgICBnZXRDcmVhdGVWaWV3U3R5bGU9e2dldENyZWF0ZVZpZXdTdHlsZX1cclxuICAgICAgICAgICAgICAgIGhhbmRsZVRvZ2dsZT17aGFuZGxlQ3JlYXRlVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDcmVhciB1biBjbGllbnRlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tZXJGb3JtIGhhbmRsZUNyZWF0ZVRvZ2dsZT17aGFuZGxlQ3JlYXRlVG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICAgIDwvQ3JlYXRlSW5mbz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaW1pdFRvZ2dsZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4+TW9zdHJhciBtZW5vcyBkZSA1PC9zcGFuPlxyXG4gICAgICAgICAgICA8SWNvbkRvd25PcGVuTWluaSBjbGFzc05hbWU9XCJ3LTcgaC03XCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2dldExpbWl0Vmlld1N0eWxlKCl9IHRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTUwIGFic29sdXRlIHotWzUwMF0gc2hhZG93LXhsIHNoYWRvdy1ibGFjay81IGJnLXdoaXRlIHRvcC1bMTgwcHhdIHJpZ2h0LVszMyVdIHctNTYgZ3JpZCByb3VuZGVkLWxnIGJvcmRlci1bI0VERURFRF0gYm9yZGVyIGp1c3RpZnktY2VudGVyYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjMUZCQkMyXSBwLTMgYm9yZGVyLWIgYm9yZGVyLVsjRURFREVEXVwiXHJcbiAgICAgICAgICAgICAgaHJlZj17XCJcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1lbm9zIGRlIDEwXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidGV4dC1bIzFGQkJDMl0gcC0zXCIgaHJlZj17XCJcIn0+XHJcbiAgICAgICAgICAgICAgTWVub3MgZGUgMjBcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkljb25DcmVhdGVPdXRsaW5lIiwiSWNvbkRvd25PcGVuTWluaSIsIkljb25TZWFyY2giLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VPcGVuIiwiQ3JlYXRlSW5mbyIsIkN1c3RvbWVyRm9ybSIsIkhlYWRlciIsImhhbmRsZVBhZ2VTaXplQ2hhbmdlIiwiaXNMaW1pdE9wZW4iLCJpc0NyZWF0ZU9wZW4iLCJ0b2dnbGVWaWV3IiwidG9nZ2xlTGltaXRWaWV3IiwiZ2V0Vmlld1N0eWxlIiwiZ2V0TGltaXRWaWV3U3R5bGUiLCJ0b2dnbGVDcmVhdGVWaWV3IiwiZ2V0UG9wVXBTdHlsZSIsImdldENyZWF0ZVZpZXdTdHlsZSIsImhhbmRsZUxpbWl0VG9nZ2xlIiwiaGFuZGxlQ3JlYXRlVG9nZ2xlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJzcGFuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJhdXRvQ29tcGxldGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayIsInN0cm9rZSIsImZpbGwiLCJoYW5kbGVUb2dnbGUiLCJ0aXRsZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header.js\n"));

/***/ })

});