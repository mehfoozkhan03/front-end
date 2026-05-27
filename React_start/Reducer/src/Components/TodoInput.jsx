import { useContext, useState } from 'react';

import * as types from '../App/Actions';
import { ReducerContext } from '../Context/ReducerContext';

export const TodoInput = () => {
  const [text, setText] = useState('');

  const { state, dispatch } = useContext(ReducerContext);

  const handleAdd = () => {
    const todoData = {
      id: Date.now(),
      todo: text,
      isEdit: false,
      isCompleted: false,
    };
    dispatch({ payload: todoData, type: types.Todo_Create });
  };

  console.log(`🚀 ~ state:`, state);

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>add</button>
    </>
  );
};
