// import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
// export default function TodoList({ list, updateList }) {
export default function TodoList() {
    const { list, setList } = useContext(TodoContext)
    return (
        <div>
            {
                list.length > 0 &&
                list.map(todo => <Todo
                    key={todo.id}
                    id={todo.id}
                    todoData={todo.todoData}
                    isFinished={todo.finished}
                    changeFinished={(isFinished) => {
                        console.log("is finished", isFinished);
                        const updatedList = list.map(t => {
                            if (t.id == todo.id) {
                                todo.finished = isFinished
                            }
                            return t;
                        });
                        // updateList(updatedList);
                        setList(updatedList);
                    }
                    }
                    onDelete={() => {
                        const updatedList = list.filter(t => t.id != todo.id)
                        setList(updatedList);
                    }}
                    onEdit={(todoText)=>{
                        const updatedList = list.map((t)=>{
                            if(t.id==todo.id)
                                todo.todoData = todoText;
                            return t;
                        });
                        setList(updatedList);
                    }}
                />)
            }
        </div>
    )
}