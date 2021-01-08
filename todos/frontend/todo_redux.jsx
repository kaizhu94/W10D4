import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

import Root from './components/root'

// import {allTodos} from './reducers/selectors'
// import App from "./components/app"
// import {receiveTodos, receiveTodo} from "./actions/todo_actions"
// import todo_list from "./components/todos/todo_list"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.store = configureStore;
    // window.receiveTodo = receiveTodo;
    // window.receiveTodos= receiveTodos;
    // window.todo_list = todo_list
    // window.allTodos = allTodos;
    const store = configureStore;
    ReactDOM.render(<Root store={store}/>,root);
})
