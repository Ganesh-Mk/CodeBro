import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../style/Account.scss'
import { images } from '../javascripts/images'
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AllquesObject } from '../javascripts/data'
import ProblemDisplayContainer from '../components/ProblemDisplayContainer'
import DisplayProblemContainer from '../components/DisplayProblemContainer'

function AccountPage() {
  const problemObj = useSelector((state) => state.problemObj.obj)

  const [easyWidth, setEasyWidth] = useState(60)
  const [mediumWidth, setMediumWidth] = useState(40)
  const [hardWidth, setHardWidth] = useState(10)
  const [circleValue, setCircleValue] = useState(60)

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
            <Link to="/editprofile">
              <Button w={400}>Edit profile</Button>
            </Link>
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
            <Link to="/">
              <Button w={400}>Log out</Button>
            </Link>
          </div>
        </div>
        <div className="accRight">
          <div className="accTop">
            <div className="accRightTopHeadingBox">
              <p>Solved Problems Stats</p>
            </div>
            <div className="accRightTopContentBox">
              <div>
                <CircularProgress
                  size={160}
                  value={circleValue}
                  color="green.400"
                >
                  <CircularProgressLabel className="circleText">
                    <h2>{circleValue}</h2>
                    <p>Solved</p>
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
                      <div
                        className="easyRange"
                        style={{ width: `${easyWidth}%` }}
                      ></div>
                    </div>
                    <div className="range">
                      <div
                        className="mediumRange"
                        style={{ width: `${mediumWidth}%` }}
                      ></div>
                    </div>
                    <div className="range">
                      <div
                        className="hardRange"
                        style={{ width: `${hardWidth}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="numberBox">
                    <p className="nums">12 / 100</p>
                    <p className="nums">16 / 50</p>
                    <p className="nums">2 / 10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accBottom">
            <p>Submission List</p>
            <hr />
            <div>
              <div className="headings">
                <p>Problem Name</p>
                <div>
                  <p>Difficulty</p>
                  <p>Attempts</p>
                </div>
              </div>
              <div className="subListBox">
                {AllquesObject.map((obj, i) => (
                  <DisplayProblemContainer
                    num={obj.number}
                    diff={obj.difficulty}
                    attempts={i}
                    key={i}
                    problem={obj.heading}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
