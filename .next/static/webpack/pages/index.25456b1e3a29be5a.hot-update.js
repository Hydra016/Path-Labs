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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/medicalSlice */ \"./src/features/medicalSlice.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CheckHeartRate = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        age: \"\",\n        blood_pressure: \"\",\n        cholesterol: \"\",\n        heart_rate: \"\"\n    });\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const { heartRate, isLoading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.heartRatePrediction);\n    const override = {\n        display: \"block\",\n        margin: \"0 auto\",\n        borderColor: \"red\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const values = Object.values(data);\n        const hasEmptyValue = values.some((value)=>!value);\n        if (hasEmptyValue || !checked) {\n            setErr(true);\n        } else {\n            setErr(false);\n        }\n    }, [\n        data,\n        checked\n    ]);\n    const resetValues = ()=>{\n        setData({\n            age: \"\",\n            blood_pressure: \"\",\n            cholesterol: \"\",\n            heart_rate: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"heart-rate-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: \"How much are you prone to a heart attack?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"heart-rate-text\",\n                children: \"Take a simple test and find out!\"\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-inputs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Age\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                age: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Blood Pressure\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                blood_pressure: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Cholesterol\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                cholesterol: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Heart Rate\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                heart_rate: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"checkbox-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: ()=>setChecked(!checked),\n                        id: \"check1-61\",\n                        class: \"check\",\n                        type: \"checkbox\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        class: \"label\",\n                        for: \"check1-61\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                viewBox: \"0 0 95 95\",\n                                height: \"25\",\n                                width: \"25\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                        fill: \"none\",\n                                        stroke: \"black\",\n                                        height: \"50\",\n                                        width: \"50\",\n                                        y: \"20\",\n                                        x: \"30\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                        transform: \"translate(0,-952.36222)\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            class: \"path1\",\n                                            fill: \"none\",\n                                            \"stroke-width\": \"3\",\n                                            stroke: \"black\",\n                                            d: \"m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"checkbox-text\",\n                                children: [\n                                    \"Agree\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"terms\",\n                                        href: \"/\",\n                                        children: \"Terms and Conditions\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    disabled: err,\n                    onClick: ()=>{\n                        dispatch((0,_features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__.fetchHeartAttack)(data));\n                    },\n                    className: \"primary-btn\",\n                    children: \"Check\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"results-container\",\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_5__.MoonLoader, {\n                    color: \"#8F3E97\",\n                    loading: isLoading,\n                    cssOverride: override,\n                    size: 50,\n                    \"aria-label\": \"Loading Spinner\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 147,\n                    columnNumber: 11\n                }, undefined) : heartRate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        \"You are\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"result\",\n                            children: [\n                                Math.floor(heartRate * 100),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                            lineNumber: 157,\n                            columnNumber: 13\n                        }, undefined),\n                        \" prone to a heart attack\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 155,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Get your results by filling in the valid data and checking the checkbox\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 161,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CheckHeartRate, \"PtU6ozZjftRzMj1y3qM8GsuFRw4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = CheckHeartRate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckHeartRate);\nvar _c;\n$RefreshReg$(_c, \"CheckHeartRate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaW5kVGVzdC9DaGVja0hlYXJ0UmF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFDMEI7QUFDSTtBQUNmO0FBRTVDLE1BQU1RLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO1FBQy9CUyxLQUFLO1FBQ0xDLGdCQUFnQjtRQUNoQkMsYUFBYTtRQUNiQyxZQUFZO0lBQ2Q7SUFDQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZSxLQUFLQyxPQUFPLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNaUIsV0FBV2Qsd0RBQVdBO0lBQzVCLE1BQU0sRUFBRWUsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBR2pCLHdEQUFXQSxDQUMxQyxDQUFDa0IsUUFBVUEsTUFBTUMsbUJBQW1CO0lBR3RDLE1BQU1DLFdBQVc7UUFDZkMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLGFBQWE7SUFDZjtJQUVBMUIsZ0RBQVNBLENBQUM7UUFDUixNQUFNMkIsU0FBU0MsT0FBT0QsTUFBTSxDQUFDbkI7UUFDN0IsTUFBTXFCLGdCQUFnQkYsT0FBT0csSUFBSSxDQUFDLENBQUNDLFFBQVUsQ0FBQ0E7UUFFOUMsSUFBSUYsaUJBQWlCLENBQUNmLFNBQVM7WUFDN0JHLE9BQU87UUFDVCxPQUFPO1lBQ0xBLE9BQU87UUFDVDtJQUNGLEdBQUc7UUFBQ1Q7UUFBTU07S0FBUTtJQUVsQixNQUFNa0IsY0FBYztRQUNsQnZCLFFBQVE7WUFDTkMsS0FBSztZQUNMQyxnQkFBZ0I7WUFDaEJDLGFBQWE7WUFDYkMsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFDQyw0RUFBQ0M7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDRDtnQkFBS0QsV0FBVTswQkFBa0I7Ozs7OzswQkFDbEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFDVGhDLFFBQVE7Z0NBQ04sR0FBR0QsSUFBSTtnQ0FDUEUsS0FBSytCLEVBQUVDLE1BQU0sQ0FBQ1gsS0FBSzs0QkFDckI7Ozs7OztrQ0FHSiw4REFBQ007d0JBQ0NILFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFDVGhDLFFBQVE7Z0NBQ04sR0FBR0QsSUFBSTtnQ0FDUEcsZ0JBQWdCOEIsRUFBRUMsTUFBTSxDQUFDWCxLQUFLOzRCQUNoQzs7Ozs7O2tDQUdKLDhEQUFDTTt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUNUaEMsUUFBUTtnQ0FDTixHQUFHRCxJQUFJO2dDQUNQSSxhQUFhNkIsRUFBRUMsTUFBTSxDQUFDWCxLQUFLOzRCQUM3Qjs7Ozs7O2tDQUdKLDhEQUFDTTt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUNUaEMsUUFBUTtnQ0FDTixHQUFHRCxJQUFJO2dDQUNQSyxZQUFZNEIsRUFBRUMsTUFBTSxDQUFDWCxLQUFLOzRCQUM1Qjs7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDRTtnQkFBSVUsT0FBTTs7a0NBQ1QsOERBQUNOO3dCQUNDRyxVQUFVLElBQU16QixXQUFXLENBQUNEO3dCQUM1QjhCLElBQUc7d0JBQ0hELE9BQU07d0JBQ05MLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ087d0JBQU1GLE9BQU07d0JBQVFHLEtBQUk7OzBDQUN2Qiw4REFBQ0M7Z0NBQUlDLFNBQVE7Z0NBQVlDLFFBQU87Z0NBQUtDLE9BQU07O2tEQUN6Qyw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLFFBQU87d0NBQ1BKLFFBQU87d0NBQ1BDLE9BQU07d0NBQ05JLEdBQUU7d0NBQ0ZDLEdBQUU7Ozs7OztrREFFSiw4REFBQ0M7d0NBQUVDLFdBQVU7a0RBQ1gsNEVBQUNDOzRDQUNDZixPQUFNOzRDQUNOUyxNQUFLOzRDQUNMTyxnQkFBYTs0Q0FDYk4sUUFBTzs0Q0FDUE8sR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSVIsOERBQUN6QjtnQ0FBS0QsV0FBVTs7b0NBQWdCO29DQUN4QjtrREFDTiw4REFBQ2hDLGtEQUFJQTt3Q0FBQ2dDLFdBQVU7d0NBQVEyQixNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXZDLDhEQUFDNUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM0QjtvQkFDQ0MsVUFBVS9DO29CQUNWZ0QsU0FBUzt3QkFDUDlDLFNBQVNiLHdFQUFnQkEsQ0FBQ0c7b0JBQzVCO29CQUNBMEIsV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaZCwwQkFDQyw4REFBQ2Qsc0RBQVVBO29CQUNUMkQsT0FBTTtvQkFDTkMsU0FBUzlDO29CQUNUK0MsYUFBYTVDO29CQUNiNkMsTUFBTTtvQkFDTkMsY0FBVzs7Ozs7Z0NBRVhsRCwwQkFDRiw4REFBQ2dCOzt3QkFBSzt3QkFDSTtzQ0FDUiw4REFBQ0E7NEJBQUtELFdBQVU7O2dDQUFVb0MsS0FBS0MsS0FBSyxDQUFDcEQsWUFBWTtnQ0FBSzs7Ozs7Ozt3QkFBUTs7Ozs7OzhDQUloRSw4REFBQ2dCOzhCQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQjtHQWxLTTVCOztRQVNhSCxvREFBV0E7UUFDS0Qsb0RBQVdBOzs7S0FWeENJO0FBb0tOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbmRUZXN0L0NoZWNrSGVhcnRSYXRlLmpzP2Y0OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmV0Y2hIZWFydEF0dGFjayB9IGZyb20gXCJAL2ZlYXR1cmVzL21lZGljYWxTbGljZVwiO1xyXG5pbXBvcnQgeyBNb29uTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCI7XHJcblxyXG5jb25zdCBDaGVja0hlYXJ0UmF0ZSA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBhZ2U6IFwiXCIsXHJcbiAgICBibG9vZF9wcmVzc3VyZTogXCJcIixcclxuICAgIGNob2xlc3Rlcm9sOiBcIlwiLFxyXG4gICAgaGVhcnRfcmF0ZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBoZWFydFJhdGUsIGlzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLmhlYXJ0UmF0ZVByZWRpY3Rpb25cclxuICApO1xyXG5cclxuICBjb25zdCBvdmVycmlkZSA9IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgIGJvcmRlckNvbG9yOiBcInJlZFwiLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG4gICAgY29uc3QgaGFzRW1wdHlWYWx1ZSA9IHZhbHVlcy5zb21lKCh2YWx1ZSkgPT4gIXZhbHVlKTtcclxuXHJcbiAgICBpZiAoaGFzRW1wdHlWYWx1ZSB8fCAhY2hlY2tlZCkge1xyXG4gICAgICBzZXRFcnIodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCBjaGVja2VkXSk7XHJcblxyXG4gIGNvbnN0IHJlc2V0VmFsdWVzID0gKCkgPT4ge1xyXG4gICAgc2V0RGF0YSh7XHJcbiAgICAgIGFnZTogXCJcIixcclxuICAgICAgYmxvb2RfcHJlc3N1cmU6IFwiXCIsXHJcbiAgICAgIGNob2xlc3Rlcm9sOiBcIlwiLFxyXG4gICAgICBoZWFydF9yYXRlOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1jb250YWluZXJcIj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGI+SG93IG11Y2ggYXJlIHlvdSBwcm9uZSB0byBhIGhlYXJ0IGF0dGFjaz88L2I+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS10ZXh0XCI+VGFrZSBhIHNpbXBsZSB0ZXN0IGFuZCBmaW5kIG91dCE8L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dHNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYXJ0LXJhdGUtaW5wdXQgbG9naW4taW5wdXRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgYWdlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dCBsb2dpbi1pbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxvb2QgUHJlc3N1cmVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgIGJsb29kX3ByZXNzdXJlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dCBsb2dpbi1pbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvbGVzdGVyb2xcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgIGNob2xlc3Rlcm9sOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dCBsb2dpbi1pbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGVhcnQgUmF0ZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgaGVhcnRfcmF0ZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0Q2hlY2tlZCghY2hlY2tlZCl9XHJcbiAgICAgICAgICBpZD1cImNoZWNrMS02MVwiXHJcbiAgICAgICAgICBjbGFzcz1cImNoZWNrXCJcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cImNoZWNrMS02MVwiPlxyXG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDk1IDk1XCIgaGVpZ2h0PVwiMjVcIiB3aWR0aD1cIjI1XCI+XHJcbiAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI1MFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgeT1cIjIwXCJcclxuICAgICAgICAgICAgICB4PVwiMzBcIlxyXG4gICAgICAgICAgICA+PC9yZWN0PlxyXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwtOTUyLjM2MjIyKVwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBhdGgxXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgZD1cIm0gNTYsOTYzIGMgLTEwMiwxMjIgNiw5IDcsOSAxNywtNSAtNjYsNjkgLTM4LDUyIDEyMiwtNzcgLTcsMTQgMTgsNCAyOSwtMTEgNDUsLTQzIDIzLC00XCJcclxuICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94LXRleHRcIj5cclxuICAgICAgICAgICAgQWdyZWV7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInRlcm1zXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1idG5cIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17ZXJyfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaEhlYXJ0QXR0YWNrKGRhdGEpKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0blwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2hlY2tcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0cy1jb250YWluZXJcIj5cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPE1vb25Mb2FkZXJcclxuICAgICAgICAgICAgY29sb3I9XCIjOEYzRTk3XCJcclxuICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICBjc3NPdmVycmlkZT17b3ZlcnJpZGV9XHJcbiAgICAgICAgICAgIHNpemU9ezUwfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTG9hZGluZyBTcGlubmVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IGhlYXJ0UmF0ZSA/IChcclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBZb3UgYXJle1wiIFwifVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXN1bHRcIj57TWF0aC5mbG9vcihoZWFydFJhdGUgKiAxMDApfSU8L3NwYW4+IHByb25lXHJcbiAgICAgICAgICAgIHRvIGEgaGVhcnQgYXR0YWNrXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBHZXQgeW91ciByZXN1bHRzIGJ5IGZpbGxpbmcgaW4gdGhlIHZhbGlkIGRhdGEgYW5kIGNoZWNraW5nIHRoZVxyXG4gICAgICAgICAgICBjaGVja2JveFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrSGVhcnRSYXRlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiZmV0Y2hIZWFydEF0dGFjayIsIk1vb25Mb2FkZXIiLCJDaGVja0hlYXJ0UmF0ZSIsImRhdGEiLCJzZXREYXRhIiwiYWdlIiwiYmxvb2RfcHJlc3N1cmUiLCJjaG9sZXN0ZXJvbCIsImhlYXJ0X3JhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImVyciIsInNldEVyciIsImRpc3BhdGNoIiwiaGVhcnRSYXRlIiwiaXNMb2FkaW5nIiwic3RhdGUiLCJoZWFydFJhdGVQcmVkaWN0aW9uIiwib3ZlcnJpZGUiLCJkaXNwbGF5IiwibWFyZ2luIiwiYm9yZGVyQ29sb3IiLCJ2YWx1ZXMiLCJPYmplY3QiLCJoYXNFbXB0eVZhbHVlIiwic29tZSIsInZhbHVlIiwicmVzZXRWYWx1ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiYiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2xhc3MiLCJpZCIsImxhYmVsIiwiZm9yIiwic3ZnIiwidmlld0JveCIsImhlaWdodCIsIndpZHRoIiwicmVjdCIsImZpbGwiLCJzdHJva2UiLCJ5IiwieCIsImciLCJ0cmFuc2Zvcm0iLCJwYXRoIiwic3Ryb2tlLXdpZHRoIiwiZCIsImhyZWYiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJjb2xvciIsImxvYWRpbmciLCJjc3NPdmVycmlkZSIsInNpemUiLCJhcmlhLWxhYmVsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FindTest/CheckHeartRate.js\n"));

/***/ })

});