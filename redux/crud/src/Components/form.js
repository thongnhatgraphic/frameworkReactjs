import { Component } from "react";
import { connect } from "react-redux";
import *as actions from "./../Components/actions/actions";
class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            work:"",
            status: false
        }
    }
    
    isNullorEmpty (work) {
        if ( work === null) {
            return true
        } else if ( work === "" ) {
            return true
        } else return false
    }
    format (work) {
        work = work.trim();
        let arr = work.split("");
        for (let i = 0; i < arr.length - 1; i++) {
            while (arr[i] === " " && arr[i + 1] === " ") {
                arr.splice(i, 1);
            }
        }
        return arr.join("");
    }
    isExistWork (work) {
        return this.props.tasks.some( task => {
            return task.work === work
        })
    }
    getValueInput (event) {
        var target = event.target;
        var name = target.name;
        var value;
        if ( name === "status" ) {
            value = target.value
            if ( value === "true" || value === true ) {
                value = true
            } else {
                value = false
            }
        }else {
            value = target.value
        }
        this.setState({
            [name]: value
        });
    }
    onAddWork () {
        if ( this.props.taskEditting.id ) {
            this.props.saveEditWork(this.state)
            this.props.resetStateForm({
                work:"",
                status: false
            })
        } else {
            this.props.addWork(this.state)
        }
        
        this.props.closeForm()
    }
    resetState () {
        this.setState({
            work:"",
            status: false
        })
    }
    onCloseForm () {
        this.props.closeForm();
        this.props.resetStateForm({
            id: "",
            work:"",
            status: false
        })
    }
    // componentDidMount () {
    //     if ( this.props.taskEditting.id ) {
    //         console.log("Có task chỉnh sửa");
    //         this.setState( {
    //             id: this.props.taskEditting.id,
    //             work: this.props.taskEditting.work,
    //             status: this.props.taskEditting.status
    //         } )
    //     } else {
    //         console.log("state rỗng");
    //     }
    // }
    static getDerivedStateFromProps (Props, State) {
        console.log("Run",Props.taskEditting,State);
        if (Props.taskEditting.id && State.id === undefined) {
            console.log(1);
            console.log(Props.taskEditting,State);
            return Props.taskEditting
        } else {
            if ( Props.taskEditting.id !== State.id) {
                console.log(2);
                console.log(Props.taskEditting,State);
                return Props.taskEditting
            } else {
                console.log(3);
                return null
            }      
    } }
    render() {
        return (
            <div className="sidebar-left" >
                <div>
                    <div className="sidebar-left-header">
                        <h4>{ this.props.taskEditting.id ? "Cập nhật công việc" : "Thêm công việc" }</h4>
                        <button
                        onClick = { this.onCloseForm.bind(this) }
                        >x</button>
                    </div>
                    <div className="sidebar-left-body">

                        <label>Tên:</label>
                        <input 
                        type = "text" 
                        name="work"
                        onChange = { this.getValueInput.bind(this) }
                        value = { this.state.work}
                        />
                        <br/><br/>

                        <label>Trạng Thái:</label>
                        <select className="select-status"
                        name = "status"
                        onChange = { this.getValueInput.bind(this) }
                        value = { this.state.status}
                        >
                            <option value = { true }>Completed</option>
                            <option value = { false }>Uncompleted</option>
                        </select>
                    </div>
                    <div className="block-button">
                        <input type="submit"
                        value = "+ Lưu Lại "
                        onClick = { this.onAddWork.bind(this) }
                        />
                        <input type="submit" 
                        value = "X Hủy Bỏ"
                        onClick = { this.resetState.bind(this)}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        modeDisplay: state.modeDisplay,
        tasks: state.tasks,
        taskEditting: state.taskEditting
    }
}
const mapActionToProps = (dispatch,props) => {
    return {
        addWork: (task) => {
            dispatch(actions.addWork(task))
        },
        closeForm: () => {
            dispatch(actions.closeForm())
        },
        saveEditWork: (task) => {
            dispatch(actions.saveEditWork(task))
        },
        resetStateForm: (task) => {
            dispatch(actions.resetStateForm(task))
        }
    }
}
export default connect(mapStateToProps,mapActionToProps)(Form);