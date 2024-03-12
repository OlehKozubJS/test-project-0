import { useState, useEffect } from "react";

import css from "./SimpleAnimationTest.module.css";

const SimpleAnimationTest = () => {
  const [leftSide, setLeftSide] = useState(0);
  const [mode, setMode] = useState(0);

  const handleModeValue = (event) => {
    setMode(event.target.value);
  };

  useEffect(() => {
    let changeLeftSetInterval;
    let newLeftSide = leftSide;
    const modeNumber = Number(mode);

    const changeLeft = () => {
      if (
        (modeNumber === -10 && newLeftSide > 0) ||
        (modeNumber === 10 && newLeftSide < 500)
      ) {
        newLeftSide += modeNumber;
      } else {
        clearInterval(changeLeftSetInterval);
      }

      setLeftSide(newLeftSide);
    };

    changeLeftSetInterval = setInterval(changeLeft, 500);

    return () => {
      clearInterval(changeLeftSetInterval);
    };
  }, [mode]);

  return (
    <div>
      <div>
        <button type="button" value={-10} onClick={handleModeValue}>
          Left
        </button>
        <button type="button" value={0} onClick={handleModeValue}>
          Stop
        </button>
        <button type="button" value={10} onClick={handleModeValue}>
          Right
        </button>
      </div>
      <div className={css.Parent}>
        <div style={{ left: `${leftSide}px` }} className={css.Child}></div>
      </div>
      <div>{leftSide}</div>
    </div>
  );
};

export { SimpleAnimationTest };
