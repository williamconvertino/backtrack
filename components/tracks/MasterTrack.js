import React, {useRef} from 'react'
import {useState} from 'react';
import {BsFillPlayFill} from 'react-icons/bs'
import {BsPauseFill} from 'react-icons/bs'

function MasterTrack({title}) {

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
    <div className='track master-track'>
      <div className='track-title'>{title}</div>
      <button onClick={toggleTrack} className='play-pause-button-window'>
          {isPlaying ?<BsPauseFill className='play-pause-button' size={30}/> : <BsFillPlayFill className='play-pause-button' size={30}/> }
        </button>
    </div>
  )
}

MasterTrack.defaultProps = {
  title: 'Master Track',
};

export default MasterTrack