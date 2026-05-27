import React from 'react';
import { TodoList } from '../Components/TodoList';
import { Todo_Input } from '../Components/Todo_Input';

export const Todo = () => {
  return (
    <>
      <Todo_Input />
      <TodoList />
    </>
  );
};
