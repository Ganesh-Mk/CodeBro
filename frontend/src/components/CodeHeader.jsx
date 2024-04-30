import '../style/CodeHeader.scss'
import LanguageSelector from './LanguageSelector'
import { Button } from '@chakra-ui/react'

function CodeHeader({ language, isLoading, runCode, onSelect }) {
  function submitCode() {}
  return (
    <div className="codeHeader" style={{ width: '100%' }}>
      <LanguageSelector language={language} onSelect={onSelect} />
      <div style={{ display: 'flex', gap: '2vw' }}>
        <Button
          variant="outline"
          colorScheme="green"
          w={100}
          h={8}
          mb={3}
          fontSize={17}
          isLoading={isLoading}
          onClick={runCode}
        >
          Run
        </Button>
        <Button
          variant="solid"
          colorScheme="green"
          w={100}
          h={8}
          mb={3}
          fontSize={17}
          isLoading={isLoading}
          onClick={submitCode}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default CodeHeader
