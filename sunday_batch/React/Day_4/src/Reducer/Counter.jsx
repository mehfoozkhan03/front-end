import * as action from './Action';

export const Reducer = (state, { type, payload }) => {
  console.log(`🚀 ~ state:logic part page`, state);
  console.log(`🚀 ~ type:logic part page`, type);
  switch (type) {
    case action.COUNTER_INCREMENT: {
      return {
        counter: state.counter++,
      };
    }
    case action.COUNTER_DECREMENT: {
      return {
        counter: state.counter--,
      };
    }
    case action.COUNTER_INCREMENT_BY_VALUE: {
      return {
        counter: state.counter + payload,
      };
    }
    default:
      return state;
  }
};
