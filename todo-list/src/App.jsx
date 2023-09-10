import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css";
import { useState } from "react";
function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: true }
  ]);
  console.log(list);
  return (

    <>
      <AddTodo updateList={(todo) => setList([...list, { id: list.length + 1, todoData: todo, finished: false }]
      )} />
      <TodoList list={list} updateList={setList}/>
    </>
  )
}

export default App
