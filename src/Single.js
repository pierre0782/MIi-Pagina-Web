import React from 'react';
import './style.css';
import Lucas from './imagenes/9.png';
import Pierreluiggi from './imagenes/1.png';
import Miguel from './imagenes/11.jpg';

const Single = ({ messages, activeTab, onTabClick, onSelectPerson, blockedUsers, favoriteUsers, toggleSingle }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'mensajes':
        return Object.entries(messages).map(([personName, messages]) => {
          const lastMessage = messages[messages.length - 1];
          const person = messages[0].person;
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
            <div className="message-item">
              <img src={Pierreluiggi} alt="Pierreluiggi" className="message-avatar"/>
              <div className="message-text">
                <span className="message-name">Pierreluiggi</span>
                <span className="message-preview">Te envió un beso</span>
              </div>
            </div>
            <div className="message-item">
              <img src={Lucas} alt="Lucas" className="message-avatar"/>
              <div className="message-text">
                <span className="message-name">Lucas</span>
                <span className="message-preview">Te ha enviado un beso</span>
              </div>
            </div>
            <div className="message-item">
              <img src={Miguel} alt="Miguel" className="message-avatar"/>
              <div className="message-text">
                <span className="message-name">Miguel</span>
                <span className="message-preview">Te ha enviado un beso</span>
              </div>
            </div>
          </div>
        );
      case 'favoritos':
        return favoriteUsers.map((person) => (
          <div key={person.name} className="message-item" onClick={() => onSelectPerson(person)}>
            <img src={person.src} alt={person.name} className="message-avatar"/>
            <div className="message-text">
              <span className="message-name">{person.name}</span>
            </div>
          </div>
        ));
      case 'blocked':
        return blockedUsers.map((person) => (
          <div key={person.name} className="message-item">
            <img src={person.src} alt={person.name} className="message-avatar"/>
            <div className="message-text">
              <span className="message-name">{person.name}</span>
              <span className="message-preview">Esta persona está bloqueada</span>
            </div>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="single">
      <button onClick={toggleSingle} className="toggle-button">Cerrar</button>
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
      </div>
      <div className="blocked-accounts" onClick={() => onTabClick('blocked')}>
        <span>Cuentas bloqueadas</span>
      </div>
    </div>
  );
};

export default Single;
