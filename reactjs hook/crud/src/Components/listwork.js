import React from 'react';
import PropTypes from 'prop-types';

listwork.propTypes = {
    tasks: PropTypes.array,
    onClickDelete: PropTypes.func,
    handleChangeStatus: PropTypes.func,
    onClickHandleEdit: PropTypes.func
};
listwork.defaultProps = {
    tasks: [],
    onClickDelete: null,
    handleChangeStatus: null,
    onClickHandleEdit: null
}

function listwork(props) {
    const { tasks, onClickDelete, handleChangeStatus,onClickHandleEdit } = props
    
    return (
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
                        <input type="text"/>
                    </td>
                    <td>
                        <select className="select-status">
                            <option>Tất cả</option>
                            <option>Xong</option>
                            <option>Chưa xong</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {/* phần hiển thị */}
                { tasks.map( (task,index) => {
                    return <tr key = {task.id }>
                                <td> {index+1} </td>
                                <td> { task.name } </td>
                                <td>
                                    <div className="status">
                                        <span 
                                        className={ task.status ? "finish" : "unFinish"}
                                        onClick = { () => {handleChangeStatus(task)} }
                                        >
                                            { task.status ? "Hoàn thành" : "Chưa hoàn thành" }
                                        </span>
                                    </div>
                                </td>
                                <td className="action">
                                    <input type="submit" 
                                    value="Sửa" 
                                    className="button-edit"
                                    onClick = { () => { onClickHandleEdit(task) } }
                                    />
                                    <input type="submit"
                                    value="Xóa" 
                                    className="button-edit"
                                    onClick = { () => { onClickDelete ? onClickDelete(task.id) : alert("chưa xóa đâu")} }
                                    />
                                </td>
                            </tr>
                } ) }
                </tbody>
            </table>
        </div>
    );
}

export default listwork;