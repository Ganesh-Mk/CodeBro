import React, { useState } from 'react'
import '../style/Register.scss'
import { Button } from '@chakra-ui/react'
import CodeBroLogo from '../components/CodeBroLogo'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setName, setEmail, setPassword } from '../store/userSlice'

function RegisterPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSubmit = () => {
    localStorage.setItem('name', userName)
    localStorage.setItem('email', userEmail)
    localStorage.setItem('password', userPassword)

    axios
      .post('http://localhost:3000/createUser', {
        userName,
        userEmail,
        userPassword,
      })
      .then((result) => {
        console.log(result)
        dispatch(setName(userName))
        dispatch(setEmail(userEmail))
        dispatch(setPassword(userPassword))
        navigate('/home')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="RegisterContainer">
      <CodeBroLogo />
      <div className="SignUp-Container">
        <div className="SignUpBox">
          <h2>Sign Up</h2>
          <div className="inputs">
            <form action="">
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter new password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </form>
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
