import React from 'react'
import CountDown from './CountDown';

function Counter() {
    const date = 112*24*60*60*1000;
    const cur = new Date().getTime();
    const tar = cur + date;
  return (
    <CountDown targetDate={tar}/>
  )
}

export default Counter