import React from 'react';
import './style.css'; 
import platinumLogo from './imagenes/gold (2).png'; 
import goldLogo from './imagenes/gold (1).png'; 
import plusLogo from './imagenes/plus.png'; 
import sugardaddyLogo from './imagenes/logo.png';

const VIP = ({ onBackClick }) => {
  return (
    <div className="vip-container">
      <button className="vip-card">
        <div className="vip-content">
          <img src={platinumLogo} alt="Platinum" className="vip-logo" />
          <img src={sugardaddyLogo} alt="SuggarDaddy" className="sugardaddy-logo" />
          <div className="vip-text">
            <h2>SUGGARDADDY PLATINUM™</h2>
            <p>Lleva todo lo que haces en SuggarDaddy al siguiente nivel</p>
          </div>
        </div>
      </button>
      <button className="vip-card">
        <div className="vip-content">
          <img src={goldLogo} alt="Gold" className="vip-logo" />
          <img src={sugardaddyLogo} alt="SuggarDaddy" className="sugardaddy-logo" />
          <div className="vip-text">
            <h2>SUGGARDADDY GOLD™</h2>
            <p>Descubre a quién le gustas y más</p>
          </div>
        </div>
      </button>
      <button className="vip-card">
        <div className="vip-content">
          <img src={plusLogo} alt="Plus" className="vip-logo" />
          <img src={sugardaddyLogo} alt="SuggarDaddy" className="sugardaddy-logo" />
          <div className="vip-text">
            <h2>SUGGARDADDY PLUS™</h2>
            <p>¡Likes ilimitados y más!</p>
          </div>
        </div>
      </button>
      <button onClick={onBackClick} className="back-button">Back</button>
    </div>
  );
};

export default VIP;
