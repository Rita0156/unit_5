import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {<Homepage />}
    </div>
  );
}

export default App;
