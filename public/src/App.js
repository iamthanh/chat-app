import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/loginPage';
import ChatroomPage from './components/chatroomPage';

function App() {

  const [userName, setUserName] = useState(null);

  useEffect(() => {
  }, [userName]);

  return (
    <div className="App">
      
      {/* Show the login page when username is not set */}
      {!userName && (
        <LoginPage
          setUserName={setUserName}
        />
      )}

      {/* Once the username has been set, we can show the chatroom */}
      {userName && (
        <ChatroomPage 
          userName={userName}
        />
      )}
    </div>
  );
}

export default App;
