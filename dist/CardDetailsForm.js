"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _antd = require("antd");
require("./CardDetailsForm.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Add custom CSS for styling

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#32325d',
      '::placeholder': {
        color: '#a0aec0'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};
const CustomCardForm = () => {
  const stripe = (0, _reactStripeJs.useStripe)();
  const elements = (0, _reactStripeJs.useElements)();
  const handleSubmit = async event => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const cardNumberElement = elements.getElement(_reactStripeJs.CardNumberElement);
    const {
      error,
      paymentIntent
    } = await stripe.confirmCardPayment('your_client_secret_here', {
      payment_method: {
        card: cardNumberElement
      }
    });
    if (error) {
      console.error('Payment failed:', error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!');
    }
  };
  return /*#__PURE__*/_react.default.createElement(_antd.Form, {
    onFinish: handleSubmit,
    className: "custom-card-form"
  }, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: "Card Number",
    name: "cardNumber"
  }, /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardNumberElement, {
    options: CARD_ELEMENT_OPTIONS
  })), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: "Expiry Date",
    name: "expiryDate"
  }, /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardExpiryElement, {
    options: CARD_ELEMENT_OPTIONS
  })), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: "CVC",
    name: "cvc"
  }, /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardCvcElement, {
    options: CARD_ELEMENT_OPTIONS
  })), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    disabled: !stripe
  }, "Pay Now"));
};
var _default = exports.default = CustomCardForm;