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
          <h4>solved</h4>
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
