import React from 'react';
import { Child } from './components/Child';

export const App_1 = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      {toggle && <Child />}
      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </>
  );
};
