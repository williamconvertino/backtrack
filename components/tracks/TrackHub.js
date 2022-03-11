import React from 'react'
import MasterTrack from '../tracks/MasterTrack'
import Track from '../tracks/Track'
import {AiFillPlusCircle} from 'react-icons/ai';
import AddMediaButton from '../util/AddMediaButton';

function TrackHub() {
  const tracks = []
  
  const addTrack = (track) => {
    tracks.push(track);
  }

  return (
    <div className='track-hub'>
      
      <MasterTrack />
      {tracks.map( (track) => <Track name={track}/> )}

      <div>
        <AddMediaButton icon={<AiFillPlusCircle className='add-track-button' size='1.6rem' type='mp3/wav' handleFunc={addTrack}/>}/>
      </div>
      
    </div>
  )
}

export default TrackHub