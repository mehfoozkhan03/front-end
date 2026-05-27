import React from 'react';

export const App = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };
  const inc2 = () => {
    setCount2(count2 + 1);
  };

  const dec2 = () => {
    setCount2(count2 - 1);
  };

  React.useEffect(() => {
    console.log('without dependency');
  });

  React.useEffect(() => {
    console.log('with dependency count');
  }, [count]);

  React.useEffect(() => {
    console.log('with dependency count 2');
  }, [count2]);

  React.useEffect(() => {
    console.log('empty dependency');
  }, []);

  return (
    <>
      <h1>counter {count}</h1>
      <h1>counter {count2}</h1>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
      <button onClick={inc2}>increment</button>
      <button onClick={dec2}>decrement</button>
    </>
  );
};
