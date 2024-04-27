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

const Output = ({ output, isError }) => {
  const problemObj = useSelector((state) => state.problemObj.obj)

  return (
    <>
      <Tabs size="md" variant="enclosed">
        <TabList>
          {problemObj.cases.map((testCase, i) => (
            <Tab key={i}>Case {i + 1}</Tab>
          ))}
        </TabList>
        <TabPanels
          style={{ height: '12vw', overflowX: 'hidden', overflow: 'scroll' }}
        >
          {problemObj.cases.map((testCase, i) => (
            <TabPanel key={i}>
              <TestCase
                testCaseInput={testCase.input}
                testCaseOutput={testCase.output}
                output={output}
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
