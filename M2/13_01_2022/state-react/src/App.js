import './App.css';
import ClassState from './components/ClassState';
import FunctionalState from './components/FunctionalState';
import { TempConverter } from './components/TempConverter';

function App() {
  return (
    <div className="App">
      <ClassState/>
      <FunctionalState value = {10}/>
      <TempConverter/>
      <TempConverter/>
      <TempConverter/>
      <TempConverter/>
    </div>
  );
}

export default App;
