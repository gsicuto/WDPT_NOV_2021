import React from 'react';
import { useState } from 'react';
import sodasJson from '../sodas.json'

export const NewSoda = () => {
    const [name, setName] = useState('')
    const [manufactor, setManufactor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let newSoda = { }
        sodasJson.push(newSoda)
        setName('')
        setManufactor('')
    }

  return (
    <div className='form-new-soda'>
      <h4>Create a new soda!</h4>
      <form onSubmit={handleSubmit}>
          <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>    
          <input type='text' placeholder='manufactor' value={manufactor} onChange={(e) => setManufactor(e.target.value)}/>    
          <button type='submit'>Create Soda</button>
      </form>
    </div>
  )
};

export default NewSoda;