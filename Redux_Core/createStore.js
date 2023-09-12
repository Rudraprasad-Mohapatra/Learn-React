import { createStore } from "redux";

const ADD_TODO = "add_todo";
const DEL_TODO = "delte_todo";
const UPD_TODO = "edit_todo";

function todoReducer(state, action) {
    if (action.type == ADD_TODO) {
        const todoText = action.payload.todoText
        return [
            ...state,
            { text: todoText, isFinished: false, id: (state.length == 0) ? 1 : state[state.length - 1].id + 1 }
        ];
    } else if (action.type == DEL_TODO) {
        const todo = action.payload.todo;
        return state.filter(t => t.id != todo.id);
    } else if (action.type == UPD_TODO) {
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        return state.map(t => {
            if (t.id == todo.id) {
                t.text = todo.text;
            }
        })
    }
    return state;
}

// const response = createStore(todoReducer, []);

// console.log(response);
// console.log(response.getState());

const { dispatch, subscribe, getState, replaceReducer } = createStore(todoReducer, []);

dispatch({ type: ADD_TODO, payload: { todoText: "todo 1" } })
console.log(getState());

dispatch({ type: ADD_TODO, payload: { todoText: "todo 2" } })
console.log(getState());
