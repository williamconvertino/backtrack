import React, {useState} from 'react'
import MasterTrack from '../tracks/MasterTrack'
import Track from '../tracks/Track'

import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { async } from '@firebase/util';
import AddTrackButton from '../util/AddTrackButton';


function TrackHub() {

  const [tracks, setTracks] = useState([]);
  
  const createTrack = (fileList) => {
    
    setTracks(tracks => [...tracks, ...fileList] );
  }

  return (
    <div className='track-hub'>
      
      <MasterTrack />
      
      {tracks.map(track => <Track title={track.name} />)}

      <AddTrackButton processFunc={createTrack} />


    </div>
  )
}

export default TrackHub