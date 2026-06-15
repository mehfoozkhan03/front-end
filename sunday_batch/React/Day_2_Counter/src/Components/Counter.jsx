import React from 'react';

export const Counter = ({ props }) => {
  console.log(`🚀 ~ props:`, props);
  const { count, handleDecrement, handleIncrement, setName } = props;

  const handleInput = (e) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <input type="text" onChange={handleInput} />
      <h1>Counter {count}</h1>
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};
