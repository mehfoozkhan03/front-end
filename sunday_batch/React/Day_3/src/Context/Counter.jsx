import { createContext, useState } from 'react';

export const CounterContexts = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <CounterContexts.Provider
      value={{
        count,
        name,
        setName,
        setCount,
        handleDecrement,
        handleIncrement,
      }}
    >
      {children}
    </CounterContexts.Provider>
  );
};
