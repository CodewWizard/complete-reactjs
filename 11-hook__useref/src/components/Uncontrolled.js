import React,{useRef, useState} from 'react';

const Uncontrolled =()=>{
  const luckyName = useRef(null)
  const [show, setShow] = useState(false);

  const submitForm =(e)=>{
    e.preventDefault();
    console.log(luckyName.current.value)
    let name = luckyName.current.value;
    name === "" ? alert("fill the data") : setShow(true)
  }
  return(
    <>
      <form onSubmit = {submitForm}>
        <div>
          <label>Enter your luckyname</label><br/>
          <input type="text" ref={luckyName}/>
        </div>
        <br/>
        <button>Submit</button>
      </form>
      {show && <h1>your lucky name is {luckyName.current.value}</h1>}
    </>
  )
}
export default Uncontrolled;
