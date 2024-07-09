import React, { useState } from "react";
import "../style/CodingPage.scss";
import { useSelector } from "react-redux";
import "../style/CodeLeftHeader.scss";
import Description from "./Description";
import { useEffect } from "react";
import Submit from "./Submit";
import { images } from "../javascripts/images";
import CorrectIcon from "./CorrectIcon";
import WrongIcon from "./WrongIcon";

function CodeInfoContainer({ isLoadingSubmit }) {
  const problemObj = useSelector((state) => state.problemObj.obj);
  const [curPage, setCurPage] = useState("sub");
  const [isSolved, setIsSolved] = useState(false);
  const [renderMarker, setRenderMarker] = useState(false);

  useEffect(() => {
    let solvedObj = {};
    const storedSolved = localStorage.getItem("solved");
    if (storedSolved) {
      solvedObj = JSON.parse(storedSolved);
    }
    if (solvedObj[problemObj.number]) {
      setIsSolved(true);
    } else {
      setIsSolved(false);
    }
  }, [renderMarker]);

  useEffect(() => {
    if (curPage === "desc") {
      setCurPage("sub");
      setTimeout(() => setRenderMarker(true), 5000);
      setTimeout(() => setRenderMarker(false), 6000);
      setTimeout(() => setRenderMarker(true), 7000);
      setTimeout(() => setRenderMarker(false), 8000);
      setTimeout(() => setRenderMarker(true), 9000);
      setTimeout(() => setRenderMarker(false), 10000);
      setTimeout(() => setRenderMarker(true), 11000);
      setTimeout(() => setRenderMarker(false), 12000);
      setTimeout(() => setRenderMarker(true), 13000);
    } else setCurPage("desc");
  }, [problemObj.isSubmitted]);

  return (
    <div className="mainCodeLeft">
      <div className="codeLeftHeader">
        <div
          style={{
            display: "flex",
          }}
        >
          <p
            style={{
              background: curPage === "desc" ? "#343434" : "transparent",
            }}
            onClick={() => setCurPage("desc")}
          >
            Description
          </p>
          {problemObj.isSubmitted === true ? (
            <p
              style={{
                background: curPage === "sub" ? "#343434" : "transparent",
              }}
              onClick={() => setCurPage("sub")}
            >
              Submission
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <h4>
            {problemObj.difficulty === "Hard" ? (
              <span style={{ color: "#F63737" }}>Hard</span>
            ) : problemObj.difficulty === "Medium" ? (
              <span style={{ color: "#FFB700" }}>Medium</span>
            ) : (
              <span style={{ color: "#1CBABA" }}>Easy</span>
            )}
          </h4>
        </div>
        <div>
          {isSolved ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>Solved</p>
              <CorrectIcon />
            </div>
          ) : (
            <p style={{ color: "grey" }}>Not Solved</p>
          )}
        </div>
      </div>

      {problemObj.isSubmitted === false || curPage === "desc" ? (
        <Description />
      ) : (
        <Submit isLoadingSubmit={isLoadingSubmit} />
      )}
    </div>
  );
}

export default CodeInfoContainer;
