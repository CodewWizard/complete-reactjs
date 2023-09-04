import React from 'react'
import {FirstName} from '../App'

const CompC =()=>{
  return(
    <>
      <h1>hello world</h1>
      <FirstName.Consumer>
        {(fname) =>{
          return <h1> My name is {fname}</h1>
        }}
      </FirstName.Consumer>
    </>
  )
}

export default CompC;