import React, { Component } from 'react';

export default class LifeCycleClass extends Component {
  
  constructor(props){
    
    console.log('Estou no Constructor')

    super(props);
    this.state = {
      count: 0,
    }
  }

  componentDidMount = () => {
    console.log('Estou no Did Mount')
    this.intervalId= setInterval(this.updateCounter, 1000) 
  }

  componentDidUpdate = () => {
    console.log('Estou no Did Update')
  }

  
  componentWillUnmount =() => {
    console.log('Estou no Will Unmount')
    clearInterval(this.intervalId)
  }
  
  updateCounter = () => {
    this.setState({count: this.state.count += 1})
  }

  render() {

    console.log('Estou no Render')
    return (
    <div>
      CLASSE
      <h1 style={{backgroundColor: this.props.color}}>{this.state.count}</h1>
      <button onClick = {this.updateCounter}>Add</button>
    </div>);
  }


}
