
import * as actions from "../Action/Action";


export const Other_Reducer = (state = { count: 100 }, action) => {
    console.log("action,state:other_reducer", action, state)
    switch (action.type) {

        // case '@@redux/REPLACEo.b.c.0.i.r':
        //     state = { count: 100 }

        case actions.otherInc.type:
            return { count: state.count + 1 };

        case actions.otherDec.type:
            return { count: state.count - 1 };

        case actions.otherRes.type:
            return { count: 0 };

        case actions.otherDouble.type: {
            console.log("double", state.count * 2)
            return { count: state.count * 2 };
        }
        default:
            return state;
    }
}