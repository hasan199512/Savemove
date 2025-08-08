import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '+491772277318';
  const message = 'Hallo! Ich interessiere mich für Ihre Umzugsdienstleistungen. Können Sie mir mehr Informationen geben?';
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button-container">
      <button 
        className="whatsapp-button"
        onClick={handleClick}
        aria-label="Kontaktieren Sie uns über WhatsApp"
        title="WhatsApp Kontakt"
      >
        <span className="whatsapp-icon">📱</span>
        <span className="whatsapp-text">WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppButton; 