import { combineReducers } from "redux";
import { stepReducer } from "./step/step-reducer";

export const rootReducer = combineReducers({
  step: stepReducer,
});