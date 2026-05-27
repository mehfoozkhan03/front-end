import React from 'react';

const App = () => {
  // counter
  let counter = 0;
  console.log(`🚀 ~ counter:`, counter);

  const Increment = () => {
    counter++;
    document.querySelector('h1').innerText = `Counter ${counter}`;
    console.log('inc', counter);
  };
  const Decrement = () => {
    counter--;
    document.querySelector('h1').innerText = `Counter ${counter}`;

    console.log('dec', counter);
  };

  // js code
  return (
    <>
      {/* html code */}
      <h1>Counter {counter}</h1>
      <button onClick={Increment}>Inc</button>
      <button onClick={Decrement}>Dec</button>
    </>
  );
};

export { App };
