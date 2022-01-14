import React from 'react'
import { useState } from 'react/cjs/react.development'

export const TempConverter = () => {
  const[theme, setTheme] = useState('light')

  const toogleTheme = event => {
    setTheme(event.target.value)
  }

  const [unit, setUnit] = useState('C');
  const [value, setValue] = useState(0);

  return (
    <div className= {theme}>
      <p>Temperatura: {value} º{unit}</p>
      <button onClick = {() => {
        if (unit === 'C') {
          setValue(value + 273)
          setUnit('K')
        } else {
          setValue(value - 273)
          setUnit('C')
        }
      }}>Transformar Unidade</button>

      <select onChange ={toogleTheme}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  )
}
