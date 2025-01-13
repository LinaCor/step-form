import thanksIcon from '../img/icon-thank-you.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetStep } from '../store/step/step-actions';
import { resetForm } from '../store/form/form-actions';
import { useDispatch } from 'react-redux';

export function ThanksYou() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
      //dispatch(resetStep);
      dispatch(resetForm);
    }, 5000)

    return () => clearTimeout(timer);

  }, [navigate]);


  return (
    <div className="thanks">
      <img src={thanksIcon} alt="thanks you" className="thanks-img" />
      <h2 className="marine bold">Thank you!</h2>
      <p className="grey">Thanks for confirming your subscription! We hope you have fun
        using our platform. <br />
        In three seconds you will be redirected to the main page.
      </p>
    </div>
  )
};