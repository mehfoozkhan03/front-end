import React from 'react';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const { todo, isLoading, isError } = useSelector((store) => store.todo);
  console.log(`🚀 ~ todo:`, todo);
  console.log(`🚀 ~ isLoading:`, isLoading);
  console.log(`🚀 ~ isError:`, isError);
  if (isLoading) return <h1>Loading.....</h1>;
  return <div>TodoList</div>;
};
