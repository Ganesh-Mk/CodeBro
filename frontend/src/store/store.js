import { configureStore } from '@reduxjs/toolkit'
import problemObjReducer from './problemObjSlice'
import rangesReducer from './rangesSlice'

const store = configureStore({
  reducer: {
    ranges: rangesReducer,
    problemObj: problemObjReducer,
  },
})

export default store
