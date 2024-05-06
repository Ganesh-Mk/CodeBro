import { configureStore } from '@reduxjs/toolkit'
import problemObjReducer from './problemObjSlice'
import rangesReducer from './rangesSlice'
import languageReducer from './languageSelectingSlice'
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    ranges: rangesReducer,
    problemObj: problemObjReducer,
    language: languageReducer,
    user: userReducer,
  },
})

export default store
