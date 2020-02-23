(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/src/components/CreateAntFields/CreateAntFields.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/components/CreateAntFields/CreateAntFields.js ***!
  \************************************************************************/
/*! exports provided: AntSelect, AntDatePicker, AntInput, AntPassword, AntTimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntSelect", function() { return AntSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntDatePicker", function() { return AntDatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntInput", function() { return AntInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntPassword", function() { return AntPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntTimePicker", function() { return AntTimePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\components\\CreateAntFields\\CreateAntFields.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;
var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

var CreateAntField = function CreateAntField(AntComponent) {
  return function (_ref) {
    var field = _ref.field,
        form = _ref.form,
        hasFeedback = _ref.hasFeedback,
        label = _ref.label,
        selectOptions = _ref.selectOptions,
        submitCount = _ref.submitCount,
        type = _ref.type,
        isFocus = _ref.isFocus,
        handleChange = _ref.handleChange,
        props = _objectWithoutProperties(_ref, ["field", "form", "hasFeedback", "label", "selectOptions", "submitCount", "type", "isFocus", "handleChange"]);

    var _useFormikContext = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormikContext"])(),
        values = _useFormikContext.values,
        setFieldValue = _useFormikContext.setFieldValue;

    var touched = form.touched[field.name];
    var submitted = submitCount > 0;
    var hasError = form.errors[field.name];
    var submittedError = hasError && submitted;
    var touchedError = hasError && touched;

    var onInputChange = function onInputChange(_ref2) {
      var value = _ref2.target.value;
      return form.setFieldValue(field.name, value);
    };

    var onChange = function onChange(value) {
      form.setFieldValue(field.name, value);
      handleChange(setFieldValue, value, touched);
    };

    var onBlur = function onBlur() {
      return form.setFieldTouched(field.name, true);
    };

    var fieldRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null); // adding the password type.

    props = _objectSpread({}, props, {}, type === 'password' ? {
      type: type
    } : {});
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
      if (isFocus) {
        fieldRef.current.focus();
      }

      console.log(values);
    }, [isFocus]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
      label: label,
      hasFeedback: hasFeedback && submitted || hasFeedback && touched ? true : false,
      help: submittedError || touchedError ? hasError : false,
      validateStatus: submittedError || touchedError ? "error" : "success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AntComponent, _extends({}, field, props, {
      onBlur: onBlur,
      onChange: type ? onInputChange : onChange,
      ref: fieldRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }), selectOptions && selectOptions.map(function (name) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
        key: name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, name);
    }))));
  };
};

var AntSelect = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["Select"]);
var AntDatePicker = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"]);
var AntInput = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["Input"]);
var AntPassword = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["Input"]);
var AntTimePicker = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["TimePicker"]);

/***/ }),

/***/ "./resources/js/src/components/FieldFormats/FieldFormats.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/components/FieldFormats/FieldFormats.js ***!
  \******************************************************************/
/*! exports provided: dateFormat, timeFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
var dateFormat = "MM-DD-YYYY";
var timeFormat = "h:mm A";

/***/ }),

/***/ "./resources/js/src/components/ValidateFields/ValidateFields.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/ValidateFields/ValidateFields.js ***!
  \**********************************************************************/
/*! exports provided: validateDate, validateEmail, isRequired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDate", function() { return validateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequired", function() { return isRequired; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FieldFormats_FieldFormats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FieldFormats/FieldFormats */ "./resources/js/src/components/FieldFormats/FieldFormats.js");


var validateDate = function validateDate(value) {
  var errors;

  if (!value) {
    errors = "Required!";
  } else if (moment__WEBPACK_IMPORTED_MODULE_0___default()(value).format(_FieldFormats_FieldFormats__WEBPACK_IMPORTED_MODULE_1__["dateFormat"]) < moment__WEBPACK_IMPORTED_MODULE_0___default()(Date.now()).format(_FieldFormats_FieldFormats__WEBPACK_IMPORTED_MODULE_1__["dateFormat"])) {
    errors = "Invalid date!";
  }

  return errors;
};
var validateEmail = function validateEmail(value) {
  var errors;

  if (!value) {
    errors = "Required!";
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    errors = "Invalid email address!";
  }

  return errors;
};
var isRequired = function isRequired(value) {
  return !value ? "Required!" : "";
};

/***/ }),

/***/ "./resources/js/src/components/common/Alert/Alert.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/common/Alert/Alert.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\components\\common\\Alert\\Alert.js";





var GlobalAlert = function GlobalAlert(_ref) {
  var alerts = _ref.alerts;
  return alerts !== null && alerts.length > 0 && alerts.map(function (alert) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
      key: alert.id,
      message: alert.msg,
      type: alert.type,
      showIcon: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    });
  });
};

GlobalAlert.propTypes = {
  alerts: prop_types__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    alerts: state.alert
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(GlobalAlert));

/***/ }),

/***/ "./resources/js/src/components/common/Alert/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/common/Alert/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./resources/js/src/components/common/Alert/Alert.js");

/* harmony default export */ __webpack_exports__["default"] = (_Alert__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/redux/actions/index.js":
/*!*************************************************!*\
  !*** ./resources/js/src/redux/actions/index.js ***!
  \*************************************************/
/*! exports provided: setAlert, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./resources/js/src/redux/actions/alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAlert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["setAlert"]; });

/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./resources/js/src/redux/actions/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _auth__WEBPACK_IMPORTED_MODULE_1__["login"]; });




/***/ }),

