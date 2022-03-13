import React, {useRef} from 'react'

function AddMediaButton({icon, processFunc, type, multiple}) {
  
  const filePickerRef = useRef();

  const handleFiles = (e) => {
    processFunc(e.target.files); 
  }

  return (
    <div className='add-media-button' onClick={() => filePickerRef.current.click()}>
        {icon}
        <input hidden multiple={multiple} accept={type} type="file" onChange={handleFiles} ref={filePickerRef} />
    </div>
  )
}

export default AddMediaButton