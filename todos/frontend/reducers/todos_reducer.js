import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions'

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODOS:
            const todos = {};
            action.todos.forEach((el) =>{
                // const e = el;
                const key = el.id;
                const value = el;
                todos[key] = value;
            })
            return todos;
        case RECEIVE_TODO:
            // debugger
            const newState = Object.assign({}, state);
            newState[action.todo.id] = action.todo;
            // debugger
            return newState;
        case REMOVE_TODO:
            let newState2 = Object.assign({}, state);
            delete newState2[action.todo.id];
            // const index = 
            return newState2;
        default:
            return state;
    }
  };
  
  export default todosReducer;