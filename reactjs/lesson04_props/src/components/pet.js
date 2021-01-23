import React, { Component } from "react"

class Pet extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            mode: true
        }
    }

    showComment() {
        this.setState( {
            mode: false
        })
    }

    renderBtnBuy() {
        return (
            <div>
                <div>
                    <p> {this.props.content}</p>
                    <button onClick = { this.buyNow }>Mua Ngay</button>
                </div>
                <form>
                    <button onClick= { this.showComment.bind(this) }>Hiển thị Comment</button>
                </form>
            </div>
        )
    }
    closeComment() {
        this.setState({
            mode: true
        })
    }
    renderComment() {
        return (
            <div>
                <p className="cmt">Haha, Lý đậu si đa tôi không cho Lý Đậu mua chó</p>
                <button onClick={ this.closeComment.bind(this) }> Đóng </button>
            </div>
        )
    }

    displayCondittion() {
        if ( this.state.mode ) {
           return this.renderBtnBuy();
        } else {
            return this.renderComment();
        }
    }

    buyNow = () => {
        alert(`Do you sure buy ${this.props.name}?` );
    }
    render() {
        return (
            <div className="card">
                <h3> {this.props.name} </h3>
                <img alt="" src={this.props.linkanh} />

                { this.displayCondittion() }
                
            </div>
        )
    }

}


export default Pet;