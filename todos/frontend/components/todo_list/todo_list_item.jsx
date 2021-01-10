import React from 'react';
class TodoListItem extends React.Component{
    constructor(props){
        // debugger
        super(props);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        // debugger
    }
    removeTodo(event){
        // debugger;
        event.preventDefault();
        // debugger;
        this.props.removeTodo(this.props.todo);
        // debugger;
    }

    updateTodo(event){
        // debugger
        event.preventDefault();
        // debugger
        this.props.receiveTodo(this.updateDone(this.props.todo));
        // debugger
    }

    updateDone(todo){
        // debugger
        const newTodo = Object.assign(
            {},
            this.props.todo,
            {done: !this.props.todo.done}
            )
        // debugger
        return newTodo;
    }

    render(){
        // debugger
        let done = this.props.todo.done;
        return (
                <li>
                    {this.props.todo.title}
                    <div>
                        <button onClick = {this.updateTodo}>
                            {done ? "Undo":"Done"}
                        </button>
                   </div>
                   <div>
                        <button onClick = {this.removeTodo}>
                            Delete Todo
                        </button>
                   </div>
                </li>
        ) 
    }
}

export default TodoListItem;