import reducerToggle from "./reducerToggle"
import tasks  from "./reducerTasks";
import  taskEditting from "./reducerTaskEdit"
import { combineReducers } from "redux";

const myReducer = combineReducers({
    tasks: tasks,
    modeDisplay: reducerToggle,
    taskEditting: taskEditting
})


export default myReducer;