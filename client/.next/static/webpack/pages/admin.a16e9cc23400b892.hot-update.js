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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin-nav/AdminNav */ \"./components/admin-nav/AdminNav.jsx\");\n/* harmony import */ var _components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin-sidebar/AdminSidebar */ \"./components/admin-sidebar/AdminSidebar.jsx\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mdi/js */ \"./node_modules/@mdi/js/mdi.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/react */ \"./node_modules/@mdi/react/Icon.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AdminLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), hidden = ref[0], setHidden = ref[1];\n    var toggleMenu = function() {\n        setHidden(!hidden);\n        console.log(hidden);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {}, [\n        toggleMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"bg-secondary\",\n                fluid: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    style: {\n                        minHeight: \"100vh\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"bg-primary mx-0 px-0 \".concat(hidden ? \"d-none\" : \"d-block\"),\n                            lg: 2,\n                            sm: true,\n                            md: 2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                toggleMenu: toggleMenu\n                            }, void 0, false, {\n                                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 5\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            style: {\n                                position: \"fixed\",\n                                left: \"\"\n                            },\n                            onClick: toggleMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mdi_react__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                path: _mdi_js__WEBPACK_IMPORTED_MODULE_9__.mdiAccount,\n                                size: 1\n                            }, void 0, false, {\n                                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 88\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            fluid: true,\n                            lg: hidden ? 12 : 10,\n                            sm: true,\n                            md: hidden ? 12 : 10,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \" \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 5\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AdminLayout, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = AdminLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminLayout);\nvar _c;\n$RefreshReg$(_c, \"AdminLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXVEO0FBQ2E7QUFDOUI7QUFDQTtBQUNZO0FBQ0E7QUFDQztBQUNWO0FBQ0c7O0FBRTVDLElBQU1hLFdBQVcsR0FBRyxnQkFBZTtRQUFiQyxRQUFRLFNBQVJBLFFBQVE7O0lBRzFCLElBQTRCUixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBYi9DLE1BYWlCLEdBQWVBLEdBQWUsR0FBOUIsRUFiakIsU0FhNEIsR0FBSUEsR0FBZSxHQUFuQjtJQUd4QixJQUFNVyxVQUFVLEdBQUcsV0FBTTtRQUNyQkQsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztRQUNsQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQztLQUN0QjtJQUVEUixnREFBUyxDQUFDLFdBQUksRUFFYixFQUFDO1FBQUNVLFVBQVU7S0FBQyxDQUFDO0lBRW5CLHFCQUNJOzswQkFDQSw4REFBQ2pCLHNFQUFROzs7O3FCQUFHOzBCQUNaLDhEQUFDSSxpRUFBUztnQkFBRWdCLFNBQVMsRUFBQyxjQUFjO2dCQUFDQyxLQUFLOzBCQUcxQyw0RUFBQ2xCLDJEQUFHO29CQUFDbUIsS0FBSyxFQUFFO3dCQUFFQyxTQUFTLEVBQUUsT0FBTztxQkFBRTs7c0NBQ2xDLDhEQUFDckIsMkRBQUc7NEJBQUVrQixTQUFTLEVBQUUsdUJBQXNCLENBQStCLE9BQTdCTCxNQUFNLEdBQUcsUUFBUSxHQUFFLFNBQVMsQ0FBRTs0QkFDdkVTLEVBQUUsRUFBRSxDQUFDOzRCQUFFQyxFQUFFOzRCQUFDQyxFQUFFLEVBQUUsQ0FBQztzQ0FBRSw0RUFBQ3pCLDhFQUFZO2dDQUFDZ0IsVUFBVSxFQUFFQSxVQUFVOzs7OztxQ0FBRzs7Ozs7aUNBQ2xEO3NDQUVVLDhEQUFDTCw4REFBTTs0QkFBQ1UsS0FBSyxFQUFFO2dDQUFDSyxRQUFRLEVBQUUsT0FBTztnQ0FBRUMsSUFBSSxFQUFFLEVBQUU7NkJBQUM7NEJBQUVDLE9BQU8sRUFBRVosVUFBVTtzQ0FBRSw0RUFBQ1AsbURBQUk7Z0NBQUNvQixJQUFJLEVBQUV0QiwrQ0FBVTtnQ0FBRXVCLElBQUksRUFBRSxDQUFDOzs7OztxQ0FBSTs7Ozs7aUNBQVM7c0NBR25ILDhEQUFDN0IsMkRBQUc7NEJBQUNtQixLQUFLOzRCQUFDRyxFQUFFLEVBQUVULE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRTs0QkFBRVUsRUFBRTs0QkFBQ0MsRUFBRSxFQUFFWCxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUU7OzhDQUNwRCw4REFBQ2lCLElBQUU7OENBQUMsR0FBQzs7Ozs7eUNBQUs7OENBQzFCLDhEQUFDQyxNQUFJOzhDQUFFbkIsUUFBUTs7Ozs7eUNBQVE7Ozs7OztpQ0FFakI7Ozs7Ozt5QkFDQTs7Ozs7cUJBQ007O29CQUNULENBRU47Q0FDQTtHQXZDS0QsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBeUNqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4PzRlZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLW5hdi9BZG1pbk5hdlwiXHJcbmltcG9ydCBBZG1pblNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tc2lkZWJhci9BZG1pblNpZGViYXJcIjtcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHttZGlBY2NvdW50LCBtZGlCbG9ja0hlbHBlcn0gZnJvbSAnQG1kaS9qcyc7XHJcbmltcG9ydCBJY29uLCB7IFN0YWNrIH0gZnJvbSAnQG1kaS9yZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5jb25zdCBBZG1pbkxheW91dCA9ICh7Y2hpbGRyZW59KSA9PntcclxuXHJcblxyXG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhpZGRlbighaGlkZGVuKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGhpZGRlbilcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbiAgICB9LFt0b2dnbGVNZW51XSlcclxuXHJcbnJldHVybihcclxuICAgIDw+XHJcbiAgICA8QWRtaW5OYXYgLz5cclxuICAgIDxDb250YWluZXIgIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeVwiIGZsdWlkID5cclxuXHJcbiAgICBcclxuICAgIDxSb3cgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX0gPlxyXG4gICAgPENvbCAgY2xhc3NOYW1lPXtgYmctcHJpbWFyeSBteC0wIHB4LTAgJHtoaWRkZW4gPyBcImQtbm9uZVwiIDpcImQtYmxvY2tcIn1gfSBcclxuICAgIGxnPXsyfSBzbSBtZD17Mn0+PEFkbWluU2lkZWJhciB0b2dnbGVNZW51PXt0b2dnbGVNZW51fS8+XHJcbiAgICA8L0NvbD4gXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgbGVmdDogXCJcIn19IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PjxJY29uIHBhdGg9e21kaUFjY291bnR9IHNpemU9ezF9IC8+PC9CdXR0b24+ICAgICAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8Q29sIGZsdWlkIGxnPXtoaWRkZW4gPyAxMiA6IDEwfSBzbSBtZD17aGlkZGVuID8gMTIgOiAxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPiA8L2gxPlxyXG4gICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgICBcclxuICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICAgXHJcbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5MYXlvdXQiXSwibmFtZXMiOlsiQWRtaW5OYXYiLCJBZG1pblNpZGViYXIiLCJDb2wiLCJSb3ciLCJDb250YWluZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibWRpQWNjb3VudCIsIm1kaUJsb2NrSGVscGVyIiwiSWNvbiIsIlN0YWNrIiwiQnV0dG9uIiwiQWRtaW5MYXlvdXQiLCJjaGlsZHJlbiIsImhpZGRlbiIsInNldEhpZGRlbiIsInRvZ2dsZU1lbnUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwiZmx1aWQiLCJzdHlsZSIsIm1pbkhlaWdodCIsImxnIiwic20iLCJtZCIsInBvc2l0aW9uIiwibGVmdCIsIm9uQ2xpY2siLCJwYXRoIiwic2l6ZSIsImgxIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/AdminLayout.jsx\n");

/***/ })

});