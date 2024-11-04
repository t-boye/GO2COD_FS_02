import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

// Loading component
const Loading = () => (
  <div className="flex justify-center items-center h-full">
    <p className="text-lg">Loading products...</p>
  </div>
);

// Error component
const ErrorMessage = ({ message, onRetry }) => (
  <div className="flex flex-col justify-center items-center h-full">
    <p className="text-lg text-red-500">Error: {message}</p>
    <button onClick={onRetry} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
      Retry
    </button>
  </div>
);

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchProducts} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-lg">No products available.</p>
        </div>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  );
};

// PropTypes for better type checking
ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired, // Make it required
};

export default ProductList;