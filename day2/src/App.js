//import logo from './logo.svg';
import './App.css';
import TodoCard from './compo/TodoCard';

function App() {
  return (
    <div className="App">
       
       
       <div style={{width:"90%",margin:"auto",backgroundColor:"black"}}>
            <h1>Title</h1>
            <h1>Category</h1>
            <h1>Price</h1>
            <h1>Toggle</h1>
            <h1>Delete</h1>
        </div>
        <TodoCard/>
      
    </div>
  );
}

export default App;
