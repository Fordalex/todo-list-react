import React from "react";

export const Form = ({ setInputText, todos, setTodos , inputText}) => {

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

  return (
    <form>
      <input onChange={inputTextHandler} type='text' className='todo-input' id="input" />
      <button type="button" className='todo-button'>
        <i className='fas fa-plus-square' onClick={submitToDoHandler}></i>
      </button>
      <div className='select'>
        <select name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;