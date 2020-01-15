import TaskDisplay from "./TaskDisplay";
import { connect } from "react-redux";
import { DeleteTask } from "../store";

const mapStoreToProps = (store) => {
    return {
        tasks: store.tasks
    }
}

//const mapDispatchToProps = {
//    deleteCallback: DeleteTask
//    //deleteCallback: (...args) => store.dispatch(DeleteTask(...args))
//}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCallback: (...args) => {
            dispatch(DeleteTask(...args));
        }
    }
}


const wrapper = connect(mapStoreToProps, mapDispatchToProps);
const wrappedComponent = wrapper(TaskDisplay);
export default wrappedComponent;