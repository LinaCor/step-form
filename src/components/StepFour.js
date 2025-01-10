//TODO получить из LS обьект с заполненными данными по форме
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  prevStep } from "../store/step/step-actions";

export function StepFour() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/thanks-you');
  };

  const goBack = () => {
    navigate(-1);
    dispatch(prevStep);
  };
  return (
    <>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>
      <div className="finish-desk">
        <div className="desk-body">
          <div className="bold marine">
            <p>Arcade (Monthly)</p>
            <p>$9/mo</p>
          </div>
          <ul>
            <li className="fs-14">
              <p className="grey">Online service</p>
              <p className="marine">+$1/mo</p>
            </li>
            <li className="fs-14">
              <p className="grey">Larger storage</p>
              <p className="marine">+$2/mo</p>
            </li>
          </ul>
        </div>
        <div className="desk-total">
          <p className="grey">Total (per month/year)</p>
          <p className="total-price bold">+$12/mo</p>
        </div>
      </div>
      <div className="btn-container">
        <button className="back-btn" onClick={goBack}>Go back</button>
        <button className="go-btn" onClick={goToNextPage}>Confirm</button>
      </div>
    </>
  )
}