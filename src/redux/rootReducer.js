import { combineReducers } from "@reduxjs/toolkit";
import reducerMain from "./reducer";

const rootReducer = combineReducers({
  user: reducerMain,
});

export default rootReducer;
