// import { useState } from "react";
import Todo from "../Todo/Todo";
export default function TodoList({ list, updateList }) {
    // const [list, setList] = useState([
    //     { id: 1, todoData: 'todo 1' },
    //     { id: 2, todoData: 'todo 2' }
    // ]);

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
                        console.log("is finished",isFinished);
                        const updatedList = list.map(t => {
                            if (t.id == todo.id) {
                                todo.finished = isFinished
                            }
                            return t;
                        });
                        updateList(updatedList);
                    }} />)
            }
        </div>
    )
}