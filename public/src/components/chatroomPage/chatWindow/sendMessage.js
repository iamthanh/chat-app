import React, { useState } from 'react';
import Axios from 'axios';

export default function SendMessage(props) {

  const [newMessageText, setNewMessageText] = useState('');

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Post the new message
    await Axios.post('http://localhost:8080/api/rooms/' + props.currentRoom.id + '/messages', {
      name: props.userName,
      message: newMessageText
    });
    setNewMessageText('');
    
    // This will call to updat the view with the newly aded message
    props.fetchMessagesForCurrentRoom();
  }

  return (
    <div className='send-message-container'>
        <form onSubmit={(e)=>{sendMessageHandler(e)}}>
          <input type='text' onChange={(e)=>setNewMessageText(e.target.value)} value={newMessageText}/>
          <button type='submit'>Send</button>
        </form>
    </div>
  );
}