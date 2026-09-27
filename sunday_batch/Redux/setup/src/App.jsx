import React from 'react';

import * as action from './Action/Action';
import { myStore } from './Store/Store';

export const App = () => {
  const [flag, setFlag] = React.useState(0);

  // React.useEffect(() => {
  //   const unsubscribe = myStore.subscribe(() => {
  //     setFlag((prev) => prev + 1);
  //   });

  //   return unsubscribe;
  // }, []);


  myStore.subscribe(() => {
    setFlag(prev => prev + 1)
  })

  // console.log("🚀 ~ myStore:", myStore)
  // console.log('count:mystore', myStore.getState().count);

  return (
    <>
      <h1>Counter: {myStore.getState().count}</h1>

      <button onClick={() => myStore.dispatch(action.Increments) }>inc</button>

      <button onClick={() => myStore.dispatch(action.Decrements) }>dec</button>
    </>
  );
};