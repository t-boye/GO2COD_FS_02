import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="p-4">
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;