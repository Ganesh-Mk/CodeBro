import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  leaderBoardEntries: [],
}

export const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState,
  reducers: {
    setLeaderBoardEntries: (state, action) => {
      state.leaderBoardEntries = action.payload
    },
  },
})

export const { setLeaderBoardEntries } = leaderBoardSlice.actions
export default leaderBoardSlice.reducer
