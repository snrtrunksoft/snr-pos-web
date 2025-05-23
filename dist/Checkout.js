"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _stripeJs = require("@stripe/stripe-js");
var _reactStripeJs = require("@stripe/react-stripe-js");
var _Cart = _interopRequireDefault(require("./Cart"));
var _TotalSummary = _interopRequireDefault(require("./TotalSummary"));
var _OrderSuccess = _interopRequireDefault(require("./OrderSuccess"));
var _CardDetailsForm = _interopRequireDefault(require("./CardDetailsForm"));
require("./Checkout.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// Import updated form

const stripePromise = (0, _stripeJs.loadStripe)('pk_test_51QDx1zI0lYouuTUdsrdngky9PqFFnM1msIqya6vohTYK8BvmyIaPBlbjIOlptsOAsKo4gRY4VhHj9m9LTlEVROel00CmHobYmB'); // Replace with your Stripe publishable key

const Checkout = _ref => {
  let {
    resetCart
  } = _ref;
  const cartItems = [{
    id: '1',
    name: 'Apple',
    price: 50,
    quantity: 2
  }, {
    id: '2',
    name: 'Banana',
    price: 30,
    quantity: 3
  }, {
    id: '3',
    name: 'Orange Juice',
    price: 40,
    quantity: 1
  }];
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [isModalVisible, setIsModalVisible] = (0, _react.useState)(false);
  const [status, setStatus] = (0, _react.useState)("success");
  const [title, setTitle] = (0, _react.useState)("Successfully Placed new Order");
  const [subTitle, setSubTitle] = (0, _react.useState)("Order number is: 176289. Estimated wait time for Order: 10-15 minutes. Thank you.!!");
  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  return /*#__PURE__*/_react.default.createElement(_reactStripeJs.Elements, {
    stripe: stripePromise
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkout-page"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Checkout Summary"), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: 16,
    className: "checkout-container"
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 12,
    className: "cart-column"
  }, /*#__PURE__*/_react.default.createElement(_Cart.default, {
    cartItems: cartItems
  }), /*#__PURE__*/_react.default.createElement(_TotalSummary.default, {
    totalPrice: totalPrice
  })), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 12,
    className: "card-details"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Enter Card Details"), /*#__PURE__*/_react.default.createElement(_CardDetailsForm.default, {
    setIsModalVisible: setIsModalVisible,
    resetCart: resetCart,
    setStatus: setStatus,
    setTitle: setTitle,
    setSubTitle: setSubTitle
  }))), /*#__PURE__*/_react.default.createElement(_antd.Modal, {
    title: "Order Success",
    visible: isModalVisible,
    onOk: handleModalClose,
    onCancel: handleModalClose,
    footer: null
  }, /*#__PURE__*/_react.default.createElement(_OrderSuccess.default, {
    status: status,
    title: title,
    subTitle: subTitle
  }))));
};
var _default = exports.default = Checkout;