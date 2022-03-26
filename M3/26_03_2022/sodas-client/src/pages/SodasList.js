import { useEffect } from "react";
import NewSoda from "../components/CreateSoda";
import { NavBar } from "../components/Navbar";
import SodaCard from "../components/SodaCard";

const SodasList = ({ sodas, fetchData }) => {

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        <NavBar/>
        <NewSoda/>
        <div className="all-sodas">
        {sodas.map(soda => {
            return <SodaCard key={soda._id} name={soda.name} manufactor={soda.manufactor}/>
        })}
        </div>
        </>
    )
}

export default SodasList;