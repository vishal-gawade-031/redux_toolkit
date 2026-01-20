import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './feature/searchSlice';

export const store =configureStore({
  reducer:{
    search:searchReducer,
  }
})