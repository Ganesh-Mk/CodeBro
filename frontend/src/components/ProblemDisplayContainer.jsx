import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProblemObj } from '../store/problemObjSlice'
import { Link } from 'react-router-dom'
import { images } from '../javascripts/images'
import '../style/problemBoxContainer.scss'
import { AllquesObject } from '../javascripts/data'
import { addTestCaseResults } from '../store/problemObjSlice'
import axios from 'axios'

const ProblemDisplayContainer = ({ problem, value, fontSize, bool, index }) => {
  const dispatch = useDispatch()
  const [allProblems, setAllProblems] = useState([])

  const handleClick = () => {
    if (bool === true) {
      var currSelectedLanguage = ''
      const language = useSelector((state) => state.language.selectedLanguage)
      if (language === 'js') {
        currSelectedLanguage = jsAllQuesObj
      } else if (language === 'python') {
        currSelectedLanguage = pythonAllQuesObj
      } else {
        currSelectedLanguage = javaAllQuesObj
      }

      const selectedProblem = currSelectedLanguage.find(
        (item) => item.heading === problem.heading,
      )
      dispatch(addProblemObj(selectedProblem))
    } else {
      const selectedProblem = AllquesObject.find(
        (item) => item.heading === problem.heading,
      )
      dispatch(addProblemObj(selectedProblem))
    }
  }

  useEffect(() => {
    axios
      .get('http://localhost:3000/problemRecord', {
        params: { userEmail: localStorage.getItem('email') },
      })
      .then((response) => {
        localStorage.setItem(
          'attempts',
          JSON.stringify(response.data.allProblems),
        )
        setAllProblems(response.data.allProblems)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
      })
  }, [addTestCaseResults])

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('attempts'))[0])
  }, [index])

  return (
    <div className="problemBoxContainer">
      <div className="problemBoxPart1">
        {value && (
          <>
            <div className="statusContainer">
              {JSON.parse(localStorage.getItem('solved'))[index] ? (
                <img src={images.solved} alt="Solved" />
              ) : (
                'X'
              )}
            </div>
            <div className="numberdisplayer">{problem.number}</div>
          </>
        )}
        <Link
          to="/coding"
          onClick={handleClick}
          className="problemDisplayer"
          style={{ fontSize: fontSize }}
        >
          {problem.heading}
        </Link>
      </div>
      {value && (
        <div className="problemBoxPart2">
          <div className="problemBoxMiddle">{problem.ds}</div>
          <div className="difficultyDisplayer">{problem.difficulty}</div>
          <div className="attempts">
            {JSON.parse(localStorage.getItem('attempts'))[index]
              ? JSON.parse(localStorage.getItem('attempts'))[index].attempts
              : 0}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProblemDisplayContainer
