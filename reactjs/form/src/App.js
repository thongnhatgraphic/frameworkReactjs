import React, { Component} from "react"
import './App.css';

class App extends Component {
  constructor ( props ) {
    super(props)
    this.state = {
      name: ""
    }
  }
  logShow (e) {
    e.defaultPrevented = true;
    this.setState({
      name: e.target.value
    });
    console.log(this.state);
  }
  render () {
    return (
      <div className="App">
        
        <form>
          <h3>Form Infomation</h3>
          <div>
            <label>Full name: </label>
            <input type="text" name="name" onChange = { this.logShow.bind(this) }></input>
          </div>
          <div>
            <label>Email: </label>
            <input type="text" ></input>
          </div>
          <div>
            <label>Password: </label>
            <input type="password" ></input>
          </div>
          <div>
            <label>Gender </label>
            <input type="radio" name="gender" />Nam
  
            <input type="radio" name="gender" />Nữ
          </div>
          <div>
            <select name="info">
              <option value="1">option1</option>
              <option value="2">option2</option>
              <option value="3">option3</option>
              <option value="4">option4</option>
            </select>
          </div>
          <input type="submit" value="Send"
          />
        </form>
      </div>
    );
  }

}

export default App;
