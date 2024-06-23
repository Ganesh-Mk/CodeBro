import { createSlice } from "@reduxjs/toolkit";
import { AllquesObject } from "../javascripts/data";

const initialState = {
  attempts: new Array(AllquesObject.length).fill(0),
};

export const attemptsSlice = createSlice({
  name: "attempts",
  initialState,
  reducers: {
    setStoreAttempts: (state, action) => {
      state.attempts = action.payload;
    },
  },
});

export const { setStoreAttempts } = attemptsSlice.actions;

export default attemptsSlice.reducer;
