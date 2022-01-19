import React, { useState } from 'react'
import { useInput } from '../useInput'

const AddMovieNew = (props) => {

  // const [title, setTitle] = useState('')
  const {value: title, bind: bindTitle, reset: resetTitle} = useInput('') //usando um hook criado por nós
  const [director, setDirector] = useState('')
  const [hasOscars, setHasOscars] = useState(false)
  const [IMDBRating, setIMDBRating] = useState(0)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addMovie({title, director, hasOscars, IMDBRating})
    resetTitle()
    setDirector('')
    setHasOscars(false)
    setIMDBRating(0)
  }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
          <label>Title:</label>
          <input type="text" {...bindTitle}/>

          <label>Director:</label>
          <input type="text" name='director' value={director} onChange = {e => setDirector(e.target.value)}/>

          <label>Oscar Awarded:</label>
          <input type="checkbox" name='hasOscars'value={hasOscars} onChange = {e => setHasOscars(e.target.checked)} />
          
          <label>IMDb Rating:</label>
          <input type="text" name='IMDBRating' value={IMDBRating} onChange = {e => setIMDBRating(e.target.value)} />
          
          <button>Submit</button>
        </form>
      </div>
  )
}

export default AddMovieNew