import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css";
// import { useState } from "react";
import TodoContext from "./context/TodoContext";
import { useState } from "react";
function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: true }
  ]);

  console.log(list);
  return (
    <TodoContext.Provider value={{ list, setList }
    }>
      <AddTodo updateList={(todo) => setList([...list, { id: list.length + 1, todoData: todo, finished: false }]
      )} />
      {/* <TodoList list={list} updateList={setList} /> // no need of props due to context*/}
      <TodoList/>
    </TodoContext.Provider>
  )
}

export default App
