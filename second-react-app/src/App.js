import Counter from "./Counter";
import ConditionalRendering from "./ConditionalRendering";
import ToDoConditionalRendering from "./ToDoConditionalRendering";
import ArrayConditionalRendering from "./ArrayConditionalRendering";
import Avatar from "./Avatar";
import { useState } from "react";
function App() {
  const obj = {
    src:"https://images.indianexpress.com/2023/08/PTI08_24_2023_000167B.jpg?resize=768,436",
    width:"100px",
    height:"100px"
  }

  const [ todos ]  = useState(["todo 1", "todo 2"]);
  return (
    <>
    <Counter/>
    <ConditionalRendering/>
    <ToDoConditionalRendering/>
    <ArrayConditionalRendering/>

    <Avatar {...obj}/>
    <Avatar src="https://images.indianexpress.com/2023/08/PTI08_24_2023_000298A.jpg?resize=768,512" width="500px" height="500px"/>
  <span>Child Tag</span>
    {
      todos.map((v, ind)=><li key={ind}>{v}</li>)
    }
    </>
  );
}

export default App;