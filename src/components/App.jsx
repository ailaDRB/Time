import './App.css';
import React,{useState} from 'react'
import Counter from './Counter';
import Time from './Time';


//The first question:can you store a value in a local variable
// const
// let
// var
const App = () => {
  const [msg, setMsg] = useState('Hello')
  // let msg="Hello everyone";
const updateValue=() => {
   setMsg("Change to bye bye");
   console.log(setMsg);
  }
   return (
      <div className='App'>
      <h1>{msg}</h1>
        <button onClick={updateValue}>Click to update H1</button>
        <Counter> </Counter>
        <Time></Time>
        </div>
       )
       }
       export default App;

