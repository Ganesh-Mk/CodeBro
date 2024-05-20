import React from 'react'

function DisplayProblemContainer({
  num = '',
  diff = '',
  attempts = '',
  problem = '',
  fontSize = '2vw',
}) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid white',
          padding: '.5vw 1vw',
          margin: '1vw 0',
          borderRadius: '100rem',
        }}
      >
        <p style={{ fontSize: fontSize }}>
          {num}. {problem}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1vw',
          }}
        >
          {fontSize === '2vw' ? (
            <p style={{ fontSize: fontSize, marginRight: '5vw' }}>{diff}</p>
          ) : (
            <p style={{ fontSize: fontSize }}>{diff}</p>
          )}
          {fontSize === '2vw' ? (
            <p style={{ fontSize: fontSize, marginRight: '5vw' }}>{attempts}</p>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default DisplayProblemContainer
