import React from 'react';

export const Counter = ({ props }) => {
  /*  console.log(
    `🚀 ~ counter, increment, decrement :`,
    counter,
    increment,
    decrement,
  ); */
  const { counter, increment, decrement } = props;
  console.log(
    `🚀 ~ counter, increment, decrement :`,
    counter,
    increment,
    decrement,
  );
  // console.log(`🚀 ~ props:Counter components`, props);
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};
