import React, { useEffect, useState } from 'react';
import UserInfo from './userInfo';
import ChatWindow from './chatWindow';
import Axios from 'axios';

export default function ChatroomPage(props) {

  // We'll use the activeStarted to track how long the user has been active
  const [isLoading, setIsLoading] = useState(true);
  const [activeStarted, setActiceStarted] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [chatRooms, setChatRooms] = useState([]);
  const [messagesForCurrentRoom, setMessagesForCurrentRoom] = useState([]);

  useEffect(() => {
    const fetchAllRooms = async () => {
      let rooms = await Axios.get('http://localhost:8080/api/rooms');
      if (rooms && rooms.status === 200) {
        setChatRooms(rooms.data);
      }

      // Setting the current chat room to be the first one in the list
      await setCurrentRoom(rooms.data[0])
      await setIsLoading(false);
    }
    if (isLoading) {
      fetchAllRooms();
    }
    if (!activeStarted) setActiceStarted(Date.now());
  }, [])

  const fetchMessagesForCurrentRoom = async () => {
    if (currentRoom !== null) {
      let _messages = await Axios.get('http://localhost:8080/api/rooms/' + currentRoom.id + '/messages');
      if (_messages && _messages.status === 200) {
        setMessagesForCurrentRoom(_messages.data);
      }
    }
  }

  useEffect(() => {
    fetchMessagesForCurrentRoom();
  }, [currentRoom])

  return (
    <div className="chatroom-page-container">
      <UserInfo
        userName={props.userName}
        activeStarted={activeStarted}
        setCurrentRoom={setCurrentRoom}
        chatRooms={chatRooms}
      />
      <ChatWindow
        userName={props.userName}
        messagesForCurrentRoom={messagesForCurrentRoom}
        currentRoom={currentRoom}
        fetchMessagesForCurrentRoom={fetchMessagesForCurrentRoom}
      />
    </div>
  );
}