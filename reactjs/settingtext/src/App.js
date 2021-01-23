import './App.css';
import ColorPicker from "./Components/colorPicker"
import FontSizeController from "./Components/fontSize"
import ScreenDisplay from "./Components/resultDisplay"
import React, { Component } from "react"
class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            colorDefault: "red",
            fontSizeDefault: 16
        }
    }
    receiveColor(colorReceive) {
        this.setState( {
            colorDefault: colorReceive
        })
    }
    setChangeFontSize(newFontSize) {
        console.log(this.state.fontSizeDefault);    
        this.setState({
            fontSizeDefault: newFontSize
        })

    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <ColorPicker 
                        color = { this.state.colorDefault }
                        sendColorBePick = { this.receiveColor.bind(this) }
                    />
                    <FontSizeController 
                    fontSize = { this.state.fontSizeDefault}
                    sendRequestChangeFontSize = { this.setChangeFontSize.bind(this) }

                     />
                </div>
                <ScreenDisplay color = {this.state.colorDefault}
                                fontSize = { this.state.fontSizeDefault }
                />
            </div>
          );
    }
}
export default App;
