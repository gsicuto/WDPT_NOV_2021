import React, {useState} from 'react'

import moviesData from './data/movieData.json'
import { MovieCard } from './MovieCard'

import './MovieList.css'

export const MovieList = () => {

  const [movies, setMovies] = useState(moviesData)

  const [showMovies, setShowMovies] = useState(true)

  const deleteMovie = (id) => {

    const filteredMovies = movies.filter((movie) => movie._id !== id)

    setMovies(filteredMovies)
  }

  const toogleShowMovies = () => {
    setShowMovies(!showMovies)
  }

  return (
    <div>
      <h2>Movie List</h2>
      <button onClick={toogleShowMovies}>{showMovies ? 'Hide': 'Show'}</button>

      {showMovies &&
        movies.map(movie => <MovieCard key = {movie._id} {...movie} deleteMovie={deleteMovie}/>)
      }

    </div>
  )
}
