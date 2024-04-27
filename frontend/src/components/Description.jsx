import React from 'react'
import Example from './Example'
import '../style/CodingPage.scss'
import { useSelector } from 'react-redux'
import Constraints from './Constraints'

function Description() {
  const problemObj = useSelector((state) => state.problemObj.obj)
  return (
    <div className="left">
      <div className="leftHeader">
        <p>Description</p>
        <p>{problemObj.isSolved ? 'Solved' : ''}</p>
      </div>
      <div className="scroller">
        <p className="que">
          <span>{problemObj.number}</span>. {problemObj.heading}
        </p>
        <div className="desc">{problemObj.description}</div>

        {problemObj.example.map((example, index) => (
          <Example
            key={index}
            number={example.number}
            input={example.input}
            output={example.output}
            explanation={example.explanation}
          />
        ))}

        <Constraints values={problemObj.constraints} className="constraints" />
      </div>
    </div>
  )
}

export default Description
