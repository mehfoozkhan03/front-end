import React from 'react';
import { CounterContext } from '../Context/CounterContext';

export const CounterBtn = () => {
  const { handleInc, handleDec } = React.useContext(CounterContext);

  return (
    <>
      <button onClick={handleInc}>increment</button>
      <button onClick={handleDec}>decrement</button>
    </>
  );
};
