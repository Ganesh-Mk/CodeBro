import React from "react";
import "../style/problemBoxContainer.scss";
import AllquesObject from "../javascripts/data";
import { Button, ButtonGroup } from '@chakra-ui/react'

const ProblemDisplayContainer = ({ problem }) => {

  const handleClick = () => {
    const selectedProblem = AllquesObject.find(
      (item) => item.heading === problem.heading
    );
    console.log(selectedProblem);
  };

  return (
    <div className="problemBoxContainer">
      <div className="problemBoxPart1">
        <div className="statusContainer"></div>
        <div onClick={handleClick} className="problemDisplayer">{problem.heading}</div>
      </div>

      <div className="problemBoxPart2">
        <div className="difficultyDisplayer">{problem.difficulty}</div>
        <div className="attempts">2</div>
      </div>
    </div>
  );
};

export default ProblemDisplayContainer;
