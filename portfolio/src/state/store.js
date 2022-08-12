
import { configureStore } from "@reduxjs/toolkit";
import langSlice from './langSlice';

export const store = configureStore({
  reducer: {
    lang: langSlice,
  },
});