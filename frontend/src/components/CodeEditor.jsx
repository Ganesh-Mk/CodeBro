import { Box, HStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'

const CodeEditor = ({ language, value, setValue, onMount }) => {
  return (
    <Box>
      <HStack spacing={4}>
        <Box w="100%">
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: '10rem',
              detectIndentation: false,
              tabSize: 4,
            }}
            height="50vh"
            theme="vs-dark"
            language={language}
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
