import React from 'react';
import { TodoInput } from '../Components/TodoInput';
import { TodoList } from '../Components/TodoList';
import { useSelector } from 'react-redux';

export const Todo = () => {
  const value = useSelector((store) => store.auth);
  console.log(`🚀 ~ value:`, value);
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
};
