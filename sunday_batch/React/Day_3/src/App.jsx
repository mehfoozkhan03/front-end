import { useContext } from 'react';
import { CounterContexts } from './Context/Counter';
import { CounterComponents } from './Components/counterComponents';

export const App = () => {
  const { count, name } = useContext(CounterContexts);

  return (
    <>
      <span>Parent</span>
      <h1>name {name}</h1>
      <h1>Counter {count}</h1>
      <hr />
      <CounterComponents />
    </>
  );
};
