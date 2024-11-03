import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ products, addToCart }) => {
  return (
    <div className="px-8 md:px-16">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Online Store</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;