import React from "react";

export const Todo = ({todo: {id, text, completed}, todos, setTodos}) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter(t => t.id !== id))
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id == id) { return {...item, completed:!item.completed} } else return item
        }))
    };
    // Html
  return (
    <div className='todo'>
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button className='complete-btn' onClick={completeHandler}>
        <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={deleteHandler}>
        <i className='fas fa-trash' ></i>
      </button>
    </div>
  );
};

export default Todo;
