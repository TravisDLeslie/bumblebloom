// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/icons/Bumblebloomlogo.png'; // Adjust this path to your logo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-bumbleGreen text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <img src={logo} alt="Bumble & Bloom Logo" className="h-8 sm:h-10 md:h-12 mr-3" />
        </div>
        <nav className="hidden md:block ml-auto">
          <ul className="flex text-xl space-x-8">
            <li>
              <Link to="services" smooth={true} duration={500} className="cursor-pointer font-light hover:text-bumbleYellow">
                Services
              </Link>
            </li>
            <li>
              <Link to="reviews" smooth={true} duration={500} className="cursor-pointer font-light hover:text-bumbleYellow">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer font-light hover:text-bumbleYellow">
                About
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer font-light hover:text-bumbleYellow">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden ml-auto">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-bumbleGreen">
          <ul className="flex flex-col items-center text-xl space-y-4 py-4">
            <li>
              <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-bumbleYellow" onClick={toggleDropdown}>
                Services
              </Link>
            </li>
            <li>
              <Link to="reviews" smooth={true} duration={500} className="cursor-pointer hover:text-bumbleYellow" onClick={toggleDropdown}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-bumbleYellow" onClick={toggleDropdown}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-bumbleYellow" onClick={toggleDropdown}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
