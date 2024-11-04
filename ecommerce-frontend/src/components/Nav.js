import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { CartContext } from '../context/CartContext'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartContext = useContext(CartContext); // Access the CartContext

  // Check if cartContext is defined and get the cart count
  const getCartCount = cartContext && cartContext.getCartCount ? cartContext.getCartCount : () => 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-16">
        <h1 className="text-white text-2xl font-bold">Online Store</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center text-white hover:text-yellow-400 transition duration-300">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/products" className="text-white hover:text-yellow-400 transition duration-300">
            Products
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400 transition duration-300">
            About Us
          </Link>
          <Link to="/cart" className="flex items-center text-white hover:text-yellow-400 transition duration-300">
            <FaShoppingCart className="mr-1" /> Cart
            {/* Display the cart count */}
            <span className="ml-1 bg-yellow-400 text-gray-900 rounded-full px-2 text-xs">
              {getCartCount()}
            </span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white" aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
        <Link to="/" className="flex items-center block text-white hover:text-yellow-400 transition duration-300">
          <FaHome className="mr-1" /> Home
        </Link>
        <Link to="/products" className="block text-white hover:text-yellow-400 transition duration-300">
          Products
        </Link>
        <Link to="/about" className="block text-white hover:text-yellow-400 transition duration-300">
          About Us
        </Link>
        <Link to="/cart" className="flex items-center block text-white hover:text-yellow-400 transition duration-300">
          <FaShoppingCart className="mr-1" /> Cart
          {/* Display the cart count in mobile menu as well */}
          <span className="ml-1 bg-yellow-400 text-gray-900 rounded-full px-2 text-xs">
            {getCartCount()}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;