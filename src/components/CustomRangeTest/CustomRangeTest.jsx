import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleRangeChange, resetRange } from "../../redux";

import { selectRangeValue } from "../../redux";

import css from "./CustomRangeTest.module.css";

const CustomRangeTest = () => {
  const [rangeValue, setRangeValue] = useState(useSelector(selectRangeValue));
  const [isDraggable, setIsDraggable] = useState(false);
  const [initialX, setInitialX] = useState(0);

  const dispatch = useDispatch();

  const handleMoveStart = (event) => {
    setInitialX(event.clientX - rangeValue);
    setIsDraggable(true);
  };

  const handleMove = (event) => {
    event.preventDefault();

    const currentX = event.clientX - initialX;

    if (isDraggable && currentX >= 0 && currentX <= 150) {
      dispatch(handleRangeChange(currentX));
      setRangeValue(currentX);
    }
  };

  const handleMoveEnd = () => {
    setIsDraggable(false);
  };

  const resetRangeValue = () => {
    dispatch(resetRange());
    setRangeValue(0);
  };

  return (
    <div>
      <div className={css.CustomRangeField}>
        <div
          style={{
            left: `${rangeValue}px`,
          }}
          id="dial"
          onMouseDown={handleMoveStart}
          onMouseMove={handleMove}
          onMouseUp={handleMoveEnd}
          onMouseLeave={handleMoveEnd}
          className={css.CustomRangeDial}
        ></div>
      </div>
      <button type="button" onClick={resetRangeValue}>
        Reset
      </button>
    </div>
  );
};

export { CustomRangeTest };
