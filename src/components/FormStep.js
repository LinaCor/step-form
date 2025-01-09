import '../main.css';
import { steps } from '../data';


export function FormStep() {

  let currentForm = 3;

  return (
    <div className="form-step">
      <ul className="form-step__list">
        {steps.map(el => (
          <li className="step-list__item" key={el.step}>
            <div className={`item-sircle ${currentForm === el.step ? 'current-sircle' : ''}`}>{el.step}</div>
            <div className="item-desc">
              <p className="grey fz-12">{el.name}</p>
              <p className="bold">{el.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}