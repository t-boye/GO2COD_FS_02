// src/pages/CartPage.js
import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext'; // Ensure this path is correct

const CartPage = () => {
  const { cartItems, removeFromCart, getCartTotal, getCartCount } = useContext(ShoppingCartContext);

  if (!cartItems) {
    return <div>Loading...</div>; // Optional: Handle loading state
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${getCartTotal().toFixed(2)}</h2>
          <h3>Total Items: {getCartCount()}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;