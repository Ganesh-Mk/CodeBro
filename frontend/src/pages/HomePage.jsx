import React, { useEffect, useState } from "react";
import "../style/Home.scss";
import Navbar from "../components/Navbar";
import { images } from "../javascripts/images";
import { Link } from "react-router-dom";
import ProblemDisplayContainer from "../components/ProblemDisplayContainer";
import AllquesObject from "../javascripts/data";

const HomePage = () => {
  // State variables to track the range values for each difficulty level
  const [easyRange, setEasyRange] = useState(0);
  const [mediumRange, setMediumRange] = useState(0);
  const [hardRange, setHardRange] = useState(0);
  const [totalSolved, setTotalSolved] = useState(0);
  const [sumittedProblems, setSubmittedProblems] = useState([]);


  // Function to handle changes in the range inputs
  const handleRangeChange = (e, difficulty) => {
    const newValue = parseInt(e.target.value);
    switch (difficulty) {
      case "easy":
        setEasyRange(newValue);
        break;
      case "medium":
        setMediumRange(newValue);
        break;
      case "hard":
        setHardRange(newValue);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const totalSolvedQuestions = AllquesObject.filter((problem) => problem.isSolved === true).length
    setTotalSolved(totalSolvedQuestions)
    const SubmittedOnes = AllquesObject.filter((problem) => problem.isSolved === true)
    setSubmittedProblems(SubmittedOnes)
  }, [AllquesObject])

  // Calculate the range values based on the number of solved problems for each difficulty level
  const calculateRangeValue = (solvedCount, totalCount) => {
    return (solvedCount / totalCount) * 100;
  };

  // Get the count of solved problems for each difficulty level
  const getDifficultySolvedCount = (difficulty) => {
    return AllquesObject.filter(
      (problem) => problem.difficulty === difficulty && problem.isSolved
    ).length;
  };

  // Get the total count of problems for each difficulty level
  const getDifficultyTotalCount = (difficulty) => {
    return AllquesObject.filter((problem) => problem.difficulty === difficulty)
      .length;
  };

  // Calculate the range values for each difficulty level
  const easySolvedCount = getDifficultySolvedCount("Easy");
  const mediumSolvedCount = getDifficultySolvedCount("Medium");
  const hardSolvedCount = getDifficultySolvedCount("Hard");
  const easyTotalCount = getDifficultyTotalCount("Easy");
  const mediumTotalCount = getDifficultyTotalCount("Medium");
  const hardTotalCount = getDifficultyTotalCount("Hard");

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
            <div className="box">
              <img src={images.js} alt="" />
              <p>JS Problems</p>
            </div>
            <div className="box">
              <img src={images.python} alt="" />
              <p>Python Problems</p>
            </div>
            <div className="box">
              <img src={images.java} alt="" />
              <p>Java Problems</p>
            </div>
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
                <p>Difficulty</p>
                <p>Attempts</p>
              </div>
            </div>
            <div className="problemdisplays">
              {AllquesObject.slice(0, 18).map((problem, index) => (
                <ProblemDisplayContainer problem={problem} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="statShower">
            <div className="statPart1">
              <div className="totalSolved">
                <p>{totalSolved}</p>
                <p>Solved</p>
              </div>
              <div>
                <p>Solved Problems</p>
              </div>
            </div>
            <div className="statPart2">
              {/* Range inputs for easy, medium, and hard difficulties */}
              <div className="rangespart">
                <label>Easy</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={calculateRangeValue(easySolvedCount, easyTotalCount)}
                  onChange={(e) => handleRangeChange(e, "easy")}
                  style={{ backgroundColor: "green" }} // Green color for easy range
                />
              </div>
              <div className="rangespart">
                <label>Medium</label>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={calculateRangeValue(
                    mediumSolvedCount,
                    mediumTotalCount
                  )}
                  onChange={(e) => handleRangeChange(e, "medium")}
                  style={{ backgroundColor: "yellow" }} // Yellow color for medium range
                />
              </div>

              <div className="rangespart">
                <label>Hard</label>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={calculateRangeValue(hardSolvedCount, hardTotalCount)}
                  onChange={(e) => handleRangeChange(e, "hard")}
                  style={{ backgroundColor: "red" }} // Red color for hard range
                />
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
                {sumittedProblems.map((problem) => (
                  <ProblemDisplayContainer problem={problem} value={false} fontSize={"1vw"}/>
                ))} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
