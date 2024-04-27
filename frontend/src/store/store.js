import { configureStore } from '@reduxjs/toolkit'
import problemObjReducer from './problemObjSlice'

const store = configureStore({
  reducer: {
    problemObj: problemObjReducer,
  },
})

export default store
