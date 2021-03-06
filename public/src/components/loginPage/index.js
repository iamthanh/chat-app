import React, { useState } from 'react';
import './index.scss';

export default function LoginPage(props) {

  const [inputUserName, setInputUserName] = useState('');

  const joinChat = (username) => props.setUserName(username)

  // Handles the request when someone clicks on the join chatroom
  const onSubmitHandler = (e) => {
    // Some checks before joining
    if (inputUserName) {
      joinChat(inputUserName);
    }
  }

  // Handles the on change for the input on username
  const userNameInputHandler = (input) => setInputUserName(input)

  return (
    <div className="login-page-container">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="input-container">
          <input type='text' onChange={(e) => userNameInputHandler(e.target.value)} placeholder='Type your username...' />
          <button>Join the DoorDash Chat!</button>
        </div>
      </form>
    </div>
  );
}