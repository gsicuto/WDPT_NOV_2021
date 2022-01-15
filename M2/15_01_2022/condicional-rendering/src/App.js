import './App.css';
import { useState } from 'react';
import { Spinner } from './components/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(()=>{
    setIsLoading(false)
  }, 3000)

  // if(isLoading){
  //   return <Spinner/>
  // }else{
  //   return(
  //     <h1>Carregado</h1>
  //   )
  // }

  return (
    <div className="App">
     {isLoading ? <Spinner/> : <h1>Carregado</h1>}
    </div>
  );
}

export default App;
