import React from 'react';

import { TodoContextScope } from '../Context/todoContext';
import * as actionTypes from '../Reducer/Action';

export const TodoInputs = () => {
  const { state, dispatch } = React.useContext(TodoContextScope);
  const [text, setText] = React.useState('');

  /* 
 @this is for context API methods not reducer logic involve
 
 const handleAddTodo = () => {
    if (text.trim() === '') return;

    const todoData = {
      id: Date.now(),
      text: text,
      isEdits: false,
      isComplete: false,
    };
    setTodo((prev) => {
      console.log(prev);
      return [...prev, todoData];
    });
    setText('');
  };
  console.log(`🚀 ~ todo:`, todo); */

  // with reducer

  const handleAddTodo = () => {
    dispatch({ type: actionTypes.TODO_CREATE, payload: text });
    setText('');
  };

  console.log(`🚀 ~ state:`, state);

  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="enter your todo.."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>add</button>
    </div>
  );
};
