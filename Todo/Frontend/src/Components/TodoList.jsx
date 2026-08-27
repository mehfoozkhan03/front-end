import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodo } from "../Redux/Slicer/Todoslicer";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todo, isLoading, isError } = useSelector((state) => state.todo);

  React.useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching todos.</div>;
  }

  return (
    <div>
      {todo?.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              width: "70%",
              margin: "auto",
              gap: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input type="checkbox" defaultChecked={item.isComplete} />
            <h1>{item.text}</h1>
            <button>Edit</button>
            <button
              onClick={() => {
                dispatch(deleteTodo(item._id)).then(() => {
                  dispatch(fetchTodo());
                });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
