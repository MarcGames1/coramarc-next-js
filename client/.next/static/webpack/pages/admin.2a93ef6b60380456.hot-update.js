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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin-nav/AdminNav */ \"./components/admin-nav/AdminNav.jsx\");\n/* harmony import */ var _components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin-sidebar/AdminSidebar */ \"./components/admin-sidebar/AdminSidebar.jsx\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/react */ \"./node_modules/@mdi/react/Icon.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AdminLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), hidden = ref[0], setHidden = ref[1];\n    var toggleMenu = function() {\n        setHidden(!hidden);\n        console.log(hidden);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {}, [\n        toggleMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"bg-secondary\",\n                fluid: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    style: {\n                        minHeight: \"100vh\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"bg-primary mx-0 px-0 \".concat(hidden ? \"d-none\" : \"d-block\"),\n                            lg: 2,\n                            sm: true,\n                            md: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                toggleMenu: toggleMenu\n                            }, void 0, false, {\n                                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            fluid: true,\n                            lg: hidden ? 12 : 10,\n                            sm: true,\n                            md: hidden ? 12 : 10,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"This is the admin Layout\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 5\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 5\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AdminLayout, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = AdminLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminLayout);\nvar _c;\n$RefreshReg$(_c, \"AdminLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF1RDtBQUNhO0FBQzlCO0FBQ0E7QUFDWTtBQUNBO0FBQ3BCOztBQUk5QixJQUFNUyxXQUFXLEdBQUcsZ0JBQWU7UUFBYkMsUUFBUSxTQUFSQSxRQUFROztJQUcxQixJQUE0QkosR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWIvQyxNQWFpQixHQUFlQSxHQUFlLEdBQTlCLEVBYmpCLFNBYTRCLEdBQUlBLEdBQWUsR0FBbkI7SUFHeEIsSUFBTU8sVUFBVSxHQUFHLFdBQU07UUFDckJELFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7UUFDbEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixNQUFNLENBQUM7S0FDdEI7SUFFREosZ0RBQVMsQ0FBQyxXQUFJLEVBRWIsRUFBQztRQUFDTSxVQUFVO0tBQUMsQ0FBQztJQUVuQixxQkFDSTs7MEJBQ0EsOERBQUNiLHNFQUFROzs7O3FCQUFHOzBCQUNaLDhEQUFDSSxpRUFBUztnQkFBRVksU0FBUyxFQUFDLGNBQWM7Z0JBQUNDLEtBQUs7MEJBRzFDLDRFQUFDZCwyREFBRztvQkFBQ2UsS0FBSyxFQUFFO3dCQUFFQyxTQUFTLEVBQUUsT0FBTztxQkFBRTs7c0NBQ2xDLDhEQUFDakIsMkRBQUc7NEJBQUVjLFNBQVMsRUFBRSx1QkFBc0IsQ0FBK0IsT0FBN0JMLE1BQU0sR0FBRyxRQUFRLEdBQUUsU0FBUyxDQUFFOzRCQUN2RVMsRUFBRSxFQUFFLENBQUM7NEJBQUVDLEVBQUU7NEJBQUNDLEVBQUUsRUFBRSxDQUFDO3NDQUFFLDRFQUFDckIsOEVBQVk7Z0NBQUNZLFVBQVUsRUFBRUEsVUFBVTs7Ozs7cUNBQUc7Ozs7O2lDQUNsRDtzQ0FHTSw4REFBQ1gsMkRBQUc7NEJBQUNlLEtBQUs7NEJBQUNHLEVBQUUsRUFBRVQsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFOzRCQUFFVSxFQUFFOzRCQUFDQyxFQUFFLEVBQUVYLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRTs7OENBQ3BFLDhEQUFDWSxJQUFFOzhDQUFDLDBCQUF3Qjs7Ozs7eUNBQUs7OENBQ2pDLDhEQUFDQyxNQUFJOzhDQUFFZCxRQUFROzs7Ozt5Q0FBUTs7Ozs7O2lDQUNqQjs7Ozs7O3lCQUNBOzs7OztxQkFDTTs7b0JBQ1QsQ0FFTjtDQUNBO0dBcENLRCxXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUFzQ2pCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9BZG1pbkxheW91dC5qc3g/NGVlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5OYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tbmF2L0FkbWluTmF2XCJcclxuaW1wb3J0IEFkbWluU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1zaWRlYmFyL0FkbWluU2lkZWJhclwiO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSWNvbiBmcm9tICdAbWRpL3JlYWN0JztcclxuXHJcblxyXG5cclxuY29uc3QgQWRtaW5MYXlvdXQgPSAoe2NoaWxkcmVufSkgPT57XHJcblxyXG5cclxuICAgIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgICAgICBzZXRIaWRkZW4oIWhpZGRlbilcclxuICAgICAgICBjb25zb2xlLmxvZyhoaWRkZW4pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG4gICAgfSxbdG9nZ2xlTWVudV0pXHJcblxyXG5yZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgPEFkbWluTmF2IC8+XHJcbiAgICA8Q29udGFpbmVyICBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnlcIiBmbHVpZCA+XHJcblxyXG4gICAgXHJcbiAgICA8Um93IHN0eWxlPXt7IG1pbkhlaWdodDogXCIxMDB2aFwiIH19ID5cclxuICAgIDxDb2wgIGNsYXNzTmFtZT17YGJnLXByaW1hcnkgbXgtMCBweC0wICR7aGlkZGVuID8gXCJkLW5vbmVcIiA6XCJkLWJsb2NrXCJ9YH0gXHJcbiAgICBsZz17Mn0gc20gbWQ9ezJ9PjxBZG1pblNpZGViYXIgdG9nZ2xlTWVudT17dG9nZ2xlTWVudX0vPlxyXG4gICAgPC9Db2w+IFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxDb2wgZmx1aWQgbGc9e2hpZGRlbiA/IDEyIDogMTB9IHNtIG1kPXtoaWRkZW4gPyAxMiA6IDEwfT5cclxuICAgIDxoMT5UaGlzIGlzIHRoZSBhZG1pbiBMYXlvdXQ8L2gxPlxyXG4gICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICAgXHJcbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5MYXlvdXQiXSwibmFtZXMiOlsiQWRtaW5OYXYiLCJBZG1pblNpZGViYXIiLCJDb2wiLCJSb3ciLCJDb250YWluZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSWNvbiIsIkFkbWluTGF5b3V0IiwiY2hpbGRyZW4iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJ0b2dnbGVNZW51IiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsImZsdWlkIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJsZyIsInNtIiwibWQiLCJoMSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/AdminLayout.jsx\n");

/***/ })

});