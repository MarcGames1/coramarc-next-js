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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin-nav/AdminNav */ \"./components/admin-nav/AdminNav.jsx\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/admin-sidebar/AdminSidebar */ \"./components/admin-sidebar/AdminSidebar.jsx\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/react */ \"./node_modules/@mdi/react/Icon.js\");\n/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mdi/js */ \"./node_modules/@mdi/js/mdi.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SidebarMenu = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: \"bg-primary mx-0 px-0\",\n        lg: 2,\n        sm: true,\n        md: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_sidebar_AdminSidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            toggleMenu: props.toggleMenu\n        }, void 0, false, {\n            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n            lineNumber: 12,\n            columnNumber: 22\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n        lineNumber: 11,\n        columnNumber: 33\n    }, _this);\n};\n_c = SidebarMenu;\nvar AdminLayout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), hidden = ref[0], setHidden = ref[1];\n    var toggleMenu = function() {\n        setHidden(!hidden);\n        console.log(hidden);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_nav_AdminNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                className: \"bg-secondary\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    style: {\n                        minHeight: \"100vh\"\n                    },\n                    children: [\n                        hidden ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            onClick: toggleMenu,\n                            style: {\n                                position: \"fixed\",\n                                top: \"50%\",\n                                width: \"5em\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mdi_react__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                path: _mdi_js__WEBPACK_IMPORTED_MODULE_9__.mdiArrowRightDropCircle,\n                                size: 1\n                            }, void 0, false, {\n                                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 116\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 30\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarMenu, {}, void 0, false, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 176\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            fluid: true,\n                            lg: hidden ? 12 : 10,\n                            sm: true,\n                            md: hidden ? 12 : 10,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \" \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 5\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\repos\\\\coramarc-next-js\\\\client\\\\layout\\\\AdminLayout.jsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(AdminLayout, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c1 = AdminLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminLayout);\nvar _c, _c1;\n$RefreshReg$(_c, \"SidebarMenu\");\n$RefreshReg$(_c1, \"AdminLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdEO0FBQ2xCO0FBQ0E7QUFDWTtBQUNBO0FBQ2lCO0FBQ3ZCO0FBQ2Q7QUFDb0I7O0FBRWxELElBQU1XLFdBQVcsR0FBRyxTQUFDQyxLQUFLO3lCQUFNLDhEQUFDWCwyREFBRztRQUFDWSxTQUFTLEVBQUMsc0JBQXNCO1FBQ2pFQyxFQUFFLEVBQUUsQ0FBQztRQUFFQyxFQUFFO1FBQUNDLEVBQUUsRUFBRSxDQUFDO2tCQUFFLDRFQUFDVCw4RUFBWTtZQUFDVSxVQUFVLEVBQUVMLEtBQUssQ0FBQ0ssVUFBVTs7Ozs7aUJBQUk7Ozs7O2FBQzdEO0NBQUM7QUFGRE4sS0FBQUEsV0FBVztBQVlqQixJQUFNTyxXQUFXLEdBQUcsZ0JBQWU7UUFBYkMsUUFBUSxTQUFSQSxRQUFROztJQUcxQixJQUE0QmQsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQXpCL0MsTUF5QmlCLEdBQWVBLEdBQWUsR0FBOUIsRUF6QmpCLFNBeUI0QixHQUFJQSxHQUFlLEdBQW5CO0lBR3hCLElBQU1ZLFVBQVUsR0FBRyxXQUFNO1FBQ3JCSSxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO1FBQ2xCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDO0tBQ3RCO0lBSUwscUJBQ0k7OzBCQUNBLDhEQUFDcEIsc0VBQVE7Ozs7cUJBQUc7MEJBQ1osOERBQUNHLGlFQUFTO2dCQUFFVSxTQUFTLEVBQUMsY0FBYzswQkFHcEMsNEVBQUNYLDJEQUFHO29CQUFDc0IsS0FBSyxFQUFFO3dCQUFFQyxTQUFTLEVBQUUsT0FBTztxQkFBRTs7d0JBR2xCTCxNQUFNLGlCQUFHLDhEQUFDWiw4REFBTTs0QkFBQ2tCLE9BQU8sRUFBRVQsVUFBVTs0QkFBRU8sS0FBSyxFQUFFO2dDQUFFRyxRQUFRLEVBQUUsT0FBTztnQ0FBRUMsR0FBRyxFQUFFLEtBQUs7Z0NBQUVDLEtBQUssRUFBRSxLQUFLOzZCQUFFO3NDQUFHLDRFQUFDcEIsbURBQUk7Z0NBQUNxQixJQUFJLEVBQUVwQiw0REFBdUI7Z0NBQUVxQixJQUFJLEVBQUUsQ0FBQzs7Ozs7cUNBQUk7Ozs7O2lDQUFTLGlCQUFHLDhEQUFDcEIsV0FBVzs7OztpQ0FBRztzQ0FLOUssOERBQUNWLDJEQUFHOzRCQUFDK0IsS0FBSzs0QkFBQ2xCLEVBQUUsRUFBRU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFOzRCQUFFTCxFQUFFOzRCQUFDQyxFQUFFLEVBQUVJLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRTs7OENBQ3BELDhEQUFDYSxJQUFFOzhDQUFDLEdBQUM7Ozs7O3lDQUFLOzhDQUMxQiw4REFBQ0MsTUFBSTs4Q0FBRWYsUUFBUTs7Ozs7eUNBQVE7Ozs7OztpQ0FFakI7Ozs7Ozt5QkFDQTs7Ozs7cUJBQ007O29CQUNULENBRU47Q0FDQTtHQXJDS0QsV0FBVztBQUFYQSxNQUFBQSxXQUFXO0FBdUNqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvQWRtaW5MYXlvdXQuanN4PzRlZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLW5hdi9BZG1pbk5hdlwiO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWRtaW5TaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvYWRtaW4tc2lkZWJhci9BZG1pblNpZGViYXInXHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBJY29uIGZyb20gJ0BtZGkvcmVhY3QnO1xyXG5pbXBvcnQgeyBtZGlBcnJvd1JpZ2h0RHJvcENpcmNsZSB9IGZyb20gJ0BtZGkvanMnO1xyXG5cclxuY29uc3QgU2lkZWJhck1lbnUgPSAocHJvcHMpID0+ICg8Q29sIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgbXgtMCBweC0wXCJcclxuICAgIGxnPXsyfSBzbSBtZD17Mn0+PEFkbWluU2lkZWJhciB0b2dnbGVNZW51PXtwcm9wcy50b2dnbGVNZW51fSAvPlxyXG48L0NvbD4pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFkbWluTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+e1xyXG5cclxuXHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SGlkZGVuKCFoaWRkZW4pXHJcbiAgICAgICAgY29uc29sZS5sb2coaGlkZGVuKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5yZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgPEFkbWluTmF2IC8+XHJcbiAgICA8Q29udGFpbmVyICBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnlcIiAgPlxyXG5cclxuICAgIFxyXG4gICAgPFJvdyBzdHlsZT17eyBtaW5IZWlnaHQ6IFwiMTAwdmhcIiB9fSA+XHJcbiAgIFxyXG4gICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiA/IDxCdXR0b24gb25DbGljaz17dG9nZ2xlTWVudX0gc3R5bGU9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgdG9wOiBcIjUwJVwiLCB3aWR0aDogXCI1ZW1cIiB9fSA+PEljb24gcGF0aD17bWRpQXJyb3dSaWdodERyb3BDaXJjbGV9IHNpemU9ezF9IC8+PC9CdXR0b24+IDogPFNpZGViYXJNZW51IC8+ICBcclxuICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxDb2wgZmx1aWQgbGc9e2hpZGRlbiA/IDEyIDogMTB9IHNtIG1kPXtoaWRkZW4gPyAxMiA6IDEwfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+IDwvaDE+XHJcbiAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgIFxyXG4gICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgICBcclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkxheW91dCJdLCJuYW1lcyI6WyJBZG1pbk5hdiIsIkNvbCIsIlJvdyIsIkNvbnRhaW5lciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZG1pblNpZGViYXIiLCJCdXR0b24iLCJJY29uIiwibWRpQXJyb3dSaWdodERyb3BDaXJjbGUiLCJTaWRlYmFyTWVudSIsInByb3BzIiwiY2xhc3NOYW1lIiwibGciLCJzbSIsIm1kIiwidG9nZ2xlTWVudSIsIkFkbWluTGF5b3V0IiwiY2hpbGRyZW4iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJvbkNsaWNrIiwicG9zaXRpb24iLCJ0b3AiLCJ3aWR0aCIsInBhdGgiLCJzaXplIiwiZmx1aWQiLCJoMSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/AdminLayout.jsx\n");

/***/ })

});