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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin-nav/AdminNav */ \"./components/admin-nav/AdminNav.jsx\");\n/* harmony import */ var _components_admin_sidebar_otherComponents_Toggle_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin-sidebar/otherComponents/Toggle_button */ \"./components/admin-sidebar/otherComponents/Toggle_button.jsx\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_admin_sidebar_otherComponents_Sidebar_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/admin-sidebar/otherComponents/Sidebar_menu */ \"./components/admin-sidebar/otherComponents/Sidebar_menu.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AdminLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), hidden = ref[0], setHidden = ref[1];\n    var toggleMenu = function() {\n        setHidden(!hidden);\n        console.log(hidden);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {}, [\n        toggleMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"bg-secondary\",\n                fluid: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    style: {\n                        minHeight: \"100vh\"\n                    },\n                    children: [\n                        hidden ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarMenu, {\n                            toggleMenu: toggleMenu\n                        }, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 30\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_sidebar_otherComponents_Toggle_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            toggleMenu: toggleMenu\n                        }, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 72\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            fluid: true,\n                            lg: hidden ? 12 : 10,\n                            sm: true,\n                            md: hidden ? 12 : 10,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \" \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 5\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AdminLayout, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = AdminLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminLayout);\nvar _c;\n$RefreshReg$(_c, \"AdminLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdEO0FBRTZCO0FBQy9DO0FBQ0E7QUFDWTtBQUNBO0FBQ2tDOztBQWNwRixJQUFNUyxXQUFXLEdBQUcsZ0JBQWU7UUFBYkMsUUFBUSxTQUFSQSxRQUFROztJQUcxQixJQUE0QkosR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQXhCL0MsTUF3QmlCLEdBQWVBLEdBQWUsR0FBOUIsRUF4QmpCLFNBd0I0QixHQUFJQSxHQUFlLEdBQW5CO0lBR3hCLElBQU1PLFVBQVUsR0FBRyxXQUFNO1FBQ3JCRCxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO1FBQ2xCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDO0tBQ3RCO0lBRURKLGdEQUFTLENBQUMsV0FBSSxFQUViLEVBQUM7UUFBQ00sVUFBVTtLQUFDLENBQUM7SUFFbkIscUJBQ0k7OzBCQUNBLDhEQUFDYixzRUFBUTs7OztxQkFBRzswQkFDWiw4REFBQ0ksaUVBQVM7Z0JBQUVZLFNBQVMsRUFBQyxjQUFjO2dCQUFDQyxLQUFLOzBCQUcxQyw0RUFBQ2QsMkRBQUc7b0JBQUNlLEtBQUssRUFBRTt3QkFBRUMsU0FBUyxFQUFFLE9BQU87cUJBQUU7O3dCQUdsQlIsTUFBTSxpQkFBRyw4REFBQ1MsV0FBVzs0QkFBQ1AsVUFBVSxFQUFFQSxVQUFVOzs7OztpQ0FBSSxpQkFBRyw4REFBQ1osK0ZBQWE7NEJBQUVZLFVBQVUsRUFBRUEsVUFBVTs7Ozs7aUNBQUc7c0NBS2hHLDhEQUFDWCwyREFBRzs0QkFBQ2UsS0FBSzs0QkFBQ0ksRUFBRSxFQUFFVixNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUU7NEJBQUVXLEVBQUU7NEJBQUNDLEVBQUUsRUFBRVosTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFOzs4Q0FDcEQsOERBQUNhLElBQUU7OENBQUMsR0FBQzs7Ozs7eUNBQUs7OENBQzFCLDhEQUFDQyxNQUFJOzhDQUFFZixRQUFROzs7Ozt5Q0FBUTs7Ozs7O2lDQUVqQjs7Ozs7O3lCQUNBOzs7OztxQkFDTTs7b0JBQ1QsQ0FFTjtDQUNBO0dBdkNLRCxXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUF5Q2pCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9BZG1pbkxheW91dC5qc3g/NGVlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5OYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tbmF2L0FkbWluTmF2XCI7XHJcblxyXG5pbXBvcnQgVG9nZ2xlX2J1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2FkbWluLXNpZGViYXIvb3RoZXJDb21wb25lbnRzL1RvZ2dsZV9idXR0b24nXHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlYmFyX21lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tc2lkZWJhci9vdGhlckNvbXBvbmVudHMvU2lkZWJhcl9tZW51XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBBZG1pbkxheW91dCA9ICh7Y2hpbGRyZW59KSA9PntcclxuXHJcblxyXG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhpZGRlbighaGlkZGVuKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGhpZGRlbilcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICB9LFt0b2dnbGVNZW51XSlcclxuXHJcbnJldHVybihcclxuICAgIDw+XHJcbiAgICA8QWRtaW5OYXYgLz5cclxuICAgIDxDb250YWluZXIgIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeVwiIGZsdWlkID5cclxuXHJcbiAgICBcclxuICAgIDxSb3cgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX0gPlxyXG4gICBcclxuICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4gPyA8U2lkZWJhck1lbnUgdG9nZ2xlTWVudT17dG9nZ2xlTWVudX0gLz4gOiA8VG9nZ2xlX2J1dHRvbiAgdG9nZ2xlTWVudT17dG9nZ2xlTWVudX0vPiBcclxuICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxDb2wgZmx1aWQgbGc9e2hpZGRlbiA/IDEyIDogMTB9IHNtIG1kPXtoaWRkZW4gPyAxMiA6IDEwfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+IDwvaDE+XHJcbiAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgIFxyXG4gICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgICBcclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkxheW91dCJdLCJuYW1lcyI6WyJBZG1pbk5hdiIsIlRvZ2dsZV9idXR0b24iLCJDb2wiLCJSb3ciLCJDb250YWluZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2lkZWJhcl9tZW51IiwiQWRtaW5MYXlvdXQiLCJjaGlsZHJlbiIsImhpZGRlbiIsInNldEhpZGRlbiIsInRvZ2dsZU1lbnUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwiZmx1aWQiLCJzdHlsZSIsIm1pbkhlaWdodCIsIlNpZGViYXJNZW51IiwibGciLCJzbSIsIm1kIiwiaDEiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/AdminLayout.jsx\n");

/***/ })

});