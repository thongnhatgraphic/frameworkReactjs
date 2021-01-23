import * as types from "./../constants/typeAction";
const initState = false;

const myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.TOGGLE: 
        return !state

        case types.CLOSEFORM:
        return false;

        case types.OPENFORM:
        return state = true

        default: 
        return state
    }
}

export default myReducer;