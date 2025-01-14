import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { prevStep } from "../store/step/step-actions";
import { selectPlanRadio, selectAddonsCheck, selectPeriodChecked } from "../store/form/form-selector";


export function StepFour() {
  const currentPlan = useSelector(selectPlanRadio);
  const currentPeriod = useSelector(selectPeriodChecked);
  const currentAddons = useSelector(selectAddonsCheck);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/thanks-you');
  };

  const goBack = () => {
    navigate(-1);
    dispatch(prevStep);
  };

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === 'Enter') {
        goToNextPage();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const totalAddonsPrice = (period) => {
    const addonPrice = currentAddons.reduce((total, item) => {
      return total + (period ? item.year : item.mnth);
    }, 0);
    const planPrice = period ? currentPlan.year : currentPlan.mnth;
    const totalPrice = addonPrice + planPrice;

    return `${totalPrice}${period ? '/yr' : '/mo'}`;
  };


  return (
    <>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>
      <div className="finish-desk">
        <div className="desk-body">
          <div className="bold marine">
            <p>{currentPlan.title} ({currentPeriod ? 'Yearly' : 'Monthly'})</p>
            <p>{currentPeriod ? `$${currentPlan.year}` : `$${currentPlan.mnth}`}</p>
          </div>
          <ul>
            {currentAddons.map(el => (
              <li className="fs-14" key={el.id}>
                <p className="grey">{el.title}</p>
                <p className="marine">{currentPeriod ? `$${el.year}` : `$${el.mnth}`}</p>
              </li>
            )
            )}
          </ul>
        </div>
        <div className="desk-total">
          <p className="grey">Total (per month/year)</p>
          <p className="total-price bold">{`$${totalAddonsPrice(currentPeriod)}`}</p>
        </div>
      </div>
      <div className="btn-container">
        <button className="back-btn" onClick={goBack}>Go back</button>
        <button className="go-btn" onClick={goToNextPage}>Confirm</button>
      </div>
    </>
  )
};