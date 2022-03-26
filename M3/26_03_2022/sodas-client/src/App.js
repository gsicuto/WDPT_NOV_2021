import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home.js';
import SodasList from './pages/SodasList';
import FavoriteSodas from './pages/FavoriteSodas';
import sodasJson from './sodas.json'
import api from './util/api.utils'

function App() {
  const [sodas, setSodas] = useState([])
  const [favoriteSodas, setFavoriteSodas] = useState([])
  const [user, setUser] = useState({})

  const getAllSodas = async () => {
    try {
      const sodas = await api.getAllSodas()
      setSodas(sodas)
    } catch (error) {
      console.log(error.message)
    }
  }



  const getFavoriteSodas = async () => {
    setFavoriteSodas(sodasJson)
  }

  return (
    <div className="App">
    <Routes> 
      <Route exact path='/' element={<Home setUser={setUser}/>}/>
      <Route path='/sodas' element={<SodasList sodas={sodas} user={user} fetchData={getAllSodas}/>}/>
      <Route path='/favorite-sodas' element={<FavoriteSodas sodas={favoriteSodas} fetchData={getFavoriteSodas}/>}/>
    </Routes>
    </div>
  );
}

export default App;