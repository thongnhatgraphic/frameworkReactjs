import React, { Component } from "react"
import Form from "./Components/form"
import ListWork from "./Components/listwork"
import './App.css';
import { connect } from "react-redux";
import *as actions from "./Components/actions/actions";


class App extends Component {
  
  onToggleForm() {
    if ( this.props.taskEditting.id && this.props.modeDisplay === true ) {
      console.log("reset Form");
      this.props.resetStateForm({
        id: "",
        work: "",
        status: false 
      })
    } else 
    this.props.toggleForm();
  }
  render() {
      var elementForm = this.props.modeDisplay === false ? "" : <Form/>
      return(
          <div className="container">
              <h1>.....To Do List.....</h1>
              <div className="body">
                {/* Component 1 */}
                {elementForm}
                {/* Component 2 */}
                <div className="sidebar-right" 
                style = { this.props.modeDisplay ? { width: "66.6667%"} : { width: "100%"} }>
                  <div>
                    <div className="header-form">
                      <input type="submit" 
                      className= "addWork" 
                      value = "+Thêm Công Việc "
                      onClick = { this.onToggleForm.bind(this) }
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
const mapStateToProps = state => {
  return {
    modeDisplay: state.modeDisplay,
    taskEditting: state.taskEditting
  }
}
const mapActionToProps = (dispatch,props) => {
  return {
      toggleForm: () => {
          dispatch(actions.toggle())
      },
      resetStateForm: (task) => {
        dispatch(actions.resetStateForm(task))
      }
  }
}

export default connect(mapStateToProps,mapActionToProps)(App);
