import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import '../style/Account.scss'
import { images } from '../javascripts/images'
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DisplayProblemContainer from '../components/DisplayProblemContainer'
import { addTestCaseResults } from '../store/problemObjSlice'

function AccountPage() {
  const userObj = useSelector((state) => state.user)
  const [userName, setUserName] = useState(userObj.name)
  const [userId, setUserId] = useState(userObj.id)
  const problemObj = useSelector((state) => state.problemObj.obj)
  const [easyWidth, setEasyWidth] = useState(0)
  const [mediumWidth, setMediumWidth] = useState(0)
  const [hardWidth, setHardWidth] = useState(0)
  const [circleValue, setCircleValue] = useState(0)
  const [jsSolved, setJsSolved] = useState(0)
  const [pythonSolved, setPythonSolved] = useState(0)
  const [javaSolved, setJavaSolved] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [allProblems, setAllProblems] = useState([])

  useEffect(() => {
    setUserName(localStorage.getItem('name'))
    axios
      .get('http://localhost:3000/problemRecord', {
        params: {
          userEmail: localStorage.getItem('email'),
        },
      })
      .then((response) => {
        setJsSolved(response.data.jsSolved || 0)
        setPythonSolved(response.data.pythonSolved || 0)
        setJavaSolved(response.data.javaSolved || 0)
        setEasyWidth(response.data.easySolved || 0)
        setMediumWidth(response.data.mediumSolved || 0)
        setHardWidth(response.data.hardSolved || 0)
        setCircleValue(response.data.totalSolved || 0)
        setAttempts(response.data.allProblems[0].attempts)
        setAllProblems(response.data.allProblems)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [addTestCaseResults])

  return (
    <div>
      <Navbar />
      <div className="accountPage">
        <div className="accLeft">
          <div className="accLeftTop">
            <img src={images.accDefaultLogo} alt="account default logo" />
            <div>
              <p>User name: {userName}</p>
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
                Javascript{' '}
                <span className="multipleOfLang"> &nbsp; x{jsSolved}</span>
              </Button>
              <Button w={120} fontSize={15} variant="outline">
                Python{' '}
                <span className="multipleOfLang"> &nbsp; x{pythonSolved}</span>
              </Button>
              <Button w={120} fontSize={15} variant="outline">
                Java{' '}
                <span className="multipleOfLang"> &nbsp; x{javaSolved}</span>
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
                    <h2>{circleValue} / 100</h2>
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
                    <p className="nums">{easyWidth} / 100</p>
                    <p className="nums">{mediumWidth} / 50</p>
                    <p className="nums">{hardWidth} / 10</p>
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
                {allProblems &&
                  allProblems.map((obj, i) => (
                    <DisplayProblemContainer
                      num={obj.number}
                      diff={obj.difficulty}
                      attempts={attempts}
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
