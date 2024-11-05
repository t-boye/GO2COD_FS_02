// src/pages/HomePage.js
import React, { useContext } from 'react';
import Hero from '../components/Hero';
import AdSection from '../components/AdSection';
import ProductList from '../components/ProductList';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import { ShoppingCartContext } from '../context/ShoppingCartContext'; // Import your context

const HomePage = ({ products }) => {
  const { addToCart } = useContext(ShoppingCartContext); 
  return (
    <div className="">
      <Hero /> 
      <AdSection />
      <ProductList products={products} addToCart={addToCart} /> 
      <CallToAction />
      <Testimonials />
    </div>
  );
};

export default HomePage;