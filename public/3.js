(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/src/redux/actions/employee.js":
/*!****************************************************!*\
  !*** ./resources/js/src/redux/actions/employee.js ***!
  \****************************************************/
/*! exports provided: getEmployee, storeEmployee, updateEmployee, clearEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployee", function() { return getEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeEmployee", function() { return storeEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployee", function() { return updateEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearEmployee", function() { return clearEmployee; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./resources/js/src/redux/actions/types.js");
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/setAuthToken */ "./resources/js/src/utils/setAuthToken.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ "./resources/js/src/redux/actions/loading.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert */ "./resources/js/src/redux/actions/alert.js");
/* harmony import */ var _common_validationErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/validationErrors */ "./resources/js/src/redux/actions/common/validationErrors.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var getEmployee = function getEmployee(id) {
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
                return axios.get("/api/employees/".concat(id));

              case 5:
                response = _context.sent;
                data = response.data.data;
                data.date_hired = moment__WEBPACK_IMPORTED_MODULE_6___default()(data.date_hired);
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_EMPLOYEE"],
                  payload: data
                });
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.error("Error fetching: /api/employees/".concat(id), _context.t0); // dispatch

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var storeEmployee = function storeEmployee(employee) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var config, _localStorage2, token, body, response, data, _data, errors;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                config = {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                _localStorage2 = localStorage, token = _localStorage2.token;

                if (token) {
                  Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
                }

                body = JSON.stringify({
                  first_name: employee.first_name,
                  last_name: employee.last_name,
                  middle_name: employee.middle_name,
                  date_hired: employee.date_hired,
                  customer_id: employee.customer_id
                });
                _context2.prev = 4;
                _context2.next = 7;
                return axios.post("/api/employees", body, config);

              case 7:
                response = _context2.sent;
                data = response.data.data;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_1__["STORE_EMPLOYEE"],
                  payload: {}
                });
                dispatch(clearEmployee());
                dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_4__["setAlert"])('Employee successfully created', 'success', 20000, true));
                return _context2.abrupt("return", data.id);

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](4);

                if (_context2.t0.response) {
                  _context2.next = 19;
                  break;
                }

                return _context2.abrupt("return");

              case 19:
                _data = _context2.t0.response.data;

                if (!_data.message) {
                  _context2.next = 23;
                  break;
                }

                dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_4__["setAlert"])(_data.message, 'error', 20000));
                return _context2.abrupt("return");

              case 23:
                // dispatch
                errors = _context2.t0.response.data.errors;
                Object(_common_validationErrors__WEBPACK_IMPORTED_MODULE_5__["validationErrors"])(errors, dispatch);
                return _context2.abrupt("return", null);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 15]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var updateEmployee = function updateEmployee(id, employee) {
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
                  first_name: employee.first_name,
                  last_name: employee.last_name,
                  middle_name: employee.middle_name,
                  date_hired: employee.date_hired.format('YYYY-MM-DD'),
                  customer_id: employee.customer_id,
                  _method: 'PUT'
                });
                _context3.prev = 4;
                _context3.next = 7;
                return axios.post("/api/employees/".concat(id), body, config);

              case 7:
                response = _context3.sent;
                console.log('Employee Update:', response.data);
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_EMPLOYEE"],
                  payload: employee
                });
                dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_4__["setAlert"])('Employee successfully updated', 'success', 20000, true));
                _context3.next = 25;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](4);

                if (_context3.t0.response) {
                  _context3.next = 17;
                  break;
                }

                return _context3.abrupt("return");

              case 17:
                data = _context3.t0.response.data;

                if (!data.message) {
                  _context3.next = 21;
                  break;
                }

                dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_4__["setAlert"])(data.message, 'error', 20000));
                return _context3.abrupt("return");

              case 21:
                console.log('Error:', _context3.t0.response); // dispatch

                errors = _context3.t0.response.data.errors;
                Object(_common_validationErrors__WEBPACK_IMPORTED_MODULE_5__["validationErrors"])(errors, dispatch);
                return _context3.abrupt("return");

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[4, 13]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var clearEmployee = function clearEmployee() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_EMPLOYEE"],
      payload: null
    });
  };
};

/***/ }),

/***/ "./resources/js/src/views/Employees/Detail.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/Employees/Detail.js ***!
  \****************************************************/
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _redux_actions_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/actions/page */ "./resources/js/src/redux/actions/page.js");
/* harmony import */ var _DetailForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailForm */ "./resources/js/src/views/Employees/DetailForm.js");
/* harmony import */ var _components_common_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/Alert */ "./resources/js/src/components/common/Alert/index.js");
/* harmony import */ var _redux_actions_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../redux/actions/alert */ "./resources/js/src/redux/actions/alert.js");
/* harmony import */ var _redux_actions_employee__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../redux/actions/employee */ "./resources/js/src/redux/actions/employee.js");
/* harmony import */ var _redux_actions_customer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../redux/actions/customer */ "./resources/js/src/redux/actions/customer.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\views\\Employees\\Detail.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var Detail = function Detail(_ref) {
  var setPageName = _ref.setPageName,
      getEmployee = _ref.getEmployee,
      clearEmployee = _ref.clearEmployee,
      storeEmployee = _ref.storeEmployee,
      updateEmployee = _ref.updateEmployee,
      clearAlert = _ref.clearAlert,
      getCustomers = _ref.getCustomers,
      employee = _ref.employee,
      customers = _ref.customers,
      match = _ref.match;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setPageName("employees.list");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var id = match.params.id;
    clearAlert();
    clearEmployee();
    getCustomers();

    if (id) {
      getEmployee(id);
    }

    console.log('Employee:', employee);
  }, []);

  var handleSubmit = function handleSubmit(formProps, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        resetForm = _ref2.resetForm;
    var id = match.params.id;
    var body = {
      id: id ? id : 0,
      first_name: formProps.first_name,
      last_name: formProps.last_name,
      middle_name: formProps.middle_name,
      date_hired: formProps.date_hired,
      customer_id: formProps.customer_id
    };
    console.log('Body', body);

    if (employee.id) {
      updateEmployee(employee.id, body);
    } else {
      storeEmployee(body).then(function (response) {
        if (response) {
          resetForm();
        }
      });
    }

    setSubmitting(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-3xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, employee.id ? 'Employee Detail' : 'New Employee')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Alert__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: _objectSpread({}, employee, {
      customers: customers
    }),
    enableReinitialize: true,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailForm__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      }
    }));
  }));
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var employee = _ref3.employee,
      customers = _ref3.customers;
  return {
    employee: employee,
    customers: customers
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setPageName: _redux_actions_page__WEBPACK_IMPORTED_MODULE_5__["setPageName"],
  getEmployee: _redux_actions_employee__WEBPACK_IMPORTED_MODULE_9__["getEmployee"],
  clearEmployee: _redux_actions_employee__WEBPACK_IMPORTED_MODULE_9__["clearEmployee"],
  updateEmployee: _redux_actions_employee__WEBPACK_IMPORTED_MODULE_9__["updateEmployee"],
  storeEmployee: _redux_actions_employee__WEBPACK_IMPORTED_MODULE_9__["storeEmployee"],
  clearAlert: _redux_actions_alert__WEBPACK_IMPORTED_MODULE_8__["clearAlert"],
  getCustomers: _redux_actions_customer__WEBPACK_IMPORTED_MODULE_10__["getCustomers"]
})(Detail));

/***/ }),

/***/ "./resources/js/src/views/Employees/DetailForm.js":
/*!********************************************************!*\
  !*** ./resources/js/src/views/Employees/DetailForm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_CreateAntFields_CreateAntFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CreateAntFields/CreateAntFields */ "./resources/js/src/components/CreateAntFields/CreateAntFields.js");
/* harmony import */ var _components_ValidateFields_ValidateFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ValidateFields/ValidateFields */ "./resources/js/src/components/ValidateFields/ValidateFields.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\views\\Employees\\DetailForm.js";






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var handleSubmit = _ref.handleSubmit,
      values = _ref.values,
      submitCount = _ref.submitCount,
      isValid = _ref.isValid,
      isSubmitting = _ref.isSubmitting;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "form-container",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: _components_CreateAntFields_CreateAntFields__WEBPACK_IMPORTED_MODULE_4__["AntInput"],
    name: "first_name",
    type: "text",
    label: "First name",
    validate: _components_ValidateFields_ValidateFields__WEBPACK_IMPORTED_MODULE_5__["isRequired"],
    submitCount: submitCount,
    hasFeedback: true,
    isFocus: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: _components_CreateAntFields_CreateAntFields__WEBPACK_IMPORTED_MODULE_4__["AntInput"],
    name: "last_name",
    type: "text",
    label: "Last name",
    validate: _components_ValidateFields_ValidateFields__WEBPACK_IMPORTED_MODULE_5__["isRequired"],
    submitCount: submitCount,
    hasFeedback: true,
    isFocus: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: _components_CreateAntFields_CreateAntFields__WEBPACK_IMPORTED_MODULE_4__["AntInput"],
    name: "middle_name",
    type: "text",
    label: "Middle name",
    submitCount: submitCount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: _components_CreateAntFields_CreateAntFields__WEBPACK_IMPORTED_MODULE_4__["AntDatePicker"],
    name: "date_hired",
    label: "Date hired",
    defaultValue: values.bookingDate,
    format: 'MMM DD, YYYY',
    submitCount: submitCount,
    style: {
      width: 200
    },
    hasFeedback: true,
    isFocus: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    component: _components_CreateAntFields_CreateAntFields__WEBPACK_IMPORTED_MODULE_4__["AntSelect"],
    name: "customer_id",
    label: "Customer",
    defaultValue: values.customer_id,
    submitCount: submitCount,
    validate: _components_ValidateFields_ValidateFields__WEBPACK_IMPORTED_MODULE_5__["isRequired"],
    style: {
      width: 200
    },
    selectOptions: values.customers,
    isKeyValuePair: true,
    hasFeedback: true,
    isFocus: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "submit-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    size: "large",
    disabled: isValid === false,
    loading: isSubmitting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/customers",
    style: {
      marginLeft: '15px'
    },
    className: "ant-btn ant-btn-default ant-btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, "Cancel")))));
});

/***/ })

}]);