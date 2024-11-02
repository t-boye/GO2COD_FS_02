import React from 'react';
import Product from './Product';

const ProductList = ({ products = [], addToCart }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  );
};

export default ProductList;