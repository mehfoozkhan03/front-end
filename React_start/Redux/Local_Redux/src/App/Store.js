import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";

import { TodoReducer } from "./Todo/Reducer";
import { AuthReducer } from "./Auth/Reducer";

const rootJunction = combineReducers({
  auth: AuthReducer,
  todo: TodoReducer,
});

// const customMiddleware = (store) => (next) => (action) => {
//   return typeof action === 'function' ? action(store.dispatch) : next(action);
// };

const add = (x) => x + 1;
const mul = (x) => x * 2;

let result = compose(add, mul);

console.log("result", result(5));

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
1;
export const myStore = legacy_createStore(rootJunction, enhancer);
