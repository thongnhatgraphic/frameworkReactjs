import * as types from "./../constants/typeAction";

var s4 = () => {
    return ( Math.floor(1+Math.random()*0x100000).toString(16).substring(1))
}
var guid = () => {
    return `${s4()}--${s4()}--${s4()}--${s4()}--${s4()}`
}

function isNullOrEmpty(str) {
    if (str === null)
        return true;
    if (str.trim() === "")
        return true;
    return false;
}
function format(str) {
    str = str.trim();
    let arr = str.split("");
    for (let i = 0; i < arr.length - 1; i++) {
        while (arr[i] === " " && arr[i + 1] === " ") {
            arr.splice(i, 1);
        }
    }
    return arr.join("");
}

function isExist (arrState, task) {
    return arrState.some( (taskF,index) => {
        return taskF.work === task
    } ) 
}

var data = JSON.parse(localStorage.getItem("tasks"))
var initState = data ? data : [];


const myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADDWORK:
            if ( isNullOrEmpty(action.task.work) ) {
                alert("Please not empty in input")
                return state
            } else {
                action.task.work = format(action.task.work);
                if ( isExist(state, action.task.work) ) {
                    alert(`This work ${action.task.work} was Exist`)
                    return state
                } else {
                    action.task.id = guid();
                    state.push(action.task);
                    localStorage.setItem("tasks", JSON.stringify(state))    
                    return [...state];
                }
            };

        case types.SAVEEDITWORK:
            state.forEach ( (task,index) => {
                if ( task.id === action.task.id ) {
                    state[index] = action.task
                }
            } )
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state]

        case types.DELETEWORK:
            var newValue = state.filter ( (task) => {
                return task.id !== action.task.id
            });
            localStorage.setItem("tasks", JSON.stringify(newValue))
            return [...newValue]
        
        case types.CHANGESTATUS:
            state.forEach ( (task,index)  => {
                if ( task.id === action.id ) {
                    state[index].status = !state[index].status
                }
            })

            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state]
            
        default:
            return state
    }
};


export default myReducer;