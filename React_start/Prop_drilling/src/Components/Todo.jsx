import React from 'react';
import { TodoList } from './TodoList';

export const Todo = ({ props }) => {
  const { setText, addTodo, todo, setTodo } = props;
  return (
    <>
      <input
        type="text"
        placeholder="enter the todo..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>add</button>
      <TodoList props={{ todo, setTodo }} />
    </>
  );
};
