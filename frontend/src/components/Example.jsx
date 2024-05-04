import React from 'react'
import '../style/Example.scss'

function Example({
  number = '',
  input = '',
  output = '',
  explanation = '',
  image = null,
}) {
  return (
    <div className="exContainer">
      <h2 className="bold">Example {number}:</h2>
      <div>
        <span className="bold">Input: </span> <span>{input}</span> <br />
      </div>
      <div>
        <span className="bold">Output: </span> <span>{output}</span>
        <br />
      </div>
      {image === null ? (
        ''
      ) : (
        <div>
          <img src={image} alt="example image" />
        </div>
      )}
      <div>
        {explanation && (
          <div>
            <span className="bold">Explanation: </span>
            <span>{explanation}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Example
