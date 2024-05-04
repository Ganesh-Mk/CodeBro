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

const HomePage = () => {
  const dispatch = useDispatch()

  const { easy, medium, hard } = useSelector((state) => state.ranges)
  const solvedProblemsCount = useSelector(
    (state) => state.ranges.solvedProblemsCount,
  )

  const handleRangeChange = (e, difficulty) => {
    const newValue = parseInt(e.target.value)
    dispatch(setRangeValue({ difficulty, value: newValue }))
  }

  const calculateRangeValue = (solvedCount, totalCount) => {
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
            <div className="statPart2">
              {/* Range inputs for easy, medium, and hard difficulties */}
              <div className="rangespart">
                <label>Easy</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={calculateRangeValue(easySolvedCount, easyTotalCount)}
                  onChange={(e) => handleRangeChange(e, 'easy')}
                  style={{ backgroundColor: 'green' }} // Green color for easy range
                />
              </div>
              <div className="rangespart">
                <label>Medium</label>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={calculateRangeValue(
                    mediumSolvedCount,
                    mediumTotalCount,
                  )}
                  onChange={(e) => handleRangeChange(e, 'medium')}
                  style={{ backgroundColor: 'yellow' }} // Yellow color for medium range
                />
              </div>

              <div className="rangespart">
                <label>Hard</label>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={calculateRangeValue(hardSolvedCount, hardTotalCount)}
                  onChange={(e) => handleRangeChange(e, 'hard')}
                  style={{ backgroundColor: 'red' }} // Red color for hard range
                />
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
