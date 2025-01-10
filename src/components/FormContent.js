import '../main.css';
import { StepFirst } from './StepFirst';
import { StepSecond } from './StepSecond';
import { StepThrid } from './StepThrid';
import { StepFour } from './StepFour';

export function FormContent() {
  return (
    <div className="form-content">
      <StepFirst></StepFirst>
      {/*<StepSecond></StepSecond>*/}
      {/*<StepThrid></StepThrid>*/}
      {/*<StepFour></StepFour>*/}
    </div>
  )
}