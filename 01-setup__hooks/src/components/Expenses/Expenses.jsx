import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'
import React, {useState} from 'react';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');
  //const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022');

  let filterInfoText = '2019, 2021 & 2022';
  
    if(filteredYear === '2019'){
      filterInfoText ='2020, 2021 & 2022';
    }
    else if(filteredYear === '2020'){
      filterInfoText ='2019, 2021 & 2022';
    }
    else if(filteredYear === '2021'){
      filterInfoText = '2019, 2020 & 2022';
    }
    else{
      filterInfoText = '2019, 2020 & 2021';
    }

  function filterChangeHandler(selectedYear){
    setFilteredYear(selectedYear);
  }
//comment
  return(
    <>
      <Card className = "expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <p style={{color:"white"}}>Data for years {filterInfoText} is hidden</p>
        <ExpenseItem 
        title={props.items[0].title}
        date={props.items[0].date} 
        amount={props.items[0].amount}/>
     
        <ExpenseItem 
        title={props.items[1].title} 
        date={props.items[1].date} 
        amount={props.items[1].amount}/>
     
        <ExpenseItem 
        title={props.items[2].title} 
        date={props.items[2].date} 
        amount={props.items[2].amount}/>

        <ExpenseItem 
        title={props.items[3].title} 
        date={props.items[3].date} 
        amount={props.items[3].amount}/>
      </Card>
    </>
  )
}


export default Expenses;