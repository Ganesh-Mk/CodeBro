import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.scss'
import '../App.css'
import { images } from '../assets/images.js'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/aboutus" className="navItems">
        <img
          className="codeBroLogo"
          src={images.codeBroLogo}
          alt="CodeBro Logo"
        />
      </Link>
      <div className="navCenter">
        <Link to="/home" className="navItems">
          Home
        </Link>
        <Link to="/problems" className="navItems">
          Problems
        </Link>
        <Link to="/programming" className="navItems">
          Programming
        </Link>
        <Link to="/leaderboard" className="navItems">
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
          <p>Account</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
