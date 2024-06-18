
import React, { useState } from 'react'
import '../style/Login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CodeBroLogo from '../components/CodeBroLogo'
import { setName, setEmail, setPassword } from '../store/userSlice'

export default function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  // const backend_url = import.meta.env.REACT_APP_BACKEND_URL;



  const handleSubmit = () => {
    axios
      .post("https://code-bro-tau.vercel.app/login", { userEmail, userPassword })
      .then((result) => {
        console.log(result)
        if (result.data !== false) {
          dispatch(setName(result.data.name))
          dispatch(setEmail(result.data.email))
          dispatch(setPassword(result.data.password))

          localStorage.setItem('name', result.data.name)
          localStorage.setItem('email', userEmail)
          localStorage.setItem('password', userPassword)
          navigate('/home')
        } else {
          alert('User not found')
          navigate('/login')
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 dark:bg-gray-950 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-md border-4 border-white font-bold rounded-md p-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl text-white">Login</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-400">
              User Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
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
              placeholder='password'
              value={userPassword}
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
              required
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500 px-4 py-3"
            />
          </div>
        </div>
        <div className="mt-4">
          <button onClick={handleSubmit} className="w-full rounded-md h-auto bg-gray-900 hover:bg-gray-800 text-white px-4 py-3">Login</button>
        </div>
      </div>
    </div>
  );
}
