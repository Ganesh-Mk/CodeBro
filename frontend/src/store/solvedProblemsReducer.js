import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  solvedProblems: [],
}

export const solvedProblemSlice = createSlice({
  name: 'solvedProblems',
  initialState,
  reducers: {
    setSolvedProblems: (state, action) => {
      state.solvedProblems = action.payload
      console.log(state.solvedProblems)
    },
  },
})

export const { setSolvedProblems } = solvedProblemSlice.actions
export default solvedProblemSlice.reducer
