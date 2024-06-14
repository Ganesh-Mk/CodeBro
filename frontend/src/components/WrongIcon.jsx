import React from 'react'
import wrongImage from '../assets/icons/wrongIcon.png'
import '../style/style.css'

function WrongIcon() {
  return (
    <div>
      <img className="icons" src={wrongImage} alt="correctImg" />
    </div>
  )
}

export default WrongIcon
