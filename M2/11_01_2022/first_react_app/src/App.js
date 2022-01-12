import './App.css';

import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import ClassRoom from './components/ClassRoom';
import ReactPlayer from 'react-player';

function App() {

  const students = ['maciel', 'marcus', 'rafaela', 'luiza'];

  return (
    <div className="App">
      <ClassComponent name = 'Igor'/>
      <ClassComponent name = 'Vini'/>
      <ClassComponent name = 'Felipe'/>
      <FunctionalComponent>
        <h1>Sou Children do component funcional</h1>
      </FunctionalComponent>
      <ClassRoom students = {students}/>

      <ReactPlayer url='https://www.youtube.com/watch?v=kJQP7kiw5Fk' controls/>
    </div>
  );
}

export default App;
