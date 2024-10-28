import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = ({resetCart, status, title, subTitle}) => {
  const navigate = useNavigate();

  const handleClose = () => {
    // resetCart(); // Reset the cart
    navigate('/');
     // Navigate back to the home screen
  };

  return (
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
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