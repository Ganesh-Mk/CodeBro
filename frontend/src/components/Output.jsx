import {
  Tab,
  TabList,
  TabPanel,
  Button,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import TestCase from './TestCase'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import CorrectIcon from './CorrectIcon'
import WrongIcon from './WrongIcon'

const Output = ({ isError }) => {
  const problemObj = useSelector((state) => state.problemObj.obj)

  console.log(problemObj.allResult)
  return (
    <>
      <Tabs size="md" isFitted variant="enclosed">
        <TabList>
          {problemObj.example.map((testCase, i) => (
            <Tab
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2vw',
              }}
            >
              <p>Case {i + 1}</p>
              {problemObj.allResult.length > 0 ? (
                <p>
                  {problemObj.allResult[i] === true ? (
                    <CorrectIcon />
                  ) : problemObj.allResult[i] === false ? (
                    <WrongIcon />
                  ) : (
                    ''
                  )}
                </p>
              ) : (
                ''
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels
          style={{
            height: '12vw',
            overflowX: 'hidden',
            overflow: 'scroll',
          }}
        >
          {problemObj.example.map((testCase, i) => (
            <TabPanel key={i}>
              <TestCase
                testCaseInput={testCase.input}
                testCaseOutput={testCase.output}
                output={problemObj.allOutput[i]}
                isError={isError}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  )
}
export default Output
