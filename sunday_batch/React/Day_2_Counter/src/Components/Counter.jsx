export const Counter = ({ props }) => {
  console.log(`🚀 ~ props:`, props);
  const { handleDecrement, handleIncrement, setName } = props;

  const handleInput = (e) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <span>child</span>
      <input type="text" onChange={handleInput} />

      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};
