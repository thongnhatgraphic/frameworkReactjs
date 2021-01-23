import { Component } from "react";

class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            work:"",
            status: true
        }
    }
    getValueFromInput(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if ( name === "status" ){
            if ( target.value === "true" || target.value === true ) {
                value = true
            } else value = false
        } else {
            value = target.value
        }
        this.setState({
            [name]: value
        })
    }
    resetForm() {
        this.setState({
            work:"",
            status: true
        })
    }
    sendValueInForm() {
        this.props.sendValueInForm(this.state);
        this.resetForm.bind(this)()
    }
    turnOffForm () {
        this.props.turnOffForm(); 
    }
    displayForm ( ) {
        if ( this.props.modeDisplay ) {
            return {
                display: "none"
            }
        } else {
            return {
                width: "33.3333%"
            }
        }
    }
    render() {
        console.log("thử render khi false");
        return (
            <div className="sidebar-left" style = { this.displayForm.bind(this)() }>
                  <div>
                      <div className="sidebar-left-header">
                          <h4>Thêm công việc</h4>
                          <button
                          onClick = { this.turnOffForm.bind(this) }
                          >x</button>
                      </div>
                      <div className="sidebar-left-body">

                          <label>Tên:</label>
                          <input 
                          type = "text" 
                          name="work"
                          onChange = { this.getValueFromInput.bind(this) }
                          value = { this.state.work }
                          />
                          <br/><br/>

                          <label>Trạng Thái:</label>
                          <select className="select-status"
                          name = "status"
                          onChange = { this.getValueFromInput.bind(this) }
                          >
                              <option value = { true }>Xong</option>
                              <option value = { false }>Chưa Xong</option>
                          </select>
                      </div>
                      <div className="block-button">
                          <input type="submit"
                           value = "+ Lưu Lại "
                           onClick = { this.sendValueInForm.bind(this) }
                           />
                          <input type="submit" 
                          value = "X Hủy Bỏ"
                          />
                      </div>
                  </div>
                </div>
        )
    }
}

export default Form;