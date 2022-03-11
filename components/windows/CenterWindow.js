import { data } from 'autoprefixer'
import React, {useState} from 'react'
import MasterTrack from '../tracks/MasterTrack'
import Track from '../tracks/Track'

function CenterWindow() {

  const tracks = ["Drums", "Keys"]

  return (
    <div className='center-window'>

      <MasterTrack />
      {tracks.map( (track) => <Track name={track}/> )}
    
    </div>
  )
}

export default CenterWindow