(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./resources/js/src/views/Employees/List.js":
/*!**************************************************!*\
  !*** ./resources/js/src/views/Employees/List.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../redux/actions/page */ "./resources/js/src/redux/actions/page.js");
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../utils/setAuthToken */ "./resources/js/src/utils/setAuthToken.js");

var _jsxFileName = "C:\\Users\\user\\Documents\\applications\\vitech\\resources\\js\\src\\views\\Employees\\List.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var columns = [{
  title: 'Full name',
  dataIndex: 'full_name',
  sorter: true,
  render: function render(full_name, record) {
    console.log(record);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/employees/".concat(record.id, "/edit"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, full_name);
  },
  width: '40%',
  defaultSortOrder: 'ascend'
}, {
  title: 'Date hired',
  dataIndex: 'date_hired',
  sorter: true
}, {
  title: 'Customer',
  dataIndex: 'customer',
  render: function render(customer, record) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }, customer.name);
  },
  sorter: true
}];
var defaultParams = {
  sortField: 'first_name',
  sortOrder: 'ascend',
  results: 15
};

var List = function List(_ref) {
  var appLoading = _ref.loading,
      setPageName = _ref.setPageName;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    pageSize: 15,
    showTotal: function showTotal(total, range) {
      return "".concat(range[0], "-").concat(range[1], " of ").concat(total, " items");
    }
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      pagination = _useState6[0],
      setPagination = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      params = _useState8[0],
      setParams = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPageName("employees.list");

    if (!appLoading) {
      fetch();
    }
  }, [appLoading]);

  var handleTableChange = function handleTableChange(pagination, filters, sorter) {
    var pager = _objectSpread({}, pagination);

    console.log("Pager:", pager);
    pager.current = pagination.current;
    setPagination(pager);
    setParams();
    fetch(_objectSpread({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order
    }, filters));
  };

  var handleSearchInput =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(searchQuery) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch({
                searchQuery: searchQuery
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSearchInput(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var fetch =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var dParams,
          response,
          _response$data,
          _data,
          meta,
          _args2 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dParams = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : defaultParams;
              setLoading(true);
              Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_7__["default"])(localStorage.getItem('token'));
              _context2.prev = 3;
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/employees', {
                params: _objectSpread({}, params, {}, dParams)
              });

            case 6:
              response = _context2.sent;
              _response$data = response.data, _data = _response$data.data, meta = _response$data.meta;
              setLoading(false);
              setData(_data);
              setPagination(function (state) {
                return _objectSpread({}, state, {
                  total: meta.total
                });
              });
              setParams(function (state) {
                return _objectSpread({}, state, {}, dParams);
              });
              _context2.next = 18;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](3);
              console.log(_context2.t0);
              throw new Error(_context2.t0);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 14]]);
    }));

    return function fetch() {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "text-3xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, "Employees List")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
    allowClear: true,
    placeholder: "Search by name, customer",
    onSearch: handleSearchInput,
    style: {
      lineHeight: 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    columns: columns,
    rowKey: function rowKey(record) {
      //console.log(record);
      return record.id;
    },
    dataSource: data,
    pagination: pagination,
    loading: loading,
    onChange: handleTableChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, {
  setPageName: _redux_actions_page__WEBPACK_IMPORTED_MODULE_6__["setPageName"]
})(List));

/***/ })

}]);