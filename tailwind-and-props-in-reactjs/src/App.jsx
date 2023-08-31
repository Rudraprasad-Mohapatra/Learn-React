import "./App.css";
import Card from "./components/Card";
function App() {
  let myObj = {
    uname : "Raja",
    age: 21
  }
  let newArr = [1,2,3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card userName="Hitesh Sir" btnText="click me" myObject={myObj} newArray={newArr}/>
      <Card userName="chaiAurCode" myObject={myObj} newArray={newArr} />
    </>
  )
}

export default App
