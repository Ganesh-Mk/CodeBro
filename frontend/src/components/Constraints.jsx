import React from 'react'

function Constraints({ values }) {
  return (
    <div style={{ marginTop: '3vw', }}>
      <h2
        style={{
          fontWeight: 'bold',
          background: '#F1F1F3',
          display: 'inline',
          padding: '1vw 2vw',
          borderRadius: '2vw',
          marginBottom: '3vw',
          color: "#4b4b4b",
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        Constraints :{' '}
      </h2>{' '}
      <br />
      <br />
      {values.map((value, i) => (
        <li style={{color:"#4b4b4b"}} key={i}>{value}</li>
      ))}
    </div>
  )
}

export default Constraints
