import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

  // Optional: Calculate total price if prices are available in cartItems
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-disc pl-5 mb-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} - Quantity: {item.quantity}
                </span>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="ml-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;