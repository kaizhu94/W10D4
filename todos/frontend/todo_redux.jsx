import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
// import App from "./components/app"
import Root from './components/root'


// import {receiveTodos, receiveTodo} from "./actions/todo_actions"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // window.store = configureStore;
    // window.receiveTodo = receiveTodo;
    // window.receiveTodos= receiveTodos;
    ReactDOM.render(<Root/>,root);
})
