import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Privatumzüge',
      description: 'Komplette Umzüge für Privatpersonen - von der Wohnung bis zum Einfamilienhaus. Wir packen, transportieren und richten alles ein.',
      features: ['Professionelle Verpackung', 'Sichere Transporte', 'Einrichtung vor Ort']
    },
    {
      icon: '🏢',
      title: 'Büroumzüge',
      description: 'Spezialisiert auf gewerbliche Umzüge. Wir minimieren Ausfallzeiten und sorgen für einen reibungslosen Übergang.',
      features: ['IT-Umzug', 'Möbeltransport', 'Wochenend-Service']
    },
    {
      icon: '📦',
      title: 'Verpackung & Lagerung',
      description: 'Professionelle Verpackung Ihrer Wertsachen und sichere Lagerung in unseren klimakontrollierten Räumen.',
      features: ['Spezialverpackung', 'Klimakontrolle', '24/7 Sicherheit']
    },
    {
      icon: '🚚',
      title: 'Express-Transport',
      description: 'Schnelle Lieferungen und Transporte für dringende Aufträge. Wir sind innerhalb von 2-4 Stunden verfügbar.',
      features: ['2-4 Stunden Verfügbarkeit', 'Express-Lieferung', 'Notfall-Service']
    },
    {
      icon: '🌍',
      title: 'Internationale Umzüge',
      description: 'Professionelle internationale Umzüge mit Zollabwicklung und weltweitem Netzwerk.',
      features: ['Zollabwicklung', 'Weltweites Netzwerk', 'Versicherung']
    },
    {
      icon: '🎨',
      title: 'Kunst & Antiquitäten',
      description: 'Spezialisierte Transporte für wertvolle Kunstwerke und Antiquitäten mit höchster Sorgfalt.',
      features: ['Klimakontrolle', 'Spezialverpackung', 'Versicherung']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Unsere Leistungen</h2>
          <p className="services-subtitle">
            Wir bieten umfassende Umzugsdienstleistungen für jeden Bedarf. 
            Von der Planung bis zur Einrichtung - wir sind Ihr Partner.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-btn">Mehr erfahren</button>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <div className="cta-content">
            <h3>Brauchen Sie ein individuelles Angebot?</h3>
            <p>Kontaktieren Sie uns für eine kostenlose Beratung und ein maßgeschneidertes Angebot.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">Kostenloses Angebot</a>
              <a href="tel:+491772277318" className="btn btn-secondary">📞 Anrufen</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 