import { configureStore } from '@reduxjs/toolkit'
import problemObjReducer from './problemObjSlice'
import rangesReducer from './rangesSlice'
import languageReducer from './languageSelectingSlice'

const store = configureStore({
  reducer: {
    ranges: rangesReducer,
    problemObj: problemObjReducer,
    language: languageReducer,
  },
})

export default store
