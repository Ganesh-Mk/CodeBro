import React, { useEffect, useState } from 'react'
import '../style/Home.scss'
import Navbar from '../components/Navbar'
import { images } from '../javascripts/images'
import { Link } from 'react-router-dom'
import ProblemDisplayContainer from '../components/ProblemDisplayContainer'
import { AllquesObject } from '../javascripts/data'
import { useDispatch, useSelector } from 'react-redux'
import { setRangeValue, setSolvedProblemsCount } from '../store/rangesSlice'
import { setSelectedLanguage } from '../store/languageSelectingSlice'
import axios from 'axios'
import { setUserProblems, userSlice } from '../store/userSlice'

const HomePage = () => {
  const [easyWidth, setEasyWidth] = useState(0)
  const [mediumWidth, setMediumWidth] = useState(0)
  const [hardWidth, setHardWidth] = useState(0)
  const [totalEasy, setTotalEasy] = useState(0)
  const [totalMedium, setTotalMedium] = useState(0)
  const [totalHard, setTotalHard] = useState(0)
  const [totalProblems, setTotalProblems] = useState(0)
  const dispatch = useDispatch()
  const solvedProblems = useSelector(
    (state) => state.solvedProblems.solvedProblems,
  )
  // console.log(totalEasyLength + "h");

  const { easy, medium, hard } = useSelector((state) => state.ranges)
  const solvedProblemsCount = useSelector(
    (state) => state.ranges.solvedProblemsCount,
  )

  const handleRangeChange = (e, difficulty) => {
    const newValue = parseInt(e.target.value)
    dispatch(setRangeValue({ difficulty, value: newValue }))
  }

  const calculateRangeValue = (solvedCount, totalCount) => {
    if (totalCount === 0) {
      return 0
    }
    return (solvedCount / totalCount) * 100
  }

  const getDifficultySolvedCount = (difficulty) => {
    return AllquesObject.filter(
      (problem) => problem.difficulty === difficulty && problem.isSolved,
    ).length
  }

  const getDifficultyTotalCount = (difficulty) => {
    return AllquesObject.filter((problem) => problem.difficulty === difficulty)
      .length
  }

  useEffect(() => {
    setTotalEasy(0)
    setTotalMedium(0)
    setTotalHard(0)
    setTotalProblems(0)

    setTotalProblems(AllquesObject.length)
    AllquesObject.map((problem) => {
      if (problem.difficulty === 'Easy') {
        setTotalEasy((prev) => prev + 1)
      }
      if (problem.difficulty === 'Medium') {
        setTotalMedium((prev) => prev + 1)
      }
      if (problem.difficulty === 'Hard') {
        setTotalHard((prev) => prev + 1)
      }
    })
  }, [])

  useEffect(() => {
    // axios
    //   .get("http://localhost:3000/homerecord", {
    //     params: { userEmail: localStorage.getItem("email") },
    //   })
    //   .then((response) => {
    //     setJsSolved(response.data.jsSolved || 0);
    //     setPythonSolved(response.data.pythonSolved || 0);
    //     setJavaSolved(response.data.javaSolved || 0);
    //     setEasyWidth(response.data.easySolved || 0);
    //     setMediumWidth(response.data.mediumSolved || 0);
    //     setHardWidth(response.data.hardSolved || 0);
    //     setCircleValue(response.data.totalSolved || 0);
    //     setAllProblems(response.data.allProblems);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching user data:", error);
    //   });
  }, [])

  useEffect(() => {
    const solvedProblemsCount = AllquesObject.filter(
      (problem) => problem.isSolved === true,
    ).length
    dispatch(setSolvedProblemsCount(solvedProblemsCount))
  }, [dispatch])

  const handleLanguageBox = (language) => {
    dispatch(setSelectedLanguage(language))
  }

  const easySolvedCount = getDifficultySolvedCount('Easy')
  const mediumSolvedCount = getDifficultySolvedCount('Medium')
  const hardSolvedCount = getDifficultySolvedCount('Hard')
  const easyTotalCount = getDifficultyTotalCount('Easy')
  const mediumTotalCount = getDifficultyTotalCount('Medium')
  const hardTotalCount = getDifficultyTotalCount('Hard')

  return (
    <div className="home">
      <Navbar />
      <div className="hori"></div>
      <div className="flexerr">
        <div className="left">
          <div className="head1">
            <p>Programming Problems</p>
          </div>
          <div className="languages">
            <Link to="/programming">
              <div className="box" onClick={() => handleLanguageBox('js')}>
                <img src={images.js} alt="" />
                <p>JS Problems</p>
              </div>
            </Link>
            <Link to="/programming">
              <div className="box" onClick={() => handleLanguageBox('python')}>
                <img src={images.python} alt="" />
                <p>Python Problems</p>
              </div>
            </Link>
            <Link to="/programming">
              <div className="box" onClick={() => handleLanguageBox('java')}>
                <img src={images.java} alt="" />
                <p>Java Problems</p>
              </div>
            </Link>
          </div>
          <div className="head2">
            <p>Probelms</p>
            <Link to="/problems">
              <button>Expand</button>
            </Link>
          </div>
          <div className="problemsShower">
            <div className="levelss">
              <div className="levelspart">
                <p>Status</p>
                <p>Problem name</p>
              </div>
              <div className="levelspart">
                <p className="ds">DS</p>
                <p>Difficulty</p>
                <p>Attempts</p>
              </div>
            </div>
            <div className="problemdisplays">
              {AllquesObject.slice(0, 18).map((problem, index) => (
                <ProblemDisplayContainer
                  problem={problem}
                  key={index}
                  value={true}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="statShower">
            <div className="statPart1">
              <div className="totalSolved">
                <p>{solvedProblemsCount}</p>
                <p>Solved</p>
              </div>
              <div className="Solvedhead">
                <p>Solved Problems</p>
              </div>
            </div>
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
                    style={{
                      width: `${(easySolvedCount / easyTotalCount) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="range">
                  <div
                    className="mediumRange"
                    style={{
                      width: `${(mediumSolvedCount / mediumTotalCount) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="range">
                  <div
                    className="hardRange"
                    style={{
                      width: `${(hardSolvedCount / hardTotalCount) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="numberBox">
                <p className="nums">
                  {easySolvedCount} / {easyTotalCount}
                </p>
                <p className="nums">
                  {mediumSolvedCount} / {mediumTotalCount}
                </p>
                <p className="nums">
                  {hardSolvedCount} / {hardTotalCount}
                </p>
              </div>
            </div>
          </div>
          <div className="SubmissionShower">
            <div className="SubmissionHead">
              <p>Submission List</p>
            </div>
            <div className="SubmissionStatusBar">
              <p>Problem name</p>
            </div>
            <div className="SubmissionProblemShower">
              {AllquesObject.filter((problem) => problem.isSolved).map(
                (problem, index) => (
                  <ProblemDisplayContainer
                    problem={problem}
                    isSolved={solvedProblems[index]}
                    key={index}
                    value={false}
                    fontSize={'1vw'}
                    bool={false}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
