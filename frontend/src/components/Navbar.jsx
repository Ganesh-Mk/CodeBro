import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.scss'
import { images } from '../javascripts/images'
import CodeBroLogo from './CodeBroLogo'
import axios from 'axios'

function Navbar({ fontColor = 'white', value }) {
  const [userImage, setUserImage] = useState(null)


  function CodeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  useEffect(() => {
    axios
      .get('http://localhost:3000/fetchUserImage', {
        params: {
          userEmail: localStorage.getItem('email'),
        },
      })
      .then((response) => {
        setUserImage(response.data.userImage)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [])


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
            className="accLogo"
            style={{
              width: '2vw',
              height: '2vw',
              borderRadius: '100vw',
            }}
            src={
              userImage
                ? `http://localhost:3000/uploads/${userImage}`
                : images.accDefaultLogo
            }
            alt="account default logo"
          />
          <p style={{ textDecoration: 'none', color: fontColor }}>Account</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
