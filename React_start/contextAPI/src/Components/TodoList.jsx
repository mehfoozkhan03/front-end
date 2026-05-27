import React from 'react';
import { counterCreateContext } from '../Context/CounterContext';

export const TodoList = () => {
  const { todo } = React.useContext(counterCreateContext);
  console.log(`🚀 ~ todo:this is from list page`, todo);

  return (
    <>
      {/* {todo.map((el, i) => {
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <input type="checkbox" />
            <p>{el.text}</p>
            {el.isEdits ? (
              <>
                <button>cancel</button>
                <button>confirm</button>
              </>
            ) : (
              <>
                <button onClick={() => editValue(el.id)}>edit</button>
                <button>delete</button>
              </>
            )}
          </div>
        );
      })} */}
    </>
  );
};
