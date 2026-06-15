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
      <h1>name in parent {name}</h1>
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
