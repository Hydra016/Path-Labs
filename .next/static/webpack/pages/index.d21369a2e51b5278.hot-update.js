"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/FindTest/CheckHeartRate.js":
/*!***************************************************!*\
  !*** ./src/components/FindTest/CheckHeartRate.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/medicalSlice */ \"./src/features/medicalSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CheckHeartRate = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        age: 70,\n        blood_pressure: 130,\n        cholesterol: 322,\n        heart_rate: 109\n    });\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.heartRatePrediction);\n    console.log(state);\n    // const [err, setErr] = useState(false)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__.fetchHeartAttack)(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"heart-rate-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: \"How much are you prone to a heart attack?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"heart-rate-text\",\n                children: \"Take a simple test and find out!\"\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-inputs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Age\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                age: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Blood Pressure\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                blood_pressure: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Cholesterol\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                cholesterol: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Heart Rate\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                heart_rate: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"checkbox-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: ()=>setChecked(!checked),\n                        id: \"check1-61\",\n                        class: \"check\",\n                        type: \"checkbox\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        class: \"label\",\n                        for: \"check1-61\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                viewBox: \"0 0 95 95\",\n                                height: \"25\",\n                                width: \"25\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                        fill: \"none\",\n                                        stroke: \"black\",\n                                        height: \"50\",\n                                        width: \"50\",\n                                        y: \"20\",\n                                        x: \"30\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                        transform: \"translate(0,-952.36222)\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            class: \"path1\",\n                                            fill: \"none\",\n                                            \"stroke-width\": \"3\",\n                                            stroke: \"black\",\n                                            d: \"m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"checkbox-text\",\n                                children: [\n                                    \"Agree \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"terms\",\n                                        href: \"/\",\n                                        children: \"Terms and Conditions\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 49\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    disabled: !checked,\n                    onClick: ()=>alert(data),\n                    className: \"primary-btn\",\n                    children: \"Check\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"results-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        \"You are \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"result\",\n                            children: \"50%\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                            lineNumber: 93,\n                            columnNumber: 23\n                        }, undefined),\n                        \" prone to a heart attack\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CheckHeartRate, \"rJJNHvUR9WT/YdlM08fiWzQ2swM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = CheckHeartRate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckHeartRate);\nvar _c;\n$RefreshReg$(_c, \"CheckHeartRate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaW5kVGVzdC9DaGVja0hlYXJ0UmF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUMwQjtBQUNJO0FBRTNELE1BQU1PLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO1FBQy9CUSxLQUFLO1FBQ0xDLGdCQUFnQjtRQUNoQkMsYUFBYTtRQUNiQyxZQUFZO0lBQ2Q7SUFDQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWMsV0FBV1gsd0RBQVdBO0lBQzVCLE1BQU1ZLFFBQVFiLHdEQUFXQSxDQUFDYSxDQUFBQSxRQUFTQSxNQUFNQyxtQkFBbUI7SUFDNURDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWix3Q0FBd0M7SUFDeENoQixnREFBU0EsQ0FBQztRQUNSZSxTQUFTVix3RUFBZ0JBLENBQUNFO0lBQzVCLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQ0MsNEVBQUNDOzhCQUFFOzs7Ozs7Ozs7OzswQkFFTCw4REFBQ0Q7Z0JBQUtELFdBQVU7MEJBQWtCOzs7Ozs7MEJBQ2xDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUNDSCxXQUFVO3dCQUNWSSxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxVQUFVLENBQUNDLElBQU1wQixRQUFRO2dDQUN2QixHQUFHRCxJQUFJO2dDQUFFRSxLQUFLbUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRCQUM5Qjs7Ozs7O2tDQUVGLDhEQUFDTjt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUFNcEIsUUFBUTtnQ0FDdkIsR0FBR0QsSUFBSTtnQ0FBRUcsZ0JBQWdCa0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRCQUN6Qzs7Ozs7O2tDQUVGLDhEQUFDTjt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUFNcEIsUUFBUTtnQ0FDdkIsR0FBR0QsSUFBSTtnQ0FBRUksYUFBYWlCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDdEM7Ozs7OztrQ0FFRiw4REFBQ047d0JBQ0NILFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFBTXBCLFFBQVE7Z0NBQ3ZCLEdBQUdELElBQUk7Z0NBQUVLLFlBQVlnQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7NEJBQ3JDOzs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNWO2dCQUFJVyxPQUFNOztrQ0FDVCw4REFBQ1A7d0JBQU1HLFVBQVUsSUFBTWIsV0FBVyxDQUFDRDt3QkFBVW1CLElBQUc7d0JBQVlELE9BQU07d0JBQVFOLE1BQUs7Ozs7OztrQ0FDL0UsOERBQUNRO3dCQUFNRixPQUFNO3dCQUFRRyxLQUFJOzswQ0FDdkIsOERBQUNDO2dDQUFJQyxTQUFRO2dDQUFZQyxRQUFPO2dDQUFLQyxPQUFNOztrREFDekMsOERBQUNDO3dDQUNDQyxNQUFLO3dDQUNMQyxRQUFPO3dDQUNQSixRQUFPO3dDQUNQQyxPQUFNO3dDQUNOSSxHQUFFO3dDQUNGQyxHQUFFOzs7Ozs7a0RBRUosOERBQUNDO3dDQUFFQyxXQUFVO2tEQUNYLDRFQUFDQzs0Q0FDQ2YsT0FBTTs0Q0FDTlMsTUFBSzs0Q0FDTE8sZ0JBQWE7NENBQ2JOLFFBQU87NENBQ1BPLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlSLDhEQUFDMUI7Z0NBQUtELFdBQVU7O29DQUFnQjtrREFBTSw4REFBQ25CLGtEQUFJQTt3Q0FBQ21CLFdBQVU7d0NBQVE0QixNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzNFLDhEQUFDN0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM2QjtvQkFBT0MsVUFBVSxDQUFDdEM7b0JBQVN1QyxTQUFTLElBQU1DLE1BQU05QztvQkFBT2MsV0FBVTs4QkFBYzs7Ozs7Ozs7Ozs7MEJBS2xGLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7O3dCQUFLO3NDQUFRLDhEQUFDQTs0QkFBS0QsV0FBVTtzQ0FBUzs7Ozs7O3dCQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekQ7R0EzRk1mOztRQVFhRixvREFBV0E7UUFDZEQsb0RBQVdBOzs7S0FUckJHO0FBNkZOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbmRUZXN0L0NoZWNrSGVhcnRSYXRlLmpzP2Y0OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmV0Y2hIZWFydEF0dGFjayB9IGZyb20gXCJAL2ZlYXR1cmVzL21lZGljYWxTbGljZVwiO1xyXG5cclxuY29uc3QgQ2hlY2tIZWFydFJhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgYWdlOiA3MCxcclxuICAgIGJsb29kX3ByZXNzdXJlOiAxMzAsXHJcbiAgICBjaG9sZXN0ZXJvbDogMzIyLFxyXG4gICAgaGVhcnRfcmF0ZTogMTA5XHJcbiAgfSlcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBzdGF0ZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmhlYXJ0UmF0ZVByZWRpY3Rpb24pXHJcbiAgY29uc29sZS5sb2coc3RhdGUpXHJcbiAgLy8gY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaEhlYXJ0QXR0YWNrKGRhdGEpKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYXJ0LXJhdGUtY29udGFpbmVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxiPkhvdyBtdWNoIGFyZSB5b3UgcHJvbmUgdG8gYSBoZWFydCBhdHRhY2s/PC9iPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYXJ0LXJhdGUtdGV4dFwiPlRha2UgYSBzaW1wbGUgdGVzdCBhbmQgZmluZCBvdXQhPC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYXJ0LXJhdGUtaW5wdXRzXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWlucHV0IGxvZ2luLWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRhKHtcclxuICAgICAgICAgICAgLi4uZGF0YSwgYWdlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYXJ0LXJhdGUtaW5wdXQgbG9naW4taW5wdXRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJsb29kIFByZXNzdXJlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsIGJsb29kX3ByZXNzdXJlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYXJ0LXJhdGUtaW5wdXQgbG9naW4taW5wdXRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob2xlc3Rlcm9sXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsIGNob2xlc3Rlcm9sOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYXJ0LXJhdGUtaW5wdXQgbG9naW4taW5wdXRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhlYXJ0IFJhdGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRhKHtcclxuICAgICAgICAgICAgLi4uZGF0YSwgaGVhcnRfcmF0ZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtd3JhcHBlclwiPlxyXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KCkgPT4gc2V0Q2hlY2tlZCghY2hlY2tlZCl9IGlkPVwiY2hlY2sxLTYxXCIgY2xhc3M9XCJjaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJjaGVjazEtNjFcIj5cclxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA5NSA5NVwiIGhlaWdodD1cIjI1XCIgd2lkdGg9XCIyNVwiPlxyXG4gICAgICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTBcIlxyXG4gICAgICAgICAgICAgIHk9XCIyMFwiXHJcbiAgICAgICAgICAgICAgeD1cIjMwXCJcclxuICAgICAgICAgICAgPjwvcmVjdD5cclxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsLTk1Mi4zNjIyMilcIj5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwYXRoMVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIzXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJtIDU2LDk2MyBjIC0xMDIsMTIyIDYsOSA3LDkgMTcsLTUgLTY2LDY5IC0zOCw1MiAxMjIsLTc3IC03LDE0IDE4LDQgMjksLTExIDQ1LC00MyAyMywtNFwiXHJcbiAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveC10ZXh0XCI+QWdyZWUgPExpbmsgY2xhc3NOYW1lPVwidGVybXNcIiBocmVmPVwiL1wiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9MaW5rPjwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWJ0blwiPlxyXG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFjaGVja2VkfSBvbkNsaWNrPXsoKSA9PiBhbGVydChkYXRhKX0gY2xhc3NOYW1lPVwicHJpbWFyeS1idG5cIj5cclxuICAgICAgICAgICAgQ2hlY2tcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNwYW4+WW91IGFyZSA8c3BhbiBjbGFzc05hbWU9XCJyZXN1bHRcIj41MCU8L3NwYW4+IHByb25lIHRvIGEgaGVhcnQgYXR0YWNrPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja0hlYXJ0UmF0ZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZldGNoSGVhcnRBdHRhY2siLCJDaGVja0hlYXJ0UmF0ZSIsImRhdGEiLCJzZXREYXRhIiwiYWdlIiwiYmxvb2RfcHJlc3N1cmUiLCJjaG9sZXN0ZXJvbCIsImhlYXJ0X3JhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImRpc3BhdGNoIiwic3RhdGUiLCJoZWFydFJhdGVQcmVkaWN0aW9uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJiIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsYXNzIiwiaWQiLCJsYWJlbCIsImZvciIsInN2ZyIsInZpZXdCb3giLCJoZWlnaHQiLCJ3aWR0aCIsInJlY3QiLCJmaWxsIiwic3Ryb2tlIiwieSIsIngiLCJnIiwidHJhbnNmb3JtIiwicGF0aCIsInN0cm9rZS13aWR0aCIsImQiLCJocmVmIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FindTest/CheckHeartRate.js\n"));

/***/ })

});