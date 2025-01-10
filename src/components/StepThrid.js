import { pickOds } from "../data"



export function StepThrid() {
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
        <button className="back-btn">Go back</button>
        <button className="go-btn">Next Step</button>
      </div>
    </>
  )
}