import { useRef, useState } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector'
import { CODE_SNIPPETS } from '../assets/constants.js'
import Output from './Output'

const CodeEditor = () => {
  const editorRef = useRef()
  const [value, setValue] = useState('')
  const [language, setLanguage] = useState('javascript')

  const onMount = (editor) => {
    editorRef.current = editor
    editor.focus()
  }

  const onSelect = (language) => {
    setLanguage(language)
    setValue(CODE_SNIPPETS[language])
  }

  return (
    <>
      <Box style={{ zIndex: '-1' }}>
        <LanguageSelector
          style={{ zIndex: '99', position: 'relative' }}
          language={language}
          onSelect={onSelect}
        />
        <HStack spacing={4}>
          <Box w="190%">
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="40vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
        </HStack>
        <Output editorRef={editorRef} language={language} />
      </Box>
    </>
  )
}
export default CodeEditor
