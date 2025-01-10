import './App.css';
import { FormContent } from './components/FormContent';
import { FormStep } from './components/FormStep';

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <FormStep></FormStep>
        <FormContent></FormContent>
      </div>
    </div>
  );
}

export default App;
