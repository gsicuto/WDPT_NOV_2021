import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../util/api.utils'

const Login = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate ()
  

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           const user = await api.login({username, password})
           navigate('/sodas')
        } catch (error) {
            setMessage(error.message)
        }
        setUsername('')
        setPassword('')
    }

    return (
        <div>
            {message !== '' && <p>{message}</p>}
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