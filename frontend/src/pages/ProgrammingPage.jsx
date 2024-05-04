import React from "react";
import { useEffect, useState } from "react";
import "../style/Programming.scss";
import Navbar from "../components/Navbar";
import { images } from "../javascripts/images";
import ProblemDisplayContainer from "../components/ProblemDisplayContainer";
import {
  javaAllQuesObj,
  jsAllQuesObj,
  pythonAllQuesObj,
} from "../javascripts/data";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLanguage } from "../store/languageSelectingSlice";

function ProgrammingPage() {
  const [selectedValue, setSelectedValue] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [languageObj, setLanguageObj] = useState([]);

  const language = useSelector((state) => state.language.selectedLanguage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (language) {
      let selectedLanguageobj;
      if (language === "java") {
        selectedLanguageobj = filterByDifficulty(selectedValue, javaAllQuesObj);
      } else if (language === "js") {
        selectedLanguageobj = filterByDifficulty(selectedValue, jsAllQuesObj);
      } else if (language === "python") {
        selectedLanguageobj = filterByDifficulty(
          selectedValue,
          pythonAllQuesObj
        );
      }
      setLanguageObj(selectedLanguageobj);
    }
  }, [language, selectedValue, searchTerm, selectedTopic]);

  const filterByDifficulty = (difficulty, planguage) => {
    let filteredProblems = planguage;

    if (difficulty !== "All") {
      filteredProblems = filteredProblems.filter(
        (problem) =>
          problem.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filteredProblems = filteredProblems.filter((problem) =>
        problem.heading.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    if (selectedTopic && selectedTopic.toLowerCase() !== "all") {
      const lowerCaseSelectedTopic = selectedTopic.toLowerCase();
      if (lowerCaseSelectedTopic === "solved") {
        filteredProblems = filteredProblems.filter(
          (problem) => problem.isSolved === true
        );
      } else if (lowerCaseSelectedTopic === "unsolved") {
        filteredProblems = filteredProblems.filter(
          (problem) => problem.isSolved === false
        );
      } else {
        filteredProblems = filteredProblems.filter(
          (problem) =>
            problem.topic &&
            problem.topic.toLowerCase() === lowerCaseSelectedTopic
        );
      }
    }

    return filteredProblems;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLanguageBox = (language) => {
    dispatch(setSelectedLanguage(language));
  };

  return (
    <div className="mainContainer">
      <Navbar />
      <div className="languageHeading">
        {language === "js" ? (
          <div
            style={{ boxShadow: "-1px -1px 22px #729feb" }}
            className="box"
            onClick={() => handleLanguageBox("js")}
          >
            <img src={images.js} alt="" />
            <p>JS Problems</p>
          </div>
        ) : (
          <div className="box" onClick={() => handleLanguageBox("js")}>
            <img src={images.js} alt="" />
            <p>JS Problems</p>
          </div>
        )}

        {language === "python" ? (
          <div
            style={{ boxShadow: "-1px -1px 22px #729feb" }}
            className="box"
            onClick={() => handleLanguageBox("python")}
          >
            <img src={images.python} alt="" />
            <p>Python Problems</p>
          </div>
        ) : (
          <div className="box" onClick={() => handleLanguageBox("python")}>
            <img src={images.python} alt="" />
            <p>Python Problems</p>
          </div>
        )}

        {language === "java" ? (
          <div
            style={{ boxShadow: "-1px -1px 22px #729feb" }}
            className="box"
            onClick={() => handleLanguageBox("java")}
          >
            <img src={images.java} alt="" />
            <p>Java Problems</p>
          </div>
        ) : (
          <div className="box" onClick={() => handleLanguageBox("java")}>
            <img src={images.java} alt="" />
            <p>Java Problems</p>
          </div>
        )}
      </div>
      <div className="SearchBarPart">
        <div className="filterdropdownShow">
          <p>Filter</p>
          <select
            className="filterdropdown"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Array">Array</option>
            <option value="LinkedList">LinkedList</option>
            <option value="String">String</option>
            <option value="Binary Search">Binary Search</option>
            <option value="Sorting">Sorting</option>
            <option value="Stack">Stack</option>
            <option value="Tree">Tree</option>
            <option value="Queue">Queue</option>
            <option value="Solved">Solved</option>
            <option value="Unsolved">Unsolved</option>
          </select>
        </div>

        <div className="SearchBarShow">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Problems... "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="submitbutton" type="submit">
              <img src={images.searchicon} alt="" />
            </button>
          </form>
        </div>

        <div className="dropDownShow">
          <p>Difficulty</p>
          <select
            className="dropdown"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="searchbarpart3">
          <button className="searchbarpart3btn">
            pick random <img src={images.random} alt="" />
          </button>
        </div>
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
      </div>

      <div className="problemDisplayerforProgrammingPage">
        {languageObj.length > 0 ? (
          languageObj.map((problem, index) => (
            <ProblemDisplayContainer
              value={true}
              problem={problem}
              key={index}
              bool={true}
            />
          ))
        ) : (
          <h2>No Problems</h2>
        )}
      </div>
    </div>
  );
}

export default ProgrammingPage;
