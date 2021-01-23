import { Component } from "react";

class ListWork extends Component {


    deleteItem(task) {
        this.props.deleteItem(task)
    }
    showListWork () {
        return this.props.tasks.map ((task, index) => {
            return (
                <tr key= { task.id }>
                    <td>{index + 1}</td>
                    <td> {task.work} </td>
                    <td>
                        <div style = {{ textAlign: "center"}}>
                            <span style = { task.status === true ? 
                                            {    fontSize: "10px", 
                                                backgroundColor: "green",
                                                padding: "2px 5px 2px 5px",
                                                cursor: "pointer",
                                                color: "white"
                                            } : 
                                            {    fontSize: "10px", 
                                            backgroundColor: "red",
                                            padding: "2px 5px 2px 5px",
                                            cursor: "pointer",
                                            color: "white"
                                        }}
                            >{ task.status === true ? "Hoàn thành" : "Chưa hoàn thành" }</span>
                        </div> 
                    </td>
                    <td className="action">
                        <input type="submit" value="Sửa" className="button-edit"/>
                        <input type="submit" 
                        value="Xóa" 
                        className="button-edit"
                        onClick = { () => { this.deleteItem.bind(this)(task) } }
                        />
                    </td>
                </tr>
            )
        } )
    }

    render () {
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
                { this.showListWork.bind(this)() }
                
                </tbody>
            </table>
        </div>
        )
    }
}

export default ListWork