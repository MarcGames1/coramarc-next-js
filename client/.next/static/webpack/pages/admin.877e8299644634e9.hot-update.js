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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin-nav/AdminNav */ \"./components/admin-nav/AdminNav.jsx\");\n/* harmony import */ var _components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin-sidebar/AdminSidebar */ \"./components/admin-sidebar/AdminSidebar.jsx\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AdminLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), hidden = ref[0], setHidden = ref[1];\n    var toggleMenu = function() {\n        setHidden(!hidden);\n        console.log(hidden);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {}, [\n        toggleMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: \"bg-secondary\",\n                fluid: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    style: {\n                        minHeight: \"100vh\"\n                    },\n                    children: [\n                        hidden ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sidebar\", {}, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 30\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Toggle_button, {}, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 44\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            fluid: true,\n                            lg: hidden ? 12 : 10,\n                            sm: true,\n                            md: hidden ? 12 : 10,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \" \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 5\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AdminLayout, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = AdminLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminLayout);\nvar _c;\n$RefreshReg$(_c, \"AdminLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUQ7QUFDYTtBQUM5QjtBQUNBO0FBQ1k7QUFDQTs7QUFjbEQsSUFBTVEsV0FBVyxHQUFHLGdCQUFlO1FBQWJDLFFBQVEsU0FBUkEsUUFBUTs7SUFHMUIsSUFBNEJILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUF0Qi9DLE1Bc0JpQixHQUFlQSxHQUFlLEdBQTlCLEVBdEJqQixTQXNCNEIsR0FBSUEsR0FBZSxHQUFuQjtJQUd4QixJQUFNTSxVQUFVLEdBQUcsV0FBTTtRQUNyQkQsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztRQUNsQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQztLQUN0QjtJQUVESCxnREFBUyxDQUFDLFdBQUksRUFFYixFQUFDO1FBQUNLLFVBQVU7S0FBQyxDQUFDO0lBRW5CLHFCQUNJOzswQkFDQSw4REFBQ1osc0VBQVE7Ozs7cUJBQUc7MEJBQ1osOERBQUNJLGlFQUFTO2dCQUFFVyxTQUFTLEVBQUMsY0FBYztnQkFBQ0MsS0FBSzswQkFHMUMsNEVBQUNiLDJEQUFHO29CQUFDYyxLQUFLLEVBQUU7d0JBQUVDLFNBQVMsRUFBRSxPQUFPO3FCQUFFOzt3QkFHbEJSLE1BQU0saUJBQUcsOERBQUNTLFNBQU87Ozs7aUNBQUcsaUJBQUcsOERBQUNDLGFBQWE7Ozs7aUNBQUc7c0NBSzVDLDhEQUFDbEIsMkRBQUc7NEJBQUNjLEtBQUs7NEJBQUNLLEVBQUUsRUFBRVgsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFOzRCQUFFWSxFQUFFOzRCQUFDQyxFQUFFLEVBQUViLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRTs7OENBQ3BELDhEQUFDYyxJQUFFOzhDQUFDLEdBQUM7Ozs7O3lDQUFLOzhDQUMxQiw4REFBQ0MsTUFBSTs4Q0FBRWhCLFFBQVE7Ozs7O3lDQUFROzs7Ozs7aUNBRWpCOzs7Ozs7eUJBQ0E7Ozs7O3FCQUNNOztvQkFDVCxDQUVOO0NBQ0E7R0F2Q0tELFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQXlDakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0FkbWluTGF5b3V0LmpzeD80ZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbk5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1uYXYvQWRtaW5OYXZcIlxyXG5pbXBvcnQgQWRtaW5TaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLXNpZGViYXIvQWRtaW5TaWRlYmFyXCI7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBBZG1pbkxheW91dCA9ICh7Y2hpbGRyZW59KSA9PntcclxuXHJcblxyXG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhpZGRlbighaGlkZGVuKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGhpZGRlbilcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICB9LFt0b2dnbGVNZW51XSlcclxuXHJcbnJldHVybihcclxuICAgIDw+XHJcbiAgICA8QWRtaW5OYXYgLz5cclxuICAgIDxDb250YWluZXIgIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeVwiIGZsdWlkID5cclxuXHJcbiAgICBcclxuICAgIDxSb3cgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX0gPlxyXG4gICBcclxuICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4gPyA8c2lkZWJhciAvPiA6IDxUb2dnbGVfYnV0dG9uIC8+IFxyXG4gICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPENvbCBmbHVpZCBsZz17aGlkZGVuID8gMTIgOiAxMH0gc20gbWQ9e2hpZGRlbiA/IDEyIDogMTB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT4gPC9oMT5cclxuICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgXHJcbiAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICAgIFxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluTGF5b3V0Il0sIm5hbWVzIjpbIkFkbWluTmF2IiwiQWRtaW5TaWRlYmFyIiwiQ29sIiwiUm93IiwiQ29udGFpbmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFkbWluTGF5b3V0IiwiY2hpbGRyZW4iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJ0b2dnbGVNZW51IiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsImZsdWlkIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJzaWRlYmFyIiwiVG9nZ2xlX2J1dHRvbiIsImxnIiwic20iLCJtZCIsImgxIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/AdminLayout.jsx\n");

/***/ })

});