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
  const [text1, setText1] = useState('');

  const handleAdd = () => {
    const data = {
      id: Date.now(),
      text,
      text1,
      isEdits: false,
      isCompleted: false,
    };
    setTodo((prev) => [...prev, data]);
    setText('');
    setText1('');
  };

  // const handleEdit = () => {};
  console.log(`🚀 ~ todo:`, todo);
  const handleDelete = useCallback(
    (id) => {
      const deleteItems = todo.filter((el) => el.id !== id);
      setTodo(deleteItems);
    },
    [todo],
  );

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <input value={text1} onChange={(e) => setText1(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      {todo &&
        todo.map((el) => {
          return <TodoLists key={el.id} {...el} handleDelete={handleDelete} />;
        })}
    </div>
  );
};

/*AX90 !== AX95*/
