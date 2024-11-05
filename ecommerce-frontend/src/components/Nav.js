// src/components/Navbar.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import logo from '../assets/images/Online_Shop_Logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useContext(ShoppingCartContext); // Accessing the context

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-16">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
        <img src={logo}  alt="Logo" className="h-12" /> 
        <h1 className="text-white text-2xl font-bold ml-2">Online Store</h1>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" icon={<FaHome />} label="Home" />
          <NavLink to="/products" label="Products" />
          <NavLink to="/about" label="About Us" />
          <CartLink count={getCartCount()} />
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white" aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
        <NavLink to="/" icon={<FaHome />} label="Home" />
        <NavLink to="/products" label="Products" />
        <NavLink to="/about" label="About Us" />
        <CartLink count={getCartCount()} />
      </div>
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ to, icon, label }) => (
  <Link to={to} className="flex items-center text-white hover:text-yellow-400 transition duration-300">
    {icon && <span className="mr-1">{icon}</span>}
    {label}
  </Link>
);

// CartLink component to display cart with count
const CartLink = ({ count }) => (
  <Link to="/cart" className="flex items-center text-white hover:text-yellow-400 transition duration-300">
    Cart
    <FaShoppingCart className="mr-1" />
    <span className="ml-1 bg-yellow-400 text-gray-900 rounded-full px-2 text-xs">
      {count}
    </span>
  </Link>
);

export default Navbar;