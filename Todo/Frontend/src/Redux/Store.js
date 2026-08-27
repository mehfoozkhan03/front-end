import { configureStore } from "@reduxjs/toolkit";

import TodoSlicer from "./Slicer/Todoslicer.js";


export const store = configureStore({
  reducer: { todo: TodoSlicer},
});
