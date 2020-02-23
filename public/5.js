(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/src/redux/actions/page.js":
/*!************************************************!*\
  !*** ./resources/js/src/redux/actions/page.js ***!
  \************************************************/
/*! exports provided: setPageName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPageName", function() { return setPageName; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/js/src/redux/actions/types.js");

var setPageName = function setPageName(name) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_PAGE_NAME"],
      payload: name
    });
  };
};

/***/ }),

/***/ "./resources/js/src/views/Dashboard/Main.js":
/*!**************************************************!*\
  !*** ./resources/js/src/views/Dashboard/Main.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../redux/actions/page */ "./resources/js/src/redux/actions/page.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\views\\Dashboard\\Main.js";




var Main = function Main(_ref) {
  var setPageName = _ref.setPageName;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setPageName("dashboard");
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Dashboard");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  setPageName: _redux_actions_page__WEBPACK_IMPORTED_MODULE_2__["setPageName"]
})(Main));

/***/ })

}]);