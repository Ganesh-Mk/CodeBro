import React, { useState } from 'react'
import '../style/Register.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function RegisterPage() {
  const navigate = useNavigate()
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    axios.post('http://localhost:5173/register', {name, email, password})
    .then((result) => {console.log(result)
      navigate('/login')
    })
    .catch((err) => console.log("Error occur : " + err))

  }
  
  return (
    <div className="RegisterContainer">
      <div className="logoContainer">
        <span className="logo">&lt;&nbsp;</span>
        <span className="logo code">Code</span>
        <span className="logo">Bro</span>
        <span className="logo">&nbsp;&frasl;&gt;</span>
      </div>
      <div className="SignUp-Container">
        <div className="SignUpBox">
          <h2>Sign Up</h2>
          <div className="inputs">
            <form action="">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </form>
          </div>
          <button onClick={SubmitHandler}>Submit</button>
        </div>
      </div>
      {/* <span className="or">or</span>
      <div className="SignUpPart2">
        <button onClick={googlesignup} className="google-signIn">
          Sign up with <img src={images.google} alt="" />
        </button>
      </div> */}
    </div>
  )
}

export default RegisterPage
