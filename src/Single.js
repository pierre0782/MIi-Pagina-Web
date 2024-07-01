import React, { useState } from 'react';
import './style.css'; 
import Constantino from './imagenes/9.png';
import Luis from './imagenes/1.png';
import Miguel from './imagenes/11.jpg';

const Single = () => {
  const [activeTab, setActiveTab] = useState('mensajes');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'mensajes':
        return (
          <div className="messages-list">
            <div className="message-item">
              <img src={Constantino} alt="Constantino" className="message-avatar"/>
              <div className="message-text">
                <span className="message-name">Constantino</span>
                <span className="message-preview">Hola</span>
              </div>
            </div>
            <div className="message-item">
              <img src={Luis} alt="Luis" className="message-avatar"/>
              <div className="message-text">
                <span className="message-name">Luis</span>
                <span className="message-preview">Hola</span>
              </div>
            </div>
            <div className="message-item">
              <img src={Miguel} alt="Miguel" className="message-avatar"/>
              <div className="message-text">
                <span className="message-name">Miguel</span>
                <span className="message-preview">Hola</span>
              </div>
            </div>
          </div>
        );
      case 'besos':
        return (
          <div className="messages-list">
            {/* Aquí agrega los usuarios que enviaron besos */}
            <div className="message-item">
              <img src={Luis} alt="Luis" className="message-avatar"/>
              <div className="message-text">
                <span className="message-name">Luis</span>
                <span className="message-preview">Te envió un beso</span>
              </div>
            </div>
          </div>
        );
      case 'favoritos':
        return (
          <div className="messages-list">
            {/* Aquí agrega los usuarios que están en favoritos */}
            <div className="message-item">
              <img src={Miguel} alt="Miguel" className="message-avatar"/>
              <div className="message-text">
                <span className="message-name">Miguel</span>
                <span className="message-preview">Es tu favorito</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="single">
      <div className="messages-header icons-header">
        <div className={`icon-container ${activeTab === 'mensajes' ? 'active' : ''}`} onClick={() => handleTabClick('mensajes')}>
          <i className="fas fa-comments"></i>
        </div>
        <div className={`icon-container ${activeTab === 'besos' ? 'active' : ''}`} onClick={() => handleTabClick('besos')}>
          <i className="fas fa-kiss-wink-heart"></i>
        </div>
        <div className={`icon-container ${activeTab === 'favoritos' ? 'active' : ''}`} onClick={() => handleTabClick('favoritos')}>
          <i className="fas fa-star"></i>
        </div>
      </div>
      {renderContent()}
      <div className="blocked-accounts">
        <span>Cuentas bloqueadas</span>
      </div>
    </div>
  );
};

export default Single;