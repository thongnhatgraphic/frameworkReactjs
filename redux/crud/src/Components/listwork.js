import { Component } from "react";
import { connect } from "react-redux";
import *as actions from "./actions/actions";

class ListWork extends Component {

    onDeleteWork (task) {
        this.props.deleteWork(task)
    }
    onEditWork (task) {
        this.props.edtiWork(task);
        this.props.openForm();
    }
    render () { 
        var showListWork = this.props.tasks.map ( (task,index) => {
            return (
                <tr key = { task.id }>
                    <td>{index + 1}</td>
                    <td>{task.work}</td>
                    <td>
                        <div style = {{ textAlign: "center"}}>
                            <span className = {task.status === true ? "IsComplete" : "UnComplete"}
                            onClick = { () => {this.props.changeStatus(task.id)} }
                            >
                                { task.status === true ? "IsComplete" : "UnComplete" }
                            </span>
                        </div> 
                    </td>
                    <td className="action">
                        <input type="submit" 
                        value="Sửa" 
                        className="button-edit"
                        onClick = { () => { this.onEditWork.bind(this)(task) } }
                        />
                        <input type="submit" 
                        value ="Xóa" 
                        className="button-edit"
                        onClick = { () => { this.onDeleteWork.bind(this)(task) } }
                        />
                    </td>
                </tr>
            )
        } )
        return(
            <div>
            <table>
                <thead>
                    <tr>
                    <td>STT</td>
                    <td>Tên</td>
                    <td>Trạng Thái</td>
                    <td>Hành Động</td>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text"  style = {{ width: "91%"}} placeholder="Tìm kiếm..." />
                    </td>
                    <td>
                        <select className="select-status" style = {{ height: "36px", margin: "0"}}>
                            <option>Tất cả</option>
                            <option>Xong</option>
                            <option>Chưa xong</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {/* phần hiển thị */}
                { showListWork }
                </tbody>
            </table>
        </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        tasks: state.tasks,
        modeDisplay: state.modeDisplay
    }
}
const mapActionToProps = (dispatch,props) => {
    return {
        deleteWork: (task) => {
            dispatch(actions.deleteWork(task))
        },
        changeStatus: (id) => {
            dispatch(actions.changeStatus(id))
        },
        edtiWork: (task) => {
            dispatch(actions.edtiWork(task))
        },
        openForm: () => {
            dispatch(actions.openForm())
        }
    }
}
export default connect(mapStateToProps,mapActionToProps)(ListWork);