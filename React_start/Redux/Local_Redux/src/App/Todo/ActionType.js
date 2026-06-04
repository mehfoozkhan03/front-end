import * as action from './Action';

const todo_create_func = (payload) => {
  return {
    type: action.Todo_Create,
    payload: payload,
  };
};
const todo_delete_func = (payload) => {
  return {
    type: action.Todo_Delete,
    payload: payload,
  };
};
const todo_update_func = (payload) => {
  return {
    type: action.Todo_Update,
    payload: payload,
  };
};

export { todo_create_func, todo_update_func, todo_delete_func };
