import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Simuliere Formular-Submission
    setTimeout(() => {
      const mailtoLink = `mailto:hassanalmohamad47@gmail.com?subject=Kontaktanfrage von ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\n\nNachricht:\n${formData.message}`)}`;
      
      window.location.href = mailtoLink;
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/491772277318?text=${encodeURIComponent('Hallo! Ich interessiere mich für Ihre Umzugsdienstleistungen. Können Sie mir mehr Informationen geben?')}`;

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Kontaktieren Sie uns</h2>
          <p>Lassen Sie uns gemeinsam Ihren Umzug planen</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <h3>Kontaktformular</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  required
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+49 123 456 789"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Beschreiben Sie Ihren Umzug und Ihre Anforderungen..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </form>
            
            {submitSuccess && (
              <div className="success-message">
                ✅ Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </div>
            )}
            
            {submitError && (
              <div className="error-message">
                ❌ {submitError}
              </div>
            )}
          </div>
          
          <div className="contact-info-section">
            <h3>Direkter Kontakt</h3>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Telefon</h4>
                  <a href="tel:+491772277318">+49 177 227 731 8</a>
                  <p>Mo-Fr: 8:00-18:00, Sa: 9:00-14:00</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Direkt über WhatsApp chatten
                  </a>
                  <p>Schnelle Antworten innerhalb von Minuten</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>E-Mail</h4>
                  <a href="mailto:hassanalmohamad47@gmail.com">hassanalmohamad47@gmail.com</a>
                  <p>Detaillierte Anfragen und Angebote</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Adresse</h4>
                  <p>Amendestr 12<br />13409 Berlin</p>
                  <p>Deutschland</p>
                </div>
              </div>
            </div>
            
            <div className="emergency-contact">
              <h4>🚨 Notfall-Hotline</h4>
              <p>Für dringende Umzüge außerhalb der Geschäftszeiten:</p>
              <a href="tel:+491772277318" className="emergency-phone">
                +49 177 227 731 8
              </a>
            </div>
          </div>
        </div>
        
        <div className="map-section">
          <h3>Unser Standort</h3>
          <div className="map-placeholder">
            <p>📍 Berlin, Deutschland</p>
            <p>Wir sind in ganz Deutschland tätig und kommen gerne zu Ihnen!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 