import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>SaveMove Umzüge</h3>
              <p>Ihr vertrauensvoller Partner für professionelle Umzüge in ganz Deutschland.</p>
              <div className="owner-footer">
                <span>Inhaber: Hassan Al Mohamad</span>
              </div>
            </div>
            <div className="social-links">
              <button className="social-link" aria-label="Facebook">
                📘
              </button>
              <button className="social-link" aria-label="Instagram">
                📷
              </button>
              <button className="social-link" aria-label="LinkedIn">
                💼
              </button>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Leistungen</h4>
            <ul className="footer-links">
              <li><a href="#services">Privatumzüge</a></li>
              <li><a href="#services">Büroumzüge</a></li>
              <li><a href="#services">Verpackung & Lagerung</a></li>
              <li><a href="#services">Express-Transport</a></li>
              <li><a href="#services">Internationale Umzüge</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Unternehmen</h4>
            <ul className="footer-links">
              <li><a href="#about">Über uns</a></li>
              <li><a href="#contact">Kontakt</a></li>
              <li><a href="#about">Karriere</a></li>
              <li><a href="#about">Partner</a></li>
              <li><a href="#about">Presse</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kontakt</h4>
            <div className="footer-contact">
              <p>📞 +49 177 227 731 8</p>
              <p>📧 hassanalmohamad47@gmail.com</p>
              <p>📍 Amendestr 12, 13409 Berlin</p>
              <p>🕒 Mo-Fr: 8:00-18:00, Sa: 9:00-14:00</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} SaveMove Umzüge. Alle Rechte vorbehalten.</p>
            <div className="footer-legal">
              <a href="#contact">Datenschutz</a>
              <a href="#contact">Impressum</a>
              <a href="#contact">AGB</a>
              <a href="#contact">Cookie-Einstellungen</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 