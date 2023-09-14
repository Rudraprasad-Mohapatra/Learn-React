// import { createStore, combineReducers } from "redux";

// reducer imports
// import todoReducer from "./reducers/todoReducer.js";
// const reducers = combineReducers({todo: todoReducer});
// const store = createStore(reducers);

import todoReducer from "./slices/todoSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTolls: process.env.NODE_ENV != "production",
});

export default store;
