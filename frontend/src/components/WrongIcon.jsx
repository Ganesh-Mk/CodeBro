import React from 'react'
import wrongImage from '../assets/icons/wrongIcon.png'

function WrongIcon() {
  return (
    <div>
      <img
        style={{ width: '2vw', height: '2vw' }}
        src={wrongImage}
        alt="correctImg"
      />
    </div>
  )
}

export default WrongIcon
