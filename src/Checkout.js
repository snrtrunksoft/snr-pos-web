import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Cart from './Cart';
import TotalSummary from './TotalSummary';
import OrderSuccess from './OrderSuccess';
import CardDetailsForm from './CardDetailsForm'; // Import updated form
import './Checkout.css';

const stripePromise = loadStripe('pk_test_51QDx1zI0lYouuTUdsrdngky9PqFFnM1msIqya6vohTYK8BvmyIaPBlbjIOlptsOAsKo4gRY4VhHj9m9LTlEVROel00CmHobYmB'); // Replace with your Stripe publishable key

const Checkout = ({ resetCart }) => {
  const cartItems = [
    { id: '1', name: 'Apple', price: 50, quantity: 2 },
    { id: '2', name: 'Banana', price: 30, quantity: 3 },
    { id: '3', name: 'Orange Juice', price: 40, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [status, setStatus] = useState("success");
  const [title, setTitle] = useState("Successfully Placed new Order");
  const [subTitle, setSubTitle] = useState("Order number is: 176289. Estimated wait time for Order: 10-15 minutes. Thank you.!!");

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="checkout-page">
        <h2>Checkout Summary</h2>
        <Row gutter={16} className="checkout-container">
          {/* Left Column - Cart Items */}
          <Col span={12} className="cart-column">
            <Cart cartItems={cartItems} />
            <TotalSummary totalPrice={totalPrice} />
          </Col>

          {/* Right Column - Stripe Card Details */}
          <Col span={12} className="card-details">
            <h3>Enter Card Details</h3>
            <CardDetailsForm 
              setIsModalVisible={setIsModalVisible} 
              resetCart={resetCart} 
              setStatus={setStatus}
              setTitle={setTitle}
              setSubTitle={setSubTitle}/>
          </Col>
        </Row>

        {/* Modal to show Order Success */}
        <Modal
          title="Order Success"
          visible={isModalVisible}
          onOk={handleModalClose}
          onCancel={handleModalClose}
          footer={null}
        >
          <OrderSuccess status={status} title={title} subTitle={subTitle} />
        </Modal>
      </div>
    </Elements>
  );
};

export default Checkout;