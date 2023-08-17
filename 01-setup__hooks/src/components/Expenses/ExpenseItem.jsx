import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import React, { useState } from "react";
import Card from '../UI/Card';

function ExpenseItem(props){  
  const [newTitle, setTitle] = useState(props.title)
  console.log("expenseItem evaluated")
  
  const clickHandler = ()=>{
    setTitle("new title")
    console.log(newTitle);
  }
  return(
      <div className = "expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{newTitle}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>change title</button>
      </div>      
  )
}

export default ExpenseItem;