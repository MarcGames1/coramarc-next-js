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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin-nav/AdminNav */ \"./components/admin-nav/AdminNav.jsx\");\n/* harmony import */ var _components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin-sidebar/AdminSidebar */ \"./components/admin-sidebar/AdminSidebar.jsx\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/react */ \"./node_modules/@mdi/react/Icon.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AdminLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), hidden = ref[0], setHidden = ref[1];\n    var toggleMenu = function() {\n        setHidden(!hidden);\n        console.log(hidden);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {}, [\n        toggleMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"bg-secondary\",\n                fluid: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    style: {\n                        minHeight: \"100vh\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"bg-primary mx-0 px-0 \".concat(hidden ? \"d-none\" : \"d-block\"),\n                            lg: 2,\n                            sm: true,\n                            md: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                toggleMenu: toggleMenu\n                            }, void 0, false, {\n                                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            fluid: true,\n                            lg: hidden ? 12 : 10,\n                            sm: true,\n                            md: hidden ? 12 : 10,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"This is the admin Layout\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 5\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 5\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AdminLayout, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = AdminLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminLayout);\nvar _c;\n$RefreshReg$(_c, \"AdminLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUF1RDtBQUNhO0FBQzlCO0FBQ0E7QUFDWTtBQUNBO0FBQ3BCOztBQUk5QixJQUFNUyxXQUFXLEdBQUcsZ0JBQWU7UUFBYkMsUUFBUSxTQUFSQSxRQUFROztJQUcxQixJQUE0QkosR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWIvQyxNQWFpQixHQUFlQSxHQUFlLEdBQTlCLEVBYmpCLFNBYTRCLEdBQUlBLEdBQWUsR0FBbkI7SUFHeEIsSUFBTU8sVUFBVSxHQUFHLFdBQU07UUFDckJELFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7UUFDbEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixNQUFNLENBQUM7S0FDdEI7SUFFREosZ0RBQVMsQ0FBQyxXQUFJLEVBRWIsRUFBQztRQUFDTSxVQUFVO0tBQUMsQ0FBQztJQUVuQixxQkFDSTs7MEJBQ0EsOERBQUNiLHNFQUFROzs7O3FCQUFHOzBCQUNaLDhEQUFDSSxpRUFBUztnQkFBRVksU0FBUyxFQUFDLGNBQWM7Z0JBQUNDLEtBQUs7MEJBRzFDLDRFQUFDZCwyREFBRztvQkFBQ2UsS0FBSyxFQUFFO3dCQUFFQyxTQUFTLEVBQUUsT0FBTztxQkFBRTs7c0NBQ2xDLDhEQUFDakIsMkRBQUc7NEJBQUVjLFNBQVMsRUFBRSx1QkFBc0IsQ0FBK0IsT0FBN0JMLE1BQU0sR0FBRyxRQUFRLEdBQUUsU0FBUyxDQUFFOzRCQUN2RVMsRUFBRSxFQUFFLENBQUM7NEJBQUVDLEVBQUU7NEJBQUNDLEVBQUUsRUFBRSxDQUFDO3NDQUFFLDRFQUFDckIsOEVBQVk7Z0NBQUNZLFVBQVUsRUFBRUEsVUFBVTs7Ozs7cUNBQUc7Ozs7O2lDQUNsRDtzQ0FDTiw4REFBQ1gsMkRBQUc7Ozs7aUNBQU87c0NBRUMsOERBQUNBLDJEQUFHOzRCQUFDZSxLQUFLOzRCQUFDRyxFQUFFLEVBQUVULE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRTs0QkFBRVUsRUFBRTs0QkFBQ0MsRUFBRSxFQUFFWCxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUU7OzhDQUNwRSw4REFBQ1ksSUFBRTs4Q0FBQywwQkFBd0I7Ozs7O3lDQUFLOzhDQUNqQyw4REFBQ0MsTUFBSTs4Q0FBRWQsUUFBUTs7Ozs7eUNBQVE7Ozs7OztpQ0FDakI7Ozs7Ozt5QkFDQTs7Ozs7cUJBQ007O29CQUNULENBRU47Q0FDQTtHQXBDS0QsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBc0NqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4PzRlZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLW5hdi9BZG1pbk5hdlwiXHJcbmltcG9ydCBBZG1pblNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tc2lkZWJhci9BZG1pblNpZGViYXJcIjtcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEljb24gZnJvbSAnQG1kaS9yZWFjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEFkbWluTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+e1xyXG5cclxuXHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SGlkZGVuKCFoaWRkZW4pXHJcbiAgICAgICAgY29uc29sZS5sb2coaGlkZGVuKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgIH0sW3RvZ2dsZU1lbnVdKVxyXG5cclxucmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxBZG1pbk5hdiAvPlxyXG4gICAgPENvbnRhaW5lciAgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5XCIgZmx1aWQgPlxyXG5cclxuICAgIFxyXG4gICAgPFJvdyBzdHlsZT17eyBtaW5IZWlnaHQ6IFwiMTAwdmhcIiB9fSA+XHJcbiAgICA8Q29sICBjbGFzc05hbWU9e2BiZy1wcmltYXJ5IG14LTAgcHgtMCAke2hpZGRlbiA/IFwiZC1ub25lXCIgOlwiZC1ibG9ja1wifWB9IFxyXG4gICAgbGc9ezJ9IHNtIG1kPXsyfT48QWRtaW5TaWRlYmFyIHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9Lz5cclxuICAgIDwvQ29sPiBcclxuICAgIDxDb2w+PC9Db2w+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxDb2wgZmx1aWQgbGc9e2hpZGRlbiA/IDEyIDogMTB9IHNtIG1kPXtoaWRkZW4gPyAxMiA6IDEwfT5cclxuICAgIDxoMT5UaGlzIGlzIHRoZSBhZG1pbiBMYXlvdXQ8L2gxPlxyXG4gICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICAgXHJcbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5MYXlvdXQiXSwibmFtZXMiOlsiQWRtaW5OYXYiLCJBZG1pblNpZGViYXIiLCJDb2wiLCJSb3ciLCJDb250YWluZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSWNvbiIsIkFkbWluTGF5b3V0IiwiY2hpbGRyZW4iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJ0b2dnbGVNZW51IiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsImZsdWlkIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJsZyIsInNtIiwibWQiLCJoMSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/AdminLayout.jsx\n");

/***/ })

});