import React from 'react'
import '../style/CodingPage.scss'
import '../style/CodingPage.scss'

import { useSelector } from 'react-redux'

function CodeInfoContainer() {
  const problemObj = useSelector((state) => state.problemObj.obj)

  return (
    <>
      <div className="codeLeftHeader">
        <div>
          <button>Description</button>
          <button>Submission</button>
        </div>
        <p>{problemObj.isSolved ? 'Solved' : ''}</p>
      </div>
    </>
  )
}

export default CodeInfoContainer
