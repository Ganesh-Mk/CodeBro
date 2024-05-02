import React, { useRef, useState, useEffect } from 'react'
import '../style/CodingPage.scss'
import '../style/CodeBroLogo.scss'
import CodeEditor from '../components/CodeEditor'
import Navbar from '../components/Navbar'
import CodeHeader from '../components/CodeHeader'
import Output from '../components/Output'
import { useToast } from '@chakra-ui/react'
import { executeCode } from '../javascripts/api'
import { useSelector, useDispatch } from 'react-redux'
import {
  addAllOutput,
  addAllResult,
  setIsSubmitted,
  addLanguage,
  addTestCaseOutput,
  addTestCaseResults,
} from '../store/problemObjSlice'
import CodeInfoContainer from '../components/CodeInfoContainer'
import { CODE_SNIPPETS } from '../javascripts/constants'

function CodingPage() {
  const editorRef = useRef()
  const toast = useToast()
  const dispatch = useDispatch()
  const [language, setLanguage] = useState('javascript')
  const [output, setOutput] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [allOutput, setAllOutput] = useState([])
  const [allResult, setAllResult] = useState([])
  const [testCaseOutput, setTestCaseOutput] = useState([])
  const [testCaseResult, setTestCaseResult] = useState([])
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

  const problemObj = useSelector((state) => state.problemObj.obj)
  const [value, setValue] = useState(problemObj.javascriptDefaultCode)

  const submitCode = async () => {
    setIsLoadingSubmit(true)
    dispatch(setIsSubmitted(true))
    setTestCaseOutput([])
    dispatch(addAllOutput([]))
    setTestCaseResult([])
    dispatch(addAllResult([]))

    let returnToPrintCode = ''

    for (let i = 0; i < problemObj.cases.length; i++) {
      let sourceCode = editorRef.current.getValue()
      if (!sourceCode) return
      try {
        if (problemObj.language === 'javascript') {
          returnToPrintCode = `\nconsole.log(${problemObj.functionName}(${problemObj.cases[i].parameter}));`
          sourceCode += returnToPrintCode
        } else if (problemObj.language === 'python') {
          returnToPrintCode = `\nprint(${problemObj.functionName}(${problemObj.cases[i].parameter}))`
          sourceCode += returnToPrintCode
        } else if (problemObj.language === 'java') {
          let startCode = `\npublic class Main{\npublic static void main(String[] args){\n\tSystem.out.println(${problemObj.functionName}(${problemObj.cases[i].parameter}));\n}`
          sourceCode = startCode + sourceCode + '\n}'
        }

        const { run: result } = await executeCode(language, sourceCode)

        let expectedOutput = String(problemObj.cases[i].expectedOutput).replace(
          /\s/g,
          '',
        )

        let userOutput = String(result.output.split('\n'))
          .slice(0, -1)
          .replace(/\s/g, '')

        if (expectedOutput == userOutput) {
          setTestCaseResult((prev) => [...prev, true])
        } else {
          setTestCaseResult((prev) => [...prev, false])
        }

        setTestCaseOutput((prev) => [
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
      }
    }

    setIsLoadingSubmit(false)
    console.log('submit code is done')
  }

  useEffect(() => {
    dispatch(addTestCaseOutput(testCaseOutput))
  }, [testCaseOutput])

  useEffect(() => {
    dispatch(addTestCaseResults(testCaseResult))
  }, [testCaseResult])

  const runCode = async () => {
    setAllOutput([])
    dispatch(addAllOutput([]))
    setAllResult([])
    dispatch(addAllResult([]))
    dispatch(setIsSubmitted(false))

    let returnToPrintCode = ''

    for (let i = 0; i < problemObj.example.length; i++) {
      let sourceCode = editorRef.current.getValue()
      if (!sourceCode) return
      try {
        if (problemObj.language === 'javascript') {
          returnToPrintCode = `\nconsole.log(${problemObj.functionName}(${problemObj.example[i].parameter}));`
          sourceCode += returnToPrintCode
        } else if (problemObj.language === 'python') {
          returnToPrintCode = `\nprint(${problemObj.functionName}(${problemObj.example[i].parameter}))`
          sourceCode += returnToPrintCode
        } else if (problemObj.language === 'java') {
          let startCode = `\npublic class Main{\npublic static void main(String[] args){\n\tSystem.out.println(${problemObj.functionName}(${problemObj.example[i].parameter}));\n}`
          sourceCode = startCode + sourceCode + '\n}'
        }

        setIsLoading(true)
        const { run: result } = await executeCode(language, sourceCode)

        let expectedOutput = String(problemObj.example[i].output).replace(
          /\s/g,
          '',
        )
        let userOutput = String(result.output.split('\n'))
          .slice(0, -1)
          .replace(/\s/g, '')
        if (expectedOutput == userOutput) {
          setAllResult((prev) => [...prev, true])
        } else {
          setAllResult((prev) => [...prev, false])
        }

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

  useEffect(() => {
    dispatch(addAllResult(allResult))
  }, [allResult])

  const onMount = (editor) => {
    editorRef.current = editor
    editor.focus()
  }

  const onSelect = (language) => {
    setLanguage(language)
    dispatch(addLanguage(language))
    setValue(CODE_SNIPPETS[language])
  }

  return (
    <div className="codingPageBox">
      <Navbar fontColor="white" />
      <div className="container">
        <CodeInfoContainer isLoadingSubmit={isLoadingSubmit} />
        <div>
          <CodeHeader
            submitCode={submitCode}
            onSelect={onSelect}
            isLoading={isLoading}
            isLoadingSubmit={isLoadingSubmit}
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
