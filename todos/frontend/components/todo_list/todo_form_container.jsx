import  {connect} from "react-redux"
import TodoForm from "../todo_list/todo_form"
// import { allTodos } from "../../reducers/selectors"
import { receiveTodo } from "../../actions/todo_actions"


  //Not using this container, because we can just pass receiveTodo as a prop into TodoForm
  const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(TodoForm);