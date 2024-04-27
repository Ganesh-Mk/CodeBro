import React from 'react'
import Example from './Example'
import '../style/CodingPage.scss'
import { useSelector } from 'react-redux'

function Description() {
  const problemObj = useSelector((state) => state.problemObj.obj)
  console.log('From Desciption: ', problemObj)
  return (
    <div className="left">
      <div className="leftHeader">
        <p>Description</p>
        <p>Solved</p>
      </div>
      <div className="scroller">
        <p className="que">{problemObj.heading}</p>
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

        <div className="constraints">{problemObj.constraints}</div>
      </div>
    </div>
  )
}

export default Description
