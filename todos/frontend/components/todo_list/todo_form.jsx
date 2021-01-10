import React from "react";
import { uniqueId } from '../../util/id_generator'
class TodoForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            title: "",
            body: "",
            done: false
          };
        //   debugger
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        // debugger;
        return e => this.setState({[property]: e.target.value});
      }

    handleSubmit(e) {
        // debugger;
        e.preventDefault();
        const todo = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveTodo(todo);
        this.setState({
            title: "",
            body: ""
            }); // reset form
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="enter a todo title"
            onChange={this.update('title')}
            required/>
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="enter a todo body"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;