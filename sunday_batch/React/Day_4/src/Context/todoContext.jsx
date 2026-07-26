import React, { createContext } from 'react';
import { Reducer } from '../Reducer/TodoReducer';

export const TodoContextScope = createContext(null);

export const TodoComponentsContext = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, { todo: [] });
  return (
    <TodoContextScope.Provider value={{ state, dispatch }}>
      {children}
    </TodoContextScope.Provider>
  );
};
