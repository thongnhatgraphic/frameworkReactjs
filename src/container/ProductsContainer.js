import React from 'react';
import { connect } from "react-redux";
import Products from "./../Components/1_Products";
import Product from "./../Components/1_Product";
import PropTypes from 'prop-types';
import * as types from "./../actions/actions"

function ProductsContainer(props) {
    const { products } = props
    function showProducts(products) {
        var result = "";
        if (products) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            })
        }
        return result
    }
    function onAddToCart(product, amount) {
        props.onAddToCart(product, amount)
    }


    return (
        <Products products={showProducts(products)} />
    );
}





// Connect and type check
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product) => {
            dispatch(types.actAddToCart(product, 1))
        }
    }
}


ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            inventory: PropTypes.number,
            rating: PropTypes.number,
        })
    ).isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);