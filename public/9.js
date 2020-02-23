(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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
        _ref$isKeyValuePair = _ref.isKeyValuePair,
        isKeyValuePair = _ref$isKeyValuePair === void 0 ? false : _ref$isKeyValuePair,
        props = _objectWithoutProperties(_ref, ["field", "form", "hasFeedback", "label", "selectOptions", "submitCount", "type", "isFocus", "handleChange", "isKeyValuePair"]);

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

      if (typeof handleChange === 'function') {
        handleChange(setFieldValue, value, touched);
      }
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

    var buildOptions = function buildOptions() {
      if (isKeyValuePair) {
        return selectOptions.map(function (pair) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
            key: pair.id,
            value: pair.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, pair.label);
        });
      } else {
        return selectOptions.map(function (name) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
            key: name,
            value: pair.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }, name);
        });
      }
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "field-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
      label: label,
      hasFeedback: hasFeedback && submitted || hasFeedback && touched ? true : false,
      help: submittedError || touchedError ? hasError : false,
      validateStatus: submittedError || touchedError ? "error" : "success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AntComponent, _extends({}, field, props, {
      onBlur: onBlur,
      onChange: type ? onInputChange : onChange,
      ref: fieldRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    }), selectOptions && buildOptions())));
  };
}; // source: https://codesandbox.io/s/4x47oznvvx
// or try this: https://github.com/jannikbuschke/formik-antd


var AntSelect = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["Select"]);
var AntDatePicker = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"]);
var AntInput = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["Input"]);
var AntPassword = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["Input"]);
var AntTimePicker = CreateAntField(antd__WEBPACK_IMPORTED_MODULE_1__["TimePicker"]);

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

/***/ "./resources/js/src/redux/actions/common/validationErrors.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/redux/actions/common/validationErrors.js ***!
  \*******************************************************************/
/*! exports provided: validationErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationErrors", function() { return validationErrors; });
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../alert */ "./resources/js/src/redux/actions/alert.js");

var validationErrors = function validationErrors(errors, dispatch) {
  var keys = Object.keys(errors);
  keys.forEach(function (key) {
    var err = errors[key];

    if (err.length > 0) {
      err.forEach(function (msg) {
        dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_0__["setAlert"])(msg, 'error', 20000, true));
      });
    }
  });
};

/***/ }),

/***/ "./resources/js/src/redux/actions/customer.js":
/*!****************************************************!*\
  !*** ./resources/js/src/redux/actions/customer.js ***!
  \****************************************************/
/*! exports provided: getCustomer, getCustomers, storeCustomer, updateCustomer, clearCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomer", function() { return getCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomers", function() { return getCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCustomer", function() { return storeCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCustomer", function() { return updateCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCustomer", function() { return clearCustomer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./resources/js/src/redux/actions/types.js");
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/setAuthToken */ "./resources/js/src/utils/setAuthToken.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ "./resources/js/src/redux/actions/loading.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert */ "./resources/js/src/redux/actions/alert.js");
/* harmony import */ var _common_validationErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/validationErrors */ "./resources/js/src/redux/actions/common/validationErrors.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var getCustomer = function getCustomer(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var _localStorage, token, response, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _localStorage = localStorage, token = _localStorage.token;

                if (token) {
                  Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
                }

                _context.prev = 2;
                _context.next = 5;
                return axios.get("/api/customers/".concat(id));

              case 5:
                response = _context.sent;
                data = response.data.data;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_CUSTOMER"],
                  payload: data
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.error("Error fetching: /api/customers/".concat(id), _context.t0); // dispatch

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var getCustomers = function getCustomers() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var _localStorage2, token, response, data, keyValuePairs;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _localStorage2 = localStorage, token = _localStorage2.token;

                if (token) {
                  Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
                }

                _context2.prev = 2;
                _context2.next = 5;
                return axios.get("/api/customers/all");

              case 5:
                response = _context2.sent;
                data = response.data.data;
                keyValuePairs = data.map(function (record) {
                  return {
                    id: record.id,
                    label: record.name
                  };
                });
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_CUSTOMERS"],
                  payload: keyValuePairs
                });
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](2);
                console.error("Error fetching: /api/customers/all", _context2.t0); // dispatch

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 11]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var storeCustomer = function storeCustomer(customer) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var config, _localStorage3, token, body, response, data, errors;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                config = {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                _localStorage3 = localStorage, token = _localStorage3.token;

                if (token) {
                  Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
                }

                body = JSON.stringify({
                  name: customer.name,
                  email: customer.email
                });
                _context3.prev = 4;
                _context3.next = 7;
                return axios.post("/api/customers", body, config);

              case 7:
                response = _context3.sent;
                data = response.data.data;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_1__["STORE_CUSTOMER"],
                  payload: {}
                });
                dispatch(clearCustomer());
                dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_4__["setAlert"])('Customer successfully created', 'success', 20000, true));
                return _context3.abrupt("return", data.id);

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](4);

                if (_context3.t0.response) {
                  _context3.next = 19;
                  break;
                }

                return _context3.abrupt("return");

              case 19:
                // dispatch
                errors = _context3.t0.response.data.errors;
                Object(_common_validationErrors__WEBPACK_IMPORTED_MODULE_5__["validationErrors"])(errors, dispatch);
                return _context3.abrupt("return", null);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[4, 15]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var updateCustomer = function updateCustomer(id, customer) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var config, _localStorage4, token, body, response, errors;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                config = {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                _localStorage4 = localStorage, token = _localStorage4.token;

                if (token) {
                  Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
                }

                body = JSON.stringify({
                  name: customer.name,
                  email: customer.email,
                  _method: 'PUT'
                });
                _context4.prev = 4;
                _context4.next = 7;
                return axios.post("/api/customers/".concat(id), body, config);

              case 7:
                response = _context4.sent;
                console.log('Customer Update:', response.data);
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_CUSTOMER"],
                  payload: customer
                });
                dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_4__["setAlert"])('Customer successfully updated', 'success', 20000, true));
                _context4.next = 20;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](4);

                if (_context4.t0.response) {
                  _context4.next = 17;
                  break;
                }

                return _context4.abrupt("return");

              case 17:
                // dispatch
                errors = _context4.t0.response.data.errors;
                Object(_common_validationErrors__WEBPACK_IMPORTED_MODULE_5__["validationErrors"])(errors, dispatch);
                return _context4.abrupt("return", null);

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 13]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var clearCustomer = function clearCustomer() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_CUSTOMER"],
      payload: null
    });
  };
};

/***/ }),

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

/***/ })

}]);