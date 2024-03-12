import { configureStore } from "@reduxjs/toolkit";

import { rangeReducer } from "./rangeSlice";
import { squareRangeReducer } from "./squareRangeSlice";
import { persistReducers, middleware, persistStore } from "./persistor";

const reducer = persistReducers({
  range: rangeReducer,
  squareRange: squareRangeReducer,
});

const store = configureStore({ reducer, middleware });

const persistor = persistStore(store);

export { store, persistor };
