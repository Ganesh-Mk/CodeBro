import React from "react";
import "../style/problemBoxContainer.scss";
import quesObject from "../QuestionsData/data";

const ProblemDisplayContainer = () => {
  return (
    <div className="problemBoxContainer">
      <div className="problemBoxPart1">
        <div className="statusContainer"></div>
        <div className="problemDisplayer">{quesObject[0].heading}</div>
      </div>

      <div className="problemBoxPart2">
        <div className="difficultyDisplayer">{quesObject[0].difficulty}</div>
        <div className="attempts">2</div>
      </div>
    </div>
  );
};

export default ProblemDisplayContainer;
