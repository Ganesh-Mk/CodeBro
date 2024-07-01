import React, { useEffect, useState } from "react";
import "../style/Home.scss";
import Navbar from "../components/Navbar";
import { images } from "../javascripts/images";
import { Link } from "react-router-dom";
import ProblemDisplayContainer from "../components/ProblemDisplayContainer";
import { AllquesObject } from "../javascripts/data";
import { useDispatch, useSelector } from "react-redux";
import { setRangeValue, setSolvedProblemsCount } from "../store/rangesSlice";
import { setSolvedProblems } from "../store/solvedProblemsReducer";
import { setSelectedLanguage } from "../store/languageSelectingSlice";
import axios from "axios";
import { addTestCaseResults } from "../store/problemObjSlice";
import { setUserProblems, userSlice } from "../store/userSlice";
import { backendurl } from "../javascripts/urls";
import DisplayProblemContainer from "../components/DisplayProblemContainer";
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import "../style/Account.scss";
import QuotesDisplay from "../components/QuotesDisplay";
import { setStoreAttempts } from "../store/attemptsSlice";

const HomePage = () => {
  const [easyWidth, setEasyWidth] = useState(0);
  const [mediumWidth, setMediumWidth] = useState(0);
  const [hardWidth, setHardWidth] = useState(0);
  const [totalSolved, setTotalSolved] = useState(0);
  const [totalEasy, setTotalEasy] = useState(0);
  const [totalMedium, setTotalMedium] = useState(0);
  const [totalHard, setTotalHard] = useState(0);
  const [allProblems, setAllProblems] = useState([]);
  const [totalProblems, setTotalProblems] = useState(0);
  const attempts = useSelector((state) => state.attempts.attempts);

  // const backend_url = import.meta.env.REACT_APP_BACKEND_URL;

  const dispatch = useDispatch();
  const solvedProblems = useSelector(
    (state) => state.solvedProblems.solvedProblems
  );
  const problemObj = useSelector((state) => state.problemObj.obj);

  useEffect(() => {
    let solvedArr = [];
    let attemptsArr = JSON.parse(localStorage.getItem("attempts")) || [];

    if (attemptsArr.some((e) => e === 1)) {
      AllquesObject.map((que) => {
        if (
          attemptsArr[que.number - 1] !== 0 ||
          solvedProblems[que.number - 1]
        ) {
          solvedArr.push(true);
        } else {
          solvedArr.push(false);
        }
      });
    } else {
      AllquesObject.map(() => {
        solvedArr.push(false);
      });
    }

    dispatch(setSolvedProblems([...solvedArr]));
    localStorage.setItem("solved", JSON.stringify([...solvedArr]));
  }, [addTestCaseResults]);

  useEffect(() => {
    const savedAttempts = JSON.parse(localStorage.getItem("userAttempts"));

    if (savedAttempts && savedAttempts.length === AllquesObject.length) {
      dispatch(setStoreAttempts(savedAttempts));
    } else {
      axios
        .get(`${backendurl}/getUserAttempts`, {
          params: { userEmail: localStorage.getItem("email") },
        })
        .then((response) => {
          const attemptsData = response.data;
          const initializedAttempts = Array.from(
            { length: AllquesObject.length },
            (_, i) => attemptsData[i] || 0
          );
          dispatch(setStoreAttempts(initializedAttempts));
        })
        .catch((error) => {
          console.error("Error fetching user attempts:", error);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      let solvedArr = [];

      let attemptsArr = JSON.parse(localStorage.getItem("attempts")) || [];
      AllquesObject.map((que) => {
        if (attemptsArr[que.number - 1] !== 0) {
          solvedArr.push(true);
        } else {
          solvedArr.push(false);
        }
      });
      dispatch(setSolvedProblems([...solvedArr]));
      localStorage.setItem("solved", JSON.stringify([...solvedArr]));
    }, 50);
  });

  useEffect(() => {
    setTotalEasy(0);
    setTotalMedium(0);
    setTotalHard(0);
    setTotalProblems(0);

    setTotalProblems(AllquesObject.length);
    AllquesObject.map((problem) => {
      if (problem.difficulty === "Easy") {
        setTotalEasy((prev) => prev + 1);
      }
      if (problem.difficulty === "Medium") {
        setTotalMedium((prev) => prev + 1);
      }
      if (problem.difficulty === "Hard") {
        setTotalHard((prev) => prev + 1);
      }
    });
  }, []);

  const handleLanguageBox = (language) => {
    dispatch(setSelectedLanguage(language));
  };

  useEffect(() => {
    axios
      .get(`${backendurl}/problemRecord`, {
        params: { userEmail: localStorage.getItem("email") },
      })
      .then((response) => {
        setAllProblems(response.data.allProblems);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [addTestCaseResults]);

  useEffect(() => {
    axios
      .get(`${backendurl}/problemRecord`, {
        params: { userEmail: localStorage.getItem("email") },
      })
      .then((response) => {
        setEasyWidth(response.data.easySolved || 0);
        setMediumWidth(response.data.mediumSolved || 0);
        setHardWidth(response.data.hardSolved || 0);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [addTestCaseResults]);

  useEffect(() => {
    setTotalEasy(0);
    setTotalMedium(0);
    setTotalHard(0);
    setTotalProblems(0);

    setTotalProblems(AllquesObject.length);
    AllquesObject.map((problem) => {
      if (problem.difficulty === "Easy") {
        setTotalEasy((prev) => prev + 1);
      }
      if (problem.difficulty === "Medium") {
        setTotalMedium((prev) => prev + 1);
      }
      if (problem.difficulty === "Hard") {
        setTotalHard((prev) => prev + 1);
      }
    });
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="flexerr">
        <div className="left">
          <div className="languages">
            <div className="sec1">
              <h1>Quote of the day</h1>
            </div>

            <QuotesDisplay />
          </div>
          <div className="head2">
            <p>Explore Probelms</p>
            <Link to="/problems">
              <p className="seeall">See all</p>
            </Link>
          </div>
          <div className="problemsShower">
            <div className="levelss">
              <div className="levelspart">
                <p>Status</p>
                <p className="problemName">Problem name</p>
              </div>
              <div className="levelspart levelspartMargin">
                <p className="ds">Topics</p>
                <p>Difficulty</p>
                <p>Attempts</p>
              </div>
            </div>
            <div className="problemdisplays">
              {AllquesObject.slice(0, 10).map((problem, index) => (
                <ProblemDisplayContainer
                  isGapSmall={true}
                  problem={problem}
                  index={index}
                  key={index}
                  value={true}
                />
              ))}
              <Link to="/problems">
                <p className="moreQues">See all problems...</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="accTop">
            <div className="accRightTopHeadingBox">
              <p className="accRightTopHeading">Solved Problems Stats</p>
            </div>
            <div className="accRightTopContentBox">
              <div style={{ display: "grid", placeItems: "center" }}>
                <CircularProgress
                  thickness=".5vw"
                  size={110}
                  value={
                    ((easyWidth + mediumWidth + hardWidth) / totalProblems) *
                    100
                  }
                  color="green.400"
                >
                  <CircularProgressLabel className="circleText">
                    <p>
                      <span className="circleTextSpan">
                        {easyWidth + mediumWidth + hardWidth}
                      </span>
                      <span className="circleTextSpan2">/ {totalProblems}</span>
                    </p>
                    <p className="circleTextP">Solved</p>
                  </CircularProgressLabel>
                </CircularProgress>
              </div>
              <div className="rangeStatContainer">
                <div className="rangeContainer">
                  <div className="diffTextBox">
                    <p className="easy">Easy</p>
                    <p className="medium">Medium</p>
                    <p className="hard">Hard</p>
                  </div>
                  <div className="rangeBox">
                    <div className="range">
                      <div
                        className="easyRange"
                        style={{
                          width: `${(easyWidth / totalEasy) * 100}%`,
                          transition: "1s ease-in-out",
                        }}
                      ></div>
                    </div>
                    <div className="range">
                      <div
                        className="mediumRange"
                        style={{
                          width: `${(mediumWidth / totalMedium) * 100}%`,
                          transition: "1s ease-in-out",
                        }}
                      ></div>
                    </div>
                    <div className="range">
                      <div
                        className="hardRange"
                        style={{
                          width: `${(hardWidth / totalHard) * 100}%`,
                          transition: "1s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="numberBox">
                    <p className="nums">
                      {easyWidth} <span>/ {totalEasy}</span>
                    </p>
                    <p className="nums">
                      {mediumWidth} <span>/ {totalMedium}</span>
                    </p>
                    <p className="nums">
                      {hardWidth} <span>/ {totalHard}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SubmissionShower">
            <div className="SubmissionHead">
              <p>Submission List</p>
            </div>
            <div className="SubmissionStatusBar">
              <p>Problem names</p>
            </div>
            <div className="SubmissionProblemShower">
              {allProblems.length !== 0 ? (
                allProblems
                  .slice()
                  .reverse()
                  .map((obj, i) => (
                    <DisplayProblemContainer
                      key={i}
                      index={i}
                      fontSize="1.4vw"
                      num={obj.number}
                      problem={obj.heading}
                      diff={obj.difficulty}
                    />
                  ))
              ) : (
                <h3 style={{ textAlign: "center", color: "white" }}>
                  No problems solved yet
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
