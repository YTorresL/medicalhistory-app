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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customerHistorySubmissionForm: function() { return /* binding */ customerHistorySubmissionForm; }\n/* harmony export */ });\nconst customerHistorySubmissionForm = async (information, data, cliente)=>{\n    // Encuentra el índice del cliente dentro del array de información\n    const indexInfo = information.findIndex((objeto)=>objeto.Codigo === cliente);\n    // Verifica si se encontró el cliente\n    if (indexInfo !== -1) {\n        // Agrega la historia al cliente encontrado\n        information[indexInfo].historias.push(data);\n        // Imprime la longitud del array de historias después de agregar la nueva historia\n        console.log(information[indexInfo].historias.length);\n    // Luego de agregar la historia al cliente, puedes realizar otras operaciones aquí, como enviar los datos actualizados a un servidor\n    } else {\n        throw new Error(\"Cliente no encontrado\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2xpZW50LWZvcm0vY3VzdG9tZXItaGlzdG9yeS1zdWJtaXNzaW9uLWZvcm0uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGdDQUFnQyxPQUMzQ0MsYUFDQUMsTUFDQUM7SUFFQSxrRUFBa0U7SUFDbEUsTUFBTUMsWUFBWUgsWUFBWUksU0FBUyxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLE1BQU0sS0FBS0o7SUFFdEUscUNBQXFDO0lBQ3JDLElBQUlDLGNBQWMsQ0FBQyxHQUFHO1FBQ3BCLDJDQUEyQztRQUMzQ0gsV0FBVyxDQUFDRyxVQUFVLENBQUNJLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDUDtRQUV0QyxrRkFBa0Y7UUFDbEZRLFFBQVFDLEdBQUcsQ0FBQ1YsV0FBVyxDQUFDRyxVQUFVLENBQUNJLFNBQVMsQ0FBQ0ksTUFBTTtJQUVuRCxvSUFBb0k7SUFDdEksT0FBTztRQUNMLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGllbnQtZm9ybS9jdXN0b21lci1oaXN0b3J5LXN1Ym1pc3Npb24tZm9ybS5qcz8wNzgxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjdXN0b21lckhpc3RvcnlTdWJtaXNzaW9uRm9ybSA9IGFzeW5jIChcclxuICBpbmZvcm1hdGlvbixcclxuICBkYXRhLFxyXG4gIGNsaWVudGUsXHJcbikgPT4ge1xyXG4gIC8vIEVuY3VlbnRyYSBlbCDDrW5kaWNlIGRlbCBjbGllbnRlIGRlbnRybyBkZWwgYXJyYXkgZGUgaW5mb3JtYWNpw7NuXHJcbiAgY29uc3QgaW5kZXhJbmZvID0gaW5mb3JtYXRpb24uZmluZEluZGV4KChvYmpldG8pID0+IG9iamV0by5Db2RpZ28gPT09IGNsaWVudGUpXHJcblxyXG4gIC8vIFZlcmlmaWNhIHNpIHNlIGVuY29udHLDsyBlbCBjbGllbnRlXHJcbiAgaWYgKGluZGV4SW5mbyAhPT0gLTEpIHtcclxuICAgIC8vIEFncmVnYSBsYSBoaXN0b3JpYSBhbCBjbGllbnRlIGVuY29udHJhZG9cclxuICAgIGluZm9ybWF0aW9uW2luZGV4SW5mb10uaGlzdG9yaWFzLnB1c2goZGF0YSlcclxuXHJcbiAgICAvLyBJbXByaW1lIGxhIGxvbmdpdHVkIGRlbCBhcnJheSBkZSBoaXN0b3JpYXMgZGVzcHXDqXMgZGUgYWdyZWdhciBsYSBudWV2YSBoaXN0b3JpYVxyXG4gICAgY29uc29sZS5sb2coaW5mb3JtYXRpb25baW5kZXhJbmZvXS5oaXN0b3JpYXMubGVuZ3RoKVxyXG5cclxuICAgIC8vIEx1ZWdvIGRlIGFncmVnYXIgbGEgaGlzdG9yaWEgYWwgY2xpZW50ZSwgcHVlZGVzIHJlYWxpemFyIG90cmFzIG9wZXJhY2lvbmVzIGFxdcOtLCBjb21vIGVudmlhciBsb3MgZGF0b3MgYWN0dWFsaXphZG9zIGEgdW4gc2Vydmlkb3JcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xpZW50ZSBubyBlbmNvbnRyYWRvXCIpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjdXN0b21lckhpc3RvcnlTdWJtaXNzaW9uRm9ybSIsImluZm9ybWF0aW9uIiwiZGF0YSIsImNsaWVudGUiLCJpbmRleEluZm8iLCJmaW5kSW5kZXgiLCJvYmpldG8iLCJDb2RpZ28iLCJoaXN0b3JpYXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/client-form/customer-history-submission-form.js\n"));

/***/ })

});