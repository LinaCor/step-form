import { tarifPlan } from "../data"



export function StepSecond() {
  return (
    <>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing</p>
      <form className="form-radio">
        {tarifPlan.map(el => (
          <label key={el.id}>
            <input type="radio" name="plan" value={el.value} className="radio-input visabily-hidden" />
            <div className="radio-card">
              <img src={el.imgSrc} alt="arcade type"></img>
              <p>{el.name}</p>
              <p className="grey">{el.cost}</p>
            </div>
          </label>
        ))}
      </form>
      <div className="time-container">
        <p>Monthly</p>
        <input type="checkbox" className="toggle" />
        <p>Yearly</p>
      </div>
      <div className="btn-container">
        <button className="back-btn">Go back</button>
        <button className="go-btn">Next Step</button>
      </div>
    </>
  )
}