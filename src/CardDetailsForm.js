import React from 'react';
import { Button } from 'antd';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CardDetailsForm = ({ setIsModalVisible, resetCart, setStatus, setTitle, setSubTitle }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure that Stripe and Elements are loaded
    if (!stripe || !elements) return;

    // Get the CardElement instance
    const cardElement = elements.getElement(CardElement);

    // Call backend to create a Payment Intent and retrieve the client secret
    const response = await fetch('https://ft9zc297k7.execute-api.us-east-2.amazonaws.com/orders/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "createdTime": "2023-10-05 12:30:00.123456",
        "updatedTime": "2023-10-05 12:30:00.123456",
        "placeBy": "SNR22",
        "Status": "Updated",
        "estimatedTime": "20",
        "contactPhoneNo": "1234567890",
        "smsSubscribed": false
      }),
    });

    const { clientSecret } = await response.json();

    // Confirm the payment using the client secret
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      console.error('Payment failed:', error.message);
      setStatus("error");
      setTitle("Failed to Placed new Order");
      setSubTitle(error.message);
      setIsModalVisible((prev) => true);
      resetCart();
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!', paymentIntent);
      resetCart();
      setStatus("success");
      setTitle("Successfully Placed new Order");
      setSubTitle("Order number is: 176289. Estimated wait time for Order: 10-15 minutes. Thank you.!!");
      setIsModalVisible((prev) => true); // Use functional update
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <CardElement />
      <Button type="primary" htmlType="submit" className="submit-payment-button" disabled={!stripe}>
        Pay Now
      </Button>
    </form>
  );
};

export default CardDetailsForm;