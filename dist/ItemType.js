"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
require("./CartItem.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ItemType = _ref => {
  let {
    item
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_antd.Card, {
    className: "cart-itemType-card",
    title: item.name,
    bordered: true
  }, /*#__PURE__*/_react.default.createElement("p", null, item.name));
};
var _default = exports.default = ItemType;