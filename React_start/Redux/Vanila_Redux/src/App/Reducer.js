import * as types from './Action';

// const initialValue = {
//   count: 0,
//   isLoading: false,
//   isError: false,
// };

export const ReducerCount = (state, { type, payload }) => {
  console.log(`🚀 ~ state:`, state);
  switch (type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case types.RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
