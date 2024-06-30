import React from 'react';
import './style.css'; 

const Informacion = ({ person, onBackClick }) => {
  if (!person) return null;

  return (
    <div className="info-container">
      <div className="info-card">
        <img src={person.src} alt={person.name} className="info-image"/>
        <div className="info-details">
          <h2>{person.name}</h2>
          <p>En busca de un Sugar Daddy? escríbeme para disfrutar juntos de la vida. ¿Te animas?</p>
          <ul>
            <li><strong>Edad:</strong> {person.age}</li>
            <li><strong>Altura:</strong> 1.85 cm</li>
            <li><strong>Profesión:</strong> Ingeniero</li>
            <li><strong>Etnia:</strong> Latino</li>
          </ul>
          <div className="info-tags">
            <div><strong>Idioma:</strong> <span>Español</span> <span>Inglés</span></div>
            <div><strong>Ocio:</strong> <span>Conciertos</span> <span>Cine</span> <span>Autos</span></div>
            <div><strong>Deporte:</strong> <span>Fútbol</span> <span>Natación</span></div>
          </div>
          <div className="info-icons">
            <div className="icon-container">
              <i className="fas fa-comments"></i>
            </div>
            <div className="icon-container">
              <i className="fas fa-kiss-wink-heart"></i>
            </div>
            <div className="icon-container">
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
      <button onClick={onBackClick} className="back-button">Back</button>
    </div>
  );
};

export default Informacion;
