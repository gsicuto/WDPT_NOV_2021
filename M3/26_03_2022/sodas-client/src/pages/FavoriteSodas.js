import React from 'react';
import { useEffect} from 'react';
import { NavBar } from '../components/Navbar';
import SodaCard from '../components/SodaCard';

const FavoriteSodas = ({ sodas, fetchData }) => {

  useEffect( () => {
    fetchData()
  }, [])

  return (
      <>    
        <NavBar/>
        <div className="all-sodas">
            {sodas.map(soda => {
                return <SodaCard key={soda._id} name={soda.name} manufactor={soda.manufactor}/>
            })}
        </div>
      </>
  )
};

export default FavoriteSodas;