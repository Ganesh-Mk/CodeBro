import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div style={{ heigth: '20vw', border: '2px solid black' }}>
        <button>LOGO</button>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <button>Home</button>
        <button>Home</button>
        <button>Home</button>
        <button>Home</button>
      </div>
    </div>
  )
}

export default Navbar
