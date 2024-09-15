import React from 'react';
import CartItem from './CartItem';
import './Checkout.css';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <div className="summary">
        <h3>Order Summary</h3>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button className="complete-checkout-button">Complete Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;