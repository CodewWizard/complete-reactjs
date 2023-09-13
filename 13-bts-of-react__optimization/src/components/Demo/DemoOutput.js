import React from 'react'
import MyParagraph from './MyParagraph';

const DemoOutput =(props)=> {
  console.log("DemoOutput RUNNING");
  return (
    <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
  )
}


// react.memo() is used to optimize functional components
export default React.memo(DemoOutput);