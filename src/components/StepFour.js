//TODO получить из LS обьект с заполненными данными по форме



export function StepFour() {
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
        <button className="back-btn">Go back</button>
        <button className="go-btn">Confirm</button>
      </div>
    </>
  )
}