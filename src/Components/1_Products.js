import React from 'react';
import PropTypes from 'prop-types';

Products.propTypes = {
    products: PropTypes.array
};
Products.defaultProps = {
    products: []
};


function Products(props) {
    const { products } = props;
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <br />
            <div className="row">
                {products}
            </div>
        </section>
    );
}


export default Products;