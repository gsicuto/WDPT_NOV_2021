import React from 'react'

export const Child = ({ action }) => {
  return (
    <div>
      <button onClick={() => action(43)}></button>
    </div>
  )
}
