import React, { useState } from 'react';
import Dock from './Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => window.location.href = '/' },
    { icon: <VscArchive size={18} />, label: 'About', onClick: () => window.location.href = '/about' },
    { icon: <VscAccount size={18} />, label: 'Services', onClick: () => window.location.href = '/services' },
    { icon: <VscSettingsGear size={18} />, label: 'Offers', onClick: () => window.location.href = '/offers' },
  ];

  return (
    <header className="w-full p-4 md:p-6 shadow-md" style={{ backgroundColor: 'var(--ivory)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold" style={{ color: 'var(--gunmetal)' }}>The Smart Salon</a>
        
        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button id="menu-btn" onClick={toggleMenu} className="text-gunmetal focus:outline-none" aria-controls="menu" aria-expanded={isMenuOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <Dock 
            items={items}
            panelHeight={70}
            baseItemSize={50}
            magnification={90}
          />
          <a href="/booking" className="ml-8 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg cta-button">
            Book Now
          </a>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div id="menu" className={`${isMenuOpen ? '' : 'hidden'} md:hidden mt-4`}>
        <ul className="flex flex-col space-y-4">
          <li><a href="/" className="nav-link-mobile">Home</a></li>
          <li><a href="/about" className="nav-link-mobile">About</a></li>
          <li><a href="/services" className="nav-link-mobile">Services</a></li>
          <li><a href="/offers" className="nav-link-mobile">Offers</a></li>
          <li><a href="/reviews" className="nav-link-mobile">Reviews</a></li>
          <li>
            <a href="/booking" className="block mt-4 text-white text-center font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg cta-button">
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;