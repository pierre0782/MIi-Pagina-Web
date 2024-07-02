import React, { useState, forwardRef, useEffect } from 'react';
import './style.css'; 
import image1 from './imagenes/10.jpg'; 
import image2 from './imagenes/2.png';
import image3 from './imagenes/3.png';
import image4 from './imagenes/4.png';
import image5 from './imagenes/5.png';
import image6 from './imagenes/6.png';
import image7 from './imagenes/7.png';
import image8 from './imagenes/8.png';
import image9 from './imagenes/9.png';
import image10 from './imagenes/11.jpg';
import image11 from './imagenes/12.png';
import image12 from './imagenes/13.png';
import image13 from './imagenes/14.png';
import image14 from './imagenes/15.png';
import image15 from './imagenes/16.png';
import image16 from './imagenes/17.png';
import image17 from './imagenes/foto1.jpg';
import image18 from './imagenes/foto2.jpg';

const allImages = [
  { src: image1, name: 'Luis Zambrano', age: '35 años', height: '1.75 cm', profession: 'Ingeniero', ethnicity: 'Latino', interests: ['Conciertos', 'Cine', 'Autos'], sports: ['Fútbol', 'Natación'], university: 'UNT', distance: '64 kilómetros', intention: 'Hacer amigos' },
  { src: image2, name: 'Santiago Pacherres', age: '30 años', height: '1.80 cm', profession: 'Médico', ethnicity: 'Caucásico', interests: ['Lectura', 'Viajes'], sports: ['Tenis', 'Ciclismo'], university: 'UNT', distance: '64 kilómetros', intention: 'Hacer amigos' },
  { src: image3, name: 'Mauricio Berrospi', age: '35 años', height: '1.65 cm', profession: 'Abogado', ethnicity: 'Afroamericano', interests: ['Música', 'Teatro'], sports: ['Baloncesto'], university: 'UNT', distance: '64 kilómetros', intention: 'Hacer amigos'  },
  { src: image4, name: 'Oscar Llaure', age: '42 años', height: '1.70 cm', profession: 'Arquitecto', ethnicity: 'Asiático', interests: ['Fotografía', 'Pintura'], sports: ['Yoga'], university: 'UNT', distance: '64 kilómetros', intention: 'Hacer amigos' },
  { src: image5, name: 'Stefano Yepez', age: '32 años', height: '1.75 cm', profession: 'Ingeniero', ethnicity: 'Latino', interests: ['Fotografía', 'Futbol'], sports: ['Futbol'], university: 'UNT', distance: '64 kilómetros', intention: 'Hacer amigos' },
  { src: image6, name: 'Walter Ivan', age: '37 años', height: '1.75 cm', profession: 'Docente', ethnicity: 'Caucásico', interests: ['Tenis', 'Pintura'], sports: ['Atletismo'], university: 'UNT', distance: '64 kilómetros', intention: 'Hacer amigos'},
  { src: image7, name: 'Matias Alcalde', age: '43 años', height: '1.65 cm', profession: 'Empresario', ethnicity: 'Asiático', interests: ['Lectura', 'Autos'], sports: ['Snowboard'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image8, name: 'Angelo Sosa', age: '32 años', height: '1.83 cm', profession: 'Ingeniero de Sistemas', ethnicity: 'Latino', interests: ['Música', 'Deporte', 'Conciertos'], sports: ['Ninguno'], university: 'UNT', distance: '64 kilómetros', intention: 'Hacer amigos'},
  { src: image9, name: 'Carlos Perez', age: '29 años', height: '1.70 cm', profession: 'Diseñador Gráfico', ethnicity: 'Latino', interests: ['Arte', 'Cine', 'Videojuegos'], sports: ['Running'], university: 'UPC', distance: '64 kilómetros', intention: 'Hacer amigos' },
  { src: image10, name: 'Alejandro Ruiz', age: '34 años', height: '1.80 cm', profession: 'Ingeniero Químico', ethnicity: 'Caucásico', interests: ['Viajes', 'Cocina'], sports: ['Golf'], university: 'UCV', distance: '64 kilómetros', intention: 'Hacer amigos' },
  { src: image11, name: 'Miguel Angel', age: '28 años', height: '1.75 cm', profession: 'Programador', ethnicity: 'Afroamericano', interests: ['Tecnología', 'Cómics'], sports: ['Esgrima'], university: 'UPAO', distance: '64 kilómetros', intention: 'Hacer amigos' },
  { src: image12, name: 'Javier Salas', age: '39 años', height: '1.68 cm', profession: 'Científico', ethnicity: 'Asiático', interests: ['Lectura', 'Astronomía'], sports: ['Ninguno'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image13, name: 'Ricardo Chavez', age: '31 años', height: '1.82 cm', profession: 'Economista', ethnicity: 'Latino', interests: ['Música', 'Senderismo'], sports: ['Fútbol'], university: 'UPN', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image14, name: 'Fernando Lopez', age: '40 años', height: '1.75 cm', profession: 'Chef', ethnicity: 'Caucásico', interests: ['Cocina', 'Vinos'], sports: ['Ninguno'], university: 'UCV', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image15, name: 'Alfredo Gomez', age: '27 años', height: '1.77 cm', profession: 'Fotógrafo', ethnicity: 'Afroamericano', interests: ['Viajes', 'Naturaleza'], sports: ['Escalada'], university: 'UPC', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image16, name: 'Pablo Rojas', age: '36 años', height: '1.79 cm', profession: 'Periodista', ethnicity: 'Latino', interests: ['Historia', 'Cine'], sports: ['Natación'], university: 'UPAO', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image17, name: 'Hector Torres', age: '33 años', height: '1.78 cm', profession: 'Publicista', ethnicity: 'Caucásico', interests: ['Fotografía', 'Teatro'], sports: ['Fútbol'], university: 'UTP', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image18, name: 'Juan Rivera', age: '41 años', height: '1.80 cm', profession: 'Ingeniero Mecánico', ethnicity: 'Latino', interests: ['Cine', 'Autos'], sports: ['Ciclismo'], university: 'UPN', distance: '64 kilómetros', intention: 'Hacer amigos' }
];

const Main = forwardRef((props, ref) => {
  const getRandomImages = () => {
    const shuffled = allImages.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  };

  const [images, setImages] = useState(getRandomImages());

  const handleKissClick = (index) => {
    const newImages = [...images];
    newImages[index] = getRandomImages()[0];
    setImages(newImages);
  };

  const handleImageClick = (person) => {
    props.onPersonClick(person);
  };

  const handleChatClick = (person) => {
    props.onChatClick(person);
  };

  const handleFavoriteClick = (person) => {
    props.onFavoriteClick(person);
  };

  const handleRefreshClick = () => {
    setImages(getRandomImages());
  };

  React.useImperativeHandle(ref, () => ({
    handleRefreshClick,
  }));

  return (
    <div className="main-content">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={image.src} alt={`Image ${index + 1}`} onClick={() => handleImageClick(image)} />
          <div className="image-overlay" onClick={() => handleImageClick(image)}>
            <div className="image-details">
              <h3>{image.name}</h3>
              <p>{image.age}</p>
            </div>
          </div>
          <div className="image-icons">
            <i className="fas fa-comments" onClick={() => handleChatClick(image)}></i>
            <i className="fas fa-kiss-wink-heart" onClick={() => handleKissClick(index)}></i>
            <i className="fas fa-star" onClick={() => handleFavoriteClick(image)}></i>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Main;
