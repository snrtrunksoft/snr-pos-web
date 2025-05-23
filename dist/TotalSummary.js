"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
require("./TotalSummary.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Custom CSS if needed

const TotalSummary = _ref => {
  let {
    totalPrice
  } = _ref;
  const taxRate = 8.25 / 100; // Tax rate is 8.25%
  const taxAmount = (totalPrice * taxRate).toFixed(2); // Calculate tax amount
  const grandTotal = (totalPrice + parseFloat(taxAmount)).toFixed(2); // Grand total is totalPrice + taxAmount

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: [16, 16],
    className: "total-summary-row"
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Items Sub Total:")), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "$", totalPrice.toFixed(2)))), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: [16, 16],
    className: "total-summary-row"
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Sales Tax (8.25%):")), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "$", taxAmount))), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: [16, 16],
    className: "total-summary-row"
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Grand Total:")), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 6
  }, /*#__PURE__*/_react.default.createElement("strong", null, "$", grandTotal))));
};
var _default = exports.default = TotalSummary;