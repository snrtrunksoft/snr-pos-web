import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Checkout from './Checkout';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to reset the cart
  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="App">
        <Header resetCart={resetCart} />
        <Routes>
          <Route path="/" element={<Body cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;