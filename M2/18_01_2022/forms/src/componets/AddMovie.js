import React, { Component } from 'react'

export class AddMovie extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state ={
  //     title:'',
  //     director:'',
  //     hasOscars: true,
  //     IMDBRating: 0
  //   }

  //   this.handleInput = this.handleInput.bind(this)
  // }

  state = {
    title:'',
    director:'',
    hasOscars: true,
    IMDBRating: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    this.props.addMovie(this.state)

    this.setState({
      title:'',
      director:'',
      hasOscars: true,
      IMDBRating: 0
    })
  } 

  // handleTitleInput = (event) => {
  //   this.setState({
  //     title: event.target.value
  //   })
  // }

  // handleDirectorInput = (event) => {
  //   this.setState({
  //     director: event.target.value
  //   })
  // }

  // handleIMDBInput = (event) => {
  //   this.setState({
  //     IMDBRating: event.target.value
  //   })
  // }

  // handleHasOscarsInput = (event) => {
  //   this.setState({
  //     hasOscars: event.target.checked
  //   })
  // }

  handleInput = (event) => {
    // let name = event.target.name;
    // let type = event.target.type;
    // let value = event.target.value
    let {name, value, type} = event.target

    if(type === 'checkbox'){
      value = event.target.checked
    }
    this.setState(
      { [name]:value }
    )

  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title}  onChange={this.handleInput}/>

          <label>Director:</label>
          <input type="text" name="director" value={this.state.director} onChange={this.handleInput}/>

          <label>Oscar Awarded:</label>
          <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={this.handleInput} />
          
          <label>IMDb Rating:</label>
          <input type="text" name="IMDBRating" value={this.state.IMDBRating} onChange={this.handleInput}/>
          
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddMovie
