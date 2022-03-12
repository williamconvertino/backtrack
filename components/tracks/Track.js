import React from 'react'

function Track({title}) {
  return (
    <div className='track'>
        {title}
    </div>
  )
}

Track.defaultProps = {
  title: 'Master Track',
};

export default Track