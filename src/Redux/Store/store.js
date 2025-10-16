import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice.jsx";
import cartReducer from "./CartSlice.jsx"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  },
});

export default store;
