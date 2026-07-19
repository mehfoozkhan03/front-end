import React from 'react';
import { Reducer } from '../Reducer/Reducer';

import * as types from '../Reducer/Action';

export const Counter = () => {
  const [state, dispatch] = React.useReducer(Reducer, { counter: 0 });
  console.log(`🚀 ~ state:App.jsx`, state);

  const handleInc = () => {
    dispatch({ type: types.COUNTER_INCREMENT });
  };
  const handleDec = () => {
    dispatch({ type: types.COUNTER_DECREMENT });
  };
  const handleByVal = () => {
    dispatch({ type: types.COUNTER_INCREMENT_BY_VALUE, payload: 10 });
  };
  return (
    <>
      <h1>Counter {state?.counter}</h1>
      <button onClick={handleInc}>increment</button>
      <button onClick={handleDec}>decrement</button>
      <button onClick={handleByVal}>by_value (10)</button>
    </>
  );
};
