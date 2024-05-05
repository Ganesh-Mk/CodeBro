import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { images } from '../javascripts/images'
import '../style/EditProfile.scss'

function EditProfilePage() {
  const [userImage, setUserImage] = useState(images.accDefaultLogo)

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
              <Input type="text" placeholder="Name"></Input>
              <Input type="text" placeholder="Email"></Input>
              <Input type="text" placeholder="Linkedin Link"></Input>
              <Input type="text" placeholder="Github Link"></Input>
              <Input type="text" placeholder="Instagram Link"></Input>
            </div>
            <div className="editBtnBox">
              <Button>Submit</Button>
              <Button>Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage
