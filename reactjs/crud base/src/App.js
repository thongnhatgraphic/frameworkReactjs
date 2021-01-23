import React, { Component } from "react"
import Form from "./Components/form"
import ListWork from "./Components/listwork"
import './App.css';

class App extends Component {

  constructor ( props ) {
    super(props)
    this.state = {
      modeDisplay: false,
      tasks: []
    }
  }
  createId () {
    function S4() {  
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);  
    }
   return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase()
  }
  static getDerivedStateFromProps (nextProps, currentState ) {
    if ( !localStorage.getItem("tasks") ) {
      console.log(1);
      localStorage.setItem("tasks", JSON.stringify(currentState.tasks))
      return localStorage.getItem("tasks", JSON.stringify(currentState.tasks))
    } else if ( localStorage.getItem("tasks") && currentState.tasks !== [] ) {
      console.log(2);
      return currentState.tasks = JSON.parse(localStorage.getItem("tasks"))
    } else 
    console.log(3)
    console.log(currentState);
      return null
  }
  receiveValueInForm (param) {
    console.log(param);
    var newTasks = JSON.parse(localStorage.getItem("tasks"));
    param.id = this.createId();
    newTasks.push(param);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks"))
    })
  }
  reiceiveTurnOffForm () {
    this.setState({
      modeDisplay: true
    })
  }
  defaultStyle () {
    if ( this.state.modeDisplay ) {
      return {
        width: "100%"
      }
    } else {
      return {
        width: "66.6667%"
      }
    }
  }
  toggleForm () {
    this.setState({
      modeDisplay: !this.state.modeDisplay
    })
  }
  receiveDeleteItem (param) {
    var arrTask = JSON.parse(localStorage.getItem("tasks"));
    console.log(arrTask);
    arrTask.forEach( (task,index) => {
      if ( task.id === param.id ) {
        arrTask.splice(index,1)
      }
    })
    localStorage.setItem("tasks", JSON.stringify(arrTask))
    this.setState({
      tasks: arrTask
    })
  }
  render() {
    var conditionDisplay = this.state.modeDisplay === false ? 
                                                              <Form sendValueInForm = { this.receiveValueInForm.bind(this) }
                                                              modeDisplay = { this.state.modeDisplay }
                                                              turnOffForm = { this.reiceiveTurnOffForm.bind(this) }
                                                          /> : ""
      return(
          <div className="container">
              <h1>.....To Do List.....</h1>
              <div className="body">
                {/* Component 1 */}
                  { conditionDisplay }
                {/* Component 2 */}
                <div className="sidebar-right" style = {this.defaultStyle.bind(this)()}>
                  <div>
                    <div className="header-form">
                      <input type="submit" 
                      className= "addWork" 
                      value = "+Thêm Công Việc "
                      onClick = { this.toggleForm.bind(this) }
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
                    />
                  </div>
                </div>
              </div>
          </div>
      )
  }
}

export default App;
