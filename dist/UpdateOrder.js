"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const UpdateOrder = resetCart => {
  const navigate = (0, _reactRouterDom.useNavigate)();
  return /*#__PURE__*/_react.default.createElement(_antd.Result, {
    status: "warning",
    title: "Page Under Construction",
    subTitle: "Currently Update Order WIP",
    extra: [/*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "primary",
      key: "console",
      onClick: () => navigate('/')
    }, "Go to Home")]
  });
};
var _default = exports.default = UpdateOrder;