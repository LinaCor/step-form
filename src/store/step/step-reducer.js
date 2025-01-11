import { NEXT_STEP, PREV_STEP, RESET_STEP } from "./step-actions";

export const stepReducer = (state = 1, action) => {
  switch (action.type) {
    case NEXT_STEP: {
      return state + 1;
    }
    case PREV_STEP: {
      return state - 1;
    }
    case RESET_STEP: {
      return state = 1;
    }
    default: {
      return state;
    }
  }
}