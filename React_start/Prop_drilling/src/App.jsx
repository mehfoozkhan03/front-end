import React, { useState } from 'react';

// import { Counter } from './Components/Counter';
import { Todo } from './Components/Todo';

export const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: 'hello', isEdits: true, isComplete: false },
  ]);
  const [text, setText] = useState('');
  const [isEdits, setEdit] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const addTodo = () => {
    const todoValue = {
      id: todo.length + 1,
      text: text,
      isEdits: isEdits,
      isComplete: isComplete,
    };
    setTodo([...todo, todoValue]);
    console.log('todo:state_wala:function k ander', todo);
  };

  /*   const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  }; */

  return (
    <>
      {/* <Counter props={{ counter, increment, decrement }} /> */}
      {/* <Counter counter={counter} increment={increment} decrement={decrement} /> */}
      <Todo props={{ todo, addTodo, setTodo, setText, setEdit, setComplete }} />
    </>
  );
};
