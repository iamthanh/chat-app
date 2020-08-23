import React from 'react';

export default function Message(props) {

  return (
    <div className='message-container' data-id={props.data.id}>
      <div className='message-bubble'>
        <div className='message-text'>{props.data.message}</div>
      </div>
      <div className="from-name">
        {props.data.name}
      </div>
    </div>
  );
}