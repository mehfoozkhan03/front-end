import React from 'react';
import { CounterContext } from '../Context/CounterContext';

export const Counter = () => {
  const { count } = React.useContext(CounterContext);
  return <h1>counter {count}</h1>;
};
