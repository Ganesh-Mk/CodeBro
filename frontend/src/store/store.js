import { configureStore } from "@reduxjs/toolkit";
import problemObjReducer from "./problemObjSlice";
import rangesReducer from "./rangesSlice";
import languageReducer from "./languageSelectingSlice";
import userReducer from "./userSlice";
import leaderBoardReducer from "./leaderBoardSlice";
import solvedProblemReducer from "./solvedProblemsReducer";
import attemptsReducer from "./attemptsSlice";

const store = configureStore({
  reducer: {
    ranges: rangesReducer,
    problemObj: problemObjReducer,
    language: languageReducer,
    user: userReducer,
    leaderBoard: leaderBoardReducer,
    solvedProblems: solvedProblemReducer,
    attempts: attemptsReducer,
  },
});

export default store;
