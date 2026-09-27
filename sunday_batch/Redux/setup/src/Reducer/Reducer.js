import * as actions from "../Action/Action";


export const Reducer = (state = { count: 5 }, action) => {

    console.log("action,state:main_reducer", action, state)

    switch (action.type) {
        case actions.Increments.type:
            return { count: state.count + 1 };

        case actions.Decrements.type:
            return { count: state.count - 1 };

        case actions.Reset.type:
            return { count: 0 };

        case 'IncrementByValue':
            return { count: state.count + action.payload };

        case 'decrementByValue':
            return { count: state.count - action.payload };


        default:
            return state;
    }
};