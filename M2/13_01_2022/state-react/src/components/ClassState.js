import { Component } from 'react'

// class ClassState extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   render() {
//     return <div>contador = {this.state.count}</div>
//   }
// }

class ClassState extends Component {

  state = {
    count: 0,
    outro: 17,

  }

  handleIncrement = () => {
    // this.state.count += 1 não fazer alteração de state desta forma
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (<>
      <div>contador = {this.state.count}</div>
      <button onClick = {this.handlerIncrement}>Add</button>
    </>)
  }
}

export default ClassState