import React from 'react'

function MasterTrack({title}) {
  return (
    <div className='track master-track'>
      {title}
    </div>
  )
}

MasterTrack.defaultProps = {
  title: 'Master Track',
};

export default MasterTrack