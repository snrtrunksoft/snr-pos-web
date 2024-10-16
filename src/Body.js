import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Card, Divider } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import './Body.css';  // Import the CSS for styling

const Body = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  // Define the item types for the horizontal grid
  const itemTypes = [
    { id: 'all', name: 'All' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'beverages', name: 'Beverages' },
  ];

  // Refactored available items categorized by type
  const availableItems = {
    fruits: [
      { id: 'f1', name: 'Apple', price: 50 },
      { id: 'f2', name: 'Banana', price: 30 },
      { id: 'f3', name: 'Orange', price: 50 },
      { id: 'f4', name: 'Fruit1', price: 30 },
      { id: 'f5', name: 'Fruit2', price: 50 },
      { id: 'f6', name: 'Fruit3', price: 30 }
    ],
    vegetables: [
      { id: 'v1', name: 'Carrot', price: 40 },
      { id: 'v2', name: 'Broccoli', price: 50 },
      { id: 'v3', name: 'Vegetable1', price: 40 },
      { id: 'v4', name: 'Vegetable2', price: 50 },
      { id: 'v5', name: 'Vegetable3', price: 40 },
      { id: 'v6', name: 'Vegetable4', price: 50 }
    ],
    beverages: [
      { id: 'b1', name: 'Orange Juice', price: 30 },
      { id: 'b2', name: 'Water', price: 40 },
      { id: 'b3', name: 'Juice1', price: 30 },
      { id: 'b4', name: 'Juice2', price: 40 },
      { id: 'b5', name: 'Juice3', price: 30 },
      { id: 'b6', name: 'Juice4', price: 40 }
    ]
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

  const [selectedQuantity, setSelectedQuantity] = useState({}); // Store selected quantity for each item
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState({}); // Store selected quantity for each item
  
  useEffect(() => {
    setSelectedQuantity(initializeQuantities());
  }, []);

  useEffect(() => {
    setSelectedSpiceLevel(initializeSpiceLevels());
  }, []);


  const handleSelectQuantity = (itemId, quantity) => {
    setSelectedQuantity((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  const handleSpiceLevel = (itemId, spiceLevel) => {
    setSelectedSpiceLevel((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: spiceLevel,
    }));
  };

  // State to track the selected item type
  const [selectedItemType, setSelectedItemType] = useState('all');

  // Filter items based on the selected type
  const getFilteredItems = () => {
    if (selectedItemType === 'all') {
      // Flatten all items if 'All' is selected
      return Object.values(availableItems).flat();
    } else {
      // Return items of the selected type
      return availableItems[selectedItemType] || [];
    }
  };

  const filteredItems = getFilteredItems();

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      {/* Horizontal grid for item types */}
      <Row gutter={[16, 16]} justify="center" className="item-type-row" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {itemTypes.map((itemType) => (
          <Col key={itemType.id}>
            <Button
                type="default" // Keep the default type
                onClick={() => setSelectedItemType(itemType.id)}
                style={{
                width: '220px',
                textAlign: 'center',
                backgroundColor: selectedItemType === itemType.id ? '#0582f7' : 'inherit', // Green for selected button
                color: selectedItemType === itemType.id ? '#fff' : 'inherit', // White text for selected button
                borderColor: selectedItemType === itemType.id ? '#52c41a' : 'inherit', // Green border for selected button
                }}
                size="large"
            >
                {itemType.name}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Display available items based on the selected type */}

      <Divider style={{borderColor: '#129bc4'}}>Available Items</Divider>
      <Row gutter={[16, 16]} className="available-items">
        {filteredItems.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>  
            <Card className="shadow-card" title={<div>{item.name} - <span style={{ color: 'black' }}> Price:${item.price}</span></div>} bordered={true}>
                <div className="quantity-selector">
                    {['0', '1', '2', '3', '4', '5', '+'].map((quantity) => (
                        <div
                        key={quantity}
                        className={`quantity-circle ${selectedQuantity[item.id] === quantity ? 'selected' : ''}`}
                        onClick={() => {handleSelectQuantity(item.id, quantity);addToCart(item)}}
                        >
                        {quantity}
                        </div>
                    ))}
                </div>
                <div className="quantity-selector">
                    {['Mild', 'Medium', 'Hot'].map((spiceLevel) => (
                        <div
                        key={spiceLevel}
                        className={`spicelevel-rounded ${selectedSpiceLevel[item.id] === spiceLevel ? 'selected' : ''}`}
                        onClick={() => handleSpiceLevel(item.id, spiceLevel)}
                        >
                        {spiceLevel}
                        </div>
                    ))}
                </div>
                {/* Align Notes button to the right */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button icon={<FormOutlined />}>
                    Notes
                  </Button>
                </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="checkout-button-container">
          <Button type="primary" onClick={proceedToCheckout}>
            Proceed to Checkout
          </Button>
        </div>
    </div>
  );
};

export default Body;