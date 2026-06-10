import * as actions from './Action';

import { ApiCall } from '../../Utils/Api';

const auth_successfull = (payload) => {
  return { type: actions.Auth_Successfull, payload: payload };
};
const auth_failure = (payload) => {
  return { type: actions.Auth_Successfull, payload: payload };
};
const auth_pending = (payload) => {
  return { type: actions.Auth_Successfull, payload: payload };
};

const loginForm = (form) => (dispatch) => {
  ApiCall.post('/login', form)
    .then((res) => dispatch(auth_successfull(res.data.token)))
    .catch((err) => console.log(err));
};

export { auth_failure, auth_successfull, auth_pending, loginForm };
