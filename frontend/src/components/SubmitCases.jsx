import React from 'react'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CircularProgress,
} from '@chakra-ui/react'
import CorrectIcon from './CorrectIcon'
import WrongIcon from './WrongIcon'
import '../style/Submit.scss'

function SubmitCases({
  total,
  curNum,
  input,
  expectedOutput,
  userOutput,
  results,
}) {
  return (
    <div>
      <AccordionItem className="test-case-box">
        <h2>
          <AccordionButton mb={1} mt={1} h={10}>
            {results === true ? (
              <CorrectIcon />
            ) : results === false ? (
              <WrongIcon />
            ) : (
              <CircularProgress
                isIndeterminate
                thickness={15}
                size={'1.5rem'}
                color="green.300"
              />
            )}

            <Box
              className="submitCaseHeading"
              as="span"
              ml={10}
              flex="1"
              textAlign="left"
              color={"#4b4b4b"}
            >
              Test case: {curNum} / {total}
            </Box>
            <AccordionIcon color="#4b4b4b" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="submitCaseTexts">
            <span className="bold" style={{color: "#4b4b4b"}}>Input: </span> <span style={{color: "#4b4b4b"}}>{input}</span> <br />
          </div>
          <div className="submitCaseTexts">
            <span style={{color: "#4b4b4b"}} className="bold">Expected Output: </span>{' '}
            <span style={{color: "#4b4b4b"}}>{expectedOutput}</span>
          </div>
          <div className="submitCaseTexts">
            <span className="bold" style={{color: "#4b4b4b"}}>Your Output: </span>{' '}
            <span style={{color: "#4b4b4b"}}>{userOutput}</span>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </div>
  )
}

export default SubmitCases
