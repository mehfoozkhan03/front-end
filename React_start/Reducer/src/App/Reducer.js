// Reducer

import * as types from './Actions';

export const Reducer = (oldState, action) => {
  console.log(`🚀 ~ action:`, action);
  switch (action.type) {
    case types.Todo_Create:
      return {
        ...oldState,
        todo: [...oldState.todo, action.payload],
      };

    case types.Todo_Delete:
      return {
        ...oldState,
        todo: oldState.todo.filter((el) => el.id !== action.payload),
      };

    case types.Todo_Update:
      return {
        ...oldState,
        todo: oldState.todo.map((el) =>
          el.id === action.payload ? { ...el, isEdit: true } : el,
        ),
      };

    case types.Todo_Cancel:
      return {
        ...oldState,
        todo: oldState.todo.map((el) =>
          el.id === action.payload ? { ...el, isEdit: false } : el,
        ),
      };

    case types.Todo_Confirm:
      return {
        ...oldState,
        todo: oldState.todo.map((el) =>
          el.id === action.payload.id
            ? { ...el, todo: action.payload.text, isEdit: false }
            : el,
        ),
      };

    case types.Todo_Complete:
      return {
        ...oldState,
        todo: oldState.todo.map((el) =>
          el.id === action.payload.id
            ? { ...el, isCompleted: action.payload.status }
            : el,
        ),
      };

    case types.Todo_All_Selected:
      return {
        ...oldState,
        todo: oldState.todo.map((el) => {
          return { ...el, isCompleted: true };
        }),
      };

    case types.Todo_All_DeSelected:
      return {
        ...oldState,
        todo: oldState.todo.map((el) => {
          return { ...el, isCompleted: false };
        }),
      };

    case types.Todo_All_Deleted:
      return {
        ...oldState,
        todo: oldState.todo.filter((el) => el.isCompleted !== true),
      };

    default:
      return oldState;
  }
};
