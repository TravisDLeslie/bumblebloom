// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/icons/Bumblebloomlogo.png'; // Adjust this path to your logo

const Footer = () => {
  return (
    <footer className="bg-bumbleGreen text-white py-4">
      <div className="w-full md:max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center">
          <img src={logo} alt="Bumble & Bloom Logo" className="h-8 md:h-12  mr-3" />
        </div>
        <div className="text-white text-sm md:text-base">
          All rights reserved © 2024 Bumble & Bloom
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  