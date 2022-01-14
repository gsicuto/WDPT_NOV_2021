import React, { useState } from 'react';
import { Child } from './Child';

const FunctionalState = (props) => {

  // console.log(useState(12)); // [valorDoState, funçãoDeManuseioDoState]

  const [count, setCount] = useState(0);
  const [value, setValue] = useState();

  return (<>
    <div>contador 2 = {count}</div>
    <div>value Changedby Child 2 = {value}</div>
    <button onClick = {() => setCount((prevCount) => prevCount + 1)}>Add</button>
    <button onClick = {() => setCount(count - 1)}>Sub</button>
    <Child action = {setValue}/>
  </>)
}

export default FunctionalState