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
import image9 from './imagenes/11.jpg'; 
import image10 from './imagenes/12.png'; 
import image11 from './imagenes/13.png'; 
import image12 from './imagenes/14.png'; 
import image13 from './imagenes/15.png'; 
import image14 from './imagenes/16.png'; 
import image15 from './imagenes/17.png'; 
import Chat from './Chat'; // Importa el nuevo componente Chat
import Informacion from './Informacion'; // Asegúrate de importar este componente

const additionalImages = [
  { src: image1, name: 'Luis Zambrano', age: '35 años' },
  { src: image2, name: 'Santiago Pacherres', age: '30 años' },
  { src: image3, name: 'Mauricio Berrospi', age: '35 años' },
  { src: image4, name: 'Oscar Llaure', age: '42 años' },
  { src: image5, name: 'Stefano Yepez', age: '32 años' },
  { src: image6, name: 'Walter Ivan', age: '37 años' },
  { src: image7, name: 'Matias Alcalde', age: '43 años' },
  { src: image8, name: 'Angelo Sosa', age: '32 años' },
  { src: image9, name: 'Fabian Peña', age: '45 años' },
  { src: image10, name: 'Edicson Herrera', age: '39 años' },
  { src: image11, name: 'Pierre Zevallos', age: '35 años' },
  { src: image12, name: 'Joseph Barrera', age: '51 años' },
  { src: image13, name: 'Juan Guerrero', age: '37 años' },
  { src: image14, name: 'Sergio de Lama', age: '43 años' },
  { src: image15, name: 'Samil Grado', age: '34 años' },
];

const Main = forwardRef((props, ref) => {
  const initialImages = [
    { src: image1, name: 'Luis Zambrano', age: '35 años' },
    { src: image2, name: 'Santiago Pacherres', age: '30 años' },
    { src: image3, name: 'Mauricio Berrospi', age: '35 años' },
    { src: image4, name: 'Oscar Llaure', age: '42 años' },
    { src: image5, name: 'Stefano Yepez', age: '32 años' },
    { src: image6, name: 'Walter Ivan', age: '37 años' },
    { src: image7, name: 'Matias Alcalde', age: '43 años' },
    { src: image8, name: 'Angelo Sosa', age: '32 años' }
  ];

  const [images, setImages] = useState(initialImages);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showChat, setShowChat] = useState(false);

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
    setSelectedPerson(person);
  };

  const handleChatClick = (person) => {
    setSelectedPerson(person);
    setShowChat(true);
  };

  const handleBackClick = () => {
    setSelectedPerson(null);
    setShowChat(false);
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

  React.useImperativeHandle(ref, () => ({
    handleRefreshClick,
  }));

  if (selectedPerson) {
    if (showChat) {
      return <Chat person={selectedPerson} onBackClick={handleBackClick} />;
    } else {
      return <Informacion person={selectedPerson} onBackClick={handleBackClick} />;
    }
  }

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
            <i className="fas fa-star"></i>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Main;
