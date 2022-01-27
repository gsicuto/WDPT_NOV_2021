import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Navigate ,useNavigate} from 'react-router-dom';

export const UsersList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [loggedInUser, setLoggedInUser] = useState(true)

  let navigate = useNavigate() 

  const getUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response)
      setUsers(response.data)
    } catch (error) {
      window.alert('Houve um erro')
      navigate(-1) // recebe ou o path da rota ou o indice do histórico de navegação
    } finally {
      setTimeout(()=>{
        setLoading(false)
      },2000)
    }
  }

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    //   setUsers(response.data).catch(err => console.log('deu erro'))
    // })
    getUsers()
  },[])


  return (
    <div>
      {loggedInUser ? <h1>Users List</h1> : <Navigate to='/'/>}
      
      {!loading ?  <ul>
        {users.map((user) => <Link to={`/user/${user.id}`} key={user.id}>Name: {user.name} Email:{user.email}</Link>)}
      </ul> : <p>LOADING...</p>}
    </div>);
};
