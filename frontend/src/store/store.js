import { configureStore } from '@reduxjs/toolkit'
import problemObjReducer from './problemObjSlice'
import rangesReducer from './rangesSlice'
import languageReducer from './languageSelectingSlice'
import userReducer from './userSlice'
import leaderBoardReducer from './leaderBoardSlice'
import solvedProblemReducer from './solvedProblemsReducer'

const store = configureStore({
  reducer: {
    ranges: rangesReducer,
    problemObj: problemObjReducer,
    language: languageReducer,
    user: userReducer,
    leaderBoard: leaderBoardReducer,
    solvedProblems: solvedProblemReducer,
  },
})

export default store
