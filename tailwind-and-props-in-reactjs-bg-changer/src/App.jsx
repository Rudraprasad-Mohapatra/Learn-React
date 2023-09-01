import { useState } from "react";
import "./App.css";
import Button from "./components/Button"
function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-500 px-3 py-2 rounded-2xl">
          <Button text="Red" color="red" onClick={() => setColor("red")}></Button>
          <Button text="Green" color="green" onClick={() => setColor("green")}></Button>
          <Button text="Blue" color="Blue" onClick={() => setColor("Blue")}></Button>
          <Button text="Olive" color="Olive" onClick={() => setColor("Olive")}></Button>
          <Button text="Gray" color="Gray" onClick={() => setColor("Gray")}></Button>
          <Button text="Yellow" color="Yellow" onClick={() => setColor("Yellow")}></Button>
          <Button text="pink" color="pink" onClick={() => setColor("pink")}></Button>
          <Button text="Purple" color="Purple" onClick={() => setColor("Purple")}></Button>
          <Button text="Lavender" color="Lavender" onClick={() => setColor("Lavender")}></Button>
          <Button text="White" color="White" onClick={() => setColor("White")}></Button>
          <Button text="Black" textCol="white" color="Black" onClick={() => setColor("Black")}></Button>
        </div>
      </div>
    </div>
  )
}

export default App
