import { useEffect, useState } from "react";
import "./App.css";

const Person = (props) => {
  return (
    <>
      <h5>Hello, I am</h5>
      <h1>{props.name}</h1>
      <h4>nice to meet you.</h4>
      <hr width="100%"></hr>
    </>
  )
}

const ComponentPractice = () => {
  const names = ['a','b','c','d']
  return (
    <div className="App">
      <Person name="a" />
      <Person name="aa" />
      <Person name="aaa" />
      <Person name="aaaa" />
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(()=> {
    setCounter(100)
  }, [])
  // setCounter(100)
  return (
    <div className="App">
      <button onClick={()=>{setCounter((prev)=>prev+1)}}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=>{setCounter((prev)=>prev-1)}}>-</button>
    </div>
  )
}

export default App;

