import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setSquareRangeYvalue,
  setSquareRangeXvalue,
  selectSquareRangeYvalue,
  selectSquareRangeXvalue,
} from "../../redux";

import css from "./SquareRange.module.css";

const SquareRange = () => {
  const [rangeYvalue, setRangeYvalue] = useState(
    useSelector(selectSquareRangeYvalue)
  );
  const [rangeXvalue, setRangeXvalue] = useState(
    useSelector(selectSquareRangeXvalue)
  );
  const [initialY, setInitialY] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const handleMoveStart = (event) => {
    setIsActive(true);
    setInitialY(event.clientY - rangeYvalue);
    setInitialX(event.clientX - rangeXvalue);
  };

  const handleMove = (event) => {
    event.preventDefault();

    if (!isActive) {
      return;
    }

    const currentY = event.clientY - initialY;
    const currentX = event.clientX - initialX;

    const discreetY = currentY - (currentY % 25);
    const discreetX = currentX - (currentX % 25);

    if (discreetY >= 0 && discreetY <= 200) {
      setRangeYvalue(discreetY);
      dispatch(setSquareRangeYvalue(discreetY));
    }
    if (discreetX >= 0 && discreetX <= 200) {
      setRangeXvalue(discreetX);
      dispatch(setSquareRangeXvalue(discreetX));
    }
  };

  const handleMoveEnd = () => {
    setIsActive(false);
  };

  const resetSquareRange = () => {
    setRangeYvalue(0);
    setRangeXvalue(0);
    dispatch(setSquareRangeXvalue(0));
    dispatch(setSquareRangeYvalue(0));
  };

  return (
    <div>
      <div className={css.SquareRangeField}>
        <div
          onMouseDown={handleMoveStart}
          onMouseMove={handleMove}
          onMouseUp={handleMoveEnd}
          onMouseLeave={handleMoveEnd}
          style={{ top: `${rangeYvalue}px`, left: `${rangeXvalue}px` }}
          className={css.SquareRangeDial}
        ></div>
      </div>
      <button onClick={resetSquareRange}>Reset</button>
      <div>{rangeYvalue}</div>
      <div>{rangeXvalue}</div>
    </div>
  );
};

export { SquareRange };
