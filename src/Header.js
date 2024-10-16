import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Layout, Menu, Button, Typography} from 'antd';
import {
    HomeOutlined,
    ShoppingCartOutlined,
    ReloadOutlined,
  } from '@ant-design/icons';
  import 'antd/dist/reset.css';

const { Title } = Typography;

function Header({ resetCart, cartCount }) {
  const navigate = useNavigate();

  const handleStartOver = () => {
    resetCart(); // Reset the cart
    navigate('/'); // Navigate back to the home screen
  };


  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <header className="App-header">
      <div className="header-left">
        <h1>SNR's Food Truck</h1>
        <h2>Round Rock, Tx.</h2>
      </div>
      <div className="header-buttons">
        {/* Shopping Cart Button */}
        <Badge count={cartCount} overflowCount={99} offset={[10, 0]}>
          <Button icon={<ShoppingCartOutlined /> } onClick={proceedToCheckout} size="default"></Button>
        </Badge>

        {/* Start Over Button */}
        <Button type="primary" size="large" icon={<ReloadOutlined />} onClick={handleStartOver}>
          Start Over
        </Button>
      </div>
    </header>
  );
}

export default Header;