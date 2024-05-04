import React from 'react'
import Navbar from '../components/Navbar'
import '../style/Account.scss'
import { images } from '../javascripts/images'
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Progress,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function AccountPage() {
  return (
    <div>
      <Navbar />
      <div className="accountPage">
        <div className="accLeft">
          <div className="accLeftTop">
            <img src={images.accDefaultLogo} alt="account default logo" />
            <div>
              <p>ID: 87287622</p>
              <p>User name: XYZ</p>
              <p>Rank: 0001</p>
            </div>
          </div>
          <div className="accBtnBox">
            <Button w={400}>Edit profile</Button>
          </div>

          <div className="socialBox">
            <p>Connect with me in -</p>
            <div>
              <Link
                className="links"
                target="_blank"
                to="https://www.instagram.com/ganesh_mk_247/"
              >
                <img src={images.instagram} alt="insta logo" />
              </Link>
              <Link
                className="links"
                target="_blank"
                to="https://www.instagram.com/ganesh_mk_247/"
              >
                <img src={images.github} alt="github logo" />
              </Link>
              <Link
                className="links"
                target="_blank"
                to="https://www.instagram.com/ganesh_mk_247/"
              >
                <img src={images.linkedin} alt="github logo" />
              </Link>
              <Link
                className="links"
                target="_blank"
                to="https://www.instagram.com/ganesh_mk_247/"
              >
                <img src={images.mail} alt="github logo" />
              </Link>
            </div>
          </div>
          <hr />
          <div className="langBox">
            <p>Languages used to solve problems</p>
            <div className="langSubBox">
              <Button w={120} fontSize={15} variant="outline">
                Javascript <span className="multipleOfLang"> &nbsp; x6</span>
              </Button>
              <Button w={120} fontSize={15} variant="outline">
                Python <span className="multipleOfLang"> &nbsp; x8</span>
              </Button>
              <Button w={120} fontSize={15} variant="outline">
                Java <span className="multipleOfLang"> &nbsp; x4</span>
              </Button>
            </div>
          </div>
          <div className="accLogoutBox">
            <Button w={400}>Log out</Button>
          </div>
        </div>
        <div className="accRight">
          <div className="accTop">
            <div className="accRightTopHeadingBox">
              <p>Solved Problems Stats</p>
            </div>
            <div className="accRightTopContentBox">
              <div className="circleBox">
                <CircularProgress size={160} value={40} color="green.400">
                  <CircularProgressLabel style={{ color: 'white' }}>
                    40
                  </CircularProgressLabel>
                </CircularProgress>
              </div>
              <div className="rangeStatContainer">
                <div className="rangeContainer">
                  <div className="diffTextBox">
                    <p className="easy">Easy</p>
                    <p className="Medium">Medium</p>
                    <p className="Hard">Hard</p>
                  </div>
                  <div className="rangeBox">
                    <div className="range">
                      <div className="easyRange"></div>
                    </div>
                    <div className="range">
                      <div className="mediumRange"></div>
                    </div>
                    <div className="range">
                      <div className="hardRange"></div>
                    </div>
                  </div>
                  <div className="numberBox">
                    <p className="nums">12 / 200</p>
                    <p className="nums">16 / 100</p>
                    <p className="nums">2 / 60</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accBottom"></div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
