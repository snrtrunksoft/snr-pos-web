import React from 'react';
import { Card } from 'antd';
import './CartItem.css';

const CartItem = ({ item }) => {
  return (
    <Card title={<div>{item.name} - <span style={{ color: '#52c41a' }}>${item.price}</span></div>} bordered={true}>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </Card>
  );
};

export default CartItem;