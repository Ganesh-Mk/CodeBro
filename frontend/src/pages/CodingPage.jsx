import React, { useRef, useState, useEffect } from 'react'
import '../style/CodingPage.scss'
import '../style/CodeBroLogo.scss'
import CodeEditor from '../components/CodeEditor'
import Navbar from '../components/Navbar'
import CodeHeader from '../components/CodeHeader'
import axios from 'axios'
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
  setAttempts,
  addProblemObj,
  setIsSolved,
} from '../store/problemObjSlice'
import { setLeaderBoardEntries } from '../store/leaderBoardSlice'
import CodeInfoContainer from '../components/CodeInfoContainer'

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

    const runAllCases = async () => {
      let caseCorrectArr = []
      for (let i = 0; i < problemObj.cases.length; i++) {
        let sourceCode = editorRef.current.getValue()
        if (!sourceCode) return
        try {
          if (problemObj.returnType === 'linkedlist') {
            if (problemObj.language === 'javascript') {
              returnToPrintCode = `
              function ListNode(val) {
                  this.val = val;
                  this.next = null;
              }
          
              function linkedListToArray(head) {
                  const result = [];
                  let current = head;
                  while (current) {
                      result.push(current.val);
                      current = current.next;
                  }
                  return result;
              }
          
              function arrayToLinkedList(arr) {
                  if (!arr.length) return null;
                  let head = new ListNode(arr[0]);
                  let current = head;
                  for (let i = 1; i < arr.length; i++) {
                      current.next = new ListNode(arr[i]);
                      current = current.next;
                  }
                  return head;
              }
          
              const linkedList = arrayToLinkedList(${problemObj.cases[i].parameter});
              const result = ${problemObj.functionName}(linkedList);
              console.log(linkedListToArray(result));
              `
              sourceCode += returnToPrintCode
            } else if (problemObj.language === 'python') {
              let start = `
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next
      
`
              start = start + sourceCode
              let mid = `

def linkedListToArray(head):
  result = []
  current = head
  while current:
      result.append(current.val)
      current = current.next
  return result

def arrayToLinkedList(arr):
  if not arr:
      return None
  head = ListNode(arr[0])
  current = head
  for i in range(1, len(arr)):
      current.next = ListNode(arr[i])
      current = current.next
  return head

# Added 'Solution' prefix to the function call
solution = Solution()
linkedList = arrayToLinkedList(${problemObj.cases[i].parameter})
result = solution.${problemObj.functionName}(linkedList)  # Added 'solution.' prefix
print(linkedListToArray(result))
  `
              sourceCode = start + mid
            } else if (problemObj.language === 'java') {
              returnToPrintCode = `
  import java.util.*;
  
  public class Solution {
      public ListNode arrayToLinkedList(int[] arr) {
          if (arr.length == 0) return null;
          ListNode head = new ListNode(arr[0]);
          ListNode current = head;
          for (int i = 1; i < arr.length; i++) {
              current.next = new ListNode(arr[i]);
              current = current.next;
          }
          return head;
      }
  
      public int[] linkedListToArray(ListNode head) {
          List<Integer> result = new ArrayList<>();
          ListNode current = head;
          while (current != null) {
              result.add(current.val);
              current = current.next;
          }
          return result.stream().mapToInt(Integer::intValue).toArray();
      }
  
      ${sourceCode}
  
      public static void main(String[] args) {
          Solution solution = new Solution();
          int[] arr = {${problemObj.cases[i].parameter.substring(
            1,
            problemObj.cases[i].parameter.length - 1,
          )}};
          ListNode linkedList = solution.arrayToLinkedList(arr);
          ListNode result = solution.${problemObj.functionName}(linkedList);
          int[] arrayResult = solution.linkedListToArray(result);
          System.out.println(Arrays.toString(arrayResult));
      }
  }
  class ListNode {
    int val;
    ListNode next;
  
    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
  }
              `
              sourceCode = returnToPrintCode
            }
          } else {
            if (problemObj.language === 'java') {
              if (problemObj.returnType === 'array') {
                let startCode = `import java.util.*;\npublic class Main{\n\npublic static void main(String[] args){\n\t
                int[] result = ${problemObj.cases[i].javaFuncCall}
  
                  System.out.print('[');
                  for(int i=0; i<result.length; i++){
                    System.out.print(result[i]);
                      if(i != result.length-1){
                        System.out.print(',');
                      }
                    }
                  System.out.print(']');
    
                \n}`

                sourceCode = startCode + sourceCode + '\n}'
              } else if (problemObj.returnType === 'matrix') {
                let startCode = `import java.util.*;\npublic class Main{\n\npublic static void main(String[] args){\n\t
                int[][] result = ${problemObj.cases[i].javaFuncCall}
  
                System.out.print('[');
                for(int i = 0; i < result.length; i++) {
                    System.out.print('[');
                    for(int j = 0; j < result[i].length; j++) {
                        System.out.print(result[i][j]);
                        if(j != result[i].length - 1) {
                            System.out.print(',');
                        }
                    }
                    System.out.print(']');
                    if(i != result.length - 1) {
                        System.out.print(',');
                    }
                }
                System.out.print(']');
    
                \n}`

                sourceCode = startCode + sourceCode + '\n}'
              } else {
                let startCode = `import java.util.*;\npublic class Main{\n\npublic static void main(String[] args){\n\t
                System.out.println(${problemObj.cases[i].javaFuncCall}); \n}`
                sourceCode = startCode + sourceCode + '\n}'
              }
            } else if (problemObj.language === 'javascript') {
              returnToPrintCode = `\nconsole.log(${problemObj.functionName}(${problemObj.cases[i].parameter}));`
              sourceCode += returnToPrintCode
            } else if (problemObj.language === 'python') {
              returnToPrintCode = `\n\nprint(${problemObj.functionName}(${problemObj.cases[i].parameter}))`
              sourceCode += returnToPrintCode
            }
          }

          const { run: result } = await executeCode(language, sourceCode)

          let expectedOutput = String(
            problemObj.cases[i].expectedOutput,
          ).replace(/\s/g, '')

          let userOutput = String(result.output.split('\n'))
            .replace(/\s/g, '')
            .slice(0, -1)

          if (
            problemObj.language === 'java' &&
            (problemObj.returnType === 'array' ||
              problemObj.returnType === 'matrix')
          ) {
            userOutput += ']'
          }

          let isTestCaseCorrect = expectedOutput === userOutput
          setTestCaseResult((prev) => [...prev, isTestCaseCorrect])
          caseCorrectArr.push(isTestCaseCorrect)

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

      return caseCorrectArr
    }

    let caseCorrectArr = await runAllCases()
    let allCorrect = caseCorrectArr.every((e) => e === true)
    if (allCorrect) {
      dispatch(setIsSolved(true))
      let emailVal = localStorage.getItem('email')
      await axios
        .post('http://localhost:3000/addProblemRecord', {
          userEmail: emailVal,
          problemObj: problemObj,
        })
        .then((response) => {
          console.log('Problem record added successfully')
        })
        .catch((error) => {
          console.error('Error adding problem record:', error)
        })

      await axios
        .post('http://localhost:3000/leaderBoard', {
          userEmail: emailVal,
          problemObj: problemObj,
        })
        .then((response) => {
          console.log('LeaderBoard record added successfully', response.data)
          dispatch(setLeaderBoardEntries(response.data)) // Assuming response.data is an array
        })
        .catch((error) => {
          console.error('Error LeaderBoard problem record:', error)
        })
    }

    dispatch(addAllResult([]))
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

    let returnToPrintCode = ''

    for (let i = 0; i < problemObj.example.length; i++) {
      let sourceCode = editorRef.current.getValue()
      if (!sourceCode) return
      try {
        if (problemObj.returnType === 'linkedlist') {
          if (problemObj.language === 'javascript') {
            returnToPrintCode = `
            function ListNode(val) {
                this.val = val;
                this.next = null;
            }
        
            function linkedListToArray(head) {
                const result = [];
                let current = head;
                while (current) {
                    result.push(current.val);
                    current = current.next;
                }
                return result;
            }
        
            function arrayToLinkedList(arr) {
                if (!arr.length) return null;
                let head = new ListNode(arr[0]);
                let current = head;
                for (let i = 1; i < arr.length; i++) {
                    current.next = new ListNode(arr[i]);
                    current = current.next;
                }
                return head;
            }
        
            const linkedList = arrayToLinkedList(${problemObj.example[i].parameter});
            const result = ${problemObj.functionName}(linkedList);
            console.log(linkedListToArray(result));
            `
            sourceCode += returnToPrintCode
          } else if (problemObj.language === 'python') {
            let start = `
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next
        
`
            start = start + sourceCode

            let mid = `

def linkedListToArray(head):
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result

def arrayToLinkedList(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for i in range(1, len(arr)):
        current.next = ListNode(arr[i])
        current = current.next
    return head

# Added 'Solution' prefix to the function call
solution = Solution()
linkedList = arrayToLinkedList(${problemObj.example[i].parameter})
result = solution.${problemObj.functionName}(linkedList)  # Added 'solution.' prefix
print(linkedListToArray(result))
`
            sourceCode = start + mid
          } else if (problemObj.language === 'java') {
            returnToPrintCode = `
import java.util.*;

public class Solution {
    public ListNode arrayToLinkedList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    public int[] linkedListToArray(ListNode head) {
        List<Integer> result = new ArrayList<>();
        ListNode current = head;
        while (current != null) {
            result.add(current.val);
            current = current.next;
        }
        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    ${sourceCode}

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] arr = {${problemObj.example[i].parameter.substring(
          1,
          problemObj.example[i].parameter.length - 1,
        )}};
        ListNode linkedList = solution.arrayToLinkedList(arr);
        ListNode result = solution.${problemObj.functionName}(linkedList);
        int[] arrayResult = solution.linkedListToArray(result);
        System.out.println(Arrays.toString(arrayResult));
    }
}
class ListNode {
  int val;
  ListNode next;

  ListNode(int val) {
      this.val = val;
      this.next = null;
  }
}
            `
            sourceCode = returnToPrintCode
          }
        } else {
          if (problemObj.language === 'java') {
            if (problemObj.returnType === 'array') {
              let startCode = `import java.util.*;\npublic class Main{\n\npublic static void main(String[] args){\n\t
                int[] result = ${problemObj.example[i].javaFuncCall}
  
                  System.out.print('[');
                  for(int i=0; i<result.length; i++){
                    System.out.print(result[i]);
                      if(i != result.length-1){
                        System.out.print(',');
                      }
                    }
                  System.out.print(']');
    
                \n}`

              sourceCode = startCode + sourceCode + '\n}'
            } else if (problemObj.returnType === 'matrix') {
              let startCode = `import java.util.*;\npublic class Main{\n\npublic static void main(String[] args){\n\t
                int[][] result = ${problemObj.example[i].javaFuncCall}
  
                System.out.print('[');
                for(int i = 0; i < result.length; i++) {
                    System.out.print('[');
                    for(int j = 0; j < result[i].length; j++) {
                        System.out.print(result[i][j]);
                        if(j != result[i].length - 1) {
                            System.out.print(',');
                        }
                    }
                    System.out.print(']');
                    if(i != result.length - 1) {
                        System.out.print(',');
                    }
                }
                System.out.print(']');
    
                \n}`

              sourceCode = startCode + sourceCode + '\n}'
            } else {
              let startCode = `import java.util.*;\npublic class Main{\n\npublic static void main(String[] args){\n\t
                System.out.println(${problemObj.example[i].javaFuncCall}); \n}`
              sourceCode = startCode + sourceCode + '\n}'
            }
          } else {
            if (problemObj.language === 'javascript') {
              returnToPrintCode = `\nconsole.log(${problemObj.functionName}(${problemObj.example[i].parameter}));`
              sourceCode += returnToPrintCode
            } else if (problemObj.language === 'python') {
              returnToPrintCode = `\n\nprint(${problemObj.functionName}(${problemObj.example[i].parameter}))`
              sourceCode += returnToPrintCode
            }
          }
        }

        setIsLoading(true)
        const { run: result } = await executeCode(language, sourceCode)

        let expectedOutput = String(problemObj.example[i].output).replace(
          /\s/g,
          '',
        )
        let userOutput = String(result.output.split('\n'))
          .replace(/\s/g, '')
          .slice(0, -1)

        if (
          problemObj.language === 'java' &&
          (problemObj.returnType === 'array' ||
            problemObj.returnType === 'matrix')
        ) {
          userOutput += ']'
        }

        console.log(sourceCode)
        console.log(expectedOutput)
        console.log(userOutput)

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
    if (language === 'javascript') {
      setValue(problemObj.javascriptDefaultCode)
    } else if (language === 'python') {
      setValue(problemObj.pythonDefaultCode)
    } else {
      setValue(problemObj.javaDefaultCode)
    }
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
