import React from 'react'
import Example from './Example'
import '../style/CodingPage.scss'
import { useSelector } from 'react-redux'
import Constraints from './Constraints'
import Description from './Description'
import CodeLeftHeader from './CodeLeftHeader'

function CodeInfoContainer() {
  const problemObj = useSelector((state) => state.problemObj.obj)
  return (
    <div>
      <CodeLeftHeader />
      <Description />
    </div>
  )
}

export default CodeInfoContainer
