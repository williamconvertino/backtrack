import React, {useRef} from 'react'

function AddMediaButton({icon, type, handleFunc}) {
  
  const filePickerRef = useRef(null);
  
  return (
    <div className='add-media-button' onClick={() => filePickerRef.current.click()}>
        {icon}
        <input hidden type="file" accept={type} onChange={handleFunc} ref={filePickerRef} />
    </div>
  )

}

export default AddMediaButton