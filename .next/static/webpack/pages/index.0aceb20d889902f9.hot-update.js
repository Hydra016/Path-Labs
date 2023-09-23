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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/medicalSlice */ \"./src/features/medicalSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CheckHeartRate = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        age: \"\",\n        blood_pressure: \"\",\n        cholesterol: \"\",\n        heart_rate: \"\"\n    });\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const { heartRate, isLoading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.heartRatePrediction);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const values = Object.values(data);\n        const hasEmptyValue = values.some((value)=>!value);\n        console.log(err);\n        if (hasEmptyValue || !checked) {\n            setErr(true);\n        } else {\n            setErr(false);\n        }\n    }, [\n        data,\n        checked\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"heart-rate-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: \"How much are you prone to a heart attack?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"heart-rate-text\",\n                children: \"Take a simple test and find out!\"\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-inputs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Age\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                age: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Blood Pressure\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                blood_pressure: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Cholesterol\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                cholesterol: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Heart Rate\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                heart_rate: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"checkbox-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: ()=>setChecked(!checked),\n                        id: \"check1-61\",\n                        class: \"check\",\n                        type: \"checkbox\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        class: \"label\",\n                        for: \"check1-61\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                viewBox: \"0 0 95 95\",\n                                height: \"25\",\n                                width: \"25\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                        fill: \"none\",\n                                        stroke: \"black\",\n                                        height: \"50\",\n                                        width: \"50\",\n                                        y: \"20\",\n                                        x: \"30\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                        transform: \"translate(0,-952.36222)\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            class: \"path1\",\n                                            fill: \"none\",\n                                            \"stroke-width\": \"3\",\n                                            stroke: \"black\",\n                                            d: \"m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"checkbox-text\",\n                                children: [\n                                    \"Agree\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"terms\",\n                                        href: \"/\",\n                                        children: \"Terms and Conditions\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    disabled: err,\n                    onClick: ()=>dispatch((0,_features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__.fetchHeartAttack)(data)),\n                    className: \"primary-btn\",\n                    children: \"Check\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"results-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        \"You are \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"result\",\n                            children: [\n                                Math.floor(heartRate * 100),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                            lineNumber: 131,\n                            columnNumber: 19\n                        }, undefined),\n                        \" \",\n                        \"prone to a heart attack\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CheckHeartRate, \"PtU6ozZjftRzMj1y3qM8GsuFRw4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = CheckHeartRate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckHeartRate);\nvar _c;\n$RefreshReg$(_c, \"CheckHeartRate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaW5kVGVzdC9DaGVja0hlYXJ0UmF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUMwQjtBQUNJO0FBRTNELE1BQU1PLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO1FBQy9CUSxLQUFLO1FBQ0xDLGdCQUFnQjtRQUNoQkMsYUFBYTtRQUNiQyxZQUFZO0lBQ2Q7SUFDQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxLQUFLQyxPQUFPLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1nQixXQUFXYix3REFBV0E7SUFDNUIsTUFBTSxFQUFFYyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHaEIsd0RBQVdBLENBQzFDLENBQUNpQixRQUFVQSxNQUFNQyxtQkFBbUI7SUFHdENyQixnREFBU0EsQ0FBQztRQUNSLE1BQU1zQixTQUFTQyxPQUFPRCxNQUFNLENBQUNmO1FBQzdCLE1BQU1pQixnQkFBZ0JGLE9BQU9HLElBQUksQ0FBQyxDQUFDQyxRQUFVLENBQUNBO1FBQzlDQyxRQUFRQyxHQUFHLENBQUNiO1FBQ1osSUFBR1MsaUJBQWlCLENBQUNYLFNBQVM7WUFFNUJHLE9BQU87UUFDVCxPQUFPO1lBQ0xBLE9BQU87UUFDVDtJQUVGLEdBQUc7UUFBQ1Q7UUFBS007S0FBUTtJQUVqQixxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFDQyw0RUFBQ0M7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDRDtnQkFBS0QsV0FBVTswQkFBa0I7Ozs7OzswQkFDbEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFDVDdCLFFBQVE7Z0NBQ04sR0FBR0QsSUFBSTtnQ0FDUEUsS0FBSzRCLEVBQUVDLE1BQU0sQ0FBQ1osS0FBSzs0QkFDckI7Ozs7OztrQ0FHSiw4REFBQ087d0JBQ0NILFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFDVDdCLFFBQVE7Z0NBQ04sR0FBR0QsSUFBSTtnQ0FDUEcsZ0JBQWdCMkIsRUFBRUMsTUFBTSxDQUFDWixLQUFLOzRCQUNoQzs7Ozs7O2tDQUdKLDhEQUFDTzt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUNUN0IsUUFBUTtnQ0FDTixHQUFHRCxJQUFJO2dDQUNQSSxhQUFhMEIsRUFBRUMsTUFBTSxDQUFDWixLQUFLOzRCQUM3Qjs7Ozs7O2tDQUdKLDhEQUFDTzt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUNUN0IsUUFBUTtnQ0FDTixHQUFHRCxJQUFJO2dDQUNQSyxZQUFZeUIsRUFBRUMsTUFBTSxDQUFDWixLQUFLOzRCQUM1Qjs7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDRztnQkFBSVUsT0FBTTs7a0NBQ1QsOERBQUNOO3dCQUNDRyxVQUFVLElBQU10QixXQUFXLENBQUNEO3dCQUM1QjJCLElBQUc7d0JBQ0hELE9BQU07d0JBQ05MLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ087d0JBQU1GLE9BQU07d0JBQVFHLEtBQUk7OzBDQUN2Qiw4REFBQ0M7Z0NBQUlDLFNBQVE7Z0NBQVlDLFFBQU87Z0NBQUtDLE9BQU07O2tEQUN6Qyw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLFFBQU87d0NBQ1BKLFFBQU87d0NBQ1BDLE9BQU07d0NBQ05JLEdBQUU7d0NBQ0ZDLEdBQUU7Ozs7OztrREFFSiw4REFBQ0M7d0NBQUVDLFdBQVU7a0RBQ1gsNEVBQUNDOzRDQUNDZixPQUFNOzRDQUNOUyxNQUFLOzRDQUNMTyxnQkFBYTs0Q0FDYk4sUUFBTzs0Q0FDUE8sR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSVIsOERBQUN6QjtnQ0FBS0QsV0FBVTs7b0NBQWdCO29DQUN4QjtrREFDTiw4REFBQzVCLGtEQUFJQTt3Q0FBQzRCLFdBQVU7d0NBQVEyQixNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXZDLDhEQUFDNUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM0QjtvQkFDQ0MsVUFBVTVDO29CQUNWNkMsU0FBUyxJQUFNM0MsU0FBU1osd0VBQWdCQSxDQUFDRTtvQkFDekN1QixXQUFVOzhCQUNYOzs7Ozs7Ozs7OzswQkFJSCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDOzt3QkFBSztzQ0FDSSw4REFBQ0E7NEJBQUtELFdBQVU7O2dDQUFVK0IsS0FBS0MsS0FBSyxDQUFDNUMsWUFBWTtnQ0FBSzs7Ozs7Ozt3QkFBUzt3QkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJGO0dBbklNWjs7UUFTYUYsb0RBQVdBO1FBQ0tELG9EQUFXQTs7O0tBVnhDRztBQXFJTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaW5kVGVzdC9DaGVja0hlYXJ0UmF0ZS5qcz9mNDllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGZldGNoSGVhcnRBdHRhY2sgfSBmcm9tIFwiQC9mZWF0dXJlcy9tZWRpY2FsU2xpY2VcIjtcclxuXHJcbmNvbnN0IENoZWNrSGVhcnRSYXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGFnZTogXCJcIixcclxuICAgIGJsb29kX3ByZXNzdXJlOiBcIlwiLFxyXG4gICAgY2hvbGVzdGVyb2w6IFwiXCIsXHJcbiAgICBoZWFydF9yYXRlOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgaGVhcnRSYXRlLCBpc0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5oZWFydFJhdGVQcmVkaWN0aW9uXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YSk7XHJcbiAgICBjb25zdCBoYXNFbXB0eVZhbHVlID0gdmFsdWVzLnNvbWUoKHZhbHVlKSA9PiAhdmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgaWYoaGFzRW1wdHlWYWx1ZSB8fCAhY2hlY2tlZCkge1xyXG4gICAgICBcclxuICAgICAgc2V0RXJyKHRydWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnIoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gIH0sIFtkYXRhLGNoZWNrZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1jb250YWluZXJcIj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPGI+SG93IG11Y2ggYXJlIHlvdSBwcm9uZSB0byBhIGhlYXJ0IGF0dGFjaz88L2I+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS10ZXh0XCI+VGFrZSBhIHNpbXBsZSB0ZXN0IGFuZCBmaW5kIG91dCE8L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dHNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYXJ0LXJhdGUtaW5wdXQgbG9naW4taW5wdXRcIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgYWdlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dCBsb2dpbi1pbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmxvb2QgUHJlc3N1cmVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgIGJsb29kX3ByZXNzdXJlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dCBsb2dpbi1pbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvbGVzdGVyb2xcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgIGNob2xlc3Rlcm9sOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dCBsb2dpbi1pbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSGVhcnQgUmF0ZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgaGVhcnRfcmF0ZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0Q2hlY2tlZCghY2hlY2tlZCl9XHJcbiAgICAgICAgICBpZD1cImNoZWNrMS02MVwiXHJcbiAgICAgICAgICBjbGFzcz1cImNoZWNrXCJcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cImNoZWNrMS02MVwiPlxyXG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDk1IDk1XCIgaGVpZ2h0PVwiMjVcIiB3aWR0aD1cIjI1XCI+XHJcbiAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI1MFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgeT1cIjIwXCJcclxuICAgICAgICAgICAgICB4PVwiMzBcIlxyXG4gICAgICAgICAgICA+PC9yZWN0PlxyXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwtOTUyLjM2MjIyKVwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBhdGgxXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgZD1cIm0gNTYsOTYzIGMgLTEwMiwxMjIgNiw5IDcsOSAxNywtNSAtNjYsNjkgLTM4LDUyIDEyMiwtNzcgLTcsMTQgMTgsNCAyOSwtMTEgNDUsLTQzIDIzLC00XCJcclxuICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94LXRleHRcIj5cclxuICAgICAgICAgICAgQWdyZWV7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInRlcm1zXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1idG5cIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17ZXJyfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hIZWFydEF0dGFjayhkYXRhKSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0blwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2hlY2tcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0cy1jb250YWluZXJcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFlvdSBhcmUgPHNwYW4gY2xhc3NOYW1lPVwicmVzdWx0XCI+e01hdGguZmxvb3IoaGVhcnRSYXRlICogMTAwKX0lPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgIHByb25lIHRvIGEgaGVhcnQgYXR0YWNrXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja0hlYXJ0UmF0ZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZldGNoSGVhcnRBdHRhY2siLCJDaGVja0hlYXJ0UmF0ZSIsImRhdGEiLCJzZXREYXRhIiwiYWdlIiwiYmxvb2RfcHJlc3N1cmUiLCJjaG9sZXN0ZXJvbCIsImhlYXJ0X3JhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImVyciIsInNldEVyciIsImRpc3BhdGNoIiwiaGVhcnRSYXRlIiwiaXNMb2FkaW5nIiwic3RhdGUiLCJoZWFydFJhdGVQcmVkaWN0aW9uIiwidmFsdWVzIiwiT2JqZWN0IiwiaGFzRW1wdHlWYWx1ZSIsInNvbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiYiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2xhc3MiLCJpZCIsImxhYmVsIiwiZm9yIiwic3ZnIiwidmlld0JveCIsImhlaWdodCIsIndpZHRoIiwicmVjdCIsImZpbGwiLCJzdHJva2UiLCJ5IiwieCIsImciLCJ0cmFuc2Zvcm0iLCJwYXRoIiwic3Ryb2tlLXdpZHRoIiwiZCIsImhyZWYiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FindTest/CheckHeartRate.js\n"));

/***/ })

});