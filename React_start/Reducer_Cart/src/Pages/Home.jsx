import { useContext } from 'react';
import { Navbar } from './Navbar';
import { CartCreateContext } from '../Context/CartContext';

import * as types from '../App/ActionCart';

export const Home = () => {
  const { state, dispatch } = useContext(CartCreateContext);
  const handleCartCountInc = () => {
    dispatch({ type: types.CART_INCREMENT_STAGE });
  };
  const handleCartCountDec = () => {
    dispatch({ type: types.CART_DECREMENT_STAGE });
  };
  return (
    <>
      <Navbar />
      <button onClick={handleCartCountInc}>cart increment</button>
      <button disabled={state.count === 0} onClick={handleCartCountDec}>
        cart decrement
      </button>
    </>
  );
};
