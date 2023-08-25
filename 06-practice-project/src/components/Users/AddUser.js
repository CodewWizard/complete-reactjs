import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';  


const AddUser =(props)=>{
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler =(event)=>{
    event.preventDefault();
    if(username.trim().length === 0 || age.trim().length === 0){
      setError({
        title : 'Invalid input',
        message : 'Please enter a valid name and age (non-empty-values).'
      })
      setUsername('');
      setAge('')
      return;
    }
    if(+age < 1){
      setError({
        title : 'Invalid age',
        message : 'Please enter a valid age (> 0).'
      })
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
  
  const errorHandler =()=>{
    setError(null);
  }
  return (
    <>
    {/* if error is defined then only it will execute below file, else error is undefined it will does not rendered below line  */}
      {error  && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
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