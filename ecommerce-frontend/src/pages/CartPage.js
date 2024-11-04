// src/pages/CartPage.js
import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext'; // Ensure this path is correct

const CartPage = () => {
  const { cartItems, removeFromCart, getCartTotal, getCartCount } = useContext(ShoppingCartContext);

  if (!cartItems) {
    return <div className="text-center text-gray-500">Loading...</div>; // Optional: Handle loading state
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <div className="animate-bounce mb-4">
            {/* Replace this SVG with a GIF if you prefer */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18M3 3l3 18h12l3-18H3z"
              />
            </svg>
          </div>
          <p className="text-center text-gray-500">Your cart is empty🥲, purchase something </p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</h2>
            <h3 className="text-lg">Total Items: {getCartCount()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;