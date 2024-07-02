import React, { useState, forwardRef } from 'react';
import './style.css'; 
import image1 from './imagenes/10.jpg'; 
import image2 from './imagenes/2.png';
import image3 from './imagenes/3.png';
import image4 from './imagenes/4.png';
import image5 from './imagenes/5.png';
import image6 from './imagenes/6.png';
import image7 from './imagenes/7.png';
import image8 from './imagenes/8.png';

const additionalImages = [
  { src: image1, name: 'Luis Zambrano', age: '35 años', height: '1.75 cm', profession: 'Ingeniero', ethnicity: 'Latino', interests: ['Conciertos', 'Cine', 'Autos'], sports: ['Fútbol', 'Natación'], university: 'UNT', distance: '64 kilómetros', intention: 'Hacer amigos' },
  { src: image2, name: 'Santiago Pacherres', age: '30 años', height: '1.80 cm', profession: 'Médico', ethnicity: 'Caucásico', interests: ['Lectura', 'Viajes'], sports: ['Tenis', 'Ciclismo'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image3, name: 'Mauricio Berrospi', age: '35 años', height: '1.65 cm', profession: 'Abogado', ethnicity: 'Afroamericano', interests: ['Música', 'Teatro'], sports: ['Baloncesto'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos'  },
  { src: image4, name: 'Oscar Llaure', age: '42 años', height: '1.70 cm', profession: 'Arquitecto', ethnicity: 'Asiático', interests: ['Fotografía', 'Pintura'], sports: ['Yoga'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image5, name: 'Stefano Yepez', age: '32 años', height: '1.75 cm', profession: 'Ingeniero', ethnicity: 'Latino', interests: ['Fotografía', 'Futbol'], sports: ['Futbol'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image6, name: 'Walter Ivan', age: '37 años', height: '1.75 cm', profession: 'Docente', ethnicity: 'Caucásico', interests: ['Tenis', 'Pintura'], sports: ['Atletismo'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos'},
  { src: image7, name: 'Matias Alcalde', age: '43 años', height: '1.65 cm', profession: 'Empresario', ethnicity: 'Asiático', interests: ['Lectura', 'Autos'], sports: ['Snowboard'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
  { src: image8, name: 'Angelo Sosa', age: '32 años', height: '1.83 cm', profession: 'Ingeniero de Sistemas', ethnicity: 'Latino', interests: ['Música', 'Deporte', 'Conciertos'], sports: ['Ninguno'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos'},
];

const Main = forwardRef((props, ref) => {
  const initialImages = [
    { src: image1, name: 'Luis Zambrano', age: '35 años', height: '1.75 cm', profession: 'Ingeniero', ethnicity: 'Latino', interests: ['Conciertos', 'Cine', 'Autos'], sports: ['Fútbol', 'Natación'], university: 'UNT', distance: '64 kilómetros', intention: 'Hacer amigos' },
    { src: image2, name: 'Santiago Pacherres', age: '30 años', height: '1.80 cm', profession: 'Médico', ethnicity: 'Caucásico', interests: ['Lectura', 'Viajes'], sports: ['Tenis', 'Ciclismo'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
    { src: image3, name: 'Mauricio Berrospi', age: '35 años', height: '1.65 cm', profession: 'Abogado', ethnicity: 'Afroamericano', interests: ['Música', 'Teatro'], sports: ['Baloncesto'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos'  },
    { src: image4, name: 'Oscar Llaure', age: '42 años', height: '1.70 cm', profession: 'Arquitecto', ethnicity: 'Asiático', interests: ['Fotografía', 'Pintura'], sports: ['Yoga'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
    { src: image5, name: 'Stefano Yepez', age: '32 años', height: '1.75 cm', profession: 'Ingeniero', ethnicity: 'Latino', interests: ['Fotografía', 'Futbol'], sports: ['Futbol'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
    { src: image6, name: 'Walter Ivan', age: '37 años', height: '1.75 cm', profession: 'Docente', ethnicity: 'Caucásico', interests: ['Tenis', 'Pintura'], sports: ['Atletismo'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos'},
    { src: image7, name: 'Matias Alcalde', age: '43 años', height: '1.65 cm', profession: 'Empresario', ethnicity: 'Asiático', interests: ['Lectura', 'Autos'], sports: ['Snowboard'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos' },
    { src: image8, name: 'Angelo Sosa', age: '32 años', height: '1.83 cm', profession: 'Ingeniero de Sistemas', ethnicity: 'Latino', interests: ['Música', 'Deporte', 'Conciertos'], sports: ['Ninguno'], university: 'UNT', distance: '64 kilómetros', intención: 'Hacer amigos'},
  ];

  const [images, setImages] = useState(initialImages);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * additionalImages.length);
    return additionalImages[randomIndex];
  };

  const handleKissClick = (index) => {
    const newImages = [...images];
    newImages[index] = getRandomImage();
    setImages(newImages);
  };

  const handleImageClick = (person) => {
    props.onPersonClick(person);
  };

  const handleChatClick = (person) => {
    props.onChatClick(person);
  };

  const handleRefreshClick = () => {
    const newImages = [];
    while (newImages.length < initialImages.length) {
      const randomImage = getRandomImage();
      if (!newImages.some(image => image.src === randomImage.src)) {
        newImages.push(randomImage);
      }
    }
    setImages(newImages);
  };

  const handleFavoriteClick = (person) => {
    props.onFavoriteClick(person);
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
            <i className="fas fa-star" onClick={() => handleFavoriteClick(image)}></i> {/* Icono de favoritos */}
          </div>
        </div>
      ))}
    </div>
  );
});

export default Main;
