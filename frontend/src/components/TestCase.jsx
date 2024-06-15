import React, { useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import '../style/Output.scss'

function TestCase({ testCaseInput, testCaseOutput, output, isError }) {

  useEffect(() => {console.log("output: ", output)},[])
  return (
    <div className="testCase">
      <div className="testCaseBlock">
        <p className="bold">Input: </p>
        <Box
          height="7vh"
          p={2}
          border=".5px solid grey"
          borderRadius={4}
          overflow="auto"
        >
          <p>{testCaseInput}</p>
        </Box>
      </div>
      <div className="testCaseBlock">
        <p className="bold">Expected output: </p>
        <Box
          height="7vh"
          p={2}
          border=".5px solid grey"
          borderRadius={4}
          overflow="auto"
        >
          <p>{testCaseOutput}</p>
        </Box>
      </div>

      <div className="testCaseBlock">
        <p className="bold">Your output: </p>
        <Box
          height="7vh"
          p={2}
          color={isError ? 'red.400' : ''}
          border="1px solid white"
          borderRadius={4}
          borderColor={isError ? 'red.500' : 'grey'}
          overflow="auto"
        >
          <p>
            {output ? (
              output
            ) : output === undefined ? (
              (
              <span style={{ color: '#E92700' }}>
                Time Limit Exceed
              </span>
            )
            ) : (
              <span style={{ color: 'grey' }}>Click "Run" to see your output</span>
            )}
          </p>
        </Box>
      </div>
    </div>
  )
}

export default TestCase
