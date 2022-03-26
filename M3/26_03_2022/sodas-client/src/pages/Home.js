import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Home = ({setUser}) => {
    const [showsSignupForm, setshowsSignupForm] = useState(false)
    const [showsLoginForm, setshowsLoginForm] = useState(false)

    const onClickSignup = () => {
        setshowsSignupForm(!showsSignupForm)
    }

    const onClickLogin = () => {
        setshowsLoginForm(!showsLoginForm)
    }

    return (
        <div className="home-page"> 
            <h1>New User?</h1>
            <button onClick={onClickSignup}>Sign up</button>
            {showsSignupForm ? 
            <Signup/>
            : 
            null}
            <h1>Already signed?</h1>
            <button onClick={onClickLogin}>Login</button>
            {showsLoginForm ? 
            <Login setUser={setUser}/>
            : 
            null}
        </div>
    )
}

export default Home;