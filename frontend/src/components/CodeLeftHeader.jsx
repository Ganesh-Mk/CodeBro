import React from 'react'
import '../style/CodeLeftHeader.scss'

function CodeLeftHeader() {
  return (
    <div className="codeLeftHeader">
      <div
        style={{
          display: 'flex',
          gap: '2vw',
        }}
      >
        <p style={{ background: 'grey' }}>Description</p>
        <p style={{ background: 'transparent' }}>Submission</p>
      </div>
      <div>
        <h4>solved</h4>
      </div>
    </div>
  )
}

export default CodeLeftHeader
