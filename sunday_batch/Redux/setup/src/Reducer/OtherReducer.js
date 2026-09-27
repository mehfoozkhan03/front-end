
import * as actions from "../Action/Action";


export const Other_Reducer = (state, action) => {
    console.log("🚀 ~ Other_Reducer ~ state:", state)
    console.log("🚀 ~ Other_Reducer ~ action:", action)

    switch (action.type) {
        case actions.Increments:
            return { count: state.count + 1 };

        case actions.Decrements:
            return { count: state.count - 1 };

        case actions.Reset:
            return { count: 0 };

        case actions.otherDouble: {
            console.log("double", state.count * 2)
            return { count: state.count * 2 };
        }
        default:
            return state;
    }
}