import { pickOds } from "../data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../store/step/step-actions";
import { selectAddons } from "../store/form/form-actions";
import { selectPeriodChecked, selectAddonsCheck } from "../store/form/form-selector";

export function StepThrid() {
  const checkPeriod = useSelector(selectPeriodChecked);
  const selectedAddons = useSelector(selectAddonsCheck);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/step-4');
    dispatch(nextStep);
  };

  const goBack = () => {
    navigate(-1);
    dispatch(prevStep);
  };
  return (
    <>
      <h2 className="marine bold">Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
      <form className="form-check">
        {pickOds.map(el => (
          <label key={el.id} className="main-card">
            <input
              type="checkbox"
              className="check-input"
              checked={selectedAddons.some(item => item.id === el.id)}
              onChange={() => dispatch(selectAddons(el.id, el.title, el.costMo, el.costYr))}
            />
            <div className="check-card">
              <p className="title-card marine bold">{el.title}</p>
              <p className="grey">{el.desc}</p>
            </div>
            <p className="check-cost">{checkPeriod ? `$${el.costYr}/yr` : `+$${el.costMo}/mo`}</p>
          </label>
        ))}
      </form>
      <div className="btn-container">
        <button className="back-btn" onClick={goBack}>Go back</button>
        <button className="go-btn" onClick={goToNextPage}>Next Step</button>
      </div>
    </>
  )
}