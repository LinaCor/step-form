import '../main.css';
import { StepFirst } from './StepFirst';
import { StepSecond } from './StepSecond';

export function FormContent() {
  return (
    <div className="form-content">
      {/*<StepFirst></StepFirst>*/}
      <StepSecond></StepSecond>
    </div>
  )
}