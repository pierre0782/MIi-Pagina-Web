import React, { useState } from 'react';
import './style.css';
import iconImage1 from './imagenes/contactos.png'; 
import iconImage2 from './imagenes/gif.png'; 
import instagramIcon from './imagenes/instagram.png'; 
import phoneIcon from './imagenes/phone.png'; 
import facebookIcon from './imagenes/facebook.png'; 
import gif1 from './imagenes/GIF1.gif'; 
import gif2 from './imagenes/GIF2.gif'; 
import gif3 from './imagenes/GIF3.gif'; 
import gif4 from './imagenes/GIF4.gif'; 
import gif5 from './imagenes/GIF5.gif'; 
import gif6 from './imagenes/GIF6.gif'; 

const Chat = ({ person }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [showGifs, setShowGifs] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const timestamp = new Date();
      setMessages([...messages, { text: newMessage, sender: 'user', timestamp }]);
      setNewMessage('');
    }
  };

  const handleIcon1Click = () => {
    setShowDetails(!showDetails);
    setShowGifs(false); // Asegúrate de que los GIFs estén ocultos cuando se muestran los detalles de contacto
  };

  const handleIcon2Click = () => {
    setShowGifs(!showGifs);
    setShowDetails(false); // Asegúrate de que los detalles de contacto estén ocultos cuando se muestran los GIFs
  };

  const handleContactClick = (icon, content) => {
    const timestamp = new Date();
    setMessages([...messages, { text: `<img src="${icon}" alt="icon" class="contact-icon"/> ${content}`, sender: 'user', timestamp, isContact: true }]);
    setShowDetails(false); // Oculta los detalles de contacto después de hacer clic
  };

  const handleGifClick = (gif) => {
    const timestamp = new Date();
    setMessages([...messages, { text: `<img src="${gif}" alt="GIF" class="gif-img"/>`, sender: 'user', timestamp, isGif: true }]);
    setShowGifs(false); // Oculta los GIFs después de hacer clic
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="chat-messages-header">
          <img src={person.src} alt={person.name} className="profile-image-header"/>
          <h3>Chat con {person.name}</h3>
        </div>
        <div className="chat-messages-body">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender === 'user' ? 'user' : ''}`}>
              <div className="message-content" dangerouslySetInnerHTML={{ __html: message.text }}></div>
              <div className="message-timestamp">
                {message.timestamp.toLocaleDateString()} {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
        <div className="chat-messages-footer">
          <div className="icon-container" onClick={handleIcon1Click}>
            <img src={iconImage1} alt="Icon 1" className="footer-icon"/>
          </div>
          <div className="icon-container" onClick={handleIcon2Click}>
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
        {showDetails && (
          <div className="contact-details">
            <div className="contact-item" onClick={() => handleContactClick(instagramIcon, 'pierzevallosb')}>
              <img src={instagramIcon} alt="Instagram" className="contact-icon"/>
              <span>pierzevallosb</span>
            </div>
            <div className="contact-item" onClick={() => handleContactClick(phoneIcon, '+51 900 799 721')}>
              <img src={phoneIcon} alt="Phone" className="contact-icon"/>
              <span>+51 900 799 721</span>
            </div>
            <div className="contact-item" onClick={() => handleContactClick(facebookIcon, 'facebook.com/pierzevallosb')}>
              <img src={facebookIcon} alt="Facebook" className="contact-icon"/>
              <span>facebook.com/pierzevallosb</span>
            </div>
          </div>
        )}
        {showGifs && (
          <div className="gif-container">
            <div className="gif-item" onClick={() => handleGifClick(gif1)}><img src={gif1} alt="GIF 1" /></div>
            <div className="gif-item" onClick={() => handleGifClick(gif2)}><img src={gif2} alt="GIF 2" /></div>
            <div className="gif-item" onClick={() => handleGifClick(gif3)}><img src={gif3} alt="GIF 3" /></div>
            <div className="gif-item" onClick={() => handleGifClick(gif4)}><img src={gif4} alt="GIF 4" /></div>
            <div className="gif-item" onClick={() => handleGifClick(gif5)}><img src={gif5} alt="GIF 5" /></div>
            <div className="gif-item" onClick={() => handleGifClick(gif6)}><img src={gif6} alt="GIF 6" /></div>
          </div>
        )}
      </div>
      <div className="chat-profile">
        <img src={person.src} alt={person.name} className="profile-image" />
        <h2>{person.name} <span>{person.age}</span></h2>
        <p><i className="fas fa-graduation-cap"></i> {person.profession}</p>
        <p><i className="fas fa-map-marker-alt"></i> A {person.distance} de distancia</p>
        <button className="profile-button"><i className="fas fa-hand-sparkles"></i> Busco: {person.intention}</button>
        <div className="profile-details">
          <p><strong>Altura:</strong> {person.height}</p>
          <p><strong>Etnia:</strong> {person.ethnicity}</p>
        </div>
        <div className="profile-tags">
          <div><strong>Intereses:</strong> {person.interests && person.interests.map(interest => <span key={interest}>{interest}</span>)}</div>
          <div><strong>Deportes:</strong> {person.sports && person.sports.map(sport => <span key={sport}>{sport}</span>)}</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
