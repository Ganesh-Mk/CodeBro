import { configureStore } from '@reduxjs/toolkit'
import problemObjReducer from './problemObjSlice'
import rangesReducer from './rangesSlice'
import languageReducer from './languageSelectingSlice'
import userReducer from './userSlice'
import leaderBoardReducer from './leaderBoardSlice'

const store = configureStore({
  reducer: {
    ranges: rangesReducer,
    problemObj: problemObjReducer,
    language: languageReducer,
    user: userReducer,
    leaderBoard: leaderBoardReducer,
  },
})

export default store
