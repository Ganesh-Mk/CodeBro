import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  obj: {
    number: 1,
    heading: 'Two Sum',
    difficulty: 'Easy',
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    example: [
      {
        number: '1',
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
        image: null,
      },
      {
        number: '2',
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: '',
        image: null,
      },
      {
        number: '3',
        input: 'nums = [3,3], target = 8',
        output: '[0,3]',
        explanation: '',
        image: null,
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
    ],
    cases: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
      },
      {
        input: 'nums = [3,7,11,15], target = 10',
        output: '[0,1]',
      },
    ],
    isSolved: false,
    image: null,
  },
}
export const problemObjSlice = createSlice({
  name: 'problemObj',
  initialState,
  reducers: {
    addProblemObj: (state, action) => {
      state.obj = action.payload
    },
  },
})

export const { addProblemObj } = problemObjSlice.actions
export default problemObjSlice.reducer
