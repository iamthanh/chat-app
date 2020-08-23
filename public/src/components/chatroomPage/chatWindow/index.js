import React from 'react';
import Message from './message';
import SendMessage from './sendMessage';
import './index.scss';

export default function ChatWindow(props) {

  let chatRoomUsernames = {};
  let renderChatRoomMessages = [];
  if (props.messagesForCurrentRoom !== null) {
    renderChatRoomMessages = props.messagesForCurrentRoom.map(function (data, k) {
      if (!(data.name in chatRoomUsernames) && data.name !== props.userName) {
        chatRoomUsernames[data.name] = true;
      }
      return (
        <Message key={data.id} data={data} userName={props.userName} />
      );
    })
  }

  return (
    <div className="chat-window-container">
      {props.messagesForCurrentRoom !== null && props.currentRoom !== null && (
        <React.Fragment>
          <div className='chat-name'>{props.currentRoom.name}</div>
          <div className='names-in-chat'>{props.userName + ', ' + Object.keys(chatRoomUsernames).join(', ')}</div>

          <div className='messages-window'>
            {renderChatRoomMessages}
          </div>

          <SendMessage
            fetchMessagesForCurrentRoom={props.fetchMessagesForCurrentRoom}
            userName={props.userName}
            currentRoom={props.currentRoom}
          />
        </React.Fragment>
      )}
    </div>
  );
}