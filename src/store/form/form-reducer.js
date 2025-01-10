import { INPUT_EMAIL, INPUT_NAME, INPUT_PHONE, SELECT_ADDONS, SELECT_PERIOD, SELECT_PLAN } from "./form-actions";

let initialState = {
  name: '',
  email: '',
  phone: '',
  plan: '',
  period: false,
  addons: []
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case (INPUT_NAME): {
      return {
        ...state,
        name: action.valName
      }
    }

    case (INPUT_EMAIL): {
      return {
        ...state,
        email: action.valEmail
      }
    }

    case (INPUT_PHONE): {
      return {
        ...state,
        phone: action.valPhone
      }
    }
    case (SELECT_PLAN): {
      return {
        ...state,
        plan: action.valPlan
      }
    }
    case (SELECT_PERIOD): {
      return {
        ...state,
        period: !state.period
      }

    }
    case (SELECT_ADDONS): {
      return {
        ...state,
        addons: [...state.addons, action.valAddon],
      }
    }

    default: {
      return state;
    }
  }
}