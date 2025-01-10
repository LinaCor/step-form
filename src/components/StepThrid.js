import { pickOds } from "../data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "../store/step/step-actions";


export function StepThrid() {
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
            <input type="checkbox" className="check-input" />
            <div className="check-card">
              <p className="title-card marine bold">{el.title}</p>
              <p className="grey">{el.desc}</p>
            </div>
            <p className="check-cost">{el.costMo}</p>
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