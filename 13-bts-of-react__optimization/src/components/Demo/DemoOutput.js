import React from 'react'
import MyParagraph from './MyParagraph';

export default function DemoOutput(props) {
  console.log("DemoOutput RUNNING");
  return (
    <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
  )
}
