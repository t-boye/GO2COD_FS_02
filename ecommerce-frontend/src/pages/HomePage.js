// src/pages/HomePage.js
import React, { useContext } from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { ShoppingCartContext } from '../context/ShoppingCartContext'; // Import your context

const HomePage = ({ products }) => {
  const { addToCart } = useContext(ShoppingCartContext); // Get addToCart from context

  return (
    <div className="">
      <Hero /> 
      <ProductList products={products} addToCart={addToCart} /> {/* Pass addToCart as a prop */}
    </div>
  );
};

export default HomePage;