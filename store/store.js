import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";

import alertReducer from './slices/error.js';
import applicationState from './slices/applicationState.js';

export const store = configureStore({
  reducer: {
    alert : alertReducer,
    applicationfiles: applicationState
  }
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);