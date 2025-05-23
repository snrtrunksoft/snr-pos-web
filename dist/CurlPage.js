"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  TextArea
} = _antd.Input;
const {
  Option
} = _antd.Select;
const CurlPage = () => {
  const [api, setApi] = (0, _react.useState)('Orders');
  const [apiCall, setApiCall] = (0, _react.useState)('');
  const [url, setUrl] = (0, _react.useState)('');
  const [method, setMethod] = (0, _react.useState)('');
  const [body, setBody] = (0, _react.useState)('');
  const [response, setResponse] = (0, _react.useState)(null);
  const apiConfig = {
    Orders: {
      GetOrder: {
        url: 'https://api.example.com/orders/{id}',
        method: 'GET'
      },
      GetAllOrders: {
        url: 'https://api.example.com/orders',
        method: 'GET'
      },
      CreateOrder: {
        url: 'https://api.example.com/orders',
        method: 'POST',
        body: JSON.stringify({
          "createdTime": "2023-10-05 12:30:00.123456",
          "updatedTime": "2023-10-05 12:30:00.123456",
          "placeBy": "SNR",
          "Status": "New",
          "estimatedTime": "20",
          "contactPhoneNo": "1234567890",
          "smsSubscribed": false
        }, null, 2)
      },
      UpdateOrder: {
        url: 'https://api.example.com/orders/{id}',
        method: 'PUT',
        body: '{"orderName": "Updated Order", "quantity": 2}'
      },
      DeleteOrder: {
        url: 'https://api.example.com/orders/{id}',
        method: 'DELETE'
      }
    },
    Items: {
      GetItem: {
        url: 'https://api.example.com/items/{id}',
        method: 'GET'
      },
      GetAllItems: {
        url: 'https://api.example.com/items',
        method: 'GET'
      },
      CreateItem: {
        url: 'https://api.example.com/items',
        method: 'POST',
        body: '{"itemName": "Sample Item", "price": 10.0}'
      },
      UpdateItem: {
        url: 'https://api.example.com/items/{id}',
        method: 'PUT',
        body: '{"itemName": "Updated Item", "price": 12.0}'
      },
      DeleteItem: {
        url: 'https://api.example.com/items/{id}',
        method: 'DELETE'
      }
    }
  };
  const handleApiChange = value => {
    setApi(value);
    setApiCall('');
    setUrl('');
    setMethod('');
    setBody('');
    setResponse(null);
  };
  const handleApiCallChange = value => {
    setApiCall(value);
    const config = apiConfig[api][value];
    setUrl(config.url);
    setMethod(config.method);
    setBody(config.body || '');
  };
  const handleSubmit = async () => {
    if (!url) {
      _antd.message.error("Please select an API and a specific call.");
      return;
    }
    try {
      const axiosConfig = {
        method: method.toLowerCase(),
        url: url.replace('{id}', '1') // Replace {id} with a sample ID for demonstration
      };
      if (method === 'POST' || method === 'PUT') {
        axiosConfig.data = JSON.parse(body);
      }
      const res = await (0, _axios.default)(axiosConfig);
      setResponse(JSON.stringify(res.data, null, 2));
      _antd.message.success("Request successful!");
    } catch (error) {
      var _error$response;
      setResponse(JSON.stringify(((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data) || error.message, null, 2));
      _antd.message.error("Request failed");
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", null, "cURL Request Tool"), /*#__PURE__*/_react.default.createElement(_antd.Form, {
    layout: "vertical"
  }, /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: 16
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 12
  }, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: "Select API"
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    defaultValue: "Orders",
    onChange: handleApiChange
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: "Orders"
  }, "Orders"), /*#__PURE__*/_react.default.createElement(Option, {
    value: "Items"
  }, "Items")))), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 12
  }, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: "Select API Call"
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    value: apiCall,
    onChange: handleApiCallChange
  }, Object.keys(apiConfig[api]).map(call => /*#__PURE__*/_react.default.createElement(Option, {
    key: call,
    value: call
  }, call)))))), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: "URL"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    value: url,
    readOnly: true
  })), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: "Method"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    value: method,
    readOnly: true
  })), (method === 'POST' || method === 'PUT') && /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: "Body"
  }, /*#__PURE__*/_react.default.createElement(TextArea, {
    rows: 6,
    value: body,
    onChange: e => setBody(e.target.value)
  })), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: handleSubmit
  }, "Submit"))), /*#__PURE__*/_react.default.createElement("h3", null, "Response:"), /*#__PURE__*/_react.default.createElement("pre", {
    style: {
      background: '#f5f5f5',
      padding: '10px'
    }
  }, response || 'No response yet'));
};
var _default = exports.default = CurlPage;