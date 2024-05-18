import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  obj: {
    number: 1,
    attempts: 0,
    heading: 'Add two numbers',
    difficulty: 'Easy',
    isSolved: false,
    language: 'javascript',
    image: null,
    allOutput: [],
    allResult: [],
    description: 'Given two parameter, add both and return the value',
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    functionName: 'addTwoNumbers',
    javascriptDefaultCode: `\n/**\n\t* @param {number} a\n\t* @param {number} b\n\t* @return {number}\n*/\n\nvar addTwoNumbers = function(a, b) {\n\t// Write your code here\n};`,
    pythonDefaultCode: `\ndef addTwoNumbers(a,b):\n\t# Write your code here`,
    javaDefaultCode: `\npublic static int addTwoNumbers(int a, int b){\n\t// Write your code here\n}`,
    isSubmitted: false,
    example: [
      {
        number: '1',
        input: 'a = 10, b = 5',
        output: '15',
        parameter: '10,5',
        explanation: 'a + b = 15',
        image: null,
      },
      {
        number: '2',
        input: 'a = 3, b = 2',
        output: '5',
        parameter: '3,2',
        explanation: 'a + b = 5',
        image: null,
      },
      {
        number: '3',
        input: 'a = 200, b = 300',
        output: '500',
        parameter: '200,300',
        explanation: 'a + b = 500',
        image: null,
      },
    ],
    testCaseOutputs: [],
    testCaseResults: [],
    cases: [
      {
        parameter: '10,5',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '3,2',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '200,300',
        expectedOutput: '500',
        userOutput: null,
      },
      {
        parameter: '0,0',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-5,5',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-10,-20',
        expectedOutput: '-30',
        userOutput: null,
      },
      {
        parameter: '1000000000,1',
        expectedOutput: '1000000001',
        userOutput: null,
      },
      {
        parameter: '999999999,999999999',
        expectedOutput: '1999999998',
        userOutput: null,
      },
      {
        parameter: '123456789,987654321',
        expectedOutput: '1111111110',
        userOutput: null,
      },
      {
        parameter: '2,3',
        expectedOutput: '5',
        userOutput: null,
      },
      {
        parameter: '7,8',
        expectedOutput: '15',
        userOutput: null,
      },
      {
        parameter: '17,23',
        expectedOutput: '40',
        userOutput: null,
      },
      {
        parameter: '100,100',
        expectedOutput: '200',
        userOutput: null,
      },
      {
        parameter: '50,50',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '123,456',
        expectedOutput: '579',
        userOutput: null,
      },
      {
        parameter: '-100,200',
        expectedOutput: '100',
        userOutput: null,
      },
      {
        parameter: '999,-999',
        expectedOutput: '0',
        userOutput: null,
      },
      {
        parameter: '-123,-456',
        expectedOutput: '-579',
        userOutput: null,
      },
      {
        parameter: '0,999',
        expectedOutput: '999',
        userOutput: null,
      },
      {
        parameter: '1,0',
        expectedOutput: '1',
        userOutput: null,
      },
    ],
  },
}

export const problemObjSlice = createSlice({
  name: 'problemObj',
  initialState,
  reducers: {
    addProblemObj: (state, action) => {
      state.obj = action.payload
    },
    addAllOutput: (state, action) => {
      state.obj.allOutput = action.payload
    },
    addAllResult: (state, action) => {
      state.obj.allResult = action.payload
    },
    addLanguage: (state, action) => {
      state.obj.language = action.payload
    },
    addTestCaseOutput: (state, action) => {
      state.obj.testCaseOutputs = action.payload
    },
    addTestCaseResults: (state, action) => {
      state.obj.testCaseResults = action.payload
    },
    setIsSubmitted: (state, action) => {
      state.obj.isSubmitted = action.payload
    },
    setAttempts: (state, action) => {
      state.obj.attempts = action.payload
    },
    setIsSolved: (state, action) => {
      state.obj.isSolved = action.payload
    },
  },
})

export const {
  addProblemObj,
  addAllOutput,
  addLanguage,
  addAllResult,
  addTestCaseOutput,
  addTestCaseResults,
  setAttempts,
  setIsSubmitted,
  setIsSolved,
} = problemObjSlice.actions
export default problemObjSlice.reducer
