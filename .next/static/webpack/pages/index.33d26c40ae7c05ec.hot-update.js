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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/features/medicalSlice */ \"./src/features/medicalSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CheckHeartRate = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        age: \"\",\n        blood_pressure: \"\",\n        cholesterol: \"\",\n        heart_rate: \"\"\n    });\n    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const { heartRate, isLoading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.heartRatePrediction);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const values = Object.values(data);\n        const hasEmptyValue = values.some((value)=>!value);\n        if (hasEmptyValue || !checked) {\n            setErr(true);\n        } else {\n            setErr(false);\n        }\n    }, [\n        data,\n        checked\n    ]);\n    const resetValues = ()=>{\n        setData({\n            age: \"\",\n            blood_pressure: \"\",\n            cholesterol: \"\",\n            heart_rate: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"heart-rate-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: \"How much are you prone to a heart attack?\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"heart-rate-text\",\n                children: \"Take a simple test and find out!\"\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-inputs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Age\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                age: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Blood Pressure\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                blood_pressure: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Cholesterol\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                cholesterol: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"heart-rate-input login-input\",\n                        type: \"number\",\n                        placeholder: \"Heart Rate\",\n                        onChange: (e)=>setData({\n                                ...data,\n                                heart_rate: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"checkbox-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: ()=>setChecked(!checked),\n                        id: \"check1-61\",\n                        class: \"check\",\n                        type: \"checkbox\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        class: \"label\",\n                        for: \"check1-61\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                viewBox: \"0 0 95 95\",\n                                height: \"25\",\n                                width: \"25\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                                        fill: \"none\",\n                                        stroke: \"black\",\n                                        height: \"50\",\n                                        width: \"50\",\n                                        y: \"20\",\n                                        x: \"30\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                        transform: \"translate(0,-952.36222)\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            class: \"path1\",\n                                            fill: \"none\",\n                                            \"stroke-width\": \"3\",\n                                            stroke: \"black\",\n                                            d: \"m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"checkbox-text\",\n                                children: [\n                                    \"Agree\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"terms\",\n                                        href: \"/\",\n                                        children: \"Terms and Conditions\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heart-rate-btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    // disabled={err}\n                    onClick: ()=>{\n                        dispatch((0,_features_medicalSlice__WEBPACK_IMPORTED_MODULE_4__.fetchHeartAttack)(data));\n                    // resetValues()\n                    },\n                    className: \"primary-btn\",\n                    children: \"Check\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"results-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        \"You are \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"result\",\n                            children: [\n                                Math.floor(heartRate * 100),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                            lineNumber: 141,\n                            columnNumber: 19\n                        }, undefined),\n                        \" \",\n                        \"prone to a heart attack\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                    lineNumber: 140,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\next-projects\\\\pathlabs\\\\src\\\\components\\\\FindTest\\\\CheckHeartRate.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CheckHeartRate, \"PtU6ozZjftRzMj1y3qM8GsuFRw4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = CheckHeartRate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckHeartRate);\nvar _c;\n$RefreshReg$(_c, \"CheckHeartRate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaW5kVGVzdC9DaGVja0hlYXJ0UmF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUMwQjtBQUNJO0FBRTNELE1BQU1PLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO1FBQy9CUSxLQUFLO1FBQ0xDLGdCQUFnQjtRQUNoQkMsYUFBYTtRQUNiQyxZQUFZO0lBQ2Q7SUFDQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxLQUFLQyxPQUFPLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1nQixXQUFXYix3REFBV0E7SUFDNUIsTUFBTSxFQUFFYyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHaEIsd0RBQVdBLENBQzFDLENBQUNpQixRQUFVQSxNQUFNQyxtQkFBbUI7SUFHdENyQixnREFBU0EsQ0FBQztRQUNSLE1BQU1zQixTQUFTQyxPQUFPRCxNQUFNLENBQUNmO1FBQzdCLE1BQU1pQixnQkFBZ0JGLE9BQU9HLElBQUksQ0FBQyxDQUFDQyxRQUFVLENBQUNBO1FBRTlDLElBQUlGLGlCQUFpQixDQUFDWCxTQUFTO1lBQzdCRyxPQUFPO1FBQ1QsT0FBTztZQUNMQSxPQUFPO1FBQ1Q7SUFDRixHQUFHO1FBQUNUO1FBQU1NO0tBQVE7SUFFbEIsTUFBTWMsY0FBYztRQUNsQm5CLFFBQVE7WUFDTkMsS0FBSztZQUNMQyxnQkFBZ0I7WUFDaEJDLGFBQWE7WUFDYkMsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFDQyw0RUFBQ0M7OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDRDtnQkFBS0QsV0FBVTswQkFBa0I7Ozs7OzswQkFDbEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFDVDVCLFFBQVE7Z0NBQ04sR0FBR0QsSUFBSTtnQ0FDUEUsS0FBSzJCLEVBQUVDLE1BQU0sQ0FBQ1gsS0FBSzs0QkFDckI7Ozs7OztrQ0FHSiw4REFBQ007d0JBQ0NILFdBQVU7d0JBQ1ZJLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ0MsSUFDVDVCLFFBQVE7Z0NBQ04sR0FBR0QsSUFBSTtnQ0FDUEcsZ0JBQWdCMEIsRUFBRUMsTUFBTSxDQUFDWCxLQUFLOzRCQUNoQzs7Ozs7O2tDQUdKLDhEQUFDTTt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUNUNUIsUUFBUTtnQ0FDTixHQUFHRCxJQUFJO2dDQUNQSSxhQUFheUIsRUFBRUMsTUFBTSxDQUFDWCxLQUFLOzRCQUM3Qjs7Ozs7O2tDQUdKLDhEQUFDTTt3QkFDQ0gsV0FBVTt3QkFDVkksTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxJQUNUNUIsUUFBUTtnQ0FDTixHQUFHRCxJQUFJO2dDQUNQSyxZQUFZd0IsRUFBRUMsTUFBTSxDQUFDWCxLQUFLOzRCQUM1Qjs7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDRTtnQkFBSVUsT0FBTTs7a0NBQ1QsOERBQUNOO3dCQUNDRyxVQUFVLElBQU1yQixXQUFXLENBQUNEO3dCQUM1QjBCLElBQUc7d0JBQ0hELE9BQU07d0JBQ05MLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ087d0JBQU1GLE9BQU07d0JBQVFHLEtBQUk7OzBDQUN2Qiw4REFBQ0M7Z0NBQUlDLFNBQVE7Z0NBQVlDLFFBQU87Z0NBQUtDLE9BQU07O2tEQUN6Qyw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLFFBQU87d0NBQ1BKLFFBQU87d0NBQ1BDLE9BQU07d0NBQ05JLEdBQUU7d0NBQ0ZDLEdBQUU7Ozs7OztrREFFSiw4REFBQ0M7d0NBQUVDLFdBQVU7a0RBQ1gsNEVBQUNDOzRDQUNDZixPQUFNOzRDQUNOUyxNQUFLOzRDQUNMTyxnQkFBYTs0Q0FDYk4sUUFBTzs0Q0FDUE8sR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSVIsOERBQUN6QjtnQ0FBS0QsV0FBVTs7b0NBQWdCO29DQUN4QjtrREFDTiw4REFBQzNCLGtEQUFJQTt3Q0FBQzJCLFdBQVU7d0NBQVEyQixNQUFLO2tEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXZDLDhEQUFDNUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM0QjtvQkFDQyxpQkFBaUI7b0JBQ2pCQyxTQUFTO3dCQUNQekMsU0FBU1osd0VBQWdCQSxDQUFDRTtvQkFDMUIsZ0JBQWdCO29CQUNsQjtvQkFDQXNCLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7O3dCQUFLO3NDQUNJLDhEQUFDQTs0QkFBS0QsV0FBVTs7Z0NBQVU4QixLQUFLQyxLQUFLLENBQUMxQyxZQUFZO2dDQUFLOzs7Ozs7O3dCQUFTO3dCQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckY7R0E3SU1aOztRQVNhRixvREFBV0E7UUFDS0Qsb0RBQVdBOzs7S0FWeENHO0FBK0lOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbmRUZXN0L0NoZWNrSGVhcnRSYXRlLmpzP2Y0OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmV0Y2hIZWFydEF0dGFjayB9IGZyb20gXCJAL2ZlYXR1cmVzL21lZGljYWxTbGljZVwiO1xyXG5cclxuY29uc3QgQ2hlY2tIZWFydFJhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgYWdlOiBcIlwiLFxyXG4gICAgYmxvb2RfcHJlc3N1cmU6IFwiXCIsXHJcbiAgICBjaG9sZXN0ZXJvbDogXCJcIixcclxuICAgIGhlYXJ0X3JhdGU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgaGVhcnRSYXRlLCBpc0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5oZWFydFJhdGVQcmVkaWN0aW9uXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YSk7XHJcbiAgICBjb25zdCBoYXNFbXB0eVZhbHVlID0gdmFsdWVzLnNvbWUoKHZhbHVlKSA9PiAhdmFsdWUpO1xyXG5cclxuICAgIGlmIChoYXNFbXB0eVZhbHVlIHx8ICFjaGVja2VkKSB7XHJcbiAgICAgIHNldEVycih0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIGNoZWNrZWRdKTtcclxuXHJcbiAgY29uc3QgcmVzZXRWYWx1ZXMgPSAoKSA9PiB7XHJcbiAgICBzZXREYXRhKHtcclxuICAgICAgYWdlOiAnJyxcclxuICAgICAgYmxvb2RfcHJlc3N1cmU6ICcnLFxyXG4gICAgICBjaG9sZXN0ZXJvbDogJycsXHJcbiAgICAgIGhlYXJ0X3JhdGU6ICcnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWNvbnRhaW5lclwiPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8Yj5Ib3cgbXVjaCBhcmUgeW91IHByb25lIHRvIGEgaGVhcnQgYXR0YWNrPzwvYj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFydC1yYXRlLXRleHRcIj5UYWtlIGEgc2ltcGxlIHRlc3QgYW5kIGZpbmQgb3V0ITwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWlucHV0c1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhcnQtcmF0ZS1pbnB1dCBsb2dpbi1pbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICBhZ2U6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWlucHV0IGxvZ2luLWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCbG9vZCBQcmVzc3VyZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgYmxvb2RfcHJlc3N1cmU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWlucHV0IGxvZ2luLWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9sZXN0ZXJvbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgY2hvbGVzdGVyb2w6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWlucHV0IGxvZ2luLWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJIZWFydCBSYXRlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICBoZWFydF9yYXRlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LXdyYXBwZXJcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRDaGVja2VkKCFjaGVja2VkKX1cclxuICAgICAgICAgIGlkPVwiY2hlY2sxLTYxXCJcclxuICAgICAgICAgIGNsYXNzPVwiY2hlY2tcIlxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiY2hlY2sxLTYxXCI+XHJcbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgOTUgOTVcIiBoZWlnaHQ9XCIyNVwiIHdpZHRoPVwiMjVcIj5cclxuICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgICB5PVwiMjBcIlxyXG4gICAgICAgICAgICAgIHg9XCIzMFwiXHJcbiAgICAgICAgICAgID48L3JlY3Q+XHJcbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLC05NTIuMzYyMjIpXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwicGF0aDFcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICBkPVwibSA1Niw5NjMgYyAtMTAyLDEyMiA2LDkgNyw5IDE3LC01IC02Niw2OSAtMzgsNTIgMTIyLC03NyAtNywxNCAxOCw0IDI5LC0xMSA0NSwtNDMgMjMsLTRcIlxyXG4gICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3gtdGV4dFwiPlxyXG4gICAgICAgICAgICBBZ3JlZXtcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidGVybXNcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydC1yYXRlLWJ0blwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIC8vIGRpc2FibGVkPXtlcnJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoSGVhcnRBdHRhY2soZGF0YSkpXHJcbiAgICAgICAgICAgIC8vIHJlc2V0VmFsdWVzKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0blwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2hlY2tcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0cy1jb250YWluZXJcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFlvdSBhcmUgPHNwYW4gY2xhc3NOYW1lPVwicmVzdWx0XCI+e01hdGguZmxvb3IoaGVhcnRSYXRlICogMTAwKX0lPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgIHByb25lIHRvIGEgaGVhcnQgYXR0YWNrXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja0hlYXJ0UmF0ZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImZldGNoSGVhcnRBdHRhY2siLCJDaGVja0hlYXJ0UmF0ZSIsImRhdGEiLCJzZXREYXRhIiwiYWdlIiwiYmxvb2RfcHJlc3N1cmUiLCJjaG9sZXN0ZXJvbCIsImhlYXJ0X3JhdGUiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImVyciIsInNldEVyciIsImRpc3BhdGNoIiwiaGVhcnRSYXRlIiwiaXNMb2FkaW5nIiwic3RhdGUiLCJoZWFydFJhdGVQcmVkaWN0aW9uIiwidmFsdWVzIiwiT2JqZWN0IiwiaGFzRW1wdHlWYWx1ZSIsInNvbWUiLCJ2YWx1ZSIsInJlc2V0VmFsdWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNsYXNzIiwiaWQiLCJsYWJlbCIsImZvciIsInN2ZyIsInZpZXdCb3giLCJoZWlnaHQiLCJ3aWR0aCIsInJlY3QiLCJmaWxsIiwic3Ryb2tlIiwieSIsIngiLCJnIiwidHJhbnNmb3JtIiwicGF0aCIsInN0cm9rZS13aWR0aCIsImQiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FindTest/CheckHeartRate.js\n"));

/***/ })

});