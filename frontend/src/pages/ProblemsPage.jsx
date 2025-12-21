import React, { useEffect, useState } from "react";
import "../style/ProblemsPage.scss";
import { images } from "../javascripts/images";
import Navbar from "../components/Navbar";
import "../style/ProblemsPage.scss";
import ProblemDisplayContainer from "../components/ProblemDisplayContainer";
import { AllquesObject } from "../javascripts/data";
import { backendurl } from "../javascripts/urls";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProblemObj } from "../store/problemObjSlice";
import {
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  MenuDivider,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  SearchIcon,
  StarIcon,
} from "@chakra-ui/icons";
import axios from "axios";

function ProblemsPage() {
  const [selectedValue, setSelectedValue] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filterByDifficulty = (difficulty) => {
    let filteredProblems = AllquesObject;

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
            problem.topic.some(
              (topic) => topic.toLowerCase() === lowerCaseSelectedTopic
            )
        );
      }
    }

    return filteredProblems;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const randomProblemPicker = () => {
    const randomIndex = Math.floor(Math.random() * AllquesObject.length) + 1;
    const selectedProblem = AllquesObject[randomIndex];
    dispatch(addProblemObj(selectedProblem));
  };

  const problemsToShow = filterByDifficulty(selectedValue);

  useEffect(() => {
    axios
      .get(`${backendurl}/problemRecord`, {
        params: { userEmail: localStorage.getItem("email") },
      })
      .then((response) => {
        const solvedProblems = response.data.allProblems.reduce((acc, item) => {
          acc[item.number] = item.attempts > 0;
          return acc;
        }, {});
        console.log("solved setting from problem Page: ", solvedProblems);
        localStorage.setItem("solved", JSON.stringify(solvedProblems));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#F3F3F3", height: "100vh" }}>
      <Navbar />
      <div className="whole-container">
        <div className="heading">
          <p>Coding Problem Explorer</p>
        </div>
        <div className="SearchBarPart">
          <form onSubmit={handleSubmit}>
            <InputGroup width={"40vw"}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search Problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ color: '#4b4b4b' }}
              />
            </InputGroup>
          </form>
          <div className="searchBarRight">
            <div className="filterdropdownShow">
              <Menu>
                <MenuButton
                  as={Button}
                  width={"100%"}
                  rightIcon={<ChevronDownIcon />}
                  color="#4b4b4b"
                >
                  {selectedTopic === "All" ? "All Topic" : selectedTopic}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setSelectedTopic("All")}>
                    All
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => setSelectedTopic("Array")}>
                    Array
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("String")}>
                    String
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("Math")}>
                    Math
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("TwoPointer")}>
                    Two Pointers
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("Sorting")}>
                    Sorting
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("LinkedList")}>
                    Linked List
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("HashTable")}>
                    Hash Table
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("BinarySearch")}>
                    Binary Search
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("Matrices")}>
                    Matrices
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("Stack")}>
                    Stack
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("Queue")}>
                    Queue
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("Tree")}>
                    Tree
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedTopic("SlidingWindow")}>
                    Sliding Window
                  </MenuItem>
                  <MenuItem
                    onClick={() => setSelectedTopic("DynamicProgramming")}
                  >
                    Dynamic Programming
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>

            <div className="dropDownShow">
              <Menu>
                <MenuButton
                  as={Button}
                  width={"100%"}
                  rightIcon={<ChevronDownIcon />}
                  color="#4b4b4b"
                >
                  {selectedValue === "All" ? "Difficulty" : selectedValue}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setSelectedValue("All")}>
                    All
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => setSelectedValue("Easy")}>
                    Easy
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedValue("Medium")}>
                    Medium
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedValue("Hard")}>
                    Hard
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>

            <Link to="/coding">
              <Button
                width={"100%"}
                rightIcon={<StarIcon />}
                colorScheme="teal"
                onClick={randomProblemPicker}
                variant="outline"
                color="#4b4b4b"
              >
                pick random
              </Button>
            </Link>
          </div>
        </div>

        <div className="problemsShower">
          <div className="levelss">
            <div className="levelspart">
              <p>Solved</p>
              <p className="problemName">Problem name</p>
            </div>

            <div className="levelspart">
              <p className="ds">Topics</p>
              <p>Difficulty</p>
              <p>Attempts</p>
            </div>
          </div>
          <div className="horizontallinediv">
            <div className="horizontalline"></div>
          </div>

          <div className="problemShowerContainer">
            <div className="problemShower">
              {problemsToShow.length > 0 ? (
                problemsToShow.map((problem, index) => (
                  <ProblemDisplayContainer
                    problem={problem}
                    index={index}
                    value={true}
                    key={index}
                  />
                ))
              ) : (
                <h2>No Problems</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
