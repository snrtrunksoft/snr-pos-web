import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const UpdateOrder = (resetCart) => {
  const navigate = useNavigate();

  return (
    <Result
      status="warning"
      title="Page Under Construction"
      subTitle="Currently Update Order WIP"
      extra={[
        <Button type="primary" key="console" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      ]}
    />
  );
};

export default UpdateOrder;