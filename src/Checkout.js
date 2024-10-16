import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Cart from './Cart';
import TotalSummary from './TotalSummary';
import OrderSuccess from './OrderSuccess'; // Import the OrderSuccess component
import './Checkout.css';

const Checkout = ({resetCart}) => {
  // Hardcoded cartItems array for testing purposes
  const cartItems = [
    { id: '1', name: 'Apple', price: 50, quantity: 2 },
    { id: '2', name: 'Banana', price: 30, quantity: 3 },
    { id: '3', name: 'Orange Juice2', price: 40, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

  // Function to handle showing the modal
  const showModal = () => {
    resetCart();
    setIsModalVisible(true);
  };

  // Function to close the modal
  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout Summary</h2>
      <Cart cartItems={cartItems} />
      <TotalSummary totalPrice={totalPrice} />

      {/* Button to complete checkout */}
      <div className="checkout-button-container">
        <Button type="primary" className="complete-checkout-button" onClick={showModal}>
          Complete Checkout
        </Button>
      </div>

      {/* Modal to show Order Success */}
      <Modal
        title="Order Success"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        footer={null} // Remove default footer (Ok/Cancel buttons)
      >
        <OrderSuccess/> {/* Show OrderSuccess content in the modal */}
      </Modal>
    </div>
  );
};

export default Checkout;