import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">Intern Project - Building a responsive online store</p>
        <p className="mb-4">Follow me on social media:</p>
        <div className="flex justify-center space-x-6">
          <a href="hhttps://github.com/t-boye" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tboyeofficial/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.youtube.com/@tboye.tech.official" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.tiktok.com/@tboye.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
            <FaTiktok size={24} />
          </a>
        </div>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Boye Emmanuel Tete | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;