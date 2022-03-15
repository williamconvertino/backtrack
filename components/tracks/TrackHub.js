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

  const [songFiles, setSongFiles] = useState([]);
  
  const createTrack = (fileList) => {
    setSongFiles(songFiles => [...songFiles, ...fileList] );
  }

  return (
    <div className='track-hub'>
      
      <MasterTrack />
      
      {songFiles.map(file => <Track title={file.name} songFile={file}/>)}

      <AddTrackButton processFunc={createTrack} />

    </div>
  )
}

export default TrackHub