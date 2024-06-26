import './App.css';
import User from "./components/User"
function App() {
  const fun =(a)=>{
    console.log(a);
  }
  return (
    <div className="App">
      <User onFun= {fun}/>
    </div>
  );
}

export default App;
