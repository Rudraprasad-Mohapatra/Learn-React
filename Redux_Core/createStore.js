import { createStore, bindActionCreators, combineReducers } from "redux";

const ADD_TODO = "add_todo";
const DEL_TODO = "delte_todo";
const UPD_TODO = "edit_todo";
const ADD_USER = "add_user";
// function todoReducer(state, action) { // without combineReducers
function todoReducer(state = [], action) {
    if (action.type == ADD_TODO) {
        const todoText = action.payload.todoText
        return [
            ...state,
            { text: todoText, isFinished: false, id: (state.length == 0) ? 1 : state[state.length - 1].id + 1 }
        ];
    } else if (action.type == DEL_TODO) {
        const todoId = action.payload.todoId;
        return state.filter(t => t.id != todoId);
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

function userReducr(state = [], action) {
    const userName = action.payload && action.payload.userName;
    if (action.type == ADD_USER) {
        return [
            ...state, { name: userName, id: (state.length == 0) ? 1 : state[state.length - 1].id + 1 }
        ]
    }
    return state;
}

// const response = createStore(todoReducer, []);

// console.log(response);
// console.log(response.getState());


// action objects -> action creators 

const addTodo = (todoText) => {
    return { type: ADD_TODO, payload: { todoText: todoText } }
}
const deleteTodo = (id) => {
    return { type: DEL_TODO, payload: { todoId: id } }
}

const addUser = (name) => {
    return { type: ADD_USER, payload: {userName : name}};
}

// const { dispatch, subscribe, getState, replaceReducer } = createStore(todoReducer, []); without combineReducers

const reducer = combineReducers({ todo: todoReducer, user: userReducr })
const { dispatch, subscribe, getState, replaceReducer } = createStore(reducer);

// subscribe() will call the function every time there is a state change
subscribe(() => {
    console.log(getState());
})

const actions = bindActionCreators({ addTodo, deleteTodo, addUser }, dispatch); //Binding actions with dispatch
// const userActions = bindActionCreators({addUser}, dispatch);

// dispatch({ type: ADD_USER, payload: { userName: "Rama" } });
// dispatch(addUser("Rama"));
userActions.addUser("Rama");

// dispatch(addTodo("todo 1"))
// console.log(getState());
actions.addTodo("todo 1")

// dispatch(addTodo("todo 2"))
// console.log(getState());
actions.addTodo("todo 2")

// dispatch(deleteTodo(2));
// console.log(getState());
actions.deleteTodo(2)
