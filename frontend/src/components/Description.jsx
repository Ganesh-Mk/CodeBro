import React from 'react'
import Example from './Example'
import '../style/CodingPage.scss'
import { useSelector } from 'react-redux'
import Constraints from './Constraints'
import CodeInfoContainer from './CodeInfoContainer'

function Description() {
  const problemObj = useSelector((state) => state.problemObj.obj)
  return (
    <div className="left">
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
