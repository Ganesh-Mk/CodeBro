import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.scss';
import { images } from '../javascripts/images';
import CodeBroLogo from './CodeBroLogo';
import axios from 'axios';

function Navbar({ fontColor = 'white' }) {
  const [userImage, setUserImage] = useState('home');
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation(); // Get current location
  
  const handleMenuToggle = () => {
    console.log('menuVisible', menuVisible);
    setMenuVisible(!menuVisible); // Toggle the menu visibility state
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/fetchUserImage', {
        params: {
          userEmail: localStorage.getItem('email'),
        },
      })
      .then((response) => {
        setUserImage(response.data.userImage);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  return (
    <div className="navbar">
      <Link to="/aboutus" className="navItems" style={{ textDecoration: 'none' }}>
        <CodeBroLogo />
      </Link>
      
      <div className="navCenter">
        <Link
          to="/home"
          className={`navItems ${location.pathname === '/home' ? 'active' : ''}`}
          style={{ textDecoration: 'none', color: fontColor }}
        >
          <p>Home</p>
        </Link>
        <Link
          to="/problems"
          className={`navItems ${location.pathname === '/problems' ? 'active' : ''}`}
          style={{ textDecoration: 'none', color: fontColor }}
        >
          <p>Problems</p>
        </Link>
        <Link
          to="/programming"
          className={`navItems ${location.pathname === '/programming' ? 'active' : ''}`}
          style={{ textDecoration: 'none', color: fontColor }}
        >
          <p>Programming</p>
        </Link>
        <Link
          to="/leaderboard"
          className={`navItems ${location.pathname === '/leaderboard' ? 'active' : ''}`}
          style={{ textDecoration: 'none', color: fontColor }}
        >
          <p>Leaderboard</p>
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

      <div className="menuIcon" onClick={handleMenuToggle}>
      {
        menuVisible ? <span class="material-symbols-outlined">
          close
        </span> : <span class="material-symbols-outlined">
menu
</span>
      }
        
      </div>
      <div className={`menuContainer ${menuVisible ? 'visible' : ''}`}>
      <Link
          to="/home"
          className={`navItems ${location.pathname === '/home' ? 'active' : ''}`}
          style={{ textDecoration: 'none', color: fontColor }}
        >
          <p>Home</p>
        </Link>
        <Link
          to="/problems"
          className={`navItems ${location.pathname === '/problems' ? 'active' : ''}`}
          style={{ textDecoration: 'none', color: fontColor }}
        >
          <p>Problems</p>
        </Link>
        <Link
          to="/programming"
          className={`navItems ${location.pathname === '/programming' ? 'active' : ''}`}
          style={{ textDecoration: 'none', color: fontColor }}
        >
          <p>Programming</p>
        </Link>
        <Link
          to="/leaderboard"
          className={`navItems ${location.pathname === '/leaderboard' ? 'active' : ''}`}
          style={{ textDecoration: 'none', color: fontColor }}
        >
          <p>Leaderboard</p>
        </Link>
        <div className='menuBottom'>
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
    </div>
  );
}

export default Navbar;
