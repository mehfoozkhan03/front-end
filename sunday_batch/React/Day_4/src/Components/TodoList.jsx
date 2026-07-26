import React from 'react';
import { TodoContextScope } from '../Context/todoContext';

export const TodoList = () => {
  const { todo } = React.useContext(TodoContextScope);
  return (
    <>
      {todo?.map((el) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
            key={el.id}
          >
            <input type="checkbox" />
            <h3>{el.text}</h3>
            <button>edit</button>
            <button>delete</button>
          </div>
        );
      })}
    </>
  );
};
