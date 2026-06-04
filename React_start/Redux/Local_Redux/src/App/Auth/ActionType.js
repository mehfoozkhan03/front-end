import * as actions from './Action';

const auth_successfull = (payload) => {
  return { type: actions.Auth_Successfull, payload: payload };
};
const auth_failure = (payload) => {
  return { type: actions.Auth_Successfull, payload: payload };
};
const auth_pending = (payload) => {
  return { type: actions.Auth_Successfull, payload: payload };
};

export { auth_failure, auth_successfull, auth_pending };
