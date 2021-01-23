import React, { Component } from "react"


class ColorPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: [ "red", "green" , "blue" , "yellow", "#333", "#34e6f8", "#f7f7f7"]
        }
    }


    styleColor(color) {
        return {
            backgroundColor: color
        }
    }
    modeActive (color) {
        if ( color === this.props.color ) {
            return "active"
        }
        return ""
    }
    clickHandlePickColor (color) {

        this.props.sendColorBePick(color)
    }
    renderColorToPick () {
        return this.state.colors.map( (color,index) => {
            return <span 
                key= {index+1}
                style = { this.styleColor(color) }
                className = { this.modeActive(color)  }
                onClick = { () => {this.clickHandlePickColor(color)} }
                ></span>
        })
    }

    render() {
        return (
            <div className="side-left">
                <h4>Color pick</h4>
                <div>
                    { this.renderColorToPick() }
                </div>
            </div>
        ) 
    }


}

export default ColorPicker