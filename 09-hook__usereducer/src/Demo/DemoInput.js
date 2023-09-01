import React, { useReducer } from 'react';

// Define the reducer function
const inputReducer = (state, action) => {
  
  switch (action.type) {
    case 'UPDATE_INPUT':
      // action means current value
      console.log(action.payload)
      return {...state, inputValue: action.payload };
      
    case 'PRINT_INPUT':
      console.log(state.inputValue)
      return {...state, printedValue: state.inputValue };
      
    default:
      return state;
  }
};

const DemoInput = () => {
  // Initialize the state using useReducer
  const [state, dispatch] = useReducer(inputReducer, {
    inputValue: '',
    printedValue: '',
  });

  const handleInputChange = (event) => {
    // Dispatch an action to update the input value in the state
    dispatch({ type: 'UPDATE_INPUT', payload: event.target.value });
  };

  const handleButtonClick = () => {
    // Dispatch an action to print the input value
    dispatch({ type: 'PRINT_INPUT' });
  };

  return (
    <div className='container'>
      <input className='form-control'
        type="text"
        value={state.inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      /> &nbsp;<br/>
      <button className='btn btn-primary' onClick={handleButtonClick}>Print Input Value</button> <br/><br/>
      <p>Printed Value: {state.printedValue}</p>
    </div>
  );
};

export default DemoInput;
