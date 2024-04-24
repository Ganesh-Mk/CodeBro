import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../style/EntrancePage.scss'

import { images } from '../assets/images.js'
function EntrancePage() {
  return (
    <div className="entranceContainer">
      <img src={images.codeBroLogo} alt="CodeBro Logo" />
      <div>
        <div>
          <h2>Start your coding journey today with "CodeBro"</h2>
          <div>
            <Link to="/register" className="button">
              Create Account
            </Link>
            <p>or</p>
            <Link to="/login" className="button">
              Already have Account
            </Link>
          </div>
        </div>
        <div>
          <img src={images.entranceImage} alt="entrance image" />
        </div>
      </div>
    </div>
  )
}

export default EntrancePage
