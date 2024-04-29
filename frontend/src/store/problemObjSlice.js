import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  obj: {
    number: 1,
    heading: 'Add two numbers',
    difficulty: 'Easy',
    isSolved: false,
    image: null,
    allOutput: [],
    description: 'Given two parameter, add both and return the value',
    example: [
      {
        number: '1',
        input: 'a = 5, b = 5',
        output: '10',
        explanation: 'a + b = 10',
        image: null,
      },
      {
        number: '2',
        input: 'a = 10, b = 20',
        output: '30',
        explanation: 'a + b = 30',
        image: null,
      },
      {
        number: '3',
        input: 'a = 20, b = 30',
        output: '50',
        explanation: 'a + b = 50',
        image: null,
      },
    ],
    constraints: ['0 <= a <= 999', '0 <= b <= 999'],
    cases: [
      {
        input: 'a = 6, b = 4',
        parameter: '6,4',
        output: '10',
      },
      {
        input: 'a = 10, b = 20',
        parameter: '10,20',
        output: '30',
      },
      {
        input: 'a = 20, b = 30',
        parameter: '20,30',
        output: '50',
      },
    ],
    functionName: 'addTwoNumber',
    defaultCode: `/**
* @param {number} a
* @param {number} b
* @return {number}
*/

var addTwoNumber = function(a, b) {
    return a+b;
};`,
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
