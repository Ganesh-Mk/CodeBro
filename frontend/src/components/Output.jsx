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

const Output = ({ isError }) => {
  const problemObj = useSelector((state) => state.problemObj.obj)

  const [isUp, setIsUp] = useState(false)
  const toggleUpDown = () => {
    setIsUp(!isUp)
  }

  return (
    <>
      <Tabs size="md" variant="enclosed">
        <TabList>
          {problemObj.example.map((testCase, i) => (
            <Tab key={i}>Case {i + 1}</Tab>
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
