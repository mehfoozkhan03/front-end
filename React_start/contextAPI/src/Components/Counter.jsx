import React from 'react';
import { counterCreateContext } from '../Context/CounterContext';

export const Counter = () => {
  const { count, setCount } = React.useContext(counterCreateContext);
  console.log(`🚀 ~ count:Counter `, count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={increment}>increment</button>
      <button disabled={count <= 0} onClick={decrement}>
        decrement
      </button>
    </>
  );
};
