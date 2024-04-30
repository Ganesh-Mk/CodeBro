import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import '../style/Output.scss'

function TestCase({ testCaseInput, testCaseOutput, output, isError }) {
  return (
    <div>
      <p>Input: </p>
      <Box
        height="7vh"
        p={2}
        ml={-4}
        mb={5}
        border=".5px solid grey"
        borderRadius={4}
        overflow="auto"
      >
        <p>{testCaseInput}</p>
      </Box>
      <p>Expected output: </p>
      <Box
        height="7vh"
        p={2}
        ml={-4}
        mb={5}
        border=".5px solid grey"
        borderRadius={4}
        overflow="auto"
      >
        <p>{testCaseOutput}</p>
      </Box>
      <p>Your output: </p>
      <Box
        height="7vh"
        p={2}
        ml={-4}
        color={isError ? 'red.400' : ''}
        border="1px solid white"
        borderRadius={4}
        borderColor={isError ? 'red.500' : 'grey'}
        overflow="auto"
      >
        <p>{output ? output : 'Click "Run Code" to see the output'}</p>
      </Box>
    </div>
  )
}

export default TestCase
