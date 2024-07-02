import React, { useRef, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Single from './Single';
import Chat from './Chat';
import Informacion from './Informacion';
import VIP from './VIP';
import './style.css';

const App = () => {
  const mainRef = useRef(null);
  const [selectedPersonForInfo, setSelectedPersonForInfo] = useState(null);
  const [selectedPersonForChat, setSelectedPersonForChat] = useState(null);
  const [showVIP, setShowVIP] = useState(false);
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
    setShowVIP(false);
  };

  const handleVIPClick = () => {
    setShowVIP(true);
    setSelectedPersonForInfo(null);
    setSelectedPersonForChat(null);
  };

  const handleSelectPersonForInfo = (person) => {
    setSelectedPersonForInfo(person);
    setSelectedPersonForChat(null);
    setShowVIP(false);
  };

  const handleSelectPersonForChat = (person) => {
    setSelectedPersonForChat(person);
    setSelectedPersonForInfo(null);
    setShowVIP(false);
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
      <Header onHomeClick={handleHomeClick} onVIPClick={handleVIPClick} />
      <div className="content">
        <Single
          messages={messages}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          onSelectPerson={handleSelectPersonForChat}
          blockedUsers={blockedUsers}
          favoriteUsers={favoriteUsers}
        />
        {showVIP ? (
          <VIP onBackClick={() => setShowVIP(false)} />
        ) : selectedPersonForInfo ? (
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
