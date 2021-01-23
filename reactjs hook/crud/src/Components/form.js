import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {
    taskEdit: PropTypes.object,
    handleAddWork: PropTypes.func,
    onCloseForm: PropTypes.func,
};
Form.defaultProps = {
    taskEdit: null
}

function Form(props) {
    const { handleAddWork, onCloseForm, taskEdit } = props
    const [valueWork , setValueWork] = useState("");
    const [valueStatus , setValueStatus] = useState(false);

    useEffect ( () => {
        console.log("Khởi chạy out side", props);
        if ( taskEdit.id ) {
            setValueWork(taskEdit.name);
            setValueStatus(taskEdit.status);
        } else {
            setValueWork("");
            setValueStatus(false)
        }

        return () => {
            console.log("Remove");
            setValueStatus(false);
            setValueWork("");
        }
    },[taskEdit.id, taskEdit.name, taskEdit.status])
    function onAddWork() {
        handleAddWork({
            name: valueWork,
            status: valueStatus === "true" ? true : false
        });
        resetForm();
    }
    function resetForm (){
        setValueWork("");
        setValueStatus(false)
    }
    return (
        <div className="sidebar-left">
                  <div>
                      <div className="sidebar-left-header">
                          <h4>Thêm công việc</h4>
                          <button
                          onClick = { () => { onCloseForm() }}
                          >x</button>
                      </div>
                      <div className="sidebar-left-body">
                          <label>Tên:</label>
                          <input 
                            type = "text" 
                            name="work"
                            value = {valueWork}
                            onChange = { event => { setValueWork(event.target.value) }}
                          />
                          <br/><br/>
                          <label>Trạng Thái:</label>
                          <select className="select-status"
                          name = "status"
                          value = { valueStatus }
                          onChange = { event => { setValueStatus(event.target.value )}}
                          >
                            <option value = { true }>Xong</option>
                            <option value = { false }>Chưa Xong</option>
                          </select>
                      </div>
                      <div className="block-button">
                          <input type="submit"
                           value = "+ Lưu Lại "
                           onClick = { onAddWork }
                           />
                          <input type="submit" 
                          value = "X Hủy Bỏ"
                          />
                      </div>
                  </div>
                </div>
    );
}

export default Form;