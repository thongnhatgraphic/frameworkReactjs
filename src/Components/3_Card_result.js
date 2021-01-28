import React from 'react';
// import PropTypes from 'prop-types';

CardResult.propTypes = {

};

function CardResult(props) {
    const { totalPrice } = props
    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>{totalPrice}$</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button type="button" className="btn btn-primary waves-effect waves-light">
                    Complete purchase
                <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
    );
}

export default CardResult;