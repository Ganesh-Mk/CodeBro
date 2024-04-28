import '../style/CodeHeader.scss'
import LanguageSelector from './LanguageSelector'
import { Button } from '@chakra-ui/react'

function CodeHeader({ language, isLoading, runCode, onSelect }) {
  return (
    <div className="codeHeader" style={{ width: '100%' }}>
      <LanguageSelector language={language} onSelect={onSelect} />
      <Button
        variant="outline"
        colorScheme="green"
        loadingText="Running"
        w={100}
        mb={8}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
    </div>
  )
}

export default CodeHeader
