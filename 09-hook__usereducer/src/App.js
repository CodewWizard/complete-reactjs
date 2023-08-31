import './App.css'
import React, {useState, useReducer} from 'react';

const ACTIONS = {
  INCREMENT : 'increment',
  DECREMENT : 'decrement'
}

const reducer =(state, action)=>{
    switch(action.type){
      case 'increment' : 
        return {count : state.count + 1}
      case 'decrement' : 
        return {count : state.count - 1}
      default : 
        return state 
    }
}

export default function App() {

  // current state, used to dispatch new action,
  // reducer returns new updated state 
  const [state, dispatch] = useReducer(reducer, {count : 0})

  const increment = () => {
    dispatch({
      type : ACTIONS.INCREMENT
    })
  }

  const decrement = () => {
    dispatch({
      type : ACTIONS.DECREMENT
    })
  }
  return (
    <div className='App'>
      <h1>useReducer</h1>
      <br/>
      <button className='btn btn-primary' onClick={decrement}>-</button> &nbsp; &nbsp;
      <span style={{fontWeight:'bold'}}>{state.count}</span>  &nbsp; &nbsp;
      <button className='btn btn-primary' onClick={increment}>+</button>
    </div>
  )
}
