import React from 'react'
import { useDispatch } from 'react-redux'
import { addProblemObj } from '../store/problemObjSlice'
import { Link } from 'react-router-dom'
import { images } from '../javascripts/images'
import '../style/problemBoxContainer.scss'
import { AllquesObject } from '../javascripts/data'

const ProblemDisplayContainer = ({ problem, value, fontSize, bool, Home }) => {
  const dispatch = useDispatch()

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

  return (
    <div className="problemBoxContainer">
      <div className="problemBoxPart1">
        {value && (
          <>
            <div className="statusContainer">
              {problem.isSolved && <img src={images.solved} alt="Solved" />}
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
          <div className="attempts">2</div>
        </div>
      )}
    </div>
  )
}

export default ProblemDisplayContainer
