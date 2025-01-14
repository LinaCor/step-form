import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../store/step/step-actions";
import { inputName, inputEmail, inputPhone } from "../store/form/form-actions";
import { selectEmailInput, selectName, selectEmail, selectPhone } from "../store/form/form-selector";


export function StepFirst() {
  const [attemptedSubmit, setAttemptedSubmit] = useState(true);
  const [validateEmail, setValidateEmail] = useState(true);

  const isEmailInput = useSelector(selectEmailInput);
  const mail = useSelector(selectEmail);
  const phone = useSelector(selectPhone);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getValidateEmail = () => {
    const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}$/i);
    return regExp.test(mail);
  };

  const handlePhone = (evt) => {
    const value = evt.target.value;
    const cleanedValue = value.replace(/[^0-9]/g, '');
    const formattedValue = cleanedValue.length > 0 ? `+${cleanedValue}` : '';

    dispatch(inputPhone(formattedValue));
  };


  const goToNextPage = (evt) => {
    evt.preventDefault();

    if (isEmailInput) {
      const isValidateEmail = getValidateEmail();
      setValidateEmail(isValidateEmail);

      if (isValidateEmail) {
        navigate('/step-2');
        dispatch(nextStep);
        setAttemptedSubmit(true);
      } else {
        setAttemptedSubmit(true);
      }
    } else {
      setAttemptedSubmit(false);
    }
  };

  return (
    <>
      <h2 className="marine bold">Personal info</h2>
      <p>Please provide your name, email address, and phone number</p>
      <form className="form-list" onSubmit={goToNextPage}>
        <label>
          <p className="marine bold">Name</p>
          <input
            type="text"
            placeholder="Enter you name"
            name="name"
            required
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
            name="email"
            onChange={(evt) => dispatch(inputEmail(evt.target.value))}
            value={mail}>
          </input>
          <span className={`red-alert fs-10 bold ${validateEmail ? 'hidden' : ''}`}>please enter an address like: myemail42@gmail.com</span>
        </label>
        <label>
          <div className="check-required">
            <p className="marine bold">Phone Number</p>
          </div>
          <input
            type="text"
            placeholder="+1 234 567 890"
            name="phone"
            onChange={handlePhone}
            value={phone}>
          </input>
        </label>
        <div className="btn-container">
          <button className="go-btn end-btn" type="submit">Next Step</button>
        </div>
      </form>
    </>
  )
};