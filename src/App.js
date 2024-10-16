import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Checkout from './Checkout';
import OrderSuccess from './OrderSuccess';
import UpdateOrder from './UpdateOrder';
import './App.css';
import CurlPage from './CurlPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to reset the cart
  const resetCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;
  
  return (
    <Router>
      <CurlPage/>
      {/* <div className="App">        
        <Header resetCart={resetCart} cartCount={cartCount}/>
        <Routes>
          <Route path="/" element={<Body cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/checkout" element={<Checkout resetCart={resetCart}/>} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/update-order" element={<UpdateOrder resetCart={resetCart}/>} />
        </Routes>
      </div> */}
    </Router>
  );
}

export default App;