import { CREATE, UPDATE, DELETE } from "./actionTypes";

export const createTask = task => ({
    type: CREATE,
    payload: task
});

export const updateTask = task => ({
    type: UPDATE,
    payload: task
});

export const deleteTask = id => ({
    type: DELETE,
    payload: id
});


//dispatch(createTask(formData));