import React from 'react';

export const Counter2 = ({ props }) => {
  const { count, setCount } = props;
  const handleIncClick = () => {
    setCount(count + 1);
  };
  const handleDecClick = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={handleIncClick}>+</button>
      <button onClick={handleDecClick}>-</button>
    </>
  );
};
