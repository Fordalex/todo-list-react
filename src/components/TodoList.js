import React, {useEffect} from "react";
import Todo from "./Todo";

export const TodoList = ({ todos, setTodos, filteredTodos,setFilterTodos, status }) => {

  useEffect(() => {
    var filteredTodos = todos.filter(todo => {
      if (status == 'completed') {
        return todo.completed
      } else if (status == 'uncompleted') {
        return !todo.completed
      } else {
        return todo
      }
    })
    setFilterTodos(filteredTodos)
  }, [filteredTodos])

  // Html
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {
        filteredTodos.length == 0 ? <p>There are no {status == 'all' ? '' : status} todos</p> :
        filteredTodos.map((todo) => (
          <Todo setTodos={setTodos} key={todo.id} todo={todo} todos={todos} />
        ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
