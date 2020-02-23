(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./resources/js/src/components/GlobalHeader/RightContent.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/components/GlobalHeader/RightContent.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../redux/actions/auth */ "./resources/js/src/redux/actions/auth.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ValidateFields_ValidateFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../ValidateFields/ValidateFields */ "./resources/js/src/components/ValidateFields/ValidateFields.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\components\\GlobalHeader\\RightContent.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var avatarStyles = {
  marginRight: '10px'
};

var GlobalRightHeader = function GlobalRightHeader(_ref) {
  var _React$createElement;

  var auth = _ref.auth,
      logout = _ref.logout;

  if (!auth.user) {
    return null;
  }

  var name = auth.user.name;

  var onMenuClick = function onMenuClick(_ref2) {
    var key = _ref2.key;
    console.log(key);

    if (key === "logout") {
      logout();
    }
  };

  var menuHeaderDropdown = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    className: "",
    selectedKeys: [],
    onClick: onMenuClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Account Center")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    type: "setting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Account Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    type: "logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Logout")));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    overlay: menuHeaderDropdown,
    trigger: ['click'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], (_React$createElement = {
    size: 64,
    icon: "user"
  }, _defineProperty(_React$createElement, "size", "small"), _defineProperty(_React$createElement, "style", avatarStyles), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 49
  }), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "ant-dropdown-link text-gray-600",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, name))));
};

GlobalRightHeader.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].object.isRequired,
  logout: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var auth = _ref3.auth;
  return {
    auth: auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  logout: _redux_actions_auth__WEBPACK_IMPORTED_MODULE_3__["logout"]
})(GlobalRightHeader));

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

/***/ "./resources/js/src/components/routing/NoMatch.js":
/*!********************************************************!*\
  !*** ./resources/js/src/components/routing/NoMatch.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\components\\routing\\NoMatch.js";



var NoMatch = function NoMatch(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/404",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NoMatch);

/***/ }),

/***/ "./resources/js/src/containers/DefaultLayout/DefaultLayout.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/containers/DefaultLayout/DefaultLayout.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _DefaultSideMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultSideMenu */ "./resources/js/src/containers/DefaultLayout/DefaultSideMenu.js");
/* harmony import */ var _components_GlobalHeader_RightContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/GlobalHeader/RightContent */ "./resources/js/src/components/GlobalHeader/RightContent.js");
/* harmony import */ var _components_Loading_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/Loading/index */ "./resources/js/src/components/Loading/index.js");
/* harmony import */ var _components_routing_NoMatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/routing/NoMatch */ "./resources/js/src/components/routing/NoMatch.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../routes */ "./resources/js/src/routes.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\containers\\DefaultLayout\\DefaultLayout.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Header = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Header,
    Footer = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Footer,
    Sider = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Sider,
    Content = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Content;

var DefaultLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultLayout, _Component);

  function DefaultLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DefaultLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DefaultLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      collapsed: false
    });

    _defineProperty(_assertThisInitialized(_this), "onCollapse", function (collapsed) {
      _this.setState({
        collapsed: collapsed
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onToggle", function () {
      _this.setState(function (prev) {
        return {
          collapsed: !prev.collapsed
        };
      });
    });

    return _this;
  }

  _createClass(DefaultLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
        style: {
          minHeight: '100vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sider, {
        theme: "light",
        collapsible: true,
        collapsed: this.state.collapsed,
        onCollapse: this.onCollapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo h-10 bg-blue-800 m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DefaultSideMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
        style: {
          background: '#fff',
          padding: 0,
          paddingLeft: 16
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        className: "trigger",
        type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
        style: {
          cursor: 'pointer'
        },
        onClick: this.onToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-right px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GlobalHeader_RightContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
        style: {
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _routes__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (_ref) {
        var name = _ref.name,
            exact = _ref.exact,
            path = _ref.path,
            Component = _ref.component;
        return Component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
          key: name,
          exact: exact,
          path: path,
          name: name,
          render: function render(props) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            }));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }) : null;
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        component: _components_routing_NoMatch__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        from: "/",
        to: "/dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Ant Design \xA92016 Created by Ant UED")));
    }
  }]);

  return DefaultLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DefaultLayout.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].bool.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    isAuthenticated: auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(DefaultLayout));

/***/ }),

/***/ "./resources/js/src/containers/DefaultLayout/DefaultSideMenu.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/containers/DefaultLayout/DefaultSideMenu.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\containers\\DefaultLayout\\DefaultSideMenu.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;

var DefaultSideMenu = function DefaultSideMenu(_ref) {
  var page = _ref.page,
      location = _ref.location;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('dashboard'),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setKey(page);
  }, [page]);

  var handleClick = function handleClick(e) {
    setKey(e.key);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    theme: "light",
    onClick: handleClick,
    mode: "inline",
    selectedKeys: [key],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "pie-chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "customers.list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Customers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/customers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "employees.list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Employees"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/employees",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubMenu, {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "submenu-title-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "setting",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, "Admin")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "users.list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "Users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/users",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    page: state.page
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(DefaultSideMenu)));

/***/ }),

/***/ "./resources/js/src/containers/DefaultLayout/index.js":
/*!************************************************************!*\
  !*** ./resources/js/src/containers/DefaultLayout/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultLayout */ "./resources/js/src/containers/DefaultLayout/DefaultLayout.js");

/* harmony default export */ __webpack_exports__["default"] = (_DefaultLayout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/routes.js":
/*!************************************!*\
  !*** ./resources/js/src/routes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DashboardMain = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./views/Dashboard/Main */ "./resources/js/src/views/Dashboard/Main.js"));
});
var CustomerList = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./views/Customers/List */ "./resources/js/src/views/Customers/List.js"));
});
var CustomerDetail = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./views/Customers/Detail */ "./resources/js/src/views/Customers/Detail.js"));
});
var EmployeesList = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./views/Employees/List */ "./resources/js/src/views/Employees/List.js"));
});
var UserList = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./views/Users/List */ "./resources/js/src/views/Users/List.js"));
});
var PageNotFound = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./views/Pages/404/404 */ "./resources/js/src/views/Pages/404/404.js"));
});
var routes = [{
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardMain
}, {
  path: '/customers/:id/edit',
  exact: true,
  name: 'Customer Edit',
  component: CustomerDetail
}, {
  path: '/customers/create',
  exact: true,
  name: 'Customer Create',
  component: CustomerDetail
}, {
  path: '/customers',
  exact: true,
  name: 'Customers',
  component: CustomerList
}, {
  path: '/employees',
  exact: true,
  name: 'Employees',
  component: EmployeesList
}, {
  path: '/users',
  exact: true,
  name: 'Users',
  component: UserList
}, {
  path: '/404',
  exact: true,
  name: '404',
  component: PageNotFound
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);