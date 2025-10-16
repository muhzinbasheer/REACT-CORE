import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice.jsx";

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

export default store;
