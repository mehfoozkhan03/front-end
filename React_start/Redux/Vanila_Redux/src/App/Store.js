import { legacy_createStore } from 'redux';
import * as types from './Action';

import { ReducerCount } from './Reducer';

const initialValue = {
  count: 100,
  isLoading: false,
  isError: false,
};

export const myStore = legacy_createStore(ReducerCount);

const newReducer = (state = initialValue, { type }) => {
  switch (type) {
    case types.DOUBLE:
      return {
        ...state,
        count: state.count * 2,
      };

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

setTimeout(() => {
  myStore.replaceReducer(newReducer);
  myStore.dispatch({ type: types.DOUBLE });
  console.log(myStore.getState(), 'new reducer setTimeout');
}, 1000);

console.log(`🚀 ~ myStore:`, myStore);
