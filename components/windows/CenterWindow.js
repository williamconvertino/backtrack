import { data } from 'autoprefixer'
import React, {useState} from 'react'
import TrackList from '../tracks/TrackList'

function CenterWindow() {

  

  return (
    <div className='center-window'>

      {/* <TrackHub /> */}

      <TrackList />

    </div>
  )
}

export default CenterWindow