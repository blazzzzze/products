import { INCREMENT } from "./actionCreators";
import { intialStore } from "./initialStore";

export default (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }

        default:
            return state || intialStore;
    }
};
