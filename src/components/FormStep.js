import '../main.css';
import { steps } from '../data';
import { useSelector } from 'react-redux';


export function FormStep() {
  const countStep = useSelector(state => state.step);

  return (
    <div className="form-step">
      <ul className="form-step__list">
        {steps.map(el => (
          <li className="step-list__item" key={el.id}>
            <div className={`item-sircle ${countStep === el.step ? 'current-sircle' : ''}`}>{el.step}</div>
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