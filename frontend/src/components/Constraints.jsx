import React from 'react'

function Constraints({ values }) {
  return (
    <div style={{ marginTop: '3vw' }}>
      <h2
        style={{
          fontWeight: 'bold',
          background: '#353535',
          display: 'inline',
          padding: '1vw 2vw',
          borderRadius: '2vw',
          marginBottom: '3vw',
        }}
      >
        Constraints :{' '}
      </h2>{' '}
      <br />
      <br />
      {values.map((value, i) => (
        <li key={i}>{value}</li>
      ))}
    </div>
  )
}

export default Constraints
