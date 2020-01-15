export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const CREATETASK = "CREATETASK";
export const UPDATETASK = "UPDATETASK";
export const DELETETASK = "DELETETASK";

export const IncrementCounter = () => {
    return {
        type: INCREMENT
    }
}

export const DecrementCounter = () => {
    return {
        type: DECREMENT
    }
}

export const CreateTask = (task) => {
    return {
        type: CREATETASK,
        payload: task
    }
}
export const UpdateTask = () => {
    return {
        type: UPDATETASK
    }
}
export const DeleteTask = (id) => {
    return {
        type: DELETETASK,
        payload: id
    }
}