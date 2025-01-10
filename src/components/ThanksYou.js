import thanksIcon from '../img/icon-thank-you.svg';

export function ThanksYou() {
  return (
    <div className="thanks">
      <img src={thanksIcon} alt="thanks you" className="thanks-img" />
      <h2 className="marine bold">Thank you!</h2>
      <p className="grey">Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.</p>
    </div>
  )
};