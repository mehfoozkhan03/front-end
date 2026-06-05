import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../App/Todo/ActionType';

export const TodoInput = () => {
  const dispatch = useDispatch();
  const inputData = useRef(null);

  const handleAdd = () => {
    const value = inputData.current.value;
    dispatch(actionTypes.todo_create_func(value));
  };
  return (
    <div>
      <input ref={inputData} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};
