import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <h1 className="text-white text-2xl">Online Store</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="text-white">Home</a></li>
        <li><a href="/cart" className="text-white">Cart</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;