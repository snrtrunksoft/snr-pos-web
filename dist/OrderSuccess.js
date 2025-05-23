"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const OrderSuccess = _ref => {
  let {
    resetCart,
    status,
    title,
    subTitle
  } = _ref;
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleClose = () => {
    // resetCart(); // Reset the cart
    navigate('/');
    // Navigate back to the home screen
  };
  return /*#__PURE__*/_react.default.createElement(_antd.Result, {
    status: status,
    title: title,
    subTitle: subTitle,
    extra: [/*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "primary",
      key: "console",
      onClick: () => handleClose()
    }, "Close"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      key: "buy",
      onClick: () => navigate('/update-order')
    }, "Make Updates")]
  });
};
var _default = exports.default = OrderSuccess;