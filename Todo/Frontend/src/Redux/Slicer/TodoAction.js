import {createAction} from "@reduxjs/toolkit";  

export const fetchTodoAction = createAction("todo/fetchTodo");
export const createTodoAction = createAction("todo/createTodo");