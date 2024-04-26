import '../style/CodeHeader.scss'
import LanguageSelector from './LanguageSelector'
import { Button } from '@chakra-ui/react'

function CodeHeader({ language, isLoading, runCode, onSelect }) {
  return (
    <div className="codeHeader">
      <LanguageSelector language={language} onSelect={onSelect} />
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
    </div>
  )
}

export default CodeHeader
