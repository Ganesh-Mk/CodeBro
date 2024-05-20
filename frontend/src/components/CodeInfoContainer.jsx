import React, { useState } from 'react'
import '../style/CodingPage.scss'
import { useSelector } from 'react-redux'
import '../style/CodeLeftHeader.scss'
import Description from './Description'
import { useEffect } from 'react'
import Submit from './Submit'

function CodeInfoContainer({ isLoadingSubmit }) {
  const problemObj = useSelector((state) => state.problemObj.obj)
  const [curPage, setCurPage] = useState('sub')
  const [isSolved, setIsSolved] = useState(false)

  useEffect(() => {
    let solvedArr = []
    const storedSolved = localStorage.getItem('solved')
    if (storedSolved) {
      solvedArr = JSON.parse(storedSolved)
    }
    if (solvedArr[problemObj.number - 1]) {
      setIsSolved(true)
    } else setIsSolved(false)
  }, [localStorage.getItem('solved')])

  useEffect(() => {
    if (curPage === 'desc') setCurPage('sub')
    else setCurPage('desc')
  }, [problemObj.isSubmitted])

  return (
    <div>
      <div className="codeLeftHeader">
        <div
          style={{
            display: 'flex',
            gap: '2vw',
          }}
        >
          <p
            style={{ background: curPage === 'desc' ? 'grey' : 'transparent' }}
            onClick={() => setCurPage('desc')}
          >
            Description
          </p>
          {problemObj.isSubmitted === true ? (
            <p
              style={{ background: curPage === 'sub' ? 'grey' : 'transparent' }}
              onClick={() => setCurPage('sub')}
            >
              Submission
            </p>
          ) : (
            ''
          )}
        </div>
        <div>
          <h4>
            {problemObj.difficulty === 'Hard' ? (
              <span style={{ color: 'red' }}>Hard</span>
            ) : problemObj.difficulty === 'Medium' ? (
              <span style={{ color: 'orange' }}>Medium</span>
            ) : (
              <span style={{ color: 'yellowgreen' }}>Easy</span>
            )}
          </h4>
        </div>
        <div>
          <h4>{isSolved ? 'Solved' : 'Not Solved'}</h4>
        </div>
      </div>

      {problemObj.isSubmitted === false || curPage === 'desc' ? (
        <Description />
      ) : (
        <Submit isLoadingSubmit={isLoadingSubmit} />
      )}
    </div>
  )
}

export default CodeInfoContainer
