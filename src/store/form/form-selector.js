export const selectEmailAndPhone = (state) => (Boolean(state.form.email) && Boolean(state.form.phone));
export const selectPlanChecked = (state) => (Boolean(state.form.plan));

export const selectName = (state) => state.form.name;
export const selectEmail = (state) => state.form.email;
export const selectPhone = (state) => state.form.phone;
export const selectPlanRadio = (state) => state.form.plan;
export const selectPeriodChecked = (state) => (state.form.period);
export const selectAddonsCheck = (state) => state.form.addons;



