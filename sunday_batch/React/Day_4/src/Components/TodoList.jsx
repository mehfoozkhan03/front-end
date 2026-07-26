import React from 'react';
import { TodoContextScope } from '../Context/todoContext';

import * as actionTypes from '../Reducer/Action';

export const TodoList = () => {
  const { state, dispatch } = React.useContext(TodoContextScope);

  /*   const handleDelete = (id) => {
    const deleteData = todo?.filter((el) => el.id !== id);
    setTodo(deleteData);
  }; */

  const handleDelete = (id) => {
    dispatch({ type: actionTypes.TODO_DELETE, payload: id });
  };

  return (
    <>
      {state.todo?.map((el) => {
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
            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};
