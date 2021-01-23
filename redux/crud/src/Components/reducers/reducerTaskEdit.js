import * as types from "./../constants/typeAction";

var initState = {
    id:"",
    work: "",
    status: false
}

var myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.EDITWORK:
            return action.task;

        case types.RESETSTATEFORM:
            console.log(action);
            return action.task

        default:
            return state;
    }
};

export default myReducer