import React from 'react'

export const MovieCard = ({ _id, title, director, IMDBRating, deleteMovie, hasOscars} ) => {
  return (
    <div className= 'movie-card'>
      <h3>{title}</h3>
      <p>Director: {director}</p>
      <p>Rating: {IMDBRating}</p>
      {hasOscars && (
        <>
          <p>This Movies Has Oscars</p>
          <p>🏆</p>
        </>
        )}
      {/* {hasOscars ? <p>🏆</p> : null} */}
      <button onClick = {() => { deleteMovie(_id) }}>Delete</button>
    </div>
  )
}
