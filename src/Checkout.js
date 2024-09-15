import React from 'react';
import Cart from './Cart';
import TotalSummary from './TotalSummary';
import './Checkout.css';

const Checkout = ({ cartItems1 }) => {
    const cartItems = [
        { id: '1', name: 'Apple', price: 50, quantity: 2 },
        { id: '2', name: 'Banana', price: 30, quantity: 3 },
        { id: '3', name: 'Orange Juice2', price: 40, quantity: 1 },
      ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <h2>Checkout Summary</h2>
      <Cart cartItems={cartItems}></Cart>
      <TotalSummary totalPrice={totalPrice}></TotalSummary>
      {/* Button Aligned to Right */}
      <div className="checkout-button-container">
        <button className="complete-checkout-button">Complete Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;