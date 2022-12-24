import "./styles.css";
import React, { useState, UseState } from "react";

export default function Cricket() {
  const [ball, setBall] = useState(0);
  const [run, setRun] = useState(0);
  const [disable, setDisable] = useState(false);

  const hitting = (e) => {
    if (ball == 5) {
      setDisable(true);
    }

    var run = Math.floor(Math.random() * 10);
    setRun((prev) => prev + run);
    setBall(ball + 1);
  };

  const reset = () => {
    setDisable(false);
    setBall(0);
    setRun(0);
  };

  return (
    <>
      <div className="main">
        <h1>Cricket Score Board</h1>
        <div>Balls : {ball}</div>
        <div>Runs : {run}</div>
      </div>

      <div className="Rules">
        <p>
          You get total of 6 balls (1 over). The button gets disable after that
        </p>

        <button onClick={hitting} disabled={disable}>
          Click to hit the ball
        </button>
        <button onClick={reset}>Reset Game</button>
      </div>
    </>
  );
}
