import React, { Component } from 'react'
import AddMovie from './AddMovie'
import AddMovieNew from './AddMovieNew'
import { MovieCard } from './MovieCard'

export class MovieList extends Component {
  
  state = {
    movies:[
      {
      _id: "1ae23ef1",
      title: "The Godfather",
      director: "Francis Coppola",
      hasOscars: true,
      IMDBRating: 9.2
      },
    {
      _id: "1ae23ef2",
      title: "Star Wars",
      director: "George Lucas",
      hasOscars: true,
      IMDBRating: 8.7
    }
  ]
  } 

  addMovie = (movie) => {
    movie._id = this.state.movies.length + 1 // criei um id
    let moviesCopy = [...this.state.movies]
    moviesCopy.push(movie)
    this.setState({
      movies: moviesCopy
    })
  }

  deleteMovie = (id) => {

    const filteredMovies = this.state.movies.filter((movie) => movie._id !== id)

    this.setState({
      movies: filteredMovies
    })
  }

  render() {
    return (
      <div>
        <div>
        <h2>Movie List</h2>
        {/* <AddMovie addMovie={this.addMovie}/> */}
        <AddMovieNew addMovie={this.addMovie}/>

        {this.state.movies.map(movie => <MovieCard key = {movie._id} {...movie} deleteMovie={this.deleteMovie}/>)}

    </div>
      </div>
    )
  }
}

export default MovieList
