import React from 'react'
import '../style/NewNavbar.scss'
import { images } from '../assets/images'

const NewNavbar = () => {
  return (
    <div className='Navbar'>
      <div className='navbarpart1'>
        <button>
          <img src={images.codeBroLogo} alt="" />
        </button>
      </div>
      <div className='navbarpart2'>
      <div>Home</div>
      <div>Problems</div>
      <div>Programming</div>
      <div>Leaderboard</div>
      </div>
      <div className='navbarpart3'>
        <button>Account</button>
      </div>
    </div>
  )
}

export default NewNavbar
