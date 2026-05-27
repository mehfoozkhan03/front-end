import React from 'react';

export const TodoList = ({ props }) => {
  const { todo, setTodo } = props;
  console.log(`🚀 ~ todo:inside the list compo`, todo);

  const editValue = (id) => {
    // get logic
    const editData = todo.map((el) => {
      return el.id === id ? { ...el, isEdits: true } : el;
    });
    // set
    console.log(`🚀 ~ editData:`, editData);
    setTodo(editData);
  };
  return (
    <>
      {todo.map((el, i) => {
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
      })}
    </>
  );
};
