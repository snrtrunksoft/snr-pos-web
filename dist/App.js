"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Header = _interopRequireDefault(require("./Header"));
var _POSBody = _interopRequireDefault(require("./POSBody"));
var _Checkout = _interopRequireDefault(require("./Checkout"));
var _OrderSuccess = _interopRequireDefault(require("./OrderSuccess"));
var _UpdateOrder = _interopRequireDefault(require("./UpdateOrder"));
require("./App.css");
var _CurlPage = _interopRequireDefault(require("./CurlPage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function App() {
  const [cartItems, setCartItems] = (0, _react.useState)([]);

  // Function to reset the cart
  const resetCart = () => {
    setCartItems([]);
  };
  const cartCount = cartItems.length;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    resetCart: resetCart,
    cartCount: cartCount
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_POSBody.default, {
      cartItems: cartItems,
      setCartItems: setCartItems
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/checkout",
    element: /*#__PURE__*/_react.default.createElement(_Checkout.default, {
      resetCart: resetCart
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/order-success",
    element: /*#__PURE__*/_react.default.createElement(_OrderSuccess.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/update-order",
    element: /*#__PURE__*/_react.default.createElement(_UpdateOrder.default, {
      resetCart: resetCart
    })
  }))));
}
var _default = exports.default = App;