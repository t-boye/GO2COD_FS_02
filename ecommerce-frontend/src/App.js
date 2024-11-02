// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext'; // Import ShoppingCartProvider
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <ShoppingCartProvider> {/* Wrap your app with ShoppingCartProvider */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;