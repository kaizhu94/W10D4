import  {connect} from "react-redux"
import TodoForm from "../todo_list/todo_form"
// import { allTodos } from "../../reducers/selectors"
import { receiveTodo } from "../../actions/todo_actions"


  
  const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(TodoForm);