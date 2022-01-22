import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const UserDetail = (id) => {
  const [user, setUser] = useState({})

  const params = useParams()

  console.log(params)

  const getUsers = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      setUser(response.data)
    } catch (error) {
      window.alert('Houve um erro')
    } 
  }

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    //   setUsers(response.data).catch(err => console.log('deu erro'))
    // })
    getUsers()
  },[])

  return <div> Detalhe do usuário 
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>

  </div>;
};
