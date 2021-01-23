import React, { Component } from "react"
import './App.css';
import Form from "./Components/form";
import ListItem from "./Components/listItem"

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      modeDisPlay: false,
      tasks: [],
      modeTitleHeading: false,
      filter: {
        work: "",
        status: 1
      }
    }
  }
  receiveRequestDisPlayFilter(name_Search, filter_Status) {
    filter_Status = parseInt(filter_Status);
    console.log(name_Search);
    this.setState({
      filter: {
      work: name_Search,
      status: filter_Status
      }
    })
  }
  static getDerivedStateFromProps (nextProps, currentState) {
    console.log(currentState);
    console.log(currentState.filter);
    if ( currentState.filter && currentState.filter.status === 1 ) {
      console.log("case đầu");
      return currentState.tasks = JSON.parse(localStorage.getItem("task"))
    } else 
    if ( currentState.filter && currentState.filter.status === 2 ){
      console.log("case 1");
      currentState.tasks = JSON.parse(localStorage.getItem("task"))
      return currentState.tasks =  currentState.tasks.filter ( (task) => {
        return task.status === true
      })
    } else if ( currentState.filter && currentState.filter.status === 3){
      console.log("case 2");
      currentState.tasks = JSON.parse(localStorage.getItem("task"))
      return currentState.tasks =  currentState.tasks.filter ( (task) => {
        return task.status === false
      })
    } else {
      console.log("case 3");
      return currentState.tasks = JSON.parse(localStorage.getItem("task"))
    }
  }
  displayModeScreen() {
    if ( this.state.modeTitleHeading === true ) {
      this.setState ({
        modeTitleHeading: false
      })
    } else {
      this.setState({
        modeDisPlay: !this.state.modeDisPlay
      })
    }
  }
  closeForm () {
    this.setState({
      modeDisPlay: false
    })
  }
  displaySizeList () {
    if ( this.state.modeDisPlay ) {
        return {
            width: "66.6667%"
        }
    } else {
        return {
            width: "100%"
        }
    }
}
  componentDidMount() {
    var listTask = localStorage.getItem("task");
    if ( listTask ) {
      this.setState( {
        tasks: JSON.parse(listTask)
      })
    } else {
      this.setState({
        tasks: []
      })
    };
  }

  s4 () {
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1)
  }
  createIdString () {
    return `${this.s4()}-${this.s4()}-${this.s4()}-${this.s4()}`
  }
  receiveRequestAddNewWork(param) {
    param.id = this.createIdString.bind(this)()
    var newTasks = this.state.tasks;
    newTasks.push(param);
    this.setState({
      tasks: newTasks
    })
    localStorage.setItem("task", JSON.stringify(newTasks))
  }
  receiveRequestDeleteTheWork(param) {
    var newTask = this.state.tasks.filter( (task,index) => {
      return task.id !== param.id
    } )
    this.setState({
      tasks: newTask
    })
    localStorage.setItem("task", JSON.stringify(newTask))
  }
  receiveRequestChangeStatus(param) {
    var oldTasks = this.state.tasks;
    oldTasks.forEach ( (task,index) => {
      if ( task.id === param.id ) {
        task.status = !task.status
      }
    })
    this.setState({
      tasks: oldTasks
    })
    localStorage.setItem("task", JSON.stringify(oldTasks))
  }
  createListTheWork() {
    var listTasks = [
      {
        id: this.createIdString.bind(this)(),
        work: "Hang out",
        status: false
      },
      {
        id: this.createIdString.bind(this)(),
        work: "đi bơi",
        status: true
      }
    ]
    localStorage.setItem("task", JSON.stringify(listTasks))
  }

  receiveRequestEditTheWork(task) {
    this.setState( { 
      modeDisPlay: true,
      modeTitleHeading: true
    });
    this.setState({
      objEdit: task
    });
  }
  receiveRequestSaveWork(data) {
    var newTasks = this.state.tasks;
    console.log(newTasks);
    newTasks.forEach( (task,index) => {
      if ( task.id === data.id  ) {
        newTasks[index] = data
      }
    } )
    this.setState({
      tasks: newTasks
    })
    localStorage.setItem("task", JSON.stringify(newTasks))
  }
  render() {
    console.log("render");
    var elementForm = function () {
      if ( this.state.modeDisPlay ) {
        return <Form
            modeTitleHeading = { this.state.modeTitleHeading}
            sendRequestNewWork = { this.receiveRequestAddNewWork.bind(this) }
            saveNewWork = { this.receiveRequestSaveWork.bind(this) }
            closeForm = { this.closeForm.bind(this) }
            objBeSendToForm = { this.state.objEdit }
            modeDisPlay = { this.state.modeDisPlay }
        />
      }
    }
      return(
          <div className="container">
              <h1>.....To Do List.....</h1>
              <div className="body">
                {/* Component 1 */}
                {elementForm.bind(this)()}
                {/* Component search of App */}
                <div className="sidebar-right"
                style = { this.displaySizeList.bind(this)() }
                >
                  <div>
                    <div className="header-form">
                      <input type="submit" 
                      className= "addWork" 
                      value = "+Thêm Công Việc "
                      onClick = { this.displayModeScreen.bind(this) }
                      />
                      <input type="submit"
                      className = "addWork"
                      value ="Tạo Danh Sách"
                      onClick= { this.createListTheWork.bind(this) }
                      />
                      <div className="block-search">
                        <input type="text" className="search" placeholder="nhập công việc cần tìm kiếm"/>
                        <input type="submit" className= "search-button" value = "Tìm Kiếm"/>
                      </div>
                      <div className="filter">
                        <select className="select-status filter">
                          <option>Tìm kiếm từ A-Z</option>
                          <option>Tìm kiếm từ Z-A</option>
                          <option>Tất cả</option>
                        </select>
                      </div>
                    </div>
                    {/* Component 2 list Item */}
                    <ListItem 
                    tasksList = { this.state.tasks }
                    sendRequestDeleteTheWork = { this.receiveRequestDeleteTheWork.bind(this) }
                    sendRequestChangeStatus = { this.receiveRequestChangeStatus.bind(this) }
                    sendRequestEditItem = { this.receiveRequestEditTheWork.bind(this) }
                    displaySizeListItem = { this.state.modeDisPlay }
                    sendValue = { this.receiveRequestDisPlayFilter.bind(this) }
                    />
                  </div>
                </div>
              </div>

              
          </div>
      )
  }
}

export default App;
