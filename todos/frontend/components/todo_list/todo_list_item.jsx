import React from 'react';
class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {todo: props.todo};
        // debugger
    }
    render(){
        return (
                <li>
                    {this.state.todo.title}
                </li>
        ) 
    }
}

export default TodoListItem;