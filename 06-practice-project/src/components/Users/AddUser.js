import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser =()=>{
  // const [userData, setUserData] = useState({
  //   userName : username,
  //   age : age
  // });
  const addUserHandler =(event)=>{
    event.preventDefault();
  }
  const changeHandler =(event)=>{
    console.log(event.target.value)
  }
  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={changeHandler} />
           <label htmlFor="age">Age (years)</label>
          <input id="age" type="number"/>
          <Button type="submit" onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser;