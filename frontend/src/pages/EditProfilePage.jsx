import { Button, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { images } from '../javascripts/images'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../style/EditProfile.scss'
import {
  setName,
  setEmail,
  setPassword,
  setInsta,
  setGithub,
  setLinkedin,
} from '../store/userSlice'

function EditProfilePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userObj = useSelector((state) => state.user)
  const [userName, setUserName] = useState(userObj.name)
  const [userEmail, setUserEmail] = useState(userObj.email)
  const [userPassword, setUserPassword] = useState(userObj.password)
  const [userInsta, setUserInsta] = useState('')
  const [userGithub, setUserGithub] = useState('')
  const [userLinkedin, setUserLinkedin] = useState('')
  const [editUserImage, setEditUserImage] = useState(images.accDefaultLogo)
  const [userImage, setUserImage] = useState(images.accDefaultLogo)
  const [userImageEdit, setUserImageEdit] = useState(images.accDefaultLogo)

  useEffect(() => {
    setUserName(localStorage.getItem('name'))
    setUserEmail(localStorage.getItem('email'))
    setUserPassword(localStorage.getItem('password'))
    setUserInsta(localStorage.getItem('insta'))
    setUserGithub(localStorage.getItem('github'))
    setUserLinkedin(localStorage.getItem('linkedin'))
    setUserImage(localStorage.getItem('userImage'))
  }, [])

  const handleSubmit = () => {
    const formData = new FormData()
    console.log(userImage)
    if (userImage) {
      formData.append('image', userImage)
    }
    formData.append('userEmail', userEmail)
    formData.append('userName', userName)
    formData.append('userPassword', userPassword)
    formData.append('userInsta', userInsta)
    formData.append('userGithub', userGithub)
    formData.append('userLinkedin', userLinkedin)

    axios
      .post('http://localhost:3000/updateUserDetails', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((result) => {
        dispatch(setName(userName))
        dispatch(setEmail(userEmail))
        dispatch(setPassword(userPassword))
        dispatch(setInsta(userInsta))
        dispatch(setGithub(userGithub))
        dispatch(setLinkedin(userLinkedin))
        localStorage.setItem('name', userName)
        localStorage.setItem('email', userEmail)
        localStorage.setItem('password', userPassword)
        localStorage.setItem('insta', userInsta)
        localStorage.setItem('github', userGithub)
        localStorage.setItem('linkedin', userLinkedin)
        navigate('/account')
      })
      .catch((error) => {
        console.error('Error updating user details:', error)
      })
  }

  const handleReset = () => {
    setUserName(localStorage.getItem('name'))
    setUserEmail(localStorage.getItem('email'))
    setUserPassword(localStorage.getItem('password'))
    setUserInsta(localStorage.getItem('insta'))
    setUserGithub(localStorage.getItem('github'))
    setUserLinkedin(localStorage.getItem('linkedin'))
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    setUserImage(file)
    setUserImageEdit(file.name)
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setEditUserImage(reader.result)
      }
    }
    reader.readAsDataURL(file)
  }

  useEffect(() => {
    axios
      .get('http://localhost:3000/fetchUserImage', {
        params: {
          userEmail: localStorage.getItem('email'),
        },
      })
      .then((response) => {
        setUserImage(response.data.userImage)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [])
  return (
    <div>
      <Navbar />
      <div className="editProfile">
        <div className="editHead">
          <h1>Edit Profile</h1>
        </div>
        <div className="editBox">
          <div className="editLeft">
            <img
              style={{
                borderRadius: '100vw',
              }}
              src={
                userImageEdit === images.accDefaultLogo
                  ? userImage
                    ? `http://localhost:3000/uploads/${userImage}`
                    : images.accDefaultLogo
                  : `http://localhost:3000/uploads/${userImageEdit}`
              }
              alt="account default logo"
            />

            <label htmlFor="imageInput" className="custom-file-upload">
              Choose Image
            </label>
            <input
              id="imageInput"
              type="file"
              onChange={handleImage}
              className="file-input"
            />
          </div>
          <div className="editRight">
            <div className="editInputBox">
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  gridTemplateColumns: '30% 70%',
                }}
              >
                <p>Name</p>
                <Input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  placeholder="Name"
                ></Input>
              </div>

              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  gridTemplateColumns: '30% 70%',
                }}
              >
                <p>Linkedin</p>
                <Input
                  type="text"
                  onChange={(e) => setUserLinkedin(e.target.value)}
                  value={userLinkedin}
                  placeholder="Linkedin Link"
                ></Input>
              </div>

              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  gridTemplateColumns: '30% 70%',
                }}
              >
                <p>Github</p>
                <Input
                  type="text"
                  onChange={(e) => setUserGithub(e.target.value)}
                  value={userGithub}
                  placeholder="Github Link"
                ></Input>
              </div>

              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  gridTemplateColumns: '30% 70%',
                }}
              >
                <p>Insta</p>
                <Input
                  type="text"
                  onChange={(e) => setUserInsta(e.target.value)}
                  value={userInsta}
                  placeholder="Instagram Link"
                ></Input>
              </div>
            </div>
            <div className="editBtnBox">
              <Button onClick={handleSubmit}>Submit</Button>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage
