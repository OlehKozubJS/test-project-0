import { createSlice } from "@reduxjs/toolkit";

const squareRangeSlice = createSlice({
  name: "squareRange",
  initialState: { y: 0, x: 0 },
  reducers: {
    setSquareRangeYvalue(state, action) {
      return { ...state, y: action.payload };
    },
    setSquareRangeXvalue(state, action) {
      return { ...state, x: action.payload };
    },
  },
});

const { setSquareRangeYvalue, setSquareRangeXvalue } = squareRangeSlice.actions;

const squareRangeReducer = squareRangeSlice.reducer;

export { setSquareRangeYvalue, setSquareRangeXvalue, squareRangeReducer };
