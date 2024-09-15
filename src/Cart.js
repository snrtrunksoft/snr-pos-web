import React from 'react';
import { Card, Row, Col } from 'antd';
import './Cart.css'; // Custom CSS if needed

const CartItem = ({ item }) => {
  return (
    <Row gutter={[16, 16]} className="cart-item-row">
      <Col span={6}>
        <p>{item.name}</p>
      </Col>
      <Col span={6}>
        <p>${item.price}</p>
      </Col>
      <Col span={6}>
        <p>{item.quantity}</p>
      </Col>
      <Col span={6}>
        <p>${item.price * item.quantity}</p> {/* Calculating total price */}
      </Col>
    </Row>
  );
};

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      {/* Cart Header */}
      <Row gutter={[16, 16]} className="cart-header">
        <Col span={6}><strong>Item</strong></Col>
        <Col span={6}><strong>Price</strong></Col>
        <Col span={6}><strong>Quantity</strong></Col>
        <Col span={6}><strong>Total</strong></Col>
      </Row>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;