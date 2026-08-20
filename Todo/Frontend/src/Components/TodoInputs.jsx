import React from "react";

import { useDispatch } from "react-redux";
// import { createTodo } from "../Redux/Slicer/Todoslicer";

import { createTodo, fetchTodo } from "../Redux/Slicer/Todoslicer";

const TodoInputs = () => {
  const inputData = React.useRef(null);
  const dispatch =  useDispatch();

  const addTask = () => {
    const text = inputData.current.value;
    dispatch(createTodo(text));
  };

  return (
    <div>
      <input type="text" ref={inputData} />
      <button onClick={addTask}>add</button>
    </div>
  );
};

export default TodoInputs;
