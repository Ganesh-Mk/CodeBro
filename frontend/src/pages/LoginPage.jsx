import React, { useState } from 'react'
import '../style/Login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios.post('http://localhost:5173/register', {email, password})
    .then((result) => {console.log(result)
      navigate('/home')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="LoginContainer">
      <div className="logoContainer">
        <span className="logo">&lt;&nbsp;</span>
        <span className="logo code">Code</span>
        <span className="logo">Bro</span>
        <span className="logo">&nbsp;&frasl;&gt;</span>
      </div>
      <div className="Login-Container">
        <div className="LoginBox">
          <h5>Log in</h5>
          <div className="inputs">
            <form action="">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </form>
          </div>
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
