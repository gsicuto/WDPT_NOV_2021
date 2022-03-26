import { useEffect } from "react";
import NewSoda from "../components/CreateSoda";
import { NavBar } from "../components/Navbar";
import SodaCard from "../components/SodaCard";

const SodasList = ({ sodas, fetchData, user }) => {

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        <NavBar user={user}/>
        <NewSoda fetchData={fetchData}/>
        <div className="all-sodas">
        {sodas.map(soda => {
            return <SodaCard key={soda._id} {...soda}/>
        })}
        </div>
        </>
    )
}

export default SodasList;