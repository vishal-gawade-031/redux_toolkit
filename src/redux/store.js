import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './feature/countersilce';
export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
});