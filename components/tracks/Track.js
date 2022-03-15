import React, { useState } from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import {BsPauseFill} from 'react-icons/bs'
import { useRef } from 'react';

function Track({title, songFile}) {

  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayer = useRef();

  const toggleTrack = () => {
    const statusPlaying = isPlaying;
    setIsPlaying(!statusPlaying);
    if (!statusPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }

  return (
    <div className='track'>
        <div className='track-title'>{title}</div>
        <audio src='backtrack.mp3' preload='metadata' ref={audioPlayer}/>
        <button onClick={toggleTrack} className='play-pause-button-window'>
          {isPlaying ?<BsPauseFill className='play-pause-button' size={30}/> : <BsFillPlayFill className='play-pause-button' size={30}/> }
        </button>
    </div>
  )
}

export default Track