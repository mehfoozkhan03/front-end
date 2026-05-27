/* eslint-disable react-refresh/only-export-components */
import React from 'react';

const counterCreateContext = React.createContext(null); // state  box

const CounterProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [todo, setTodo] = React.useState([]);
  const [text, setText] = React.useState('');

  return (
    <counterCreateContext.Provider
      value={{ count, todo, text, setText, setCount, setTodo }}
    >
      {children}
    </counterCreateContext.Provider>
  );
};

export { CounterProvider, counterCreateContext };
