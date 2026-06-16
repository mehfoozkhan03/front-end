import React from 'react';
import { Counter } from './Components/Counter';

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
  const [name, setName] = React.useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span>Parent</span>
      <h1>name {name}</h1>
      <h1>Counter {count}</h1>
      <hr />
      <Counter props={{ count, handleIncrement, handleDecrement, setName }} />
    </>
    // <Counter
    //   count={count}
    //   handleIncrement={handleIncrement}
    //   handleDecrement={handleDecrement}
    // />
  );
};
