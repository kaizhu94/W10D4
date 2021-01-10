// export default () => <h3>Todo List goes here!</h3>
import React from 'react';
import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form"
// import TodoFormContainer from "../../components/todo_list/todo_form_container"



class TodoList extends React.Component{
    constructor(props){ //todos: {}, receiveTodo: , removeTodo
        // debugger
        super(props);
        // this.state = {todos: props.todos};
        // debugger
    }
    render(){
        // debugger
        return (
                <div>
                    <ul>
                    {this.props.todos.map((el) => {
                        // debugger
                    return  <TodoListItem key={el.id} 
                                todo={el}
                                receiveTodo={ this.props.receiveTodo }
                                removeTodo={ this.props.removeTodo}
                                />
                            }
                        )
                    }
                    </ul>
                    <TodoForm receiveTodo= {this.props.receiveTodo} />
                </div>
        )
             
    }
}

export default TodoList;