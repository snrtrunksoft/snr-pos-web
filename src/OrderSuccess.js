import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
     // Navigate back to the home screen
  };

  return (
    <Result
      status="success"
      title="Successfully Placed new Order"
      subTitle="Order number is: 176289. Estimated wait time for Order: 10-15 minutes. Thank you.!!"
      extra={[
        <Button type="primary" key="console" onClick={() => handleClose()}>
          Close
        </Button>,
        <Button key="buy" onClick={() => navigate('/update-order')}>
          Make Updates
        </Button>,
      ]}
    />
  );
};

export default OrderSuccess;