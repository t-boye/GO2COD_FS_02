import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;