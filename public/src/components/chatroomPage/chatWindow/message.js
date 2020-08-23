import React from 'react';

export default function Message(props) {

  return (
    <div className={'message-container ' + (props.userName === props.data.name ? 'current-user':'')} data-id={props.data.id}>
      <div className='message-bubble'>
        <div className='message-text'>{props.data.message}</div>
      </div>
      {props.userName !== props.data.name && (
        <div className="from-name">
          {props.data.name}
        </div>
      )}
    </div>
  );
}