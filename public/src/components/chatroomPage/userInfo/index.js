import React, { useState, useEffect } from 'react';
import './index.scss';

export default function UserInfo(props) {

  const [timeElapsedSec, setTimeElapsedSec] = useState(0);

  useEffect(() => {
  }, [timeElapsedSec]);

  const changeRoom = (room) => {
    props.setCurrentRoom(room);
  }

  return (
    <div className='user-info-container'>
      <div className='user-name'>{props.userName}</div>
      <div className='active-time-elapsed'>Online for {}</div>
      <div className='rooms-list-container'>
        {(props.chatRooms ? props.chatRooms : []).map((data, key) => 
          <div key={data.id} className='room' onClick={()=>changeRoom(data)}>{data.name}</div>
        )}
      </div>
    </div>
  );
}