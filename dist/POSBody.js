"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _antd = require("antd");
var _icons = require("@ant-design/icons");
require("./POSBody.css");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Import the CSS for styling

const POSBody = _ref => {
  let {
    cartItems,
    setCartItems
  } = _ref;
  const navigate = (0, _reactRouterDom.useNavigate)();
  // const [itemTypes, setItemTypes] = useState([]); // Set state for item categories

  // Define the item types for the horizontal grid
  const itemTypes = [{
    id: 'all',
    name: 'All'
  }, {
    id: 'fruits',
    name: 'Fruits'
  }, {
    id: 'vegetables',
    name: 'Vegetables'
  }, {
    id: 'beverages',
    name: 'Beverages'
  }];

  // // Fetch item categories from backend
  // useEffect(() => {
  //   fetch('http://localhost:3001/items/categories')
  //     .then(response => response.json())
  //     .then(data => setItemTypes(data))
  //     .catch(error => console.error('Error fetching item categories:', error));
  // }, []);

  // Refactored available items categorized by type
  const availableItems = {
    fruits: [{
      id: 'f1',
      name: 'Apple',
      price: 50
    }, {
      id: 'f2',
      name: 'Banana',
      price: 30
    }, {
      id: 'f3',
      name: 'Orange',
      price: 50
    }, {
      id: 'f4',
      name: 'Fruit1',
      price: 30
    }, {
      id: 'f5',
      name: 'Fruit2',
      price: 50
    }, {
      id: 'f6',
      name: 'Fruit3',
      price: 30
    }],
    vegetables: [{
      id: 'v1',
      name: 'Carrot',
      price: 40
    }, {
      id: 'v2',
      name: 'Broccoli',
      price: 50
    }, {
      id: 'v3',
      name: 'Vegetable1',
      price: 40
    }, {
      id: 'v4',
      name: 'Vegetable2',
      price: 50
    }, {
      id: 'v5',
      name: 'Vegetable3',
      price: 40
    }, {
      id: 'v6',
      name: 'Vegetable4',
      price: 50
    }],
    beverages: [{
      id: 'b1',
      name: 'Orange Juice',
      price: 30
    }, {
      id: 'b2',
      name: 'Water',
      price: 40
    }, {
      id: 'b3',
      name: 'Juice1',
      price: 30
    }, {
      id: 'b4',
      name: 'Juice2',
      price: 40
    }, {
      id: 'b5',
      name: 'Juice3',
      price: 30
    }, {
      id: 'b6',
      name: 'Juice4',
      price: 40
    }]
  };

  // Function to initialize all quantities to 0
  const initializeQuantities = () => {
    const quantities = Object.keys(availableItems).reduce((acc, category) => {
      availableItems[category].forEach(item => {
        acc[item.id] = '0';
      });
      return acc;
    }, {});
    return quantities;
  };
  const initializeSpiceLevels = () => {
    const spiceLevels = Object.keys(availableItems).reduce((acc, category) => {
      availableItems[category].forEach(item => {
        acc[item.id] = 'Medium';
      });
      return acc;
    }, {});
    return spiceLevels;
  };
  const [selectedQuantity, setSelectedQuantity] = (0, _react.useState)({});
  const [selectedSpiceLevel, setSelectedSpiceLevel] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    setSelectedQuantity(initializeQuantities());
  }, []);
  (0, _react.useEffect)(() => {
    setSelectedSpiceLevel(initializeSpiceLevels());
  }, []);
  const handleSelectQuantity = (itemId, quantity) => {
    setSelectedQuantity(prevQuantities => _objectSpread(_objectSpread({}, prevQuantities), {}, {
      [itemId]: quantity
    }));
  };
  const handleSpiceLevel = (itemId, spiceLevel) => {
    setSelectedSpiceLevel(prevQuantities => _objectSpread(_objectSpread({}, prevQuantities), {}, {
      [itemId]: spiceLevel
    }));
  };
  const [selectedItemType, setSelectedItemType] = (0, _react.useState)('all');

  // Filter items based on the selected type
  const getFilteredItems = () => {
    if (selectedItemType === 'all') {
      return Object.values(availableItems).flat();
    } else {
      return availableItems[selectedItemType] || [];
    }
  };
  const filteredItems = getFilteredItems();
  const addToCart = item => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem => cartItem.id === item.id ? _objectSpread(_objectSpread({}, cartItem), {}, {
          quantity: cartItem.quantity + 1
        }) : cartItem);
      } else {
        return [...prevItems, _objectSpread(_objectSpread({}, item), {}, {
          quantity: 1
        })];
      }
    });
  };
  const proceedToCheckout = () => {
    navigate('/checkout');
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-page"
  }, /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: [16, 16],
    justify: "center",
    className: "item-type-row",
    style: {
      overflowX: 'auto',
      whiteSpace: 'nowrap'
    }
  }, itemTypes.map(itemType => /*#__PURE__*/_react.default.createElement(_antd.Col, {
    key: itemType.id
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "default",
    onClick: () => setSelectedItemType(itemType.id),
    style: {
      width: '220px',
      textAlign: 'center',
      backgroundColor: selectedItemType === itemType.id ? '#0582f7' : 'inherit',
      color: selectedItemType === itemType.id ? '#fff' : 'inherit',
      borderColor: selectedItemType === itemType.id ? '#52c41a' : 'inherit'
    },
    size: "large"
  }, itemType.name)))), /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    style: {
      borderColor: '#129bc4'
    }
  }, "Available Items"), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: [16, 16],
    className: "available-items"
  }, filteredItems.map(item => /*#__PURE__*/_react.default.createElement(_antd.Col, {
    key: item.id,
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6
  }, /*#__PURE__*/_react.default.createElement(_antd.Card, {
    className: "shadow-card",
    title: /*#__PURE__*/_react.default.createElement("div", null, item.name, " - ", /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: 'black'
      }
    }, "Price: $", item.price)),
    bordered: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "quantity-selector"
  }, ['0', '1', '2', '3', '4', '5', '+'].map(quantity => /*#__PURE__*/_react.default.createElement("div", {
    key: quantity,
    className: "quantity-circle ".concat(selectedQuantity[item.id] === quantity ? 'selected' : ''),
    onClick: () => {
      handleSelectQuantity(item.id, quantity);
      addToCart(item);
    }
  }, quantity))), /*#__PURE__*/_react.default.createElement("div", {
    className: "quantity-selector"
  }, ['Mild', 'Medium', 'Hot'].map(spiceLevel => /*#__PURE__*/_react.default.createElement("div", {
    key: spiceLevel,
    className: "spicelevel-rounded ".concat(selectedSpiceLevel[item.id] === spiceLevel ? 'selected' : ''),
    onClick: () => handleSpiceLevel(item.id, spiceLevel)
  }, spiceLevel))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_icons.FormOutlined, null)
  }, "Notes")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkout-button-container"
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: proceedToCheckout
  }, "Proceed to Checkout")));
};
var _default = exports.default = POSBody;