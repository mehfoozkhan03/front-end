// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';

import * as types from '../App/Action';
import { myStore } from '../App/Store';

export const Count = () => {
  const [flag, setFlag] = useState(false);
  const { getState, dispatch, subscribe } = myStore;

  subscribe(() => {
    setFlag(!flag);
  });

  return (
    <>
      <h1>{getState()?.count}</h1>
      <button onClick={() => dispatch({ type: types.INCREMENT })}>inc</button>
      <button onClick={() => dispatch({ type: types.DECREMENT })}>dec</button>
      <button onClick={() => dispatch({ type: types.RESET })}>reset</button>
      <button onClick={() => dispatch({ type: types.DOUBLE })}>double</button>
    </>
  );
};
