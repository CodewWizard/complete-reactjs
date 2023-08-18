import ExpensesList from './ExpensesList'
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

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

//comment
  return(
    <>
      <Card className = "expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {/* <p style={{color:"white"}}>Data for years {filterInfoText} is hidden</p> */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  )
}


export default Expenses;