"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/auth.jsx":
/*!**************************!*\
  !*** ./context/auth.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar AuthProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        user: null,\n        token: \"\"\n    }), auth = ref[0], setAuth = ref[1];\n    //config axios\n    if (true) {\n        (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = process.env.API;\n    } else {}\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (localStorage.getItem(\"auth\")) {\n            setAuth(JSON.parse(localStorage.getItem(\"auth\")));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: [\n            auth,\n            setAuth\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\GitHub\\\\coramarc-next-js\\\\client\\\\context\\\\auth.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(AuthProvider, \"rc+IyhVvlqm8SbhLqZQI5+mXtpo=\");\n_c = AuthProvider;\n\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNpQzs7QUFFM0QsSUFBTUksV0FBVyxpQkFBR0Qsb0RBQWEsRUFBRTtBQUVuQyxJQUFNRSxZQUFZLEdBQUMsZ0JBQWM7UUFBWkMsUUFBUSxTQUFSQSxRQUFROztJQUN6QixJQUFzQkosR0FHcEIsR0FIb0JBLCtDQUFRLENBQUM7UUFDM0JLLElBQUksRUFBQyxJQUFJO1FBQ1RDLEtBQUssRUFBQyxFQUFFO0tBQ1gsQ0FBQyxFQVROLElBTWUsR0FBV04sR0FHcEIsR0FIUyxFQU5mLE9BTXdCLEdBQUVBLEdBR3BCLEdBSGtCO0lBS3BCLGNBQWM7SUFDZCxJQUFHUyxJQUFlLEVBQUU7UUFDaEJYLCtEQUFzQixHQUFHVyxPQUFPLENBQUNJLEdBQUcsQ0FBQ0MsR0FBRztLQUMzQyxNQUFLLEVBRUw7SUFHRGYsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1YsSUFBR2lCLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQzVCVCxPQUFPLENBQUNVLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQ7S0FDSixFQUFDLEVBQUUsQ0FBQztJQUdMLHFCQUNJLDhEQUFDZixXQUFXLENBQUNrQixRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDZCxJQUFJO1lBQUVDLE9BQU87U0FBQztrQkFDdkNKLFFBQVE7Ozs7O2FBQ1UsQ0FDMUI7Q0FHSjtHQTVCS0QsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBOEJlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvYXV0aC5qc3g/YzU5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgQXV0aFByb3ZpZGVyPSh7Y2hpbGRyZW59KT0+e1xyXG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdPXVzZVN0YXRlKHtcclxuICAgICAgICB1c2VyOm51bGwsXHJcbiAgICAgICAgdG9rZW46JycsXHJcbiAgICB9KVxyXG5cclxuICAgIC8vY29uZmlnIGF4aW9zXHJcbiAgICBpZihwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuQVBJXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSl7XHJcbiAgICAgICAgICAgIHNldEF1dGgoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W2F1dGgsIHNldEF1dGhdfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0e0F1dGhQcm92aWRlciwgQXV0aENvbnRleHR9XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwidG9rZW4iLCJhdXRoIiwic2V0QXV0aCIsInByb2Nlc3MiLCJicm93c2VyIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiZW52IiwiQVBJIiwiTkVYVF9QVUJMSUNfQVBJIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/auth.jsx\n");

/***/ })

});