import { useToggle } from './Components/Toggle';
export const App = () => {
  const [data, setData] = useToggle(false);
  return (
    <>
      {data && <h1>showing...</h1>}
      <button onClick={() => setData(!data)}>toggle</button>
    </>
  );
};
