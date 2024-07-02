import React from 'react';
import './style.css';

const Single = ({ messages, activeTab, onTabClick, onSelectPerson, favorites }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'mensajes':
        return Object.entries(messages).map(([personName, messages]) => {
          const lastMessage = messages[messages.length - 1];
          const person = messages[0]?.person || {}; // Obtenemos la información completa de la persona
          return (
            <div key={personName} className="message-item" onClick={() => onSelectPerson(person)}>
              <img src={person.src} alt={personName} className="message-avatar"/>
              <div className="message-text">
                <span className="message-name">{personName}</span>
                <span className="message-preview">{lastMessage.text}</span>
              </div>
            </div>
          );
        });
      case 'besos':
        return (
          <div className="messages-list">
            {/* Aquí agrega los usuarios que enviaron besos */}
          </div>
        );
      case 'favoritos':
        return (
          <div className="messages-list">
            {favorites.map((person) => (
              <div key={person.name} className="message-item" onClick={() => onSelectPerson(person)}>
                <img src={person.src} alt={person.name} className="message-avatar"/>
                <div className="message-text">
                  <span className="message-name">{person.name}</span>
                  <span className="message-preview">{person.profession}</span>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="single">
      <div className="messages-header icons-header">
        <div className={`icon-container ${activeTab === 'mensajes' ? 'active' : ''}`} onClick={() => onTabClick('mensajes')}>
          <i className="fas fa-comments"></i>
        </div>
        <div className={`icon-container ${activeTab === 'besos' ? 'active' : ''}`} onClick={() => onTabClick('besos')}>
          <i className="fas fa-kiss-wink-heart"></i>
        </div>
        <div className={`icon-container ${activeTab === 'favoritos' ? 'active' : ''}`} onClick={() => onTabClick('favoritos')}>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <div className="messages-list">
        {renderContent()}
      </div> {/* Corrección: cierre correcto de la etiqueta */}
      <div className="blocked-accounts">
        <span>Cuentas bloqueadas</span>
      </div>
    </div>
  );
};

export default Single;
