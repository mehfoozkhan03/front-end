import React from 'react';

import { counterCreateContext } from '../Context/CounterContext';

export const Todo_Input = () => {
  const { todo, setTodo, text, setText } =
    React.useContext(counterCreateContext);

  const addTodo = () => {
    const todoData = {
      id: todo.length + 1,
      text: text,
      isEdits: false,
      isComplete: false,
    };
    setTodo((prev) => [...prev, todoData]);
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter the todo..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>add</button>
    </>
  );
};
