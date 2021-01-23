import React, { Component } from "react" 

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search_name: "",
            filter_status: 1
        }
    }
    getValue (event) {
        var target = event.target;
        var name = target.name;
        var value = target.value
        this.props.sendValue( name=== "search_name"? target.value : this.state.search_name , name === "filter_status"? target.value: this.state.filter_status )
        this.setState({
            [name]: value
        })
    }
    sendRequestDeleteTheWork(task) {
        this.props.sendRequestDeleteTheWork(task)
    }
    sendRequestChangeStatus (task) {
        this.props.sendRequestChangeStatus(task)
    }
    sendRequestEditItem(task) {
        this.props.sendRequestEditItem(task)
    }
    showTask () {
        var elementTask = this.props.tasksList.map( (task, index) => {
            return (
                <tr key = { task.id }>
                    <td>{index + 1}</td>
                    <td>{ task.work}</td>
                    <td >
                        <div className={ task.status? "Active": "deActive"}
                        onClick = { () => { this.sendRequestChangeStatus.bind(this)(task) } }
                        >
                            { task.status ? "Kích hoạt": "Không kích hoạt" }
                        </div>
                    </td>
                    <td className="action">
                        <input type="submit" 
                        value="Sửa" 
                        className="button-edit"
                        onClick = { () => { this.sendRequestEditItem.bind(this)(task) }}
                        />
                        <input 
                        type="submit" 
                        value="Xóa" 
                        className="button-edit"
                        onClick = { () => { this.sendRequestDeleteTheWork.bind(this)(task) } }
                        />
                    </td>
                </tr>
            )
        })
        return elementTask;
    }
    render () {
        console.log("render");
        return (
        <div >
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
                            <input placeholder="Tìm kiếm..." style= {{width: "90%"}}
                                type="text"
                                name="search_name"
                                value = { this.state.search_name }
                                onChange = { this.getValue.bind(this) }
                            />
                        </td>
                        <td>
                            <select className="select-status"
                                name="filter_status"
                                value= { this.state.filter_status }
                                onChange = { this.getValue.bind(this) }
                            >
                                <option value= {1}>Trang Thái</option>
                                <option value= {2}>Kích Hoạt</option>
                                <option value= {3}>Không Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { this.showTask.bind(this)() }
                </tbody>
            </table>
        </div>
        )
    }
}

export default ListItem;