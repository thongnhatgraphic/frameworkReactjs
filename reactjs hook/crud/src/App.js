import Form from "./Components/form"
import ListWork from "./Components/listwork"
import './App.css';
import React, { useState } from "react"

  function createId() {
    function S4() {  
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);  
    }
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase()
  }

function App() {
  const [taskList, setTaskList] = useState( () => {
    var tasks = JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : []
    return tasks
  })
  const [ isDisplayForm, setIsDisplayForm ] = useState(false)
  const [taskEdit, setTaskEdit] = useState()


  function onOpenForm() {
    setIsDisplayForm(!isDisplayForm)
  }
  function onAddWork(task) {
    task.id = createId();
    var newArr = [...taskList];
    newArr.push(task);
    setTaskList(newArr);
    localStorage.setItem("tasks", JSON.stringify(newArr))
  }
  function handleDeleteWork(id) {
    var newArr = taskList.filter( (task) => {
      return task.id !== id
    } );
    setTaskList(newArr);
    localStorage.setItem("tasks", JSON.stringify(newArr))
  }
  function handleChangeStatus(task) {
    var newTasks = [...taskList]
    newTasks.forEach( (tak,index) => {
      if ( tak.id === task.id ) {
        tak.status = !tak.status
      }
    });
    setTaskList(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }
  function onClickHandleEdit(task) {
    setIsDisplayForm(true);
    setTaskEdit(task);
  }
  return (
    <div className="container">
              <h1>.....To Do List.....</h1>
              <div className="body">
                {/* Component 1 */}
                { isDisplayForm && <Form
                handleAddWork = { onAddWork }
                onCloseForm = { () => { setIsDisplayForm(false) } }
                taskEdit = { taskEdit }
                /> }
                {/* Component 2 */}
                <div className="sidebar-right" style = { isDisplayForm === false ? { width: "100%" } : { width: "66.6666%"} }>
                  <div>
                    <div className="header-form">
                      <input type="submit" 
                      className= "addWork" 
                      value = "+Thêm Công Việc"
                      onClick = { onOpenForm }
                      />
                      <div className="block-search">
                        <input type="text" className="search" placeholder="nhập công việc cần tìm kiếm"/>
                        <input type="submit" className= "search-button" value = "Tìm Kiếm"/>
                      </div>
                      <div className="filter">
                        <select className="select-status filter">
                          <option>Lọc theo</option>
                          <option>Lọc theo</option>
                          <option>Lọc theo</option>
                        </select>
                      </div>
                    </div>
                    <ListWork 
                    tasks = { taskList } 
                    isDisplayForm = { isDisplayForm }
                    onClickDelete = { handleDeleteWork }
                    handleChangeStatus = { handleChangeStatus }
                    onClickHandleEdit = { onClickHandleEdit }
                    />
                  </div>
                </div>
              </div>
          </div>
  );
}

export default App;
