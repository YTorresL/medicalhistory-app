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

/***/ "(app-pages-browser)/./hooks/useOpen.js":
/*!**************************!*\
  !*** ./hooks/useOpen.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   STATE_VIEW: function() { return /* binding */ STATE_VIEW; },\n/* harmony export */   useOpen: function() { return /* binding */ useOpen; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst STATE_VIEW = {\n    OPEN: 1,\n    CLOSE: 0\n};\nfunction useOpen(initialView) {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialView);\n    const toggleView = ()=>{\n        setOpen((prevOpen)=>prevOpen === STATE_VIEW.OPEN ? STATE_VIEW.CLOSE : STATE_VIEW.OPEN);\n    };\n    const getViewStyle = ()=>{\n        return open === STATE_VIEW.OPEN ? \"block\" : \"hidden\";\n    };\n    const getAsideStyle = ()=>{\n        return open === STATE_VIEW.OPEN ? \"w-96 px-5\" : \"w-[78px]\";\n    };\n    const getCardInfoStyle = ()=>{\n        return open === STATE_VIEW.OPEN ? \"hidden\" : \"block\";\n    };\n    const getCardPreviewStyle = ()=>{\n        return open === STATE_VIEW.OPEN ? \"w-full\" : \"w-[68%]\";\n    };\n    return {\n        toggleView,\n        getViewStyle,\n        getAsideStyle,\n        getCardInfoStyle,\n        getCardPreviewStyle\n    };\n}\n_s(useOpen, \"u9FjFxSlym7q+xcyLfbMS3baHSA=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL3VzZU9wZW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsYUFBYTtJQUN4QkMsTUFBTTtJQUNOQyxPQUFPO0FBQ1QsRUFBQztBQUVNLFNBQVNDLFFBQVFDLFdBQVc7O0lBQ2pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQ0s7SUFFakMsTUFBTUcsYUFBYTtRQUNqQkQsUUFBUSxDQUFDRSxXQUNQQSxhQUFhUixXQUFXQyxJQUFJLEdBQUdELFdBQVdFLEtBQUssR0FBR0YsV0FBV0MsSUFBSTtJQUVyRTtJQUVBLE1BQU1RLGVBQWU7UUFDbkIsT0FBT0osU0FBU0wsV0FBV0MsSUFBSSxHQUFHLFVBQVU7SUFDOUM7SUFFQSxNQUFNUyxnQkFBZ0I7UUFDcEIsT0FBT0wsU0FBU0wsV0FBV0MsSUFBSSxHQUFHLGNBQWM7SUFDbEQ7SUFFQSxNQUFNVSxtQkFBbUI7UUFDdkIsT0FBT04sU0FBU0wsV0FBV0MsSUFBSSxHQUFHLFdBQVc7SUFDL0M7SUFFQSxNQUFNVyxzQkFBc0I7UUFDMUIsT0FBT1AsU0FBU0wsV0FBV0MsSUFBSSxHQUFHLFdBQVc7SUFDL0M7SUFFQSxPQUFPO1FBQ0xNO1FBQ0FFO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7QUFDRjtHQWhDZ0JUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZU9wZW4uanM/ZGFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgY29uc3QgU1RBVEVfVklFVyA9IHtcclxuICBPUEVOOiAxLFxyXG4gIENMT1NFOiAwLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlT3Blbihpbml0aWFsVmlldykge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGluaXRpYWxWaWV3KVxyXG5cclxuICBjb25zdCB0b2dnbGVWaWV3ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbigocHJldk9wZW4pID0+XHJcbiAgICAgIHByZXZPcGVuID09PSBTVEFURV9WSUVXLk9QRU4gPyBTVEFURV9WSUVXLkNMT1NFIDogU1RBVEVfVklFVy5PUEVOLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Vmlld1N0eWxlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG9wZW4gPT09IFNUQVRFX1ZJRVcuT1BFTiA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFzaWRlU3R5bGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gb3BlbiA9PT0gU1RBVEVfVklFVy5PUEVOID8gXCJ3LTk2IHB4LTVcIiA6IFwidy1bNzhweF1cIlxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2FyZEluZm9TdHlsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBvcGVuID09PSBTVEFURV9WSUVXLk9QRU4gPyBcImhpZGRlblwiIDogXCJibG9ja1wiXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDYXJkUHJldmlld1N0eWxlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG9wZW4gPT09IFNUQVRFX1ZJRVcuT1BFTiA/IFwidy1mdWxsXCIgOiBcInctWzY4JV1cIlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRvZ2dsZVZpZXcsXHJcbiAgICBnZXRWaWV3U3R5bGUsXHJcbiAgICBnZXRBc2lkZVN0eWxlLFxyXG4gICAgZ2V0Q2FyZEluZm9TdHlsZSxcclxuICAgIGdldENhcmRQcmV2aWV3U3R5bGUsXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNUQVRFX1ZJRVciLCJPUEVOIiwiQ0xPU0UiLCJ1c2VPcGVuIiwiaW5pdGlhbFZpZXciLCJvcGVuIiwic2V0T3BlbiIsInRvZ2dsZVZpZXciLCJwcmV2T3BlbiIsImdldFZpZXdTdHlsZSIsImdldEFzaWRlU3R5bGUiLCJnZXRDYXJkSW5mb1N0eWxlIiwiZ2V0Q2FyZFByZXZpZXdTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useOpen.js\n"));

/***/ })

});