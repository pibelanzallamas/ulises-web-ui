import React, { useState, useEffect } from "react";
import leftIcon from "../assets/left-icon.svg";
import rightIcon from "../assets/right-icon.png";
import works from "../utils/works.js";
import WorkCard from "../commons/WorkCard.jsx";

function Works() {
  const [workNum, setWorkNum] = useState(0);
  const [selectedWork, setSelectedWork] = useState(works[workNum]);

  useEffect(() => {
    setSelectedWork(works[setWorkNum]);
  }, [setWorkNum]);

  return (
    <main className="works">
      {workNum > 0 && (
        <img
          onClick={() => setWorkNum(workNum + 1)}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              setWorkNum(workNum + 1);
            }
          }}
          src={leftIcon}
          alt="left-logo-icon"
          tabIndex="-2"
          role="button"
        />
      )}

      <WorkCard work={works[1]} />

      {workNum < works.length && (
        <img
          onClick={() => setWorkNum(workNum - 1)}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              setWorkNum(workNum - 1);
            }
          }}
          src={rightIcon}
          alt="left-logo-icon"
          tabIndex="0"
          role="button"
        />
      )}
    </main>
  );
}

export default Works;
