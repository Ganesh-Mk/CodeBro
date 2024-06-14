import React, { useState } from 'react'
import '../style/CodingPage.scss'
import { useSelector } from 'react-redux'
import '../style/CodeLeftHeader.scss'
import Description from './Description'
import { useEffect } from 'react'
import Submit from './Submit'
import { images } from '../javascripts/images'
import CorrectIcon from './CorrectIcon'
import WrongIcon from './WrongIcon'

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
            style={{
              background: curPage === 'desc' ? '#343434' : 'transparent',
            }}
            onClick={() => setCurPage('desc')}
          >
            Description
          </p>
          {problemObj.isSubmitted === true ? (
            <p
              style={{
                background: curPage === 'sub' ? '#343434' : 'transparent',
              }}
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
              <span style={{ color: '#F63737' }}>Hard</span>
            ) : problemObj.difficulty === 'Medium' ? (
              <span style={{ color: '#FFB700' }}>Medium</span>
            ) : (
              <span style={{ color: '#1CBABA' }}>Easy</span>
            )}
          </h4>
        </div>
        <div>
          {isSolved ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p>Solved</p>
              <CorrectIcon />
            </div>
          ) : (
            <p style={{ color: 'grey' }}>Not Solved</p>
          )}
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
