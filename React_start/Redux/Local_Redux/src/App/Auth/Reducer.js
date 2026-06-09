import * as action from './Action';

import { getData, saveData } from '../../Utils/LocalStorage';

const initialValue = {
  token: getData() ?? '',
  isAuth: getData() ? true : false,
  isError: false,
  isLoading: false,
};

export const AuthReducer = (currentState = initialValue, { payload, type }) => {
  switch (type) {
    case action.Auth_Pending:
      return { ...currentState, isLoading: true };

    case action.Auth_Successfull: {
      saveData(payload);
      return {
        ...currentState,
        isLoading: false,
        token: getData(),
        isAuth: getData() ? true : false,
      };
    }

    case action.Auth_Failure:
      return { ...currentState, isError: true };

    default:
      return currentState;
  }
};
