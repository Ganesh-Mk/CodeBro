import { Box, HStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import { CODE_SNIPPETS } from '../javascripts/constants'
import { useSelector } from 'react-redux'

const CodeEditor = ({ language, value, setValue, onMount }) => {
  const defaultCode = useSelector((state) => state.problemObj.obj.defaultCode)
  return (
    <Box>
      <HStack spacing={4}>
        <Box w="100%">
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="50vh"
            theme="vs-dark"
            language={language}
            defaultValue={defaultCode}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
      </HStack>
    </Box>
  )
}
export default CodeEditor
