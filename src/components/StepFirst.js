import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nextStep } from "../store/step/step-actions";

export function StepFirst() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/step-2');
    dispatch(nextStep);
  };

  return (
    <>
      <h2 className="marine bold">Personal info</h2>
      <p>Please provide your name, email address, and phone number</p>
      <form className="form-list">
        <label>
          <p className="marine bold">Name</p>
          <input type="text" placeholder="Enter you name"></input>
        </label>
        <label>
          <p className="marine bold"> Email Address</p>
          <input type="email" placeholder="Enter you email" required></input>
        </label>
        <label>
          <p className="marine bold">Phone Number</p>
          <input type="phone" placeholder="+1 234 567 890" required></input>
        </label>
      </form>
      <div className="btn-container">
        <button className="go-btn end-btn" onClick={goToNextPage}>Next Step</button>
      </div>
    </>
  )
}