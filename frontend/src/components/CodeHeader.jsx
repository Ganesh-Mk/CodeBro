import '../style/CodeHeader.scss'
import LanguageSelector from './LanguageSelector'
import { Button } from '@chakra-ui/react'

function CodeHeader({
  language,
  isLoadingSubmit,
  isLoading,
  runCode,
  onSelect,
  submitCode,
}) {
  return (
    <div className="codeHeader" style={{ width: '100%' }}>
      <LanguageSelector language={language} onSelect={onSelect} />
      <div style={{ display: 'flex', gap: '2vw' }}>
        <Button
          className="codeHeaderBtns"
          variant="outline"
          colorScheme="green"
          w={'100%'}
          mb={3}
          fontSize={17}
          isLoading={isLoading}
          onClick={runCode}
        >
          Run
        </Button>
        <Button
          className="codeHeaderBtns"
          variant="solid"
          colorScheme="green"
          w={'100%'}
          mb={3}
          mr={3}
          isLoading={isLoadingSubmit}
          onClick={submitCode}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default CodeHeader
