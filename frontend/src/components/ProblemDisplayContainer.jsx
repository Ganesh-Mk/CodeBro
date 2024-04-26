import React from "react";
import "../style/problemBoxContainer.scss";

const ProblemDisplayContainer = ({ problem }) => {
  return (
    <div className="problemBoxContainer">
      <div className="problemBoxPart1">
        <div className="statusContainer"></div>
        <div className="problemDisplayer">{problem.heading}</div>
      </div>

      <div className="problemBoxPart2">
        <div className="difficultyDisplayer">{problem.difficulty}</div>
        <div className="attempts">2</div> {/* Placeholder for attempts */}
      </div>
    </div>
  );
};

export default ProblemDisplayContainer;
