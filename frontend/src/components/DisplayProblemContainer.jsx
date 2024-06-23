import React from "react";
import "../style/DisplayProblemContainer.css";
import { useSelector } from "react-redux";

function DisplayProblemContainer({
  num = "",
  diff = "",
  problem = "",
  fontSize = "1.5vw",
  index = 0,
}) {
  const attempts = useSelector((state) => state.attempts.attempts);

  return (
    <div className="displayProblemContainer">
      <p className={fontSize === "1.5vw" ? "bigFont" : "smallFont"}>
        {num}. &nbsp; {problem}
      </p>
      <div className="displayDetails">
        <p
          className={`${
            fontSize === "1.5vw" ? "bigFont" : "smallFont"
          } ${diff.toLowerCase()}`}
        >
          {diff}
        </p>

        <p className={fontSize === "1.5vw" ? "bigFont" : "smallFont"}>
          {attempts[num - 1]}
        </p>
      </div>
    </div>
  );
}

export default DisplayProblemContainer;
