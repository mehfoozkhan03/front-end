import React from 'react';

export const Counter = ({ props }) => {
  const handleIncClick = () => {
    props++;
    console.log(`🚀 ~ props:`, props);
    document.querySelector('h1').innerText = `Count ${props}`;
  };
  const handleDecClick = () => {
    props--;
    console.log(`🚀 ~ props:`, props);
    document.querySelector('h1').innerText = `Count ${props}`;
  };
  return (
    <>
      <h1>Count {props}</h1>
      <button onClick={handleIncClick}>+</button>
      <button onClick={handleDecClick}>-</button>
    </>
  );
};
