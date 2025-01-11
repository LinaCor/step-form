import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../store/step/step-actions";
import { inputName, inputEmail, inputPhone } from "../store/form/form-actions";
import { selectEmailAndPhone, selectName, selectEmail, selectPhone } from "../store/form/form-selector";


export function StepFirst() {
  const [attemptedSubmit, setAttemptedSubmit] = useState(true);

  const isNameAndPhone = useSelector(selectEmailAndPhone);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToNextPage = () => {
    if (isNameAndPhone) {
      navigate('/step-2');
      dispatch(nextStep);
      setAttemptedSubmit(true);
    } else {
      setAttemptedSubmit(false);
    }
  };

  return (
    <>
      <h2 className="marine bold">Personal info</h2>
      <p>Please provide your name, email address, and phone number</p>
      <form className="form-list">
        <label>
          <p className="marine bold">Name</p>
          <input
            type="text"
            placeholder="Enter you name"
            onChange={(evt) => dispatch(inputName(evt.target.value))}
            value={useSelector(selectName)}>
          </input>
        </label>
        <label>
          <div className="check-required">
            <p className="marine bold">Email Address</p>
            <span className={`red-alert fs-12 bold ${attemptedSubmit ? 'hidden' : ''}`}>this field is required</span>
          </div>
          <input
            type="email"
            placeholder="Enter you email"
            onChange={(evt) => dispatch(inputEmail(evt.target.value))}
            value={useSelector(selectEmail)}>
          </input>
        </label>
        <label>
          <div className="check-required">
            <p className="marine bold">Phone Number</p>
            <span className={`red-alert fs-12 bold ${attemptedSubmit ? 'hidden' : ''}`}>this field is required</span>
          </div>
          <input
            type="phone"
            placeholder="+1 234 567 890"
            onChange={(evt) => dispatch(inputPhone(evt.target.value))}
            value={useSelector(selectPhone)}>
          </input>
        </label>
      </form>
      <div className="btn-container">
        <button className="go-btn end-btn" onClick={goToNextPage}>Next Step</button>
      </div>
    </>
  )
};