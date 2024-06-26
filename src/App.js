import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TodoForm from './TodoForm';
import './styles/App.css'; // Import the custom styles

import {TODO_API_BASE_URL} from "./config"

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {

    const GET_URL = `${TODO_API_BASE_URL}/todos`
    console.log('GET URL ' + GET_URL);

    // Fetch data from the Express server
    axios.get(GET_URL)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>MERN Stack Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;