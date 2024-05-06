import React, { useState } from 'react'
import '../style/Login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CodeBroLogo from '../components/CodeBroLogo'
import { setName, setEmail, setPassword } from '../store/userSlice'

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSubmit = () => {
    axios
      .post('http://localhost:3000/login', { userEmail, userPassword })
      .then((result) => {
        console.log(result)
        if (result !== false) {
          dispatch(setName(result.data.name))
          dispatch(setEmail(result.data.email))
          dispatch(setPassword(result.data.password))
          navigate('/home')
        } else {
          alert('User not found')
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="LoginContainer">
      <CodeBroLogo />
      <div className="Login-Container">
        <div className="LoginBox">
          <h5>Log in</h5>
          <div className="inputs">
            <form action="">
              <input
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </form>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
