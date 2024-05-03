import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLanguage: 'js', 
};

export const languagesSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setSelectedLanguage } = languagesSlice.actions;

export default languagesSlice.reducer;
