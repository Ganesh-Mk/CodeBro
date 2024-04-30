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
      <AccordionItem>
        <h2>
          <AccordionButton mb={1}>
            {results === true ? (
              <CorrectIcon />
            ) : results === false ? (
              <WrongIcon />
            ) : (
              <CircularProgress
                isIndeterminate
                thickness={15}
                size="2vw"
                color="green.300"
              />
            )}

            <Box as="span" ml={10} flex="1" textAlign="left">
              Test case: {curNum} / {total}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div>
            <span className="bold">Input: </span> <span>{input}</span> <br />
          </div>
          <div>
            <span className="bold">Expected Output: </span>{' '}
            <span>{expectedOutput}</span>
          </div>
          <div>
            <span className="bold">Your Output: </span>{' '}
            <span>{userOutput}</span>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </div>
  )
}

export default SubmitCases
