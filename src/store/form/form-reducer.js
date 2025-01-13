import { INPUT_EMAIL, INPUT_NAME, INPUT_PHONE, SELECT_ADDONS, SELECT_PERIOD, SELECT_PLAN, RESET_FORM } from "./form-actions";

let initialState = {
  name: '',
  email: '',
  phone: '',
  plan: { id: '72hw', title: 'Arcade', mnth: 9, year: 90 },
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
        plan: action.plan
      }
    }
    case (SELECT_PERIOD): {
      return {
        ...state,
        period: !state.period
      }
    }
    case (SELECT_ADDONS): {
      let isAddonExist = state.addons.some(el => el.id === action.addon.id);
      if (!isAddonExist) {
        return {
          ...state,
          addons: [...state.addons, action.addon]
        }
      } else {
        return {
          ...state,
          addons: state.addons.filter(el => el.id !== action.addon.id)
        }
      }
    }
    case (RESET_FORM): {
      return initialState;
    }
    default: {
      return state;
    }
  }
};