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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/medicalSlice */ \"./src/features/medicalSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CheckHeartRate = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        age: \"\",\n        blood_pressure: \"\",\n        cholesterol: \"\",\n        heart_rate: \"\"\n    });\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const { heartRate, isLoading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.heartRatePrediction);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const values = Object.values(data);\n        const hasEmptyValue = values.some((value)=>!value);\n        if (hasEmptyValue || !checked) {\n            setErr(true);\n        } else {\n            setErr(false);\n        }\n    }, [\n        data,\n        checked\n    ]);\n    const resetValues = ()=>{\n        setData({\n            ...data,\n            age: \"\"\n        });\n        setData({\n            ...data,\n            heart_rate: \"\"\n        });\n        setData({\n            ...data,\n            cholesterol: \"\"\n        });\n        setData({\n            ...data,\n            blood_pressure: \"\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (heartRate) {\n            resetValues();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"heart-rate-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: \"How much are you prone to a heart attack?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"heart-rate-text\",\n                children: \"Take a simple test and find out!\"\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-inputs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Age\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                age: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Blood Pressure\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                blood_pressure: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Cholesterol\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                cholesterol: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Heart Rate\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                heart_rate: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"checkbox-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: ()=>setChecked(!checked),\n                        id: \"check1-61\",\n                        class: \"check\",\n                        type: \"checkbox\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        class: \"label\",\n                        for: \"check1-61\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                viewBox: \"0 0 95 95\",\n                                height: \"25\",\n                                width: \"25\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                        fill: \"none\",\n                                        stroke: \"black\",\n                                        height: \"50\",\n                                        width: \"50\",\n                                        y: \"20\",\n                                        x: \"30\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                        transform: \"translate(0,-952.36222)\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            class: \"path1\",\n                                            fill: \"none\",\n                                            \"stroke-width\": \"3\",\n                                            stroke: \"black\",\n                                            d: \"m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                            lineNumber: 114,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"checkbox-text\",\n                                children: [\n                                    \"Agree\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"terms\",\n                                        href: \"/\",\n                                        children: \"Terms and Conditions\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    disabled: err,\n                    onClick: ()=>{\n                        dispatch((0,_features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__.fetchHeartAttack)(data));\n                    },\n                    className: \"primary-btn\",\n                    children: \"Check\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"results-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        \"You are \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"result\",\n                            children: [\n                                Math.floor(heartRate * 100),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                            lineNumber: 144,\n                            columnNumber: 19\n                        }, undefined),\n                        \" \",\n                        \"prone to a heart attack\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CheckHeartRate, \"6TyU6a5r83LpX5WXwPh7Tvy4asw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = CheckHeartRate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckHeartRate);\nvar _c;\n$RefreshReg$(_c, \"CheckHeartRate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaW5kVGVzdC9DaGVja0hlYXJ0UmF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUMwQjtBQUNJO0FBRTNELE1BQU1PLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO1FBQy9CUSxLQUFLO1FBQ0xDLGdCQUFnQjtRQUNoQkMsYUFBYTtRQUNiQyxZQUFZO0lBQ2Q7SUFDQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxLQUFLQyxPQUFPLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1nQixXQUFXYix3REFBV0E7SUFDNUIsTUFBTSxFQUFFYyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHaEIsd0RBQVdBLENBQzFDLENBQUNpQixRQUFVQSxNQUFNQyxtQkFBbUI7SUFHdENyQixnREFBU0EsQ0FBQztRQUNSLE1BQU1zQixTQUFTQyxPQUFPRCxNQUFNLENBQUNmO1FBQzdCLE1BQU1pQixnQkFBZ0JGLE9BQU9HLElBQUksQ0FBQyxDQUFDQyxRQUFVLENBQUNBO1FBRTlDLElBQUlGLGlCQUFpQixDQUFDWCxTQUFTO1lBQzdCRyxPQUFPO1FBQ1QsT0FBTztZQUNMQSxPQUFPO1FBQ1Q7SUFDRixHQUFHO1FBQUNUO1FBQU1NO0tBQVE7SUFFbEIsTUFBTWMsY0FBYztRQUNsQm5CLFFBQVE7WUFBQyxHQUFHRCxJQUFJO1lBQUVFLEtBQUs7UUFBRTtRQUNqQkQsUUFBUTtZQUFDLEdBQUdELElBQUk7WUFBRUssWUFBWTtRQUFFO1FBQ2hDSixRQUFRO1lBQUMsR0FBR0QsSUFBSTtZQUFFSSxhQUFhO1FBQUU7UUFDakNILFFBQVE7WUFBQyxHQUFHRCxJQUFJO1lBQUVHLGdCQUFnQjtRQUFFO0lBQzlDO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBR2tCLFdBQVc7WUFDWlM7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFDQyw0RUFBQ0M7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDRDtnQkFBS0QsV0FBVTswQkFBa0I7Ozs7OzswQkFDbEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFDVDVCLFFBQVE7Z0NBQ04sR0FBR0QsSUFBSTtnQ0FDUEUsS0FBSzJCLEVBQUVDLE1BQU0sQ0FBQ1gsS0FBSzs0QkFDckI7Ozs7OztrQ0FHSiw4REFBQ007d0JBQ0NILFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFDVDVCLFFBQVE7Z0NBQ04sR0FBR0QsSUFBSTtnQ0FDUEcsZ0JBQWdCMEIsRUFBRUMsTUFBTSxDQUFDWCxLQUFLOzRCQUNoQzs7Ozs7O2tDQUdKLDhEQUFDTTt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUNUNUIsUUFBUTtnQ0FDTixHQUFHRCxJQUFJO2dDQUNQSSxhQUFheUIsRUFBRUMsTUFBTSxDQUFDWCxLQUFLOzRCQUM3Qjs7Ozs7O2tDQUdKLDhEQUFDTTt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUNUNUIsUUFBUTtnQ0FDTixHQUFHRCxJQUFJO2dDQUNQSyxZQUFZd0IsRUFBRUMsTUFBTSxDQUFDWCxLQUFLOzRCQUM1Qjs7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDRTtnQkFBSVUsT0FBTTs7a0NBQ1QsOERBQUNOO3dCQUNDRyxVQUFVLElBQU1yQixXQUFXLENBQUNEO3dCQUM1QjBCLElBQUc7d0JBQ0hELE9BQU07d0JBQ05MLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ087d0JBQU1GLE9BQU07d0JBQVFHLEtBQUk7OzBDQUN2Qiw4REFBQ0M7Z0NBQUlDLFNBQVE7Z0NBQVlDLFFBQU87Z0NBQUtDLE9BQU07O2tEQUN6Qyw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLFFBQU87d0NBQ1BKLFFBQU87d0NBQ1BDLE9BQU07d0NBQ05JLEdBQUU7d0NBQ0ZDLEdBQUU7Ozs7OztrREFFSiw4REFBQ0M7d0NBQUVDLFdBQVU7a0RBQ1gsNEVBQUNDOzRDQUNDZixPQUFNOzRDQUNOUyxNQUFLOzRDQUNMTyxnQkFBYTs0Q0FDYk4sUUFBTzs0Q0FDUE8sR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSVIsOERBQUN6QjtnQ0FBS0QsV0FBVTs7b0NBQWdCO29DQUN4QjtrREFDTiw4REFBQzNCLGtEQUFJQTt3Q0FBQzJCLFdBQVU7d0NBQVEyQixNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXZDLDhEQUFDNUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM0QjtvQkFDQ0MsVUFBVTNDO29CQUNWNEMsU0FBUzt3QkFDUDFDLFNBQVNaLHdFQUFnQkEsQ0FBQ0U7b0JBQzVCO29CQUNBc0IsV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQzs7d0JBQUs7c0NBQ0ksOERBQUNBOzRCQUFLRCxXQUFVOztnQ0FBVStCLEtBQUtDLEtBQUssQ0FBQzNDLFlBQVk7Z0NBQUs7Ozs7Ozs7d0JBQVM7d0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRjtHQWhKTVo7O1FBU2FGLG9EQUFXQTtRQUNLRCxvREFBV0E7OztLQVZ4Q0c7QUFrSk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmluZFRlc3QvQ2hlY2tIZWFydFJhdGUuanM/ZjQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaEhlYXJ0QXR0YWNrIH0gZnJvbSBcIkAvZmVhdHVyZXMvbWVkaWNhbFNsaWNlXCI7XHJcblxyXG5jb25zdCBDaGVja0hlYXJ0UmF0ZSA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBhZ2U6IFwiXCIsXHJcbiAgICBibG9vZF9wcmVzc3VyZTogXCJcIixcclxuICAgIGNob2xlc3Rlcm9sOiBcIlwiLFxyXG4gICAgaGVhcnRfcmF0ZTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vyciwgc2V0RXJyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBoZWFydFJhdGUsIGlzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLmhlYXJ0UmF0ZVByZWRpY3Rpb25cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcclxuICAgIGNvbnN0IGhhc0VtcHR5VmFsdWUgPSB2YWx1ZXMuc29tZSgodmFsdWUpID0+ICF2YWx1ZSk7XHJcblxyXG4gICAgaWYgKGhhc0VtcHR5VmFsdWUgfHwgIWNoZWNrZWQpIHtcclxuICAgICAgc2V0RXJyKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbZGF0YSwgY2hlY2tlZF0pO1xyXG5cclxuICBjb25zdCByZXNldFZhbHVlcyA9ICgpID0+IHtcclxuICAgIHNldERhdGEoey4uLmRhdGEsIGFnZTogJyd9KVxyXG4gICAgICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBoZWFydF9yYXRlOiAnJ30pXHJcbiAgICAgICAgICAgIHNldERhdGEoey4uLmRhdGEsIGNob2xlc3Rlcm9sOiAnJ30pXHJcbiAgICAgICAgICAgIHNldERhdGEoey4uLmRhdGEsIGJsb29kX3ByZXNzdXJlOiAnJ30pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoaGVhcnRSYXRlKSB7XHJcbiAgICAgIHJlc2V0VmFsdWVzKClcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWNvbnRhaW5lclwiPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8Yj5Ib3cgbXVjaCBhcmUgeW91IHByb25lIHRvIGEgaGVhcnQgYXR0YWNrPzwvYj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFydC1yYXRlLXRleHRcIj5UYWtlIGEgc2ltcGxlIHRlc3QgYW5kIGZpbmQgb3V0ITwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWlucHV0c1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dCBsb2dpbi1pbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICBhZ2U6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWlucHV0IGxvZ2luLWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbG9vZCBQcmVzc3VyZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgYmxvb2RfcHJlc3N1cmU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWlucHV0IGxvZ2luLWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9sZXN0ZXJvbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgY2hvbGVzdGVyb2w6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWlucHV0IGxvZ2luLWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZWFydCBSYXRlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICBoZWFydF9yYXRlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LXdyYXBwZXJcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRDaGVja2VkKCFjaGVja2VkKX1cclxuICAgICAgICAgIGlkPVwiY2hlY2sxLTYxXCJcclxuICAgICAgICAgIGNsYXNzPVwiY2hlY2tcIlxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiY2hlY2sxLTYxXCI+XHJcbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgOTUgOTVcIiBoZWlnaHQ9XCIyNVwiIHdpZHRoPVwiMjVcIj5cclxuICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgICB5PVwiMjBcIlxyXG4gICAgICAgICAgICAgIHg9XCIzMFwiXHJcbiAgICAgICAgICAgID48L3JlY3Q+XHJcbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLC05NTIuMzYyMjIpXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwicGF0aDFcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICBkPVwibSA1Niw5NjMgYyAtMTAyLDEyMiA2LDkgNyw5IDE3LC01IC02Niw2OSAtMzgsNTIgMTIyLC03NyAtNywxNCAxOCw0IDI5LC0xMSA0NSwtNDMgMjMsLTRcIlxyXG4gICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICBBZ3JlZXtcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidGVybXNcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWJ0blwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGRpc2FibGVkPXtlcnJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoSGVhcnRBdHRhY2soZGF0YSkpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJpbWFyeS1idG5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIENoZWNrXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBZb3UgYXJlIDxzcGFuIGNsYXNzTmFtZT1cInJlc3VsdFwiPntNYXRoLmZsb29yKGhlYXJ0UmF0ZSAqIDEwMCl9JTwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICBwcm9uZSB0byBhIGhlYXJ0IGF0dGFja1xyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tIZWFydFJhdGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJmZXRjaEhlYXJ0QXR0YWNrIiwiQ2hlY2tIZWFydFJhdGUiLCJkYXRhIiwic2V0RGF0YSIsImFnZSIsImJsb29kX3ByZXNzdXJlIiwiY2hvbGVzdGVyb2wiLCJoZWFydF9yYXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJlcnIiLCJzZXRFcnIiLCJkaXNwYXRjaCIsImhlYXJ0UmF0ZSIsImlzTG9hZGluZyIsInN0YXRlIiwiaGVhcnRSYXRlUHJlZGljdGlvbiIsInZhbHVlcyIsIk9iamVjdCIsImhhc0VtcHR5VmFsdWUiLCJzb21lIiwidmFsdWUiLCJyZXNldFZhbHVlcyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJiIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjbGFzcyIsImlkIiwibGFiZWwiLCJmb3IiLCJzdmciLCJ2aWV3Qm94IiwiaGVpZ2h0Iiwid2lkdGgiLCJyZWN0IiwiZmlsbCIsInN0cm9rZSIsInkiLCJ4IiwiZyIsInRyYW5zZm9ybSIsInBhdGgiLCJzdHJva2Utd2lkdGgiLCJkIiwiaHJlZiIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FindTest/CheckHeartRate.js\n"));

/***/ })

});