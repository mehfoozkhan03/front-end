import React from 'react';
import { Child_1 } from './Components/Child_1';

export const App = () => {
  return (
    <>
      <Child_1 no={1} name={'khan'} arr={'student'} />
      <Child_1 no={2} arr={'student'} />
      <Child_1 no={3} />
    </>
  );
};
