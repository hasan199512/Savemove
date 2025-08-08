import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // E-Mail-Inhalt erstellen
      const emailSubject = `Neue Anfrage von ${formData.name} - SaveMove Umzüge`;
      const emailBody = `
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone}
Gewünschte Leistung: ${formData.service}

Nachricht:
${formData.message}

---
Diese Nachricht wurde über das Kontaktformular auf der SaveMove Umzüge Webseite gesendet.
      `;

      // E-Mail-Link erstellen (mailto:)
      const mailtoLink = `mailto:hassanalmohamad47@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // E-Mail-Client öffnen
      window.open(mailtoLink);
      
      // Erfolg anzeigen
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Erfolgsmeldung nach 5 Sekunden zurücksetzen
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      setSubmitError('Es gab einen Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Telefon',
      value: '+49 177 227 731 8',
      link: 'tel:+491772277318'
    },
    {
      icon: '📧',
      title: 'E-Mail',
      value: 'hassanalmohamad47@gmail.com',
      link: 'mailto:hassanalmohamad47@gmail.com'
    },
    {
      icon: '📍',
      title: 'Adresse',
      value: 'Amendestr 12, 13409 Berlin',
      link: 'https://maps.google.com'
    },
    {
      icon: '🕒',
      title: 'Öffnungszeiten',
      value: 'Mo-Fr: 8:00-18:00, Sa: 9:00-14:00',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Kontaktieren Sie uns</h2>
          <p className="contact-subtitle">
            Lassen Sie uns gemeinsam Ihren perfekten Umzug planen. 
            Wir sind für Sie da und freuen uns auf Ihre Anfrage.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <h3>Kostenloses Angebot anfordern</h3>
            {submitSuccess && (
              <div className="success-message">
                ✅ Vielen Dank! Ihre Nachricht wurde erfolgreich an hassanalmohamad47@gmail.com gesendet. 
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </div>
            )}
            {submitError && (
              <div className="error-message">
                ❌ {submitError}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 177 227 731 8"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Gewünschte Leistung</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Bitte wählen Sie</option>
                    <option value="privat">Privatumzug</option>
                    <option value="buero">Büroumzug</option>
                    <option value="verpackung">Verpackung & Lagerung</option>
                    <option value="express">Express-Transport</option>
                    <option value="international">Internationaler Umzug</option>
                    <option value="kunst">Kunst & Antiquitäten</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Beschreiben Sie Ihren Umzug und Ihre Wünsche..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Angebot anfordern'}
              </button>
            </form>
          </div>
          
          <div className="contact-info-section">
            <h3>Kontaktinformationen</h3>
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="emergency-contact">
              <h4>🚨 Notfall-Service</h4>
              <p>Für dringende Anfragen außerhalb der Geschäftszeiten:</p>
              <a href="tel:+491772277318" className="emergency-btn">
                📞 24/7 Notfall-Hotline
              </a>
            </div>
          </div>
        </div>
        
        <div className="map-section">
          <h3>Unser Servicegebiet</h3>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="location-marker">
                <span className="marker-icon">📍</span>
                <span className="marker-text">SaveMove Umzüge</span>
              </div>
              <p>Wir bieten unsere Dienstleistungen in ganz Deutschland an.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 