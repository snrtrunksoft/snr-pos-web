import React from 'react';
import { Card } from 'antd';
import './CartItem.css';

const ItemType = ({ item }) => {
  return (
    <Card className="cart-itemType-card" title={item.name} bordered={true}>
      <p>{item.name}</p>
    </Card>
  );
};

export default ItemType;