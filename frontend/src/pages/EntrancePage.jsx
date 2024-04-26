import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../style/EntrancePage.scss'
import { images } from '../javascripts/images'

function EntrancePage() {
  return (
    <>
      <div className="entrance-whole-container">
        <div className="entranceContainer">
          <div className="logoContainer">
            <span className="logo">&lt;&nbsp;</span>
            <span className="logo code">Code</span>
            <span className="logo">Bro</span>
            <span className="logo">&nbsp;&frasl;&gt;</span>
          </div>
          <div className="container">
            <div className="left">
              <h2>
                Start your coding journey today with "<span>Code</span>
                Bro"
              </h2>
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
            <div className="right">
              <img src={images.entranceImage} alt="entrance image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EntrancePage
