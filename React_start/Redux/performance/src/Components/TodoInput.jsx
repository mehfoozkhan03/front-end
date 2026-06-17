import { useCallback, useState } from 'react';
import { TodoLists } from './TodoList';

export const TodoInput = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: 'khan bhai',
      isEdits: false,
      isCompleted: false,
    },
    {
      id: 2,
      text: 'mehfooz khan',
      isEdits: false,
      isCompleted: false,
    },
  ]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    const data = {
      id: Date.now(),
      text,
      isEdits: false,
      isCompleted: false,
    };
    setTodo((prev) => [...prev, data]);
    setText('');
  };

  // const handleEdit = () => {};
  const handleDelete = (id) => {
    const deleteItems = todo.filter((el) => el.id !== id);
    setTodo(deleteItems);
  };
  console.log(`🚀 ~ todo:`, todo);

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      {todo &&
        todo.map((el) => {
          return <TodoLists key={el.id} {...el} handleDelete={handleDelete} />;
        })}
    </div>
  );
};

/* 
AX90 !== AX95

*/
