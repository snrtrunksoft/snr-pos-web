"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
require("./Cart.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Custom CSS if needed

const CartItem = _ref => {
  let {
    item
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: [16, 16],
    className: "cart-item-row"
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("p", null, item.name)), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("p", null, "$", item.price)), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("p", null, item.quantity)), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("p", null, "$", item.price * item.quantity), " "));
};
const Cart = _ref2 => {
  let {
    cartItems
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cart"
  }, /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: [16, 16],
    className: "cart-header"
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Item")), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Price")), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Quantity")), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Total"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-items"
  }, cartItems.length === 0 ? /*#__PURE__*/_react.default.createElement("p", null, "Your cart is empty") : cartItems.map(item => /*#__PURE__*/_react.default.createElement(CartItem, {
    key: item.id,
    item: item
  }))));
};
var _default = exports.default = Cart;