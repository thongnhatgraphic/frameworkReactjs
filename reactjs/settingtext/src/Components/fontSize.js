import React, { Component } from "react"

class FontSizeController extends Component {


    increaseFontSize (paramsFont) {
        this.props.sendRequestChangeFontSize(paramsFont+1);
    }
    decreaseFontSize (paramsFont) {
        this.props.sendRequestChangeFontSize(paramsFont-1);
    }
    restartFontSize(paramsFont) {
        paramsFont = 16
        this.props.sendRequestChangeFontSize(paramsFont)
    }
    render() {
        return (
            <div className="side-right">
                <h4>Setting font size</h4>
                <div>
                    <button onClick = { () => { this.increaseFontSize.bind(this)(this.props.fontSize) } }>Tăng</button>
                    <button onClick = { () => { this.decreaseFontSize(this.props.fontSize)} }> Giảm </button>
                    <button onClick = { () => { this.restartFontSize(this.props.fontSize)}}>Reset</button>
                </div>
            </div>
        )
    }


}

export default FontSizeController