import React from 'react'
import '../style/DisplayProblemContainer.css'

function DisplayProblemContainer({
  num = '',
  diff = '',
  attempts = '',
  problem = '',
  fontSize = '1.5vw',
}) {
  return (
    <div className="displayProblemContainer">
      <p className={fontSize === '1.5vw' ? 'bigFont' : 'smallFont'}>
        {num}. &nbsp; {problem}
      </p>
      <div className="displayDetails">
        <p
          className={`${
            fontSize === '1.5vw' ? 'bigFont' : 'smallFont'
          } ${diff.toLowerCase()}`}
        >
          {diff}
        </p>

        <p className={fontSize === '1.5vw' ? 'bigFont' : 'smallFont'}>
          {attempts}
        </p>
      </div>
    </div>
  )
}

export default DisplayProblemContainer
