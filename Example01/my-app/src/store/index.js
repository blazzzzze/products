import { createStore } from "redux";
import storeReducer from "./storeReducer";

export default createStore(storeReducer);

export { DecrementCounter, IncrementCounter, CreateTask, DeleteTask } from "./actionCreators";