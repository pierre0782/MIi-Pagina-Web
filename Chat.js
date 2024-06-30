import React, { useState } from 'react';
import './style.css';
import profileImage from './imagenes/3.png';
import iconImage1 from './imagenes/contactos.png'; 
import iconImage2 from './imagenes/gif.png'; 
import instagramIcon from './imagenes/instagram.png'; // Asegúrate de que esta ruta sea correcta
import phoneIcon from './imagenes/phone.png'; // Asegúrate de que esta ruta sea correcta
import editIcon from './imagenes/facebook.png'; 

const Chat = ({ person, onBackClick }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  const handleIconClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="chat-messages-header">
          <img src={profileImage} alt="Lucas Modrid" />
          <h3>Chat con Lucas Modrid el 26/06/2004</h3>
        </div>
        <div className="chat-messages-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.sender === 'user' ? 'user' : ''}`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-messages-footer">
          <div className="icon-container" onClick={handleIconClick}>
            <img src={iconImage1} alt="Icon 1" className="footer-icon"/>
          </div>
          <div className="icon-container">
            <img src={iconImage2} alt="Icon 2" className="footer-icon"/>
          </div>
          <input
            type="text"
            placeholder="Escribir un mensaje"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
      {showDetails && (
        <div className="contact-details">
          <div className="contact-item">
            <img src={instagramIcon} alt="Instagram" className="contact-icon"/>
            <span>pierzevallosb</span>
            <img src={editIcon} alt="Edit" className="edit-icon"/>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" className="contact-icon"/>
            <span>+51 900 799 721</span>
            <img src={editIcon} alt="Edit" className="edit-icon"/>
          </div>
        </div>
      )}
      <div className="chat-profile">
        <img src={profileImage} alt="Lisa Medina" className="profile-image" />
        <h2>Lisa Medina 22</h2>
        <p>Heterosexual</p>
        <p>A 2 kilómetros de distancia</p>
        <div className="profile-details">
          <p>Busco: Diversión, pero no me cierro</p>
          <div className="profile-tags">
            <span>Español</span>
            <span>Ingles</span>
          </div>
          <div className="profile-icons">
            <i className="fas fa-star"></i>
            <i className="fas fa-kiss-wink-heart"></i>
            <i className="fas fa-comments"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;