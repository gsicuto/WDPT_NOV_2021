import React from 'react';
import { useState, useEffect } from 'react';

export const LifeCycleFunc = (props) => {
  const [count, setCount] = useState(0)
  const [textColor, setTextColor] = useState('black')

   // Syntax Use Effect

   useEffect(()=> {

     console.log('Estou na fase de montagem')
     const id = setInterval(() => {
       setCount((prevCount) => prevCount + 1)
     }, 1000) // Mounting Phase

     return () => {
      console.log('Estou na fase de desmontagem')
      clearInterval(id)
     } // Unmounting Phase

   }, []) 

   useEffect(()=> {
     props.color === 'blue'? setTextColor('black') :setTextColor('white')
   }, [props.color]) //Update Phase

   useEffect (()=> {
     console.log('Update condicionado ao count')
     document.title = count
   }, [count])



  return (<div>
    FUNÇÃO
      <h1 style={{
        backgroundColor: props.color,
        color: textColor}}>{count}</h1>
      <button>Add</button>
  </div>)
};
