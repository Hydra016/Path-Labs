"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/features/medicalSlice.js":
/*!**************************************!*\
  !*** ./src/features/medicalSlice.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkWorking: function() { return /* binding */ checkWorking; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\n// export const fetchPricePrediction = createAsyncThunk(\n//   \"property/pricePrediction\",\n//   async (details) => {\n//     const response = await axios.post(`/api/he`, details);\n//     return response;\n//   }\n// );\nconst initialState = {\n    heartRate: \"\"\n};\nconst medicalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"medical\",\n    initialState,\n    reducers: {\n        checkWorking: (state)=>{\n            console.log(\"asd\");\n        }\n    },\n    extraReducers: {}\n});\nconst { checkWorking } = medicalSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (medicalSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvbWVkaWNhbFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlFO0FBQ3ZDO0FBRTFCLHdEQUF3RDtBQUN4RCxnQ0FBZ0M7QUFDaEMseUJBQXlCO0FBQ3pCLDZEQUE2RDtBQUM3RCx1QkFBdUI7QUFDdkIsTUFBTTtBQUNOLEtBQUs7QUFFTCxNQUFNRyxlQUFlO0lBQ25CQyxXQUFXO0FBQ2I7QUFFQSxNQUFNQyxlQUFlTCw2REFBV0EsQ0FBQztJQUMvQk0sTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLGNBQWMsQ0FBQ0M7WUFDYkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRjtJQUNBQyxlQUFlLENBQUM7QUFDbEI7QUFFTyxNQUFNLEVBQUVKLFlBQVksRUFBRSxHQUFHSCxhQUFhUSxPQUFPLENBQUM7QUFDckQsK0RBQWVSLGFBQWFTLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvbWVkaWNhbFNsaWNlLmpzPzNjYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZmV0Y2hQcmljZVByZWRpY3Rpb24gPSBjcmVhdGVBc3luY1RodW5rKFxyXG4vLyAgIFwicHJvcGVydHkvcHJpY2VQcmVkaWN0aW9uXCIsXHJcbi8vICAgYXN5bmMgKGRldGFpbHMpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9oZWAsIGRldGFpbHMpO1xyXG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4vLyAgIH1cclxuLy8gKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBoZWFydFJhdGU6IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCBtZWRpY2FsU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJtZWRpY2FsXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBjaGVja1dvcmtpbmc6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnYXNkJyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2Vyczoge30sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgY2hlY2tXb3JraW5nIH0gPSBtZWRpY2FsU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgbWVkaWNhbFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsImhlYXJ0UmF0ZSIsIm1lZGljYWxTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImNoZWNrV29ya2luZyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImV4dHJhUmVkdWNlcnMiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/medicalSlice.js\n"));

/***/ })

});