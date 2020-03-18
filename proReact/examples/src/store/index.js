import { createStore } from "redux";
import dataReducer from "./dataReducer";

const store = createStore(dataReducer);
export default store;

export { createTask, updateTask, deleteTask } from "./actionCreators";