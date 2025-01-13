import { tarifPlan } from "../data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../store/step/step-actions";
import { selectPlanChecked, selectPeriodChecked, selectPlanRadio } from "../store/form/form-selector";
import { selectPlan, selectPeriod } from "../store/form/form-actions";

export function StepSecond() {
  const isPlanCheck = useSelector(selectPlanChecked);
  const isPeriodCheck = useSelector(selectPeriodChecked);
  const valuePlan = useSelector(selectPlanRadio);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToNextPage = () => {
    if (isPlanCheck) {
      navigate('/step-3');
      dispatch(nextStep);
    }
  };

  const goBack = () => {
    navigate(-1);
    dispatch(prevStep);
  };

  return (
    <>
      <h2 className="marine bold">Select your plan</h2>
      <p>You have the option of monthly or yearly billing</p>
      <form className="form-radio">
        {tarifPlan.map(el => (
          <label key={el.id}>
            <input
              type="radio"
              name="plan"
              value={el.value}
              className="radio-input visabily-hidden"
              checked={el.id === valuePlan.id}
              onChange={() => dispatch(selectPlan(el.id, el.value, el.costMo, el.costYr))}
            />
            <div className="radio-card">
              <img src={el.imgSrc} alt="icon type"></img>
              <div>
                <p>{el.name}</p>
                <p className="grey">{isPeriodCheck ? `$${el.costYr}/yr` : `$${el.costMo}/mo`}</p>
                {isPeriodCheck ? <p className="fs-12">2 mounths free</p> : ''}
              </div>
            </div>
          </label>
        ))}
      </form>
      <div className="time-container">
        <p>Monthly</p>
        <input
          type="checkbox"
          className="toggle"
          checked={isPeriodCheck}
          onChange={() => dispatch(selectPeriod())}
        />
        <p>Yearly</p>
      </div>
      <div className="btn-container">
        <button className="back-btn" onClick={goBack}>Go back</button>
        <button className="go-btn" onClick={goToNextPage}>Next Step</button>
      </div>
    </>
  )
}