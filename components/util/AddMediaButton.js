import React, {useRef} from 'react'
import PropTypes from 'react'
import {useState} from 'react'

function AddMediaButton({icon, processFunc}) {
  
  const filePickerRef = useRef();

  const handleFiles = (e) => {
    processFunc(e.target.files); 
  }

  return (
    <div className='add-media-button' onClick={() => filePickerRef.current.click()}>
        {icon}
        <input hidden multiple type="file" onChange={handleFiles} ref={filePickerRef} />
    </div>
  )
}

export default AddMediaButton