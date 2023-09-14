import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: "TODO",
    initialState,
    reducers: {
        addTodo: (todo, action) => {
            // Here todo means todo state in the store.js .(You can give any name e.g. "state")
            let todoText = action.payload.todoText;
            todo.todoList.push({ id: todo.todoList.length + 1, todoData: todoText, finished: false })
        },
        editTodo: (state, action) => {
            let payLoadTodo = action.payload.todo;
            let todoText = action.payload.todoText;
            state.todoList = state.todoList.map((t) => {
                if (t.id == payLoadTodo.id)
                t.todoData = todoText;
                return t;
            });
        },
        deleteTodo: (state, action) => {
            let payLoadTodo = action.payload.todo;
            state.todoList = state.todoList.filter(t => t.id != payLoadTodo.id);
        },
        todoFinished: (state, action) => {
            let payLoadTodo = action.payload.todo;
            let isFinished = action.payload.isFinished;
            state.todoList = state.todoList.map(t => {
                if (t.id == payLoadTodo.id) {
                    t.finished = isFinished;
                }
                return t;
            });
        }
    }
})

export const { deleteTodo, addTodo, editTodo, todoFinished } = todoSlice.actions;
export default todoSlice.reducer;
// export default todoSlice.reducer;
// export default todoSlice.actions;