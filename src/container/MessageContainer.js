import React from 'react';
import PropTypes from 'prop-types';
import Message from "./../Components/2_Message";
import { connect } from "react-redux";



function MessageContainer(props) {
    const { message } = props;
    return (
        <Message messageReducer={message} />
    );
}



MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
};
const mapStateToProps = (state) => {
    return {
        message: state.messageReducer
    }
}


export default connect(mapStateToProps, null)(MessageContainer);