import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';  


const AddUser =(props)=>{
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler =(event)=>{
    event.preventDefault();
    if(username.trim().length === 0 || age.trim().length === 0){
      setUsername('');
      setAge('')
      return;
    }
    if(+age < 1){
      setUsername('');
      setAge('')
      return;
    }
    console.log(username, age);
    props.onAddUser(username, age);
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
      <ErrorModal title="An error occured!" message="something wrong" />
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