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
  const ordersEndpoint = 'https://ft9zc297k7.execute-api.us-east-2.amazonaws.com';
  const itemsEndpoint = 'https://ze6vrasiw6.execute-api.us-east-2.amazonaws.com';
  const apiConfig = {
    Orders: {
        CreateOrder: { 
            url: ordersEndpoint + '/orders', 
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
        UpdateOrder: { 
            url: ordersEndpoint + '/orders/16', 
            method: 'PUT', 
            body: JSON.stringify({
                "orderId": "16",
                "createdTime": "2023-10-05 12:30:00.123456",
                "updatedTime": "2023-10-05 12:30:00.123456",
                "placeBy": "SNR",
                "Status": "New",
                "estimatedTime": "20",
                "contactPhoneNo": "1234567890",
                "smsSubscribed": false
              }, null, 2) 
        },
        GetOrder: { url: ordersEndpoint + '/orders/{id}', method: 'GET' },
        GetAllOrders: { url: '/orders', method: 'GET' },
        DeleteOrder: { url: ordersEndpoint + '/orders/{id}', method: 'DELETE' }
    },
    Items: {
      GetItem: { url: itemsEndpoint + '/items/{id}', method: 'GET' },
      GetAllItems: { url: itemsEndpoint + '/items', method: 'GET' },
      CreateItem: { url: itemsEndpoint + '/items', method: 'POST', body: '{"itemName": "Sample Item", "price": 10.0}' },
      UpdateItem: { url: itemsEndpoint + '/items/{id}', method: 'PUT', body: '{"itemName": "Updated Item", "price": 12.0}' },
      DeleteItem: { url: itemsEndpoint + '/items/{id}', method: 'DELETE' }
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
            <Input value={url} onChange={(e) => setUrl(e.target.value)} />
        </Form.Item>
        
        <Form.Item label="Method">
          <Input value={method} readOnly />
        </Form.Item>
        
        {(method === 'POST' || method === 'PUT') && (
          <Form.Item label="Body">
            <TextArea
              rows={10}
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