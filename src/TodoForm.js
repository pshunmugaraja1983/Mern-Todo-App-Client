import React, { useState } from 'react';
import axios from 'axios';

import {TODO_API_BASE_URL} from "./config"

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const addTodo = async () => {
    try {

      const POST_URL = `/todos`
      const response = await axios.post(POST_URL, { task });
      onAdd(response.data);
      setTask('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};
export default TodoForm;