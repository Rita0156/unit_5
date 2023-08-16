import logo from './logo.svg';
import './App.css';
import { store } from './Redux/store';
import React,{useState} from "react"
function App() {
   
  const {dispatch}=store;

  const {count}=store.getState()

   const [local,setLocal]=useState(0)
  store.subscribe(()=>{
       setLocal((prev)=>prev+1)
  })

  function handalInc(){
    dispatch({type:"INCREMENT",payload:1})
  }

  function handalDec(){
    dispatch({type:"DECREMENT",payload:1})
  }

  return (
    <div className="App">
        <h1>Count : {count}</h1>
        <div>
          <button onClick={handalInc}>Increment</button>
          <button onClick={handalDec} >Decrement</button>
        </div>
    </div>
  );
}

export default App;
