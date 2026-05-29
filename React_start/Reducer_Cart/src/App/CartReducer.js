import * as types from './ActionCart';

export const Reducer = (currentState, actions) => {
  switch (actions.type) {
    case types.CART_INCREMENT_STAGE:
      return {
        ...currentState,
        count: currentState.count + 1,
      };
    case types.CART_DECREMENT_STAGE:
      return {
        ...currentState,
        count: currentState.count - 1,
      };

    default:
      return currentState;
  }
};
