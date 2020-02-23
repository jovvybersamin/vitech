(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/src/views/Customers/Detail.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/Customers/Detail.js ***!
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
/* harmony import */ var _DetailForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailForm */ "./resources/js/src/views/Customers/DetailForm.js");
/* harmony import */ var _components_common_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/Alert */ "./resources/js/src/components/common/Alert/index.js");
/* harmony import */ var _redux_actions_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../redux/actions/alert */ "./resources/js/src/redux/actions/alert.js");
/* harmony import */ var _redux_actions_customer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../redux/actions/customer */ "./resources/js/src/redux/actions/customer.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\views\\Customers\\Detail.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












var Detail = function Detail(_ref) {
  var setPageName = _ref.setPageName,
      getCustomer = _ref.getCustomer,
      clearCustomer = _ref.clearCustomer,
      storeCustomer = _ref.storeCustomer,
      updateCustomer = _ref.updateCustomer,
      clearAlert = _ref.clearAlert,
      customer = _ref.customer,
      match = _ref.match;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setPageName("customers.list");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var id = match.params.id;
    clearAlert();
    clearCustomer();

    if (id) {
      getCustomer(id);
    }

    console.log('Customer:', customer);
  }, []);

  var handleSubmit = function handleSubmit(formProps, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        resetForm = _ref2.resetForm;
    console.log('Customer', customer);
    console.log('Form Props', formProps);

    if (customer.id) {
      updateCustomer(customer.id, formProps).then(function (response) {
        setSubmitting(false);
      });
    } else {
      storeCustomer(formProps).then(function (response) {
        if (response) {
          resetForm();
        }

        setSubmitting(false);
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-3xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, customer.id ? 'Customer Detail' : 'New Customer')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Alert__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: customer,
    enableReinitialize: true,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailForm__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    }));
  }));
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var customer = _ref3.customer;
  return {
    customer: customer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setPageName: _redux_actions_page__WEBPACK_IMPORTED_MODULE_5__["setPageName"],
  getCustomer: _redux_actions_customer__WEBPACK_IMPORTED_MODULE_9__["getCustomer"],
  clearCustomer: _redux_actions_customer__WEBPACK_IMPORTED_MODULE_9__["clearCustomer"],
  updateCustomer: _redux_actions_customer__WEBPACK_IMPORTED_MODULE_9__["updateCustomer"],
  storeCustomer: _redux_actions_customer__WEBPACK_IMPORTED_MODULE_9__["storeCustomer"],
  clearAlert: _redux_actions_alert__WEBPACK_IMPORTED_MODULE_8__["clearAlert"]
})(Detail));

/***/ }),

/***/ "./resources/js/src/views/Customers/DetailForm.js":
/*!********************************************************!*\
  !*** ./resources/js/src/views/Customers/DetailForm.js ***!
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
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\views\\Customers\\DetailForm.js";






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
    name: "name",
    type: "text",
    label: "Name",
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
    name: "email",
    type: "email",
    label: "Email",
    validate: _components_ValidateFields_ValidateFields__WEBPACK_IMPORTED_MODULE_5__["validateEmail"],
    submitCount: submitCount,
    hasFeedback: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "submit-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    size: "large",
    disabled: isValid === false,
    loading: isSubmitting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/customers",
    style: {
      marginLeft: '15px'
    },
    className: "ant-btn ant-btn-default ant-btn-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Cancel")))));
});

/***/ })

}]);