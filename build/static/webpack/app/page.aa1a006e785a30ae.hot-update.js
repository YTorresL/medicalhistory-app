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

/***/ "(app-pages-browser)/./components/client-form/customer-history-submission-form.js":
/*!********************************************************************!*\
  !*** ./components/client-form/customer-history-submission-form.js ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customerHistorySubmissionForm: function() { return /* binding */ customerHistorySubmissionForm; }\n/* harmony export */ });\nconst customerHistorySubmissionForm = async (information, data, cliente)=>{\n    const indexInfo = information.findIndex((objeto)=>objeto.Codigo === cliente);\n    information[indexInfo].historias.push(data);\n    console.log(indexInfo);\n/* if (cliente) {\r\n    cliente.historias.push(data)\r\n\r\n    const response = await fetch(\"https://testsh.alphasoft.com.ve/sh-oft/addHIST\", {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n        Accept: \"application/json\",\r\n      },\r\n      body: JSON.stringify(cliente),\r\n    })\r\n\r\n    return response.json()\r\n  } else {\r\n    throw new Error(\"Cliente no encontrado\")\r\n  } */ };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2xpZW50LWZvcm0vY3VzdG9tZXItaGlzdG9yeS1zdWJtaXNzaW9uLWZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGdDQUFnQyxPQUMzQ0MsYUFDQUMsTUFDQUM7SUFFQSxNQUFNQyxZQUFZSCxZQUFZSSxTQUFTLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsTUFBTSxLQUFLSjtJQUN0RUYsV0FBVyxDQUFDRyxVQUFVLENBQUNJLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDUDtJQUN0Q1EsUUFBUUMsR0FBRyxDQUFDUDtBQUVaOzs7Ozs7Ozs7Ozs7Ozs7SUFlRSxHQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGllbnQtZm9ybS9jdXN0b21lci1oaXN0b3J5LXN1Ym1pc3Npb24tZm9ybS5qcz8wNzgxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjdXN0b21lckhpc3RvcnlTdWJtaXNzaW9uRm9ybSA9IGFzeW5jIChcclxuICBpbmZvcm1hdGlvbixcclxuICBkYXRhLFxyXG4gIGNsaWVudGUsXHJcbikgPT4ge1xyXG4gIGNvbnN0IGluZGV4SW5mbyA9IGluZm9ybWF0aW9uLmZpbmRJbmRleCgob2JqZXRvKSA9PiBvYmpldG8uQ29kaWdvID09PSBjbGllbnRlKVxyXG4gIGluZm9ybWF0aW9uW2luZGV4SW5mb10uaGlzdG9yaWFzLnB1c2goZGF0YSlcclxuICBjb25zb2xlLmxvZyhpbmRleEluZm8pXHJcblxyXG4gIC8qIGlmIChjbGllbnRlKSB7XHJcbiAgICBjbGllbnRlLmhpc3Rvcmlhcy5wdXNoKGRhdGEpXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vdGVzdHNoLmFscGhhc29mdC5jb20udmUvc2gtb2Z0L2FkZEhJU1RcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2xpZW50ZSksXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xpZW50ZSBubyBlbmNvbnRyYWRvXCIpXHJcbiAgfSAqL1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjdXN0b21lckhpc3RvcnlTdWJtaXNzaW9uRm9ybSIsImluZm9ybWF0aW9uIiwiZGF0YSIsImNsaWVudGUiLCJpbmRleEluZm8iLCJmaW5kSW5kZXgiLCJvYmpldG8iLCJDb2RpZ28iLCJoaXN0b3JpYXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/client-form/customer-history-submission-form.js\n"));

/***/ })

});