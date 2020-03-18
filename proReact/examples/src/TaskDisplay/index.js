import { connect } from "react-redux";
import TaskDisplay from "./TaskDisplay";
import { deleteTask } from "../store";

//selectors
const mapStateToProps = state => ({
    tasks: state.tasks
});

//
const mapDispatchToProps = {
    onDelete: deleteTask
    //onDelete: (...args) => dispatch(deleteTask(...args))
};

//const mapDispatchToProps = dispatch => ({
//    onDelete: (id) => {
//        dispatch(deleteTask(id));
//        console.log(`task with id ${id} was deleted`);
//    }
//});

const wrapperFunc = connect(mapStateToProps, mapDispatchToProps);
export default wrapperFunc(TaskDisplay);