import React from 'react'
import crtImage from '../assets/icons/correctIcon.png'
import '../style/style.css'
function CorrectIcon() {
  return (
    <div>
      <img className="icons" src={crtImage} alt="correctImg" />
    </div>
  )
}

export default CorrectIcon
