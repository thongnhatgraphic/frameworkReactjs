import React, { Component } from "react"

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            work: "",
            status: false
        }
    }
    getValueInput(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if ( name === "status" ) {
            if ( value === "false" ) {
                value = false
            } else {
                value = true
            }
        }
        this.setState( {
            [name]: value
        } )
    }
    resetForm() {
        this.setState({
            work: "",
            status: false
        })
    }
    
    // componentDidMount () {
    //     console.log(1);
    //     if ( this.props.modeTitleHeading === true ) {
    //         this.setState({
    //             id: this.props.objBeSendToForm.id,
    //             work: this.props.objBeSendToForm.work,
    //             status: this.props.objBeSendToForm.status
    //         })
    //     } else {
    //         console.log("abc");
    //     }
    // }
    static getDerivedStateFromProps (nextProps, currentState) {
        console.log(2,nextProps, currentState);
        if ( nextProps.objBeSendToForm === undefined ) {
            return null
        } else if ( nextProps && 
                    nextProps.objBeSendToForm.id !== "" &&
                    nextProps.modeTitleHeading === true && 
                    nextProps.objBeSendToForm.id !== currentState.id) {
            console.log("case 2");
            return {
                id: nextProps.objBeSendToForm.id,
                work: nextProps.objBeSendToForm.work,
                status: nextProps.objBeSendToForm.status
            }
        } else if ( nextProps.modeDisPlay && nextProps.modeTitleHeading === false &&  nextProps.objBeSendToForm.id === currentState.id  ) {
            console.log("case 3");
            return {
                id: "",
                work: "",
                status: false
            }
        } else {
            console.log("last case");
            return null
        }
    }

    sendRequestNewWork () {
        this.props.sendRequestNewWork(this.state);
        this.resetForm.bind(this)()
    }
    
    preventDefault(event) {
        event.preventDefault();
    }
    displayDependentModeDisplay () {
        if ( this.props.modeDisPlay ) {
            return {
                display: "block"
            }
        } else {
            return {
                display: "none"
            }
        }
    }
    displayTitleHeadingForm () {
        if ( this.props.modeDisPlay !== false && this.props.modeTitleHeading !== false ) {
            return "Chỉnh sửa công việc"
        } else { 
            return "+Thêm Công Việc"
        }
    }

    DoWorkDepentStatus () {
        if ( this.props.modeTitleHeading === true ) {
            this.props.saveNewWork(this.state)
        } else 
        {
            this.sendRequestNewWork.bind(this)()
            this.closeForm.bind(this)()
        }
    }
    closeForm () {
        this.props.closeForm()
    }
    render () {
        console.log("render");
        var elementForm = () => {
            return <div className="sidebar-left" style = { this.displayDependentModeDisplay.bind(this)()} >
            <form onSubmit= { this.preventDefault.bind(this) }>
                <div className="sidebar-left-header">
                    <h4>{ this.displayTitleHeadingForm.bind(this)() }</h4>
                    <button
                        onClick = { this.closeForm.bind(this) }
                    >x</button>
                </div>
                <div className="sidebar-left-body">
                    <label>Tên:</label>
                    <input 
                    type = "text" 
                    name="work"
                    onChange = { this.getValueInput.bind(this) }
                    value= { this.state.work}
                    />
                    <br/><br/>
                    <label>Trạng Thái:</label>
                    <select 
                    className="select-status"
                    name = "status"
                    onChange = { this.getValueInput.bind(this) }
                    value= { this.state.status }
                    >
                        <option value = { false } >Không Kích Hoạt</option>
                        <option value = { true }> Kích Hoạt</option>
                    </select>
                </div>
                <div className="block-button">
                    <input type="submit"
                    value = "+ Lưu Lại "
                    onClick = { this.DoWorkDepentStatus.bind(this) }
                    />
                    <input type="submit"value = "X Hủy Bỏ"/>
                </div>
            </form>
        </div>
        }
        return (
            elementForm()
        )
    }

}
export default Form;