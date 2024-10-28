import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CardDetailsForm = ({ setIsModalVisible, resetCart, setStatus, setTitle, setSubTitle }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false); // Loading state
  const [processingMessage, setProcessingMessage] = useState(''); // Processing message state

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure that Stripe and Elements are loaded
    if (!stripe || !elements) return;

    // Set loading and processing message
    setLoading(true);
    setProcessingMessage('Processing your payment, please wait...');

    // Get the CardElement instance
    const cardElement = elements.getElement(CardElement);

    try {
      // Call backend to create a Payment Intent and retrieve the client secret
      const paymentIntentResponse = await fetch('https://ft9zc297k7.execute-api.us-east-2.amazonaws.com/orders/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "createdTime": "2023-10-05 12:30:00.123456",
          "updatedTime": "2023-10-05 12:30:00.123456",
          "placeBy": "SNR22",
          "Status": "Updated",
          "estimatedTime": 20,
          "contactPhoneNo": "1234567890",
          "smsSubscribed": false
        }),
      });

      // Check if the payment intent creation was successful
      if (!paymentIntentResponse.ok) {
        const errorData = await paymentIntentResponse.json();
        throw new Error(`Failed to create Payment Intent: ${errorData.message}`);
      }

      const { clientSecret } = await paymentIntentResponse.json();

      // Confirm the payment using the client secret
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        // Handle payment failure
        console.error('Payment failed:', error.message);
        setStatus('error');
        setTitle('Failed to Place New Order');
        setSubTitle(error.message);
        setIsModalVisible(true);
        // resetCart();
        setLoading(false);
        return;
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Payment succeeded
        console.log('Payment succeeded!', paymentIntent);
        setProcessingMessage('Payment successful, creating your order...');

        // Call backend to create the order
        const orderResponse = await fetch('https://ft9zc297k7.execute-api.us-east-2.amazonaws.com/orders/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "createdTime": "2023-10-05 12:30:00.123456",
            "updatedTime": "2023-10-05 12:30:00.123456",
            "placeBy": "SNR22",
            "Status": "Updated",
            "estimatedTime": 20,
            "contactPhoneNo": "1234567890",
            "smsSubscribed": false
          }),
        });

        // Check the response status code
        if (!orderResponse.ok) {
          const errorData = await orderResponse.json();
          console.error('Error placing order:', errorData);
          setStatus('error');
          setTitle('Failed to Place Order');
          setSubTitle('Payment processed but there was an issue placing your order. Please contact admin.');
          setIsModalVisible(true);
          setLoading(false);
          return;
        }

        const { orderId } = await orderResponse.json();

        // Update UI to show success
        setStatus('success');
        setTitle('Successfully Placed New Order');
        setSubTitle(`Order number is: ${orderId}. Estimated wait time: 10-15 minutes. Thank you!`);
        setIsModalVisible(true);
        resetCart();
      }
    } catch (err) {
      // Handle any unexpected errors
      console.error('Unexpected error:', err);
      setStatus('error');
      setTitle('Error Occurred');
      setSubTitle('An unexpected error occurred. Please try again.');
      setIsModalVisible(true);
    } finally {
      // Stop loading and clear processing message
      setLoading(false);
      setProcessingMessage('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-form">
        <CardElement options={{ hidePostalCode: true }} />
        <Button type="primary" htmlType="submit" className="submit-payment-button" disabled={!stripe || loading}>
          Pay Now
        </Button>
      </form>

      <br /><br />

      {loading && (
        <div className="processing-indicator">
          <Spin />
          <span style={{ marginLeft: '8px' }}>{processingMessage}</span>
        </div>
      )}
    </div>
  );
};

export default CardDetailsForm;