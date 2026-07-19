import React, { createContext } from 'react';

export const TodoContextScope = createContext(null);

export const TodoComponentsContext = ({ children }) => {
  const [todo, setTodo] = React.useState([]);
  return (
    <TodoContextScope.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContextScope.Provider>
  );
};
