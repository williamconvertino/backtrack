import React from 'react'
import AddMediaButton from './AddMediaButton'
import {AiFillPlusCircle} from 'react-icons/ai';

function AddTrackButton({processFunc}) {
  return (
    <AddMediaButton accept='.wav,.mp3' multiple processFunc={processFunc} icon={<AiFillPlusCircle className='add-track-button'size={20}/>} />
  )
}

export default AddTrackButton