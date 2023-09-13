import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { todoFinished, addTodo, deleteTodo, editTodo } from "./actions/todoAction.js";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ todoFinished, addTodo, deleteTodo, editTodo }, dispatch)
  return (
    <>
      <AddTodo addTodo={actions.addTodo} />
      <TodoList todoFinished={actions.todoFinished}
        deleteTodo={actions.deleteTodo}
        editTodo={actions.editTodo} />
    </>
  )
}

export default App



/*
Without React Reducer in main.jsx <Provider><Provider/>
return (
    <TodoContext.Provider value={{ list }
    }>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo/>
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
 */