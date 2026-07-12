import React from 'react';
import { CounterContexts } from '../Context/Counter';

export const CounterComponents = () => {
  const { handleIncrement, handleDecrement, setName } =
    React.useContext(CounterContexts);

  const nameValue = React.useRef(null);

  const handleInput = () => {
    setName(nameValue.current.value);
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
      <input type="text" ref={nameValue} />
      <button onClick={handleInput}>name</button>
      {/* <input type="text" onChange={handleInput} /> */}

      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};
