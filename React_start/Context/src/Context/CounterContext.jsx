import React from 'react';

export const CounterContext = React.createContext(null);

export const CounterComponentContext = ({ children }) => {
  const [count, setCount] = React.useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <CounterContext.Provider value={{ count, setCount, handleInc, handleDec }}>
      {children}
    </CounterContext.Provider>
  );
};
