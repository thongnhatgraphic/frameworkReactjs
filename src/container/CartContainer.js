import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import Cart from "./../Components/3_Cart"
import CartItem from "./../Components/3_Cart_item"
import CardResult from "./../Components/3_Card_result"
import * as types from "./../actions/actions";

function CartContainer(props) {
    const { cartReducer, onCloseCartProduct, onUpdateCartProduct } = props;
    function showCartItem(products) {
        var result = []
        if (products.length > 0) {
            for (let i = 0; i < products.length; i++) {
                result.push(<CartItem
                    product={products[i]}
                    key={i}
                    onCloseCartProduct={onCloseCartProduct}
                    onUpdateCartProduct={onUpdateCartProduct}
                />)
            }
        }
        return result
    }
    function showToTalMoney(products) {
        var total = 0;
        if (products.length > 0) {
            for (let i = 0; i < products.length; i++) {
                total += (products[i].quantity * products[i].product.price)
            }
        }
        return <CardResult
            totalPrice={total}
        />
    }



    return (

        <Cart
            cartProduct={showCartItem(cartReducer)}
            cartResult={showToTalMoney(cartReducer)}
        />

    );
}


CartContainer.propTypes = {
    cartReducer: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseCartProduct: (product) => {
            dispatch(types.actCloseAllCart(product))
        },
        onUpdateCartProduct: (product, quantity) => {
            dispatch(types.actUpdateOnCart(product, quantity))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);