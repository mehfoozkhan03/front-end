import React from 'react';
import { TodoContextScope } from '../Context/todoContext';

export const TodoInputs = () => {
  const { todo, setTodo } = React.useContext(TodoContextScope);
  const [text, setText] = React.useState('');

  const handleAddTodo = () => {
    const todoData = {
      id: Date.now(),
      text: text,
      isEdits: false,
      isComplete: false,
    };
    setTodo((prev) => {
      console.log(prev);
      return [...prev, todoData];
    });
  };
  console.log(`🚀 ~ todo:`, todo);

  return (
    <div>
      <input
        type="text"
        placeholder="enter your todo.."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>add</button>
    </div>
  );
};
