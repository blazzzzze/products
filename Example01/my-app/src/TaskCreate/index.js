import TaskCreate from "./TaskCreate";
import { connect } from "react-redux";
import { CreateTask } from "../store";



//const mapDispatchToProps = {
//    submitCallback: CreateTask
//    //deleteCallback: (...args) => store.dispatch(DeleteTask(...args))
//}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitCallback: (task) => {
            dispatch(CreateTask(task));
            ownProps.cancelCallback();
        },
        cancelCallback: () => {
            ownProps.cancelCallback();
        }
    }
}


const wrapper = connect(null, mapDispatchToProps);
const wrappedComponent = wrapper(TaskCreate);
export default wrappedComponent;