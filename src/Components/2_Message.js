import React from 'react';
import PropTypes from 'prop-types';



function Message(props) {
    const { messageReducer } = props
    return (
        <h3>
            <span className="badge amber darken-2">{messageReducer}</span>
        </h3>
    );
}

export default Message;