import React, { useRef, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Single from './Single';
import Chat from './Chat';
import Informacion from './Informacion';
import './style.css';

const App = () => {
  const mainRef = useRef(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [messages, setMessages] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('mensajes');
  const [showInfo, setShowInfo] = useState(false);

  const handleHomeClick = () => {
    if (mainRef.current) {
      mainRef.current.handleRefreshClick();
    }
    setSelectedPerson(null);
    setShowInfo(false);
  };

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
    setShowInfo(false);
  };

  const handleShowInfo = (person) => {
    setSelectedPerson(person);
    setShowInfo(true);
  };

  const handleNewMessage = (person, newMessage) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [person.name]: [...(prevMessages[person.name] || []), newMessage],
    }));
  };

  const handleAddToFavorites = (person) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some(fav => fav.name === person.name)) {
        return [...prevFavorites, person];
      }
      return prevFavorites;
    });
  };

  const handleBackToMain = () => {
    setSelectedPerson(null);
    setShowInfo(false);
  };

  return (
    <div>
      <Header onHomeClick={handleHomeClick}/>
      <div className="content">
        <Single
          messages={messages}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          onSelectPerson={handleSelectPerson}
          favorites={favorites} // Pasar los favoritos
        />
        {selectedPerson ? (
          showInfo ? (
            <Informacion person={selectedPerson} onBackClick={handleBackToMain} />
          ) : (
            <Chat
              person={selectedPerson}
              messages={messages[selectedPerson.name] || []}
              onNewMessage={handleNewMessage}
            />
          )
        ) : (
          <Main ref={mainRef} onPersonClick={handleShowInfo} onFavoriteClick={handleAddToFavorites} onChatClick={handleSelectPerson} /> // Pasar la función de favoritos y mostrar info y chat
        )}
      </div>
    </div>
  );
};

export default App;
