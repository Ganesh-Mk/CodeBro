import React, { useRef, useState } from 'react'
import '../style/CodingPage.scss'
import '../style/CodeBroLogo.scss'
import '../javascripts/api'
import '../javascripts/constants'
import CodeEditor from '../components/CodeEditor'
import Description from '../components/Description'
import Navbar from '../components/Navbar'
import CodeHeader from '../components/CodeHeader'
import Output from '../components/Output'
import { useToast } from '@chakra-ui/react'
import { executeCode } from '../javascripts/api'
import { AllquesObject } from '../javascripts/data'
import { CODE_SNIPPETS } from '../javascripts/constants'
import { useSelector, useDispatch } from 'react-redux'
import { addAllOutput } from '../store/problemObjSlice'
import { useEffect } from 'react'

function CodingPage() {
  const editorRef = useRef()
  const toast = useToast()
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [output, setOutput] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [allOutput, setAllOutput] = useState([])
  const [correctCases, setCorrectCases] = useState([])
  const problemObj = useSelector((state) => state.problemObj.obj)

  const runCode = async () => {
    setAllOutput([])
    dispatch(addAllOutput([]))

    let returnToPrintCode = ''
    for (let i = 0; i < problemObj.example.length; i++) {
      let sourceCode = editorRef.current.getValue()
      if (!sourceCode) return
      try {
        returnToPrintCode = `
            function printReturnValue(){
              let result = ${problemObj.functionName}(${problemObj.example[i].parameter});
              if(result) console.log(result);
              else console.log("Return the answer");
            }
            printReturnValue();
          `
        sourceCode += returnToPrintCode
        console.log(sourceCode)

        setIsLoading(true)
        const { run: result } = await executeCode(language, sourceCode)
        setOutput(result.output.split('\n'))
        setAllOutput((prev) => [
          ...prev,
          ...result.output.split('\n').filter((value) => value !== ''),
        ])

        result.stderr ? setIsError(true) : setIsError(false)
      } catch (error) {
        console.log(error)
        toast({
          title: 'An error occurred.',
          description: error.message || 'Unable to run code',
          status: 'error',
          duration: 6000,
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    dispatch(addAllOutput(allOutput))
  }, [allOutput])

  const onMount = (editor) => {
    editorRef.current = editor
    editor.focus()
  }

  const onSelect = (language) => {
    setLanguage(language)
    setValue(CODE_SNIPPETS[language])
  }

  return (
    <div className="codingPageBox">
      <Navbar fontColor="white" />
      <div className="container">
        <Description />
        <div>
          <CodeHeader
            onSelect={onSelect}
            isLoading={isLoading}
            runCode={runCode}
            language={language}
          />
          <CodeEditor
            language={language}
            onSelect={onSelect}
            onMount={onMount}
            value={value}
            setValue={setValue}
          />
          <Output
            output={output}
            isLoading={isLoading}
            isError={isError}
            runCode={runCode}
          />
        </div>
      </div>
    </div>
  )
}

export default CodingPage
