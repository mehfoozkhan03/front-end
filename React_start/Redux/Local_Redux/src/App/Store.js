import { legacy_createStore, combineReducers } from 'redux';

import { TodoReducer } from './Todo/Reducer';
import { AuthReducer } from './Auth/Reducer';

const rootJunction = combineReducers({
  auth: AuthReducer,
  todo: TodoReducer,
});

export const myStore = legacy_createStore(
  rootJunction,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
