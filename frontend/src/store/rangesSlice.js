// rangesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  easy: 0,
  medium: 0,
  hard: 0,
  solvedProblemsCount: 0,
};

const rangesSlice = createSlice({
  name: "ranges",
  initialState,
  reducers: {
    setRangeValue: (state, action) => {
      const { difficulty, value } = action.payload;
      state[difficulty] = value;
      
    },
    setSolvedProblemsCount(state, action) {
      state.solvedProblemsCount = action.payload;
    },
  },
});

export const { setRangeValue, setSolvedProblemsCount } = rangesSlice.actions;

export default rangesSlice.reducer;
