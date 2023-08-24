import { useState } from 'react'
import './App.css'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

export default function App() {
  const [usersList, setUsersList] = useState([]); 

  const addUserHandler =(uName, uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, 
      {
        name: uName,
        age : uAge,
        id : Math.random().toString()
      }]
    })
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  )
}
