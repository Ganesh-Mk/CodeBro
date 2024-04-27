import React from 'react'
import { Box, Text } from '@chakra-ui/react'

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
        {testCaseInput}
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
        {testCaseOutput}
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
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output'}
      </Box>
    </div>
  )
}

export default TestCase
