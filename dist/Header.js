"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _antd = require("antd");
var _icons = require("@ant-design/icons");
require("antd/dist/reset.css");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  Title
} = _antd.Typography;
function Header(_ref) {
  let {
    resetCart,
    cartCount
  } = _ref;
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleStartOver = () => {
    resetCart(); // Reset the cart
    navigate('/'); // Navigate back to the home screen
  };
  const proceedToCheckout = () => {
    navigate('/checkout');
  };
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-left"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "SNR's Food Truck"), /*#__PURE__*/_react.default.createElement("h2", null, "Round Rock, Tx.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "header-buttons"
  }, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
    count: cartCount,
    overflowCount: 99,
    offset: [10, 0]
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_icons.ShoppingCartOutlined, null),
    onClick: proceedToCheckout,
    size: "default"
  })), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    size: "large",
    icon: /*#__PURE__*/_react.default.createElement(_icons.ReloadOutlined, null),
    onClick: handleStartOver
  }, "Start Over")));
}
var _default = exports.default = Header;