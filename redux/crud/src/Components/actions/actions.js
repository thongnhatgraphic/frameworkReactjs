import * as types from "../constants/typeAction"

export const toggle = () => {
    return {
        type: types.TOGGLE
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSEFORM
    }
}
export const openForm = () => {
    return {
        type: types.OPENFORM
    }
}
export const addWork = (task) => {
    return {
        type: types.ADDWORK,
        task: task
    }
}
export const deleteWork =(task) => {
    return {
        type: types.DELETEWORK,
        task:task
    }
}
export const changeStatus = (id) => {
    return {
        type: types.CHANGESTATUS,
        id: id
    }
}
export const edtiWork = (task) => {
    return {
        type: types.EDITWORK,
        task: task
    }
}
export const saveEditWork = task => {
    return {
        type: types.SAVEEDITWORK,
        task: task
    }
}
export const resetStateForm = task => {
    return {
        type: types.RESETSTATEFORM,
        task: task
    }
}