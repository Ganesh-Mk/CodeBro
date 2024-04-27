import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import InputCase from './InputCase'
import { useSelector } from 'react-redux'

const Output = ({ output, isError }) => {
  const problemObj = useSelector((state) => state.problemObj.obj)

  return (
    <>
      <Tabs size="md" variant="enclosed">
        <TabList>
          {problemObj.cases.map((testCase, i) => (
            <Tab>Case {i + 1}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {problemObj.cases.map((testCase, i) => (
            <TabPanel key={i}>
              <InputCase
                num={1}
                input={testCase.input}
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
