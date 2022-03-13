import React, { useState } from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import {BsPauseFill} from 'react-icons/bs'

function Track({title, songFile}) {

  const [isPlaying, setIsPlaying] = useState(false);


  const toggleTrack = () => {
    const statusPlaying = isPlaying;
    setIsPlaying(!statusPlaying);
    
  }

  return (
    <div className='track'>
        <div className='track-title'>{title}</div>
        <audio src={songFile} preload='metadata'/>
        <button onClick={toggleTrack} className='play-pause-button-window'>
          {isPlaying ?<BsPauseFill className='play-pause-button' size={30}/> : <BsFillPlayFill className='play-pause-button' size={30}/> }
        </button>
    </div>
  )
}

export default Track