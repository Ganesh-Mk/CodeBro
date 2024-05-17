import React from 'react'
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'

function LeaderBoardUsers({
  rank = '',
  name = '',
  total = 0,
  easy = 0,
  medium = 0,
  hard = 0,
}) {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div
              style={{
                display: 'grid',
                width: '100%',
                gridTemplateColumns: '5% 45% 10% 10% 10% 10% 10%',
              }}
            >
              <p>{rank}</p>
              <p style={{ textAlign: 'left', marginLeft: '6vw' }}>{name}</p>

              <p>{total}</p>
              <p>{easy}</p>
              <p>{medium}</p>
              <p>{hard}</p>
              <AccordionIcon
                style={{ textAlign: 'right', marginLeft: '2vw' }}
              />
            </div>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={3} w="100%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </>
  )
}

export default LeaderBoardUsers
