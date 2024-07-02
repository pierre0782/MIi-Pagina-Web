import React, { useRef, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Single from './Single';
import Chat from './Chat';
import Informacion from './Informacion';
import './style.css';

const App = () => {
  const mainRef = useRef(null);
  const [selectedPersonForInfo, setSelectedPersonForInfo] = useState(null);
  const [selectedPersonForChat, setSelectedPersonForChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [activeTab, setActiveTab] = useState('mensajes');
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  const handleHomeClick = () => {
    if (mainRef.current) {
      mainRef.current.handleRefreshClick();
    }
    setSelectedPersonForInfo(null);
    setSelectedPersonForChat(null);
  };

  const handleSelectPersonForInfo = (person) => {
    setSelectedPersonForInfo(person);
    setSelectedPersonForChat(null); // Reset chat selection when selecting person for info
  };

  const handleSelectPersonForChat = (person) => {
    setSelectedPersonForChat(person);
    setSelectedPersonForInfo(null); // Reset info selection when selecting person for chat
  };

  const handleNewMessage = (person, newMessage) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [person.name]: [...(prevMessages[person.name] || []), { ...newMessage, person }],
    }));
  };

  const handleBlockUser = (person) => {
    setBlockedUsers((prevBlockedUsers) => [...prevBlockedUsers, person]);
  };

  const handleFavoriteClick = (person) => {
    setFavoriteUsers((prevFavoriteUsers) => [...prevFavoriteUsers, person]);
  };

  return (
    <div>
      <Header onHomeClick={handleHomeClick} />
      <div className="content">
        <Single
          messages={messages}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          onSelectPerson={handleSelectPersonForChat}
          blockedUsers={blockedUsers}
          favoriteUsers={favoriteUsers}
        />
        {selectedPersonForInfo ? (
          <Informacion person={selectedPersonForInfo} onBackClick={() => setSelectedPersonForInfo(null)} />
        ) : selectedPersonForChat ? (
          <Chat
            person={selectedPersonForChat}
            messages={messages[selectedPersonForChat.name] || []}
            onNewMessage={handleNewMessage}
            onBlockUser={handleBlockUser}
          />
        ) : (
          <Main
            ref={mainRef}
            onPersonClick={handleSelectPersonForInfo}
            onFavoriteClick={handleFavoriteClick}
            onChatClick={handleSelectPersonForChat}
          />
        )}
      </div>
    </div>
  );
};

export default App;
