import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState([]);
  const [filteredTodos, setFilterTodos] = useState([]);
  

  return (
    <div className="App">
      <header>
      <h1>Alex' Todo List</h1>
      </header>
      <Form setStatus={setStatus} todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setFilterTodos={setFilterTodos} status={status} filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
