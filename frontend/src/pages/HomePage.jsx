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
import DisplayProblemContainer from "../components/DisplayProblemContainer";
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import "../style/Account.scss";

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
      .get("http://localhost:3000/problemRecord", {
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
      .get("http://localhost:3000/problemRecord", {
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
      <div className="hori"></div>
      <div className="flexerr">
        <div className="left">
          <div className="head1">
            <p>Programming Problems</p>
          </div>
          <div className="languages">
            <Link to="#">
              <div className="box" onClick={() => handleLanguageBox("js")}>
                <img src={images.js} alt="" />
                <p>JS Problems</p>
              </div>
            </Link>
            <Link to="#">
              <div className="box" onClick={() => handleLanguageBox("python")}>
                <img src={images.python} alt="" />
                <p>Python Problems</p>
              </div>
            </Link>
            <Link to="#">
              <div className="box" onClick={() => handleLanguageBox("java")}>
                <img src={images.java} alt="" />
                <p>Java Problems</p>
              </div>
            </Link>
          </div>
          <div className="head2">
            <p>Probelms</p>
            <Link to="/problems">
              <button>Expand</button>
            </Link>
          </div>
          <div className="problemsShower">
            <div className="levelss">
              <div className="levelspart">
                <p>Status</p>
                <p>Problem name</p>
              </div>
              <div className="levelspart">
                <p className="ds">DS</p>
                <p>Difficulty</p>
                <p>Attempts</p>
              </div>
            </div>
            <div className="problemdisplays">
              {AllquesObject.slice(0, 10).map((problem, index) => (
                <ProblemDisplayContainer
                  problem={problem}
                  index={index}
                  key={index}
                  value={true}
                />
              ))}
              <Link to="/problems">
                <button className="moreQuesbnt">More Questions...</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="accTop">
            <div className="accRightTopHeadingBox">
              <p style={{ fontSize: "1.6vw", textAlign: "center" }}>
                Solved Problems Stats
              </p>
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
                      <span style={{ fontSize: "1.9vw" }}>
                        {easyWidth + mediumWidth + hardWidth}{" "}
                      </span>
                      <span style={{ fontSize: "1.2vw", color: "grey" }}>
                        / {totalProblems}
                      </span>
                    </p>
                    <p style={{ fontSize: "1.3vw" }}>Solved</p>
                  </CircularProgressLabel>
                </CircularProgress>
              </div>
              <div className="rangeStatContainer">
                <div className="rangeContainer">
                  <div className="diffTextBox">
                    <p className="easy">Easy</p>
                    <p className="Medium">Medium</p>
                    <p className="Hard">Hard</p>
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
                      {easyWidth} / {totalEasy}
                    </p>
                    <p className="nums">
                      {mediumWidth} / {totalMedium}
                    </p>
                    <p className="nums">
                      {hardWidth} / {totalHard}
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
              <p>Problem name</p>
            </div>
            <div className="SubmissionProblemShower">
              {allProblems.length !== 0 ? (
                allProblems.map((obj, i) => (
                  <DisplayProblemContainer
                    key={i}
                    fontSize="1.4vw"
                    num={obj.number}
                    problem={obj.heading}
                    diff={obj.difficulty}
                    attempts={obj.attempts}
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
