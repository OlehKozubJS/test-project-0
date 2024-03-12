import { handleRangeChange, resetRange } from "./rangeSlice";

import {
  setSquareRangeYvalue,
  setSquareRangeXvalue,
  squareRangeReducer,
} from "./squareRangeSlice";

import {
  selectRangeValue,
  selectSquareRangeYvalue,
  selectSquareRangeXvalue,
} from "./selectors";

import { store, persistor } from "./store";

export {
  handleRangeChange,
  resetRange,
  selectRangeValue,
  setSquareRangeYvalue,
  setSquareRangeXvalue,
  selectSquareRangeYvalue,
  selectSquareRangeXvalue,
  store,
  persistor,
};
