import { tarifPlan } from "../data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "../store/step/step-actions";


export function StepSecond() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/step-3');
    dispatch(nextStep);
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
            <input type="radio" name="plan" value={el.value} className="radio-input visabily-hidden" />
            <div className="radio-card">
              <img src={el.imgSrc} alt="icon type"></img>
              <p>{el.name}</p>
              <p className="grey">{el.costMo}</p>
              {/*<p>2 mounths free</p>*/}
            </div>
          </label>
        ))}
      </form>
      <div className="time-container">
        <p>Monthly</p>
        <input type="checkbox" className="toggle" />
        <p>Yearly</p>
      </div>
      <div className="btn-container">
        <button className="back-btn" onClick={goBack}>Go back</button>
        <button className="go-btn" onClick={goToNextPage}>Next Step</button>
      </div>
    </>
  )
}