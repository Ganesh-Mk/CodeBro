import React, { useEffect } from 'react'
import '../style/EntrancePage.scss'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import CodeBroLogo from '../components/CodeBroLogo'

function EntrancePage() {
  return (
    <>
      <Navbar />
      <div className="mainHome">
        <div className="newMainHome">
          <CodeBroLogo />
          <div className="mainheading">
            <p>
              Welcome to{' '}
              <span>
                {' '}
                &lt;&nbsp; Code <span className="bro">Bro</span>{' '}
                &nbsp;&frasl;&gt;
              </span>
            </p>
            <p>Learn . Commit . Strive</p>
            <p>
              Unlock your coding potential with us. Dive in, code, and thrive.
            </p>
          </div>
          <div className="getStartedbtn">
            <Link to="/register">
              <div className="btnn">
                <button>Create Account</button>
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </Link>
          </div>
          <div className="getStartedbtn">
            <Link to="/login">
              <div className="btnn">
                <button>Already have an account</button>
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EntrancePage
