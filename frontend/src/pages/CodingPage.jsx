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
import { addAllOutput, addLanguage } from '../store/problemObjSlice'
import { useEffect } from 'react'

function CodingPage() {
  const editorRef = useRef()
  const toast = useToast()
  const dispatch = useDispatch()
  const [language, setLanguage] = useState('javascript')
  const [output, setOutput] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [allOutput, setAllOutput] = useState([])
  const problemObj = useSelector((state) => state.problemObj.obj)
  const [defaultCode, setDefaultCode] = useState(
    problemObj.javascriptDefaultCode,
  )
  const [value, setValue] = useState(problemObj.javascriptDefaultCode)

  const runCode = async () => {
    setAllOutput([])
    dispatch(addAllOutput([]))

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
    dispatch(addLanguage(language))
    if (language === 'javascript') {
      setValue(problemObj.javascriptDefaultCode)
    } else if (language === 'python') {
      setValue(problemObj.pythonDefaultCode)
    } else if (language === 'java') {
      setValue(problemObj.javaDefaultCode)
    }
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
            defaultCode={defaultCode}
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
