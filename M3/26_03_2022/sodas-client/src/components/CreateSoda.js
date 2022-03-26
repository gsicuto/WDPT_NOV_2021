import React from 'react';
import { useState } from 'react';
import sodasJson from '../sodas.json'
import api from '../util/api.utils'

export const NewSoda = ({ fetchData }) => {

    const [newSoda, setNewSoda] = useState({
      name: '',
      manufactor: '',
      calories: 0
    })
    // const [name, setName] = useState('')
    // const [manufactor, setManufactor] = useState('')
    // const [calories, setCalories] = useState('')
    const [fail, setFail] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await api.createNewSoda(newSoda) 
          setNewSoda({
            name: '',
            manufactor: '',
            calories: 0
          })
          fetchData()
        } catch (error) {
          setFail(true)
          console.log(error)
        }

        
    }

  return (
    <div className='form-new-soda'>
      {fail && <p>Cannot Create Soda</p>}
      <h4>Create a new soda!</h4>
      <form onSubmit={handleSubmit}>
          <input type='text' placeholder='name' value={newSoda.name} onChange={(e) => setNewSoda({ ...newSoda, name: e.target.value})}/>    
          <input type='text' placeholder='manufactor' value={newSoda.manufactor} onChange={(e) => setNewSoda({...newSoda, manufactor: e.target.value})}/>    
          <input type='number' placeholder='calories' value={newSoda.calories} onChange={(e) => setNewSoda({...newSoda, calories: e.target.value})}/>    
          <button type='submit'>Create Soda</button>
      </form>
    </div>
  )
};

export default NewSoda;