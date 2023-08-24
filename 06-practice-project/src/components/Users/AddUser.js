import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser =()=>{
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler =(event)=>{
    event.preventDefault();
    if(username.trim().length === 0 || age.trim().length === 0){
      return;
    }
    if(+age < 1){
      return;
    }
    console.log(username, age);
    setUsername('');
    setAge('')
  }
  const usernameChangeHandler =(event)=>{
    setUsername(event.target.value);
  }

  const ageChangeHandler =(event)=>{
    setAge(event.target.value);
  }
  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} value={username} />
           <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} value={age} />
          <Button type="submit" onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser;