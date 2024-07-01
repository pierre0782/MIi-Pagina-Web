import React, { useRef } from 'react';
import Header from './Header';
import Main from './Main';
import Single from './Single';
import './style.css';

const App = () => {
  const mainRef = useRef(null);

  const handleHomeClick = () => {
    if (mainRef.current) {
      mainRef.current.handleRefreshClick();
    }
  };

  return (
    <div>
      <Header onHomeClick={handleHomeClick}/>
      <div className="content">
        <Single />
        <Main ref={mainRef}/>
      </div>
    </div>
  );
};

export default App;
