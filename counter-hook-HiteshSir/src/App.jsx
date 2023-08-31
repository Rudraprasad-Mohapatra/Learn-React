import { useState } from "react";
import "./App.css"
function App() {
  // let counter = 15
  let [counter, setCounter] = useState(15);
  
  const addValue = () => {
    setCounter(counter+1 >= 20 ? 20 : counter+1);
    // setCounter(counter +1);
    console.log("Value added",counter);
  }
  const removeValue = () => {
    setCounter(counter-1 <= 0 ? 0 : counter-1);
    // setCounter(counter - 1);
    console.log("Value removed",counter);
  }
  return (
    <div>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>{counter}</p>
    </div>
  )
}

export default App
