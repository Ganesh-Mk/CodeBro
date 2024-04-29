import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  obj: {
    number: 1,
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
  },
})

export const {
  addProblemObj,
  addAllOutput,
  addLanguage,
  addAllResult,
} = problemObjSlice.actions
export default problemObjSlice.reducer
