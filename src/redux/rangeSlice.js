import { createSlice } from "@reduxjs/toolkit";

const rangeSlice = createSlice({
  name: "range",
  initialState: 0,
  reducers: {
    handleRangeChange(state, action) {
      return action.payload;
    },
    resetRange() {
      return 0;
    },
  },
});

const { handleRangeChange, resetRange } = rangeSlice.actions;
const rangeReducer = rangeSlice.reducer;

export { handleRangeChange, resetRange, rangeReducer };
