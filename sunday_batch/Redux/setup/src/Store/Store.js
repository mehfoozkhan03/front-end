import { legacy_createStore } from 'redux';

import * as actions from "../Action/Action";

import { Reducer } from '../Reducer/Reducer';
import { Other_Reducer } from '../Reducer/OtherReducer';


export const myStore = legacy_createStore(Reducer);


setTimeout(() => {
    console.log("replace reducer")
    myStore.replaceReducer(Other_Reducer);

    myStore.dispatch(actions.otherDouble);

    const value = myStore.getState();
    console.log("🚀 ~ value:", value);
}, 3000)



// observation

/* const observ = myStore['@@observable'];

const data = {
    value: (q) => { return q }
}

console.log("value:", data.value()) */



//*  other reducer code is here 
/*   case actions.otherInc:
           return { count: count + 1 };
 
       case actions.otherDec:
           return { count: count - 1 };
 
       case actions.otherRes:
           return { count: 0 };
 
       case actions.otherDouble:
 
 
           console.log("🚀 ~ Other_Reducer ~  state.count:", state.count)
 
           return { count: state.count === 0 ? (state.count + 1) * 2 : state.count * 2 };
*/