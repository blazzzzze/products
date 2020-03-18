import { connect } from "react-redux";
import TaskCreate from "./TaskCreate";
import { createTask } from "../store";


const mapDispatchToProps = {
    onCreate: createTask
    //onDelete: (...args) => dispatch(deleteTask(...args))
};

const wrapperFunc = connect(null, mapDispatchToProps);
export default wrapperFunc(TaskCreate);