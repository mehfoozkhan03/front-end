import React from 'react';

import * as action from './Action/Action';
import { myStore } from './Store/Store';

export const App = () => {
  const [flag, setFlag] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = myStore.subscribe(() => {
      setFlag((prev) => prev + 1);
    });

    return unsubscribe;
  }, []);

  console.log("🚀 ~ myStore:", myStore);

  console.log("🚀 ~ App ~ myStore.getState():", myStore.getState())
  return (
    <>
      <h1>Counter: {myStore.getState().count || myStore.getState()}</h1>

      <button onClick={() => myStore.dispatch(action.Increments)}>inc</button>

      <button onClick={() => myStore.dispatch(action.Decrements)}>dec</button> <br /><br /><br />

      {/* OTHER REDUCER BUTTON */}
      <button onClick={() => myStore.dispatch(action.otherInc)}>other inc</button>

      <button onClick={() => myStore.dispatch(action.otherDec)}>other dec</button>
      <button onClick={() => myStore.dispatch(action.otherDouble)}>other double</button>


    </>
  );
};


/* 
HW :-

  1. button conditional renderning 
  2. other reducer [state update with '100' value or count]


*/