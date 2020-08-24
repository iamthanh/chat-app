import React, { useState, useEffect } from 'react';
import './index.scss';

export default function UserInfo(props) {

  const [timeElapsedDisplay, setTimeElapsedDisplay] = useState(' less than min');

  const getDisplayElapsedTime = (secondsElapsed) => {
    // Under an hour
    if (secondsElapsed < 3600) {
      if (secondsElapsed < 120) {
        return '1 min';
      }
      return secondsElapsed/60 + ' mins';
    } 
    // Greater than an hour
    return secondsElapsed/3600 + ' hours'; 
  }

  useEffect(() => {
    setTimeout(() => {
      setTimeElapsedDisplay(getDisplayElapsedTime(Math.floor((Date.now()-props.startTime)/1000)))
    }, 60000);
  }, [timeElapsedDisplay]);

  const changeRoom = (room) => {
    props.setCurrentRoom(room);
  }

  return (
    <div className='user-info-container'>
      <div className='user-name'>{props.userName}</div>
      <div className='active-time-elapsed'>Online for {timeElapsedDisplay}</div>
      <div className='rooms-list-container'>
        {(props.chatRooms ? props.chatRooms : []).map((data, key) => 
          <div key={data.id} className={'room '+(data.id === props.currentRoom.id ? 'selected':'')} onClick={()=>changeRoom(data)}>{data.name}</div>
        )}
      </div>
    </div>
  );
}