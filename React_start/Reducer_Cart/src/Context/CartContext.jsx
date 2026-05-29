/* eslint-disable react-refresh/only-export-components */
import React, { useReducer } from 'react';

import { initialCartState } from '../App/initialValue_Cart';
import { Reducer } from '../App/CartReducer';

export const CartCreateContext = React.createContext(null);

export const CartContextComponents = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialCartState);
  return (
    <CartCreateContext.Provider value={{ state, dispatch }}>
      {children}
    </CartCreateContext.Provider>
  );
};
