import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>SaveMove Umzüge</h1>
          <span className="tagline">Ihr vertrauensvoller Partner für Umzüge</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Startseite</a></li>
            <li><a href="#services" className="nav-link">Leistungen</a></li>
            <li><a href="#about" className="nav-link">Über uns</a></li>
            <li><a href="#contact" className="nav-link">Kontakt</a></li>
          </ul>
        </nav>
        
        <div className="header-contact">
          <a href="tel:+491772277318" className="phone-link">
            📞 +49 177 227 731 8
          </a>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 