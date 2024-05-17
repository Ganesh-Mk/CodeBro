import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.scss'
import { images } from '../javascripts/images'
import CodeBroLogo from './CodeBroLogo'

function Navbar({ fontColor = 'white', value }) {
  return (
    <div className="navbar">
      <Link
        to="/aboutus"
        className="navItems"
        style={{ textDecoration: 'none' }}
      >
        <CodeBroLogo />
      </Link>
      <div className="navCenter">
        <Link
          to="/home"
          className="navItems"
          style={{ textDecoration: 'none', color: fontColor }}
        >
          Home
        </Link>
        <Link
          to="/problems"
          className="navItems"
          style={{ textDecoration: 'none', color: fontColor }}
        >
          Problems
        </Link>
        <Link
          to="/programming"
          className="navItems"
          style={{ textDecoration: 'none', color: fontColor }}
        >
          Programming
        </Link>
        <Link
          to="/leaderboard"
          className="navItems"
          style={{ textDecoration: 'none', color: fontColor }}
        >
          Leaderboard
        </Link>
      </div>

      <div>
        <Link to="/account" className="navAccContainer">
          <img
            src={images.accDefaultLogo}
            alt="acc default logo"
            className="accLogo"
          />
          <p style={{ textDecoration: 'none', color: fontColor }}>Account</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
