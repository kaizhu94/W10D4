// export default () => <h3>Todo List goes here!</h3>
import React from 'react';
import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from "../../components/todo_list/todo_form"
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {todos: props.todos};
        // debugger
    }
    render(){
        return (
                <div>
                    <ul>
                    {this.state.todos.map((el) => 
                    <TodoListItem key={el.id} todo={el}/>)}
                    </ul>
                    <TodoForm/>
                </div>
        )
             
    }
}

export default TodoList;