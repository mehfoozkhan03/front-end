import { useMemo } from 'react';

const expensiveFunction = (val) => {
  const start_time = Date.now();
  while (Date.now() - start_time <= val) {
    continue;
  }
  return true;
};

const TodoList = ({ id, text, isEdits, isCompleted, handleDelete, text1 }) => {
  useMemo(() => expensiveFunction(200), []);
  return (
    <div style={{ padding: '10px 0' }}>
      <div>
        <h1>
          {id} - {text} - {text1}
        </h1>
        <h2>
          edit:- {isEdits ? 'true' : 'false'} completed:-{' '}
          {isCompleted ? 'true' : 'false'}
        </h2>
      </div>

      {/* <button onClick={}>edit</button> */}
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};

export const TodoLists = TodoList;
// export const TodoLists = React.memo(
//   TodoList,
//   function (oldValue, currentValue) {
//     console.log(`🚀 ~ oldValue:`, oldValue);
//     console.log(`🚀 ~ currentValue:`, currentValue);
//     return (
//       oldValue.text === currentValue.text && oldValue.id === currentValue.id
//     );
//   },
// );

/* 
memo -> to check component is render or not  
useCallback -> to check function is render or not
usememo
*/
