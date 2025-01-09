export function StepFirst() {
  return (
    <>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number</p>
      <form className="form-list">
        <label>
          <p>Name</p>
          <input type="text" placeholder="Enter you name"></input>
        </label>
        <label>
          <p> Email Address</p>
          <input type="email" placeholder="Enter you email" required></input>
        </label>
        <label>
          <p>Phone Number</p>
          <input type="phone" placeholder="+1 234 567 890" required></input>
        </label>
      </form>
      <div className="btn-container">
        <button className="go-btn end-btn">Next Step</button>
      </div>
    </>
  )
}