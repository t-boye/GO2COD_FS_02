import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-800 to-gray-600">
      <div className="flex flex-col items-center justify-center h-full text-white text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow">
  Welcome to Our Online Shop
</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6">
          Discover the latest trends and exclusive products just for you.
        </p>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h3m-3 0l-3 3m3-3l-3-3" />
  </svg>
  Shop Now
</button>
      </div>
      <div className="absolute inset-0">
        <img
          src="/assets/images/hero%20bg%202.jpg" 
          alt="Stylish products"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </div>
  );
};

export default Hero;