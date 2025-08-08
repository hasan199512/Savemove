import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Professionelle Umzüge mit
            <span className="highlight"> SaveMove</span>
          </h1>
          <p className="hero-subtitle">
            Wir machen Ihren Umzug stressfrei und sicher. Von der Planung bis zur Einrichtung 
            - wir sind Ihr vertrauensvoller Partner für jeden Umzug.
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <span>Professionelle Transporte</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🛡️</span>
              <span>Vollversicherung</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>Schnell & Zuverlässig</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Kostenloses Angebot
            </a>
            <a href="tel:+491772277318" className="btn btn-secondary">
              📞 Jetzt anrufen
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="moving-truck">
            <div className="truck-body">
              <div className="truck-cab"></div>
              <div className="truck-trailer"></div>
            </div>
            <div className="wheels">
              <div className="wheel"></div>
              <div className="wheel"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 