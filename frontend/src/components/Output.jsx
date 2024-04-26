import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import InputCase from './InputCase'

const Output = ({ output, isError }) => {
  return (
    <>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Case 1</Tab>
          <Tab>Case 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <InputCase num={0} output={output} isError={isError} />
          </TabPanel>
          <TabPanel>
            <InputCase num={1} output={output} isError={isError} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
export default Output
