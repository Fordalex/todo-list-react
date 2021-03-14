import React from "react";

export const Form = ({ setInputText, todos, setTodos , inputText, setStatus }) => {
  // Events
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    document.getElementById('input').value = '';
  }
  const sortToDoHandler = (e) => {
    setStatus(e.target.value)
  }
  // Html
  return (
    <form onSubmit={submitToDoHandler}>
      <input onChange={inputTextHandler} type='text' className='todo-input' id="input" />
      <button type="submit" className='todo-button'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select name='todos' className='filter-todo' onChange={sortToDoHandler}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;