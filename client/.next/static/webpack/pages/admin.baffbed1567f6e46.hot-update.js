"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./layout/AdminLayout.jsx":
/*!********************************!*\
  !*** ./layout/AdminLayout.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin-nav/AdminNav */ \"./components/admin-nav/AdminNav.jsx\");\n/* harmony import */ var _components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin-sidebar/AdminSidebar */ \"./components/admin-sidebar/AdminSidebar.jsx\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdi/js */ \"./node_modules/@mdi/js/mdi.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/react */ \"./node_modules/@mdi/react/Icon.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AdminLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), hidden = ref[0], setHidden = ref[1];\n    var toggleMenu = function() {\n        setHidden(!hidden);\n        console.log(hidden);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {}, [\n        toggleMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"bg-secondary\",\n                fluid: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    style: {\n                        minHeight: \"100vh\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"bg-primary mx-0 px-0 \".concat(hidden ? \"d-none\" : \"d-block\"),\n                            lg: 2,\n                            sm: true,\n                            md: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                toggleMenu: toggleMenu\n                            }, void 0, false, {\n                                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            fluid: true,\n                            lg: hidden ? 12 : 10,\n                            sm: true,\n                            md: hidden ? 12 : 10,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: [\n                                        \"   \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mdi_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                                            color: \"#444\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mdi_react__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    path: _mdi_js__WEBPACK_IMPORTED_MODULE_8__.mdiAccount\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mdi_react__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                    path: _mdi_js__WEBPACK_IMPORTED_MODULE_8__.mdiBlockHelper,\n                                                    color: \"red\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 28\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 5\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AdminLayout, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = AdminLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminLayout);\nvar _c;\n$RefreshReg$(_c, \"AdminLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUQ7QUFDYTtBQUM5QjtBQUNBO0FBQ1k7QUFDQTtBQUNDO0FBQ1Y7O0FBR3pDLElBQU1ZLFdBQVcsR0FBRyxnQkFBZTtRQUFiQyxRQUFRLFNBQVJBLFFBQVE7O0lBRzFCLElBQTRCUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBYi9DLE1BYWlCLEdBQWVBLEdBQWUsR0FBOUIsRUFiakIsU0FhNEIsR0FBSUEsR0FBZSxHQUFuQjtJQUd4QixJQUFNVSxVQUFVLEdBQUcsV0FBTTtRQUNyQkQsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztRQUNsQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQztLQUN0QjtJQUVEUCxnREFBUyxDQUFDLFdBQUksRUFFYixFQUFDO1FBQUNTLFVBQVU7S0FBQyxDQUFDO0lBRW5CLHFCQUNJOzswQkFDQSw4REFBQ2hCLHNFQUFROzs7O3FCQUFHOzBCQUNaLDhEQUFDSSxpRUFBUztnQkFBRWUsU0FBUyxFQUFDLGNBQWM7Z0JBQUNDLEtBQUs7MEJBRzFDLDRFQUFDakIsMkRBQUc7b0JBQUNrQixLQUFLLEVBQUU7d0JBQUVDLFNBQVMsRUFBRSxPQUFPO3FCQUFFOztzQ0FDbEMsOERBQUNwQiwyREFBRzs0QkFBRWlCLFNBQVMsRUFBRSx1QkFBc0IsQ0FBK0IsT0FBN0JMLE1BQU0sR0FBRyxRQUFRLEdBQUUsU0FBUyxDQUFFOzRCQUN2RVMsRUFBRSxFQUFFLENBQUM7NEJBQUVDLEVBQUU7NEJBQUNDLEVBQUUsRUFBRSxDQUFDO3NDQUFFLDRFQUFDeEIsOEVBQVk7Z0NBQUNlLFVBQVUsRUFBRUEsVUFBVTs7Ozs7cUNBQUc7Ozs7O2lDQUNsRDtzQ0FDTiw4REFBQ2QsMkRBQUc7Ozs7aUNBRUU7c0NBRU0sOERBQUNBLDJEQUFHOzRCQUFDa0IsS0FBSzs0QkFBQ0csRUFBRSxFQUFFVCxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUU7NEJBQUVVLEVBQUU7NEJBQUNDLEVBQUUsRUFBRVgsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFOzs4Q0FDcEQsOERBQUNZLElBQUU7O3dDQUFDLEtBQUc7c0RBQUEsOERBQUNmLDZDQUFLOzRDQUFDZ0IsS0FBSyxFQUFDLE1BQU07OzhEQUN0Qiw4REFBQ2pCLG1EQUFJO29EQUFDa0IsSUFBSSxFQUFFcEIsK0NBQVU7Ozs7O3lEQUFJOzhEQUMxQiw4REFBQ0UsbURBQUk7b0RBQUNrQixJQUFJLEVBQUVuQixtREFBYztvREFDdEJrQixLQUFLLEVBQUMsS0FBSzs7Ozs7eURBQUc7Ozs7OztpREFDZDs7Ozs7O3lDQUFLOzhDQUM3Qiw4REFBQ0UsTUFBSTs4Q0FBRWhCLFFBQVE7Ozs7O3lDQUFROzs7Ozs7aUNBRWpCOzs7Ozs7eUJBQ0E7Ozs7O3FCQUNNOztvQkFDVCxDQUVOO0NBQ0E7R0EzQ0tELFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQTZDakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0FkbWluTGF5b3V0LmpzeD80ZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbk5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1uYXYvQWRtaW5OYXZcIlxyXG5pbXBvcnQgQWRtaW5TaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLXNpZGViYXIvQWRtaW5TaWRlYmFyXCI7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7bWRpQWNjb3VudCwgbWRpQmxvY2tIZWxwZXJ9IGZyb20gJ0BtZGkvanMnO1xyXG5pbXBvcnQgSWNvbiwgeyBTdGFjayB9IGZyb20gJ0BtZGkvcmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEFkbWluTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+e1xyXG5cclxuXHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SGlkZGVuKCFoaWRkZW4pXHJcbiAgICAgICAgY29uc29sZS5sb2coaGlkZGVuKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgIH0sW3RvZ2dsZU1lbnVdKVxyXG5cclxucmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxBZG1pbk5hdiAvPlxyXG4gICAgPENvbnRhaW5lciAgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5XCIgZmx1aWQgPlxyXG5cclxuICAgIFxyXG4gICAgPFJvdyBzdHlsZT17eyBtaW5IZWlnaHQ6IFwiMTAwdmhcIiB9fSA+XHJcbiAgICA8Q29sICBjbGFzc05hbWU9e2BiZy1wcmltYXJ5IG14LTAgcHgtMCAke2hpZGRlbiA/IFwiZC1ub25lXCIgOlwiZC1ibG9ja1wifWB9IFxyXG4gICAgbGc9ezJ9IHNtIG1kPXsyfT48QWRtaW5TaWRlYmFyIHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9Lz5cclxuICAgIDwvQ29sPiBcclxuICAgIDxDb2w+XHJcblxyXG4gICAgPC9Db2w+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxDb2wgZmx1aWQgbGc9e2hpZGRlbiA/IDEyIDogMTB9IHNtIG1kPXtoaWRkZW4gPyAxMiA6IDEwfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+ICAgPFN0YWNrIGNvbG9yPVwiIzQ0NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBwYXRoPXttZGlBY2NvdW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBwYXRoPXttZGlCbG9ja0hlbHBlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPjwvaDE+XHJcbiAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgIFxyXG4gICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgICBcclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkxheW91dCJdLCJuYW1lcyI6WyJBZG1pbk5hdiIsIkFkbWluU2lkZWJhciIsIkNvbCIsIlJvdyIsIkNvbnRhaW5lciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtZGlBY2NvdW50IiwibWRpQmxvY2tIZWxwZXIiLCJJY29uIiwiU3RhY2siLCJBZG1pbkxheW91dCIsImNoaWxkcmVuIiwiaGlkZGVuIiwic2V0SGlkZGVuIiwidG9nZ2xlTWVudSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJmbHVpZCIsInN0eWxlIiwibWluSGVpZ2h0IiwibGciLCJzbSIsIm1kIiwiaDEiLCJjb2xvciIsInBhdGgiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/AdminLayout.jsx\n");

/***/ })

});