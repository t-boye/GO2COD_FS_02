import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    if (typeof addToCart === 'function') {
      addToCart(product);
    } else {
      console.error('addToCart is not a function');
      // Optionally, you could set some state to show an error message to the user
    }
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart} 
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 transition duration-200"
        aria-label={`Add ${product.title} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};

// Define the shape of the product object for better validation
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;