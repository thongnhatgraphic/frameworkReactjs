import React, { Component } from "react"

class ScreenDisplay extends Component {

    constructor (props) {
        super(props)
    }

    styleResult () {
        console.log(this.props.color);
        return {
            backgroundColor: this.props.color,
            color: "white",
            fontSize: this.props.fontSize
        }
    }

    render() {
        return (
        <div className="result"
        >
            <h3>result</h3>
            <p style = { this.styleResult.bind(this)() }> Kết quả hiển thị màu và kích thước</p>
        </div>
        )
    }


}

export default ScreenDisplay