//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import TodoCard from './compo/TodoCard';
import getTodo from "./Redux/action"
   
 

function App() {

  const [data,setData]=useState([])
  const getData=()=>{
    getTodo()
    .then((res)=>{
     console.log(res);
     setData(res.data)
    })
   
   }

   useEffect(()=>{
     getData()
   },[])
  return (
    <div className="App" style={{
      display:"grid",
      width:"90%",
      margin:"auto",
      gridTemplateColumns:"repeat(3,1fr)",
      gap:"20px"
    }}>
       
       
       
        {data.map((item)=>(
          <TodoCard 
          key={item.id}
          avat={item.image}
          title={item.title}
          price={item.price}
          
          />
        ))}
      
    </div>
  );
}

export default App;
