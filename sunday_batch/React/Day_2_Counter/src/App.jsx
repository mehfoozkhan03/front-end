import React from 'react';

export const App = () => {
  // state-less

  /* let count = 0;

  const handleIncrement = () => {
    count++;
    document.querySelector('h1').innerText = `Counter ${count}`;
  };
  const handleDecrement = () => {
    count--;
    document.querySelector('h1').innerHTML = `Counter ${count}`;
  }; */

  //state-full || COMPONENTS api

  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Counter {count}</h1>
      <div>
        <button onClick={handleIncrement}>increment</button>{' '}
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};
