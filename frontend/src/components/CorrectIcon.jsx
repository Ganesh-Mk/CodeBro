import React from 'react'
import crtImage from '../assets/icons/correctIcon.png'

function CorrectIcon() {
  return (
    <div>
      <img
        style={{ width: '2vw', height: '2vw' }}
        src={crtImage}
        alt="correctImg"
      />
    </div>
  )
}

export default CorrectIcon
