import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return <div>
    <ul style={{display: 'flex', justifyContent: 'space-around'}}>
      <li> <NavLink style = {({isActive})=> ({color: isActive ? 'green': 'blue'})} to='/users'>Users</NavLink></li>
      <li> <NavLink style = {({isActive})=> ({color: isActive ? 'green': 'blue'})} to='/class-counter'>Class Counter</NavLink></li>
      <li> <NavLink  style = {({isActive})=> ({color: isActive ? 'green': 'blue'})} to='/func-counter'>Func Counter</NavLink></li>
   
    </ul>
  </div>;
};
