import React from 'react'
import { Accordion, Button } from '@chakra-ui/react'
import '../style/Submit.scss'
import SubmitCases from './SubmitCases'
import { useSelector } from 'react-redux'

function Submit({ isLoadingSubmit }) {
  const problemObj = useSelector((state) => state.problemObj.obj)

  return (
    <div style={{ overflow: 'scroll', height: '83vh', padding: ' 2vw' }}>
      <Button
        variant="solid"
        w={440}
        h={8}
        mb={8}
        fontSize={17}
        isLoading={isLoadingSubmit}
        loadingText="Checking for all testcases..."
        colorScheme="green"
      >
        {problemObj.testCaseResults.includes(false)
          ? problemObj.testCaseResults.filter((bool) => bool === false).length +
            ' Test cases are wrong'
          : 'All Correct'}
      </Button>
      <Accordion allowToggle>
        {problemObj.cases.length > 0
          ? problemObj.cases.map((testCase, i) => (
              <SubmitCases
                key={i}
                total={problemObj.cases.length}
                curNum={i + 1}
                input={testCase.parameter}
                expectedOutput={testCase.expectedOutput}
                userOutput={problemObj.testCaseOutputs[i]}
                results={problemObj.testCaseResults[i]}
              />
            ))
          : ''}
      </Accordion>
    </div>
  )
}

export default Submit
