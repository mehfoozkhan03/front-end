import * as action from './Action';

const initialValue = {
  todo: [],
  isError: false,
  isLoading: false,
};

export const TodoReducer = (currentState = initialValue, { payload, type }) => {
  switch (type) {
    case action.Todo_Create:
      return {
        ...currentState,
        todo: [...currentState.todo, payload],
      };

    case action.Todo_Edits:
      return {
        ...currentState,
        todo: currentState.todo.map((el) =>
          el.id === payload.id ? { ...el, isEdit: true } : el,
        ),
      };
    case action.Todo_Cancel:
      return {
        ...currentState,
        todo: currentState.todo.map((el) =>
          el.id === payload.id ? { ...el, isEdit: false } : el,
        ),
      };

    case action.Todo_Confirm:
      return {
        ...currentState,
        todo: currentState.todo.map((el) =>
          el.id === payload.id
            ? { ...el, isEdit: false, text: payload.text }
            : el,
        ),
      };

    case action.Todo_Delete:
      return {
        ...currentState,
        todo: currentState.todo.filter((el) => el.id !== payload.id),
      };

    default:
      return currentState;
  }
};
