const selectRangeValue = (state) => {
  return state.range;
};

const selectSquareRangeYvalue = (state) => {
  return state.squareRange.y;
};

const selectSquareRangeXvalue = (state) => {
  return state.squareRange.x;
};

export { selectRangeValue, selectSquareRangeYvalue, selectSquareRangeXvalue };
