import { Box, HStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import { CODE_SNIPPETS } from '../javascripts/constants'

const CodeEditor = ({ language, value, setValue, onMount }) => {
  return (
    <Box>
      <HStack spacing={4}>
        <Box w="95%">
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="50vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
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
