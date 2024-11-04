// src/context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the CartContext
export const CartContext = createContext();

// CartProvider component to manage cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on initial render
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity if item already exists in the cart
        return prevItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        // Add new item to the cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Function to get the total count of items in the cart
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Function to get the total price of items in the cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Provide cart state and functions to the context
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};