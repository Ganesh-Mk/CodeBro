import React from 'react'

function Constraints({ values }) {
  return (
    <div style={{ marginTop: '3vw' }}>
      <h2 style={{ fontWeight: 'bold' }}>Constraints : </h2>
      {values.map((value, i) => (
        <li key={i}>{value}</li>
      ))}
    </div>
  )
}

export default Constraints
