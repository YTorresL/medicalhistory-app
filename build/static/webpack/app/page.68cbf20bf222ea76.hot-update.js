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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customerHistorySubmissionForm: function() { return /* binding */ customerHistorySubmissionForm; }\n/* harmony export */ });\nconst customerHistorySubmissionForm = async (information, data, id)=>{\n    const cliente = information.find((cliente)=>cliente.codigo === id);\n    console.log(cliente);\n    console.log(id);\n    if (cliente) {\n        cliente.historias.push(data);\n        const url = \"http://206.62.175.124:42380/sh-oft/addHIST\";\n        const response = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Accept: \"application/json\"\n            },\n            body: JSON.stringify(cliente)\n        });\n        return response.json();\n    } else {\n        throw new Error(\"Cliente no encontrado\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2xpZW50LWZvcm0vY3VzdG9tZXItaGlzdG9yeS1zdWJtaXNzaW9uLWZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGdDQUFnQyxPQUFPQyxhQUFhQyxNQUFNQztJQUNyRSxNQUFNQyxVQUFVSCxZQUFZSSxJQUFJLENBQUMsQ0FBQ0QsVUFBWUEsUUFBUUUsTUFBTSxLQUFLSDtJQUNqRUksUUFBUUMsR0FBRyxDQUFDSjtJQUNaRyxRQUFRQyxHQUFHLENBQUNMO0lBQ1osSUFBSUMsU0FBUztRQUNYQSxRQUFRSyxTQUFTLENBQUNDLElBQUksQ0FBQ1I7UUFFdkIsTUFBTVMsTUFBTTtRQUNaLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUYsS0FBSztZQUNoQ0csUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEJDLFFBQVE7WUFDVjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNmO1FBQ3ZCO1FBRUEsT0FBT1EsU0FBU1EsSUFBSTtJQUN0QixPQUFPO1FBQ0wsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NsaWVudC1mb3JtL2N1c3RvbWVyLWhpc3Rvcnktc3VibWlzc2lvbi1mb3JtLmpzPzA3ODEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGN1c3RvbWVySGlzdG9yeVN1Ym1pc3Npb25Gb3JtID0gYXN5bmMgKGluZm9ybWF0aW9uLCBkYXRhLCBpZCkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudGUgPSBpbmZvcm1hdGlvbi5maW5kKChjbGllbnRlKSA9PiBjbGllbnRlLmNvZGlnbyA9PT0gaWQpXHJcbiAgY29uc29sZS5sb2coY2xpZW50ZSlcclxuICBjb25zb2xlLmxvZyhpZClcclxuICBpZiAoY2xpZW50ZSkge1xyXG4gICAgY2xpZW50ZS5oaXN0b3JpYXMucHVzaChkYXRhKVxyXG5cclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovLzIwNi42Mi4xNzUuMTI0OjQyMzgwL3NoLW9mdC9hZGRISVNUXCJcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjbGllbnRlKSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGllbnRlIG5vIGVuY29udHJhZG9cIilcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImN1c3RvbWVySGlzdG9yeVN1Ym1pc3Npb25Gb3JtIiwiaW5mb3JtYXRpb24iLCJkYXRhIiwiaWQiLCJjbGllbnRlIiwiZmluZCIsImNvZGlnbyIsImNvbnNvbGUiLCJsb2ciLCJoaXN0b3JpYXMiLCJwdXNoIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/client-form/customer-history-submission-form.js\n"));

/***/ })

});