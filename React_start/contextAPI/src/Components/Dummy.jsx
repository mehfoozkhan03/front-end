import React from 'react';
import { counterCreateContext } from '../Context/CounterContext';

export const Dummy = (props) => {
  console.log(`🚀 ~ props:`, props);
  const { count } = React.useContext(counterCreateContext);
  console.log(`🚀 ~ count, setCount:Dummy`, count);

  return <div>Dummy</div>;
};
