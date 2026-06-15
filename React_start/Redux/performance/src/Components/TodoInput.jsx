import { useRef, useState } from 'react';
import { TodoList } from './TodoList';

export const TodoInput = () => {
  const inputData = useRef(null);
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    const value = inputData.current.value;
    const data = {
      id: Date.now(),
      text: value,
      isEdits: false,
      isCompleted: false,
    };
    setTodo((prev) => [...prev, data]);
  };

  return (
    <div>
      <input ref={inputData} />
      <button onClick={handleAdd}>add</button>
      {todo &&
        todo.map((el) => {
          return <TodoList key={el.id} {...el} />;
        })}
    </div>
  );
};
