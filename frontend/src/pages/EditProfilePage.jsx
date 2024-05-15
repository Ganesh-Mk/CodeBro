import { Button, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { images } from '../javascripts/images'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../style/EditProfile.scss'
import { setName, setEmail, setPassword } from '../store/userSlice'
import { useDispatch } from 'react-redux'

function EditProfilePage() {
  const navigate = useNavigate()
  const userObj = useSelector((state) => state.user)
  const [userName, setUserName] = useState(userObj.name)
  const [userEmail, setUserEmail] = useState(userObj.email)
  // const [insta, setInsta] = useState()
  // const [github, setGithub] = useState('')
  // const [linkedin, setLinkedin] = useState('')
  const [userImage, setUserImage] = useState(images.accDefaultLogo)

  useEffect(() => {
    setUserName(localStorage.getItem('name'))
    setUserEmail(localStorage.getItem('email'))
  }, [])

  const handleSubmit = () => {
    let userId = userObj.id

    axios
      .post('http://localhost:3000/updateUserDetails', {
        userId,
        userName,
        userEmail,
      })
      .then((result) => {
        console.log(result)
        dispatch(setName(userName))
        dispatch(setEmail(userEmail))
        navigate('/account')
      })
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImage(reader.result)
      }
    }
    reader.readAsDataURL(file)
  }
  return (
    <div>
      <Navbar />
      <div className="editProfile">
        <div className="editHead">
          <h1>Edit Profile</h1>
        </div>
        <div className="editBox">
          <div className="editLeft">
            {userImage && <img src={userImage} alt="Uploaded Image" />}

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
              <Input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                placeholder="Name"
              ></Input>
              <Input
                type="text"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                placeholder="Email"
              ></Input>
              {/* <Input
                type="text"
                onChange={(e) => setLinkedin(e.target.value)}
                value={linkedin}
                placeholder="Linkedin Link"
              ></Input>
              <Input
                type="text"
                onChange={(e) => setGithub(e.target.value)}
                value={github}
                placeholder="Github Link"
              ></Input>
              <Input
                type="text"
                onChange={(e) => setInsta(e.target.value)}
                value={insta}
                placeholder="Instagram Link"
              ></Input> */}
            </div>
            <div className="editBtnBox">
              <Button onClick={handleSubmit}>Submit</Button>
              <Button>Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage
