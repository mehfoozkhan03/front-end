import React from 'react';

import { Counter } from './components/Counter';
import { Counter2 } from './components/Counter2';

/* 
state-less
state-full
*/

export const App = () => {
  let count1 = 0;

  const [count, setCount] = React.useState(0);

  return (
    <>
      <Counter props={count1} />
      <Counter2 props={{ count, setCount }} />
    </>
  );
};
