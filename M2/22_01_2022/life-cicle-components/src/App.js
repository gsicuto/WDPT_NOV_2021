import { useState } from 'react';
import './App.css';
import LifeCycleClass from './components/LifeCycleClass';
import { LifeCycleFunc } from './components/LifeCycleFunc';
import { UsersList } from './components/UsersList';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Erro } from './components/Erro';
import { UserDetail } from './components/UserDetail';

function App() {

  const[color, setColor] = useState('blue')
  const[showCounter, setShowCounter] = useState(true)

  const changeColor = () => {
    const newColor = color === 'blue'? 'red' : 'blue'
    setColor(newColor)
  }

  return(
    <div className="App">
      <NavBar/>
      {/* <Switch> 
      </Switch> */}
      <Routes>
        <Route path='/*' element={ <Erro/> }/>
        <Route path='/:user' element={ <Home/> }/>
        <Route path='/users' element={ <UsersList/> }/>
        <Route path='/user/:id' element={ <UserDetail/> }/>
        <Route path='/class-counter' element={<LifeCycleClass color={color}/>}/>
        <Route path='/func-counter' element={<LifeCycleFunc color={color}/>}/>
      </Routes>
    </div>
  )




//   return (
//     <div className="App">
//       <button onClick={()=>{setShowCounter(!showCounter)}}>Show Counter</button>

//       {/* {showCounter &&  (<>
//         <LifeCycleClass color={color}/>
//         <LifeCycleFunc color={color}/>
//         </>)
// } */}
//       <button onClick={changeColor}>ChangeColor</button>
      
//       <UsersList/>
//     </div>
//   );
}

export default App;
