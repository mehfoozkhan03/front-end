import {createAction} from "@reduxjs/toolkit";  

export const fetchTodoAction = createAction("todo/fetchTodo");
export const createTodoAction = createAction("todo/createTodo");
export const updateTodoAction = createAction("todo/updateTodo");
export const deleteTodoAction = createAction("todo/deleteTodo");