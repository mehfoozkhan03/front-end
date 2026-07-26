import * as actionTypes from './Action';

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.TODO_CREATE: {
      const todoData = {
        id: Date.now(),
        text: payload,
        isEdits: false,
        isComplete: false,
      };
      return {
        ...state,
        todo: [...state.todo, todoData],
      };
    }
    case actionTypes.TODO_DELETE: {
      return {
        ...state,
        todo: state.todo?.filter((el) => el.id !== payload),
      };
    }

    // edit

    // cancel

    // confirm

    // completed

    default:
      return state;
  }
};

// create -> read -> edit -> delete