/***/ "./resources/js/src/views/Pages/Login/BG.png":
/*!***************************************************!*\
  !*** ./resources/js/src/views/Pages/Login/BG.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/BG.png?98a46b0d1472973b0989e8a384c7f118";

/***/ }),

/***/ "./resources/js/src/views/Pages/Login/Login.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/Pages/Login/Login.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm */ "./resources/js/src/views/Pages/Login/LoginForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions */ "./resources/js/src/redux/actions/index.js");
/* harmony import */ var _BG_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BG.png */ "./resources/js/src/views/Pages/Login/BG.png");
/* harmony import */ var _BG_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_BG_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_common_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/common/Alert */ "./resources/js/src/components/common/Alert/index.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\views\\Pages\\Login\\Login.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // Redux imports


 // assets




function Login(_ref) {
  var login = _ref.login,
      isAuthenticated = _ref.isAuthenticated,
      loading = _ref.loading,
      location = _ref.location;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    setState({
      email: 'jovvy@gmail.com',
      password: 'passwprd'
    });
  }, []);

  var handleSubmit = function handleSubmit(formProps, action) {
    login(formProps.email, formProps.password);
    action.setSubmitting(false);
  };

  if (isAuthenticated) {
    if (location.state) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: location.state.from,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    });
  }

  if (loading) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-gray-40000 flex h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-blue-400 flex-1 layout-login-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "login-background",
    src: _BG_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-6 px-6 lg:w-1/3 md:w-1/2 sm:w-full w-full flex flex-col justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-4xl text-gray-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "Enter your System Credentials")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Alert__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: state,
    enableReinitialize: true,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    }));
  }))));
}

Login.propTypes = {
  login: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth,
      loading = _ref2.loading;
  return {
    isAuthenticated: auth.isAuthenticated,
    loading: loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  login: _redux_actions__WEBPACK_IMPORTED_MODULE_6__["login"]
})(Login));
/**
 <form className="bg-white" >
 <Form.Item>
 <Input
 ref={usernameRef}
 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
 placeholder="Username"
 />
 </Form.Item>
 <Form.Item>
 <Input
 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
 type="password"
 placeholder="Password"
 />

 </Form.Item>
 <Form.Item>
 <Button type="primary" htmlType="submit" className="login-form-button w-full" size="large">
 Log in
 </Button>
 </Form.Item>
 </form>
 **/

/***/ }),

/***/ "./resources/js/src/views/Pages/Login/LoginForm.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/Pages/Login/LoginForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_CreateAntFields_CreateAntFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/CreateAntFields/CreateAntFields */ "./resources/js/src/components/CreateAntFields/CreateAntFields.js");
/* harmony import */ var _components_ValidateFields_ValidateFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ValidateFields/ValidateFields */ "./resources/js/src/components/ValidateFields/ValidateFields.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\views\\Pages\\Login\\LoginForm.js";





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var handleSubmit = _ref.handleSubmit,
      values = _ref.values,
      submitCount = _ref.submitCount,
      isValid = _ref.isValid,
      isSubmitting = _ref.isSubmitting;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "form-container",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: _components_CreateAntFields_CreateAntFields__WEBPACK_IMPORTED_MODULE_3__["AntInput"],
    name: "email",
    type: "email",
    label: "Email",
    validate: _components_ValidateFields_ValidateFields__WEBPACK_IMPORTED_MODULE_4__["validateEmail"],
    submitCount: submitCount,
    hasFeedback: true,
    isFocus: true,
    prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "user",
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: _components_CreateAntFields_CreateAntFields__WEBPACK_IMPORTED_MODULE_3__["AntInput"],
    name: "password",
    type: "password",
    label: "Password",
    validate: _components_ValidateFields_ValidateFields__WEBPACK_IMPORTED_MODULE_4__["isRequired"],
    submitCount: submitCount,
    hasFeedback: true,
    prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "lock",
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "submit-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    className: "login-form-button w-full",
    size: "large",
    disabled: isValid === false,
    loading: isSubmitting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "Log in")));
});
/**

 <Field
 component={AntSelect}
 name="bookingClient"
 label="Client"
 defaultValue={values.bookingClient}
 selectOptions={values.selectOptions}
 validate={isRequired}
 submitCount={submitCount}
 tokenSeparators={[","]}
 style={{ width: 200 }}
 hasFeedback
 handleChange={(setFieldValue, value) => {
                    setFieldValue('selectOptionsTwo',['yes','yses','show']);
                }}
 />

 <Field
 component={AntSelect}
 name="bookingClientTwo"
 label="Client"
 defaultValue={values.bookingClientTwo}
 selectOptions={values.selectOptionsTwo}
 validate={isRequired}
 submitCount={submitCount}
 tokenSeparators={[","]}
 style={{ width: 200 }}
 hasFeedback
 handleChange={(setFieldValue, value) => {
                    setFieldValue('email',value);
                }}
 />

 **/

/***/ }),

/***/ "./resources/js/src/views/Pages/Login/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/Pages/Login/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login */ "./resources/js/src/views/Pages/Login/Login.js");

/* harmony default export */ __webpack_exports__["default"] = (_Login__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);