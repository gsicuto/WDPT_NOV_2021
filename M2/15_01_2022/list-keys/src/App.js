import './App.css';
import { useState } from 'react';
import { MovieList } from './MovieList';
import SimpleList from './SimpleList';
import { Spinner } from './Spinner';

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
     {isLoading ? <Spinner/> : <MovieList/>}
    </div>
  );
}

export default App;
