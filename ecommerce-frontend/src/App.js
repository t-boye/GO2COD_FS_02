// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext'; 
import ErrorBoundary from './components/ErrorBoundary';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound'; // Import a NotFound component

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <ErrorBoundary>
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </ErrorBoundary>
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;