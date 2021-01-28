import React from 'react';
import PropTypes from 'prop-types';

Cart.propTypes = {
    cartProduct: PropTypes.array
};

function Cart(props) {
    const { cartProduct, cartResult } = props
    return (
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th />
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {cartProduct}
                        {cartResult}
                    </tbody>
                </table>
            </div>
        </section >
    );
}

export default Cart;