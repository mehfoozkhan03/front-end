import * as actionTypes from './Action';

export const Reducer = (state, { type, payload }) => {
  switch (type) {

    case actionTypes.TODO_CREATE:{
      return {}
    }


    default:
      return state;
  }
};
