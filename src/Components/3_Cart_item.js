import React from 'react';
import PropTypes from 'prop-types';

CartItem.propTypes = {
    product: PropTypes.object,
    onCloseCartProduct: PropTypes.func,
    onUpdateCartProduct: PropTypes.func
};

function CartItem(props) {
    const { product, onCloseCartProduct, onUpdateCartProduct } = props;
    return (
        <tr>
            <th scope="row">
                <img src={product.product.image}
                    alt={product.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{product.product.name}</strong>
                </h5>
            </td>
            <td>{product.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{product.quantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick={() => { onUpdateCartProduct(product, product.quantity > 0 ? product.quantity - 1 : product.quantity - 0) }}
                    >
                        <span>—</span>
                    </label>
                    <label
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick={() => { onUpdateCartProduct(product, product.quantity + 1) }}
                    >
                        <span>+</span>
                    </label>
                </div>
            </td>
            <td>{product.quantity * product.product.price}$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light"
                    data-toggle="tooltip" data-placement="top" title=""
                    data-original-title="Remove item"
                    onClick={() => { onCloseCartProduct(product) }}
                >
                    X
                </button>
            </td>
        </tr>
    );
}

export default CartItem;