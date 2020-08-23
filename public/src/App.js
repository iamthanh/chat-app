import React, { useState } from 'react';
import LoginPage from './components/loginPage';
import ChatroomPage from './components/chatroomPage';
import './App.scss';

function App() {

  const [userName, setUserName] = useState(null);

  // useEffect(() => {
  // }, [userName]);

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
