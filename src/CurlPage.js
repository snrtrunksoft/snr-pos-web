import React, { useState } from 'react';
import { Input, Select, Button, Form, message, Row, Col } from 'antd';
import axios from 'axios';

const { TextArea } = Input;
const { Option } = Select;

const CurlPage = () => {
  const [api, setApi] = useState('Orders');
  const [apiCall, setApiCall] = useState('');
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  const apiConfig = {
    Orders: {
      GetOrder: { url: 'https://api.example.com/orders/{id}', method: 'GET' },
      GetAllOrders: { url: 'https://api.example.com/orders', method: 'GET' },
      CreateOrder: { 
        url: 'https://api.example.com/orders', 
        method: 'POST', 
        body: JSON.stringify({
          "createdTime": "2023-10-05 12:30:00.123456",
          "updatedTime": "2023-10-05 12:30:00.123456",
          "placeBy": "SNR",
          "Status": "New",
          "estimatedTime": "20",
          "contactPhoneNo": "1234567890",
          "smsSubscribed": false
        }, null, 2)
      },
      UpdateOrder: { url: 'https://api.example.com/orders/{id}', method: 'PUT', body: '{"orderName": "Updated Order", "quantity": 2}' },
      DeleteOrder: { url: 'https://api.example.com/orders/{id}', method: 'DELETE' }
    },
    Items: {
      GetItem: { url: 'https://api.example.com/items/{id}', method: 'GET' },
      GetAllItems: { url: 'https://api.example.com/items', method: 'GET' },
      CreateItem: { url: 'https://api.example.com/items', method: 'POST', body: '{"itemName": "Sample Item", "price": 10.0}' },
      UpdateItem: { url: 'https://api.example.com/items/{id}', method: 'PUT', body: '{"itemName": "Updated Item", "price": 12.0}' },
      DeleteItem: { url: 'https://api.example.com/items/{id}', method: 'DELETE' }
    }
  };

  const handleApiChange = (value) => {
    setApi(value);
    setApiCall('');
    setUrl('');
    setMethod('');
    setBody('');
    setResponse(null);
  };

  const handleApiCallChange = (value) => {
    setApiCall(value);
    const config = apiConfig[api][value];
    setUrl(config.url);
    setMethod(config.method);
    setBody(config.body || '');
  };

  const handleSubmit = async () => {
    if (!url) {
      message.error("Please select an API and a specific call.");
      return;
    }

    try {
      const axiosConfig = {
        method: method.toLowerCase(),
        url: url.replace('{id}', '1'),  // Replace {id} with a sample ID for demonstration
      };

      if (method === 'POST' || method === 'PUT') {
        axiosConfig.data = JSON.parse(body);
      }

      const res = await axios(axiosConfig);
      setResponse(JSON.stringify(res.data, null, 2));
      message.success("Request successful!");
    } catch (error) {
      setResponse(JSON.stringify(error.response?.data || error.message, null, 2));
      message.error("Request failed");
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>cURL Request Tool</h2>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Select API">
              <Select defaultValue="Orders" onChange={handleApiChange}>
                <Option value="Orders">Orders</Option>
                <Option value="Items">Items</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Select API Call">
              <Select value={apiCall} onChange={handleApiCallChange}>
                {Object.keys(apiConfig[api]).map(call => (
                  <Option key={call} value={call}>{call}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="URL">
          <Input value={url} readOnly />
        </Form.Item>
        
        <Form.Item label="Method">
          <Input value={method} readOnly />
        </Form.Item>
        
        {(method === 'POST' || method === 'PUT') && (
          <Form.Item label="Body">
            <TextArea
              rows={6}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Item>
        )}
        
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>Submit</Button>
        </Form.Item>
      </Form>

      <h3>Response:</h3>
      <pre style={{ background: '#f5f5f5', padding: '10px' }}>
        {response || 'No response yet'}
      </pre>
    </div>
  );
};

export default CurlPage;