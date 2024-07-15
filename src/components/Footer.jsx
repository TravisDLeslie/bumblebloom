import React from 'react';
import logo from '../assets/icons/Bumblebloomlogo.png'; // Adjust this path to your logo

const Footer = () => {
  return (
    <footer className="bg-bumbleGreen text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Bumble & Bloom Logo" className="h-8 md:h-12 mr-3" />
        </div>
        <div className="text-white text-xs md:text-base text-center md:text-left">
          All rights reserved © 2024 Bumble & Bloom
        </div>
      </div>
    </footer>
  );
};

export default Footer;
