import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { Api } from "../../Api/Api";

import {
  createTodoAction,
  deleteTodoAction,
  fetchTodoAction,
} from "./TodoAction";
/* 
todo fetch set 

todo create 
*/

/* 
expected output from backend api

http://localhost:1000/todo/

expected output from frontend api

http://localhost:1000/todo/

*/

export const fetchTodo = createAsyncThunk(fetchTodoAction.type, async () => {
  return Api.get("/").then((res) => {
    // console.log("res", res);
    return res.data;
  });
});

console.log("create", createTodoAction.type);

export const createTodo = createAsyncThunk(
  createTodoAction.type,
  async (todoData) => {
    const todoDoc = {
      text: todoData,
      isEdit: false,
      isComplete: false,
    };
    return Api.post("/create", todoDoc).then((res) => {
      // console.log("res", res);
      return res.data;
    });
  },
);

export const deleteTodo = createAsyncThunk(
  deleteTodoAction.type,
  async (todoId) => {
    return Api.delete(`/delete/${todoId}`).then((res) => {
      console.log("res", res);
      return res.data;
    });
  },
);

const TodoSlicer = createSlice({
  name: "Todo",
  initialState: {
    todo: [{ id: 1, text: "task_1", isEdit: false, isComplete: false }],
    isLoading: false,
    isError: false,
  },
  reducers: {
    // createTodo: (state, action) => {
    //   const todoDoc = {
    //     id: state.todo.length + 1,
    //     text: action.payload,
    //     isEdit: false,
    //     isComplete: false,
    //   };
    //   state.todo.push(todoDoc);
    // },
  },

  extraReducers: (builder) => {
    // fetch todo
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todo = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      console.log("error", action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
  },
});

// export const { createTodo, deleteTodo } = TodoSlicer.actions;
export default TodoSlicer.reducer;
