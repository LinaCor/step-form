import '../main.css';
import { StepFirst } from './StepFirst';
import { StepSecond } from './StepSecond';
import { StepThrid } from './StepThrid';
import { StepFour } from './StepFour';
import { ThanksYou } from './ThanksYou';
import { Route, Routes } from 'react-router-dom';

export function FormContent() {
  return (
    <div className="form-content">
      <Routes>
        <Route path='/' element={<StepFirst />}></Route>
        <Route path='/step-2' element={<StepSecond />}></Route>
        <Route path='/step-3' element={<StepThrid />}></Route>
        <Route path='/step-4' element={<StepFour />}></Route>
        <Route path='/thanks-you' element={<ThanksYou />}></Route>
      </Routes>
    </div>
  )
}