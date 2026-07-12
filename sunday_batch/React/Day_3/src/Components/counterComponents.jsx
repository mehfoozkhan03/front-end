import React from 'react';
import { CounterContexts } from '../Context/Counter';

export const CounterComponents = () => {
  const { handleIncrement, handleDecrement, setName } =
    React.useContext(CounterContexts);

  const handleInput = (e) => {
    setName(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <span>child</span>
      <input type="text" onChange={handleInput} />

      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};
