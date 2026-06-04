import * as action from './Action';

const initialValue = {
  user: [],
  isError: false,
  isLoading: false,
};

export const AuthReducer = (currentState = initialValue, { payload, type }) => {
  switch (type) {
    case action.Auth_Pending:
      return { ...currentState, isLoading: true };

    case action.Auth_Successfull:
      return {};

    case action.Auth_Failure:
      return {};

    default:
      return currentState;
  }
};
