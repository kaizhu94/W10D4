// export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

export const allTodos = ({todos}) =>{
    const keys = Object.keys(todos);
    const array =  keys.map(key => {
        return todos[key];
    })
    // debugger
    return array;
}