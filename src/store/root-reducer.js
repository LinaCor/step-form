import { combineReducers } from "redux";
import { stepReducer } from "./step/step-reducer";
import { formReducer } from "./form/form-reducer";

export const rootReducer = combineReducers({
  step: stepReducer,
  form: formReducer,
});