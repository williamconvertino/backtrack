import React from 'react'

function MasterTrack({title}) {
  return (
    <div className='track master-track'>
      <div className='track-title'>{title}</div>
    </div>
  )
}

MasterTrack.defaultProps = {
  title: 'Master Track',
};

export default MasterTrack