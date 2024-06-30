import React from 'react';
import './style.css'; 
import logoImage from './imagenes/logo.png'; // Asegúrate de que esta ruta sea correcta
import profileImage from './imagenes/chica.jpg';

const Header = ({ onHomeClick }) => {
  return (
    <header className="container-fluid navbar-expand-lg">
      <div className="header-content">
        <div className="logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
          <span className="logo-text">MY|SUGARDADDY</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={onHomeClick}>
                <i className="fas fa-home"></i> INICIO
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-crown" style={{ color: 'blue' }}></i> VIP
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-coins" style={{ color: 'gold' }}></i> CREDITOS
              </a>
            </li>
          </ul>
        </nav>
        <div className="user-profile">
          <img src={profileImage} alt="Profile" className="profile-image" /> 
          <span className="User-text">DULZURA03</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
