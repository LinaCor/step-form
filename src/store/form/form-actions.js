export const INPUT_NAME = 'INPUT_NAME';
export const INPUT_EMAIL = 'INPUT_EMAIL';
export const INPUT_PHONE = 'INPUT_PHONE';
export const SELECT_PLAN = 'SELECT_PLAN';
export const SELECT_PERIOD = 'SELECT_PERIOD';
export const SELECT_ADDONS = 'SELECT_ADDONS';

export const inputName = (valName) => ({
  type: INPUT_NAME,
  valName
});

export const inputEmail = (valEmail) => ({
  type: INPUT_EMAIL,
  valEmail
});

export const inputPhone = (valPhone) => ({
  type: INPUT_PHONE,
  valPhone
});

export const selectPlan = (valPlan) => ({
  type: SELECT_PLAN,
  valPlan
});

export const selectPeriod = () => ({
  type: SELECT_PERIOD,
});

export const selectAddons = (valAddon) => ({
  type: SELECT_ADDONS,
  valAddon
});






