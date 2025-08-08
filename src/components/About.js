import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '500+', label: 'Erfolgreiche Umzüge' },
    { number: '5', label: 'Jahre Erfahrung' },
    { number: '98%', label: 'Zufriedene Kunden' },
    { number: '24/7', label: 'Kundenservice' }
  ];

  const advantages = [
    {
      icon: '🛡️',
      title: 'Vollversicherung',
      description: 'Alle Transporte sind vollversichert - für Ihre Sicherheit und unser Vertrauen.'
    },
    {
      icon: '⚡',
      title: 'Schnelle Reaktion',
      description: 'Wir sind innerhalb von 2-4 Stunden verfügbar und reagieren schnell auf Ihre Anfragen.'
    },
    {
      icon: '👥',
      title: 'Erfahrene Teams',
      description: 'Unsere Mitarbeiter sind speziell geschult und verfügen über jahrelange Erfahrung.'
    },
    {
      icon: '📱',
      title: 'Moderne Technik',
      description: 'GPS-Tracking und digitale Dokumentation für transparente Abläufe.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Über SaveMove Umzüge</h2>
            <p className="about-subtitle">
              Seit 2019 sind wir Ihr vertrauensvoller Partner für professionelle Umzüge in ganz Deutschland. 
              Wir verstehen, dass ein Umzug mehr als nur Transport bedeutet - es ist ein neuer Lebensabschnitt.
            </p>
            
            <div className="about-description">
              <p>
                Bei SaveMove Umzüge steht der Kunde im Mittelpunkt. Wir bieten nicht nur Transporte, 
                sondern einen umfassenden Service, der Ihnen den Umzug so stressfrei wie möglich macht. 
                Von der ersten Beratung bis zur Einrichtung in Ihrem neuen Zuhause - wir sind für Sie da.
              </p>
              <p>
                Unser Team besteht aus erfahrenen Fachkräften, die jeden Umzug mit höchster Sorgfalt 
                und Professionalität durchführen. Wir verwenden modernste Technik und hochwertige 
                Verpackungsmaterialien, um Ihre Wertsachen optimal zu schützen.
              </p>
              <div className="owner-info">
                <h3>Unser Inhaber</h3>
                <div className="owner-details">
                  <div className="owner-name">Hassan Al Mohamad</div>
                  <div className="owner-title">Geschäftsführer & Inhaber</div>
                  <p>
                    Als erfahrener Unternehmer und Experte im Umzugsgeschäft führt Hassan Al Mohamad 
                    SaveMove Umzüge mit Leidenschaft und Fachkompetenz. Sein Ziel ist es, jedem Kunden 
                    einen stressfreien und professionellen Umzug zu ermöglichen.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="moving-scene">
                <div className="house house-1"></div>
                <div className="house house-2"></div>
                <div className="truck"></div>
                <div className="road"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="advantages-section">
          <h3 className="advantages-title">Warum SaveMove Umzüge?</h3>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">{advantage.icon}</div>
                <h4 className="advantage-title">{advantage.title}</h4>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certification-section">
          <div className="certification-content">
            <h3>Zertifizierungen & Qualität</h3>
            <div className="certifications">
              <div className="certification">
                <span className="cert-icon">🏆</span>
                <span>ISO 9001 Zertifiziert</span>
              </div>
              <div className="certification">
                <span className="cert-icon">🛡️</span>
                <span>Haftpflichtversicherung</span>
              </div>
              <div className="certification">
                <span className="cert-icon">⭐</span>
                <span>4.9/5 Sterne Bewertung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 