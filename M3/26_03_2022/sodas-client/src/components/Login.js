import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername('')
        setPassword('')
    }

    return (
        <div>
                <form onSubmit = {handleSubmit}>
                    <label>Username</label>
                    <input type='text' name='username' value={username} onChange = {e => setUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type='password' name='password' value={password} onChange = {e => setPassword(e.target.value)}/>
                    <button type='submit'>Sign Up</button>
                </form>
        </div>
    )
}

export default Login;