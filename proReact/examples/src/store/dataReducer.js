import initialStore from "./initialStore";
import { CREATE, UPDATE, DELETE } from "./actionTypes";

// createAction = { type: "CREATE", payload: {...}}
// updateAction = { type: "UPDATE", payload: {...}}
// deleteAction = { type: "DELETE", payload: task_id}

export default (state, action) => {
    switch (action.type) {
        case CREATE:
            action.payload.id = Math.max(state.tasks.map(item => item.id)) + 1;
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case UPDATE:
            return {
                ...state,
                tasks: state.tasks.map(item => item.id === action.payload.id ? action.payload : item)
            }
        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            }
        default:
            return state || initialStore;
    }
};
