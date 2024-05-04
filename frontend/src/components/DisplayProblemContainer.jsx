import React from 'react'

function DisplayProblemContainer({
  num = '',
  diff = '',
  attempts = '',
  problem = '',
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
        <p>
          {num}. {problem}
        </p>
        <div
          style={{
            marginRight: '5vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '7vw',
          }}
        >
          <p>{diff}</p>
          <p>{attempts}</p>
        </div>
      </div>
    </>
  )
}

export default DisplayProblemContainer
