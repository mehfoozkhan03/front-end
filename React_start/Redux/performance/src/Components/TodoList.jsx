export const TodoList = ({ id, text, isEdits, isCompleted }) => {
  expensiveFunction(200);

  return (
    <div style={{ padding: '10px 0' }}>
      <h1>
        {id} - {text}
      </h1>
    </div>
  );
};
