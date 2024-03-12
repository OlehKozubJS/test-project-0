import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import {
  SimpleAnimationTest,
  ObjectMovementTest,
  KeyDownTest,
  CustomRangeTest,
  OpenCloser,
  SquareRange,
} from "../components";
import { selectRangeValue } from "../redux";

import css from "./AppTestPage.module.css";

function AppTestPage() {
  const rangeValue = useSelector(selectRangeValue);

  return (
    <main>
      <h1>App Test Page</h1>
      <OpenCloser
        element={<SimpleAnimationTest />}
        elementName={"SimpleAnimationTest"}
      />
      <OpenCloser
        element={<ObjectMovementTest />}
        elementName={"ObjectMovementTest"}
      />
      <OpenCloser element={<KeyDownTest />} elementName={"KeyDownTest"} />
      <OpenCloser
        element={
          <div className={css.CustomRangeTestContainer}>
            <CustomRangeTest />
          </div>
        }
        elementName={"CustomRangeTest"}
      />
      <OpenCloser element={<SquareRange />} elementName={"SquareRange"} />
      <div>{rangeValue}</div>
    </main>
  );
}

export { AppTestPage };
