import React, {useState} from 'react'
import MasterTrack from '../tracks/MasterTrack'
import Track from '../tracks/Track'
import {AiFillPlusCircle} from 'react-icons/ai';
import AddMediaButton from '../util/AddMediaButton';

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


function TrackHub() {

  const [tracks, setTracks] = useState([]);
  
  const createTrack = (fileList) => {
    setTracks( [...tracks, <li key={fileList[0].name}><Track title={fileList[0].name} file={fileList[0]} /></li>] );
  }

  return (
    <div className='track-hub'>
      
      <MasterTrack />
      
      {tracks}

      <AddMediaButton processFunc={createTrack} icon={<AiFillPlusCircle className='add-track-button'size={20}/>} />


    </div>
  )
}

export default TrackHub