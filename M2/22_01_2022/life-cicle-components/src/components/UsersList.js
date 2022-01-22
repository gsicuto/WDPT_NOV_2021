import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const UsersList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      window.alert('Houve um erro')
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
      <h1>Users List</h1>
      {!loading ? <ul>
        {users.map((user) => <Link to={`/user/${user.id}`} key={user.id}>Name: {user.name} Email:{user.email}</Link>)}
      </ul> : <p>LOADING...</p>}
    </div>);
};
