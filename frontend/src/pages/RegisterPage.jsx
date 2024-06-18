import React, { useState } from 'react'
import '../style/Register.scss'
import { Button } from '@chakra-ui/react'
import CodeBroLogo from '../components/CodeBroLogo'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  setId,
  setName,
  setEmail,
  setPassword,
  setInsta,
  setGithub,
  setLinkedin,
} from '../store/userSlice'

export default function RegisterPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const backend_url = process.env.REACT_APP_BACKEND_URL;


  const handleSubmit = () => {
    localStorage.setItem('name', userName)
    localStorage.setItem('email', userEmail)
    localStorage.setItem('password', userPassword)
    localStorage.setItem('insta', '')
    localStorage.setItem('github', '')
    localStorage.setItem('linkedin', '')
    localStorage.setItem('userImage', '')
    localStorage.setItem('rank', 'Unranked')

    axios
      .post(`${backend_url}/createUser`, {
        userName,
        userEmail,
        userPassword,
      })
      .then((result) => {
        if (result.data !== false) {
          dispatch(setId(result.data._id))
          dispatch(setName(userName))
          dispatch(setEmail(userEmail))
          dispatch(setPassword(userPassword))
          navigate('/home')
        } else {
          alert('Email already taken')
          navigate('/register')
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 dark:bg-gray-950 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-md border-4 border-white font-bold rounded-md p-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl text-white">Sign Up</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-gray-400">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500 px-4 py-3"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-400">
              User Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500 px-4 py-3"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-400">
              User Password
            </label>
            <input
              id="password"
              type="password"
              placeholder='Enter your passowrd'
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500 px-4 py-3"
            />
          </div>
        </div>
        <div className="mt-4">
          <button onClick={handleSubmit} className="w-full h-auto rounded-md bg-gray-900 hover:bg-gray-800 text-white px-4 py-3">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
