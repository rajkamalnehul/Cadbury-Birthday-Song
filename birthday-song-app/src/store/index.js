import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tabSlice from "./slices/tab";
import updateDetails from "./slices/userDetails";

const rootReducer = combineReducers({
  tab: tabSlice,
  details: updateDetails,
});

export const store = configureStore({
  reducer: rootReducer,
});
