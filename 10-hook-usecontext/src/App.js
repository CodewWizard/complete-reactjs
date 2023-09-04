import React,{ createContext } from 'react'
import CompA from './components/CompA'

const FirstName = createContext();

export default function (){
  return (
    <>
      <FirstName.Provider value={"Madiha"}>
        <CompA/>
      </FirstName.Provider>
    </>
  )
}

export { FirstName };