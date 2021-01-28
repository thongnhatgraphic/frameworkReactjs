import * as types from "./../constants/actionsType";
var data = JSON.parse(localStorage.getItem("CART"));
var initState = data ? data : []

const cartReducer = (state = initState, action) => {
    var index;
    switch (action.type) {
        case types.ADD_TO_CART:
            var obj = {
                product: action.product,
                quantity: action.quantity,
                notify: action.notify
            }
            index = findProductInCart(state, obj.product.id);
            if (index !== -1) {
                state[index].quantity += 1
            } else {
                state.push(obj)
            }
            localStorage.setItem("CART", JSON.stringify(state))
            return [...state];
        case types.CLOSE_CART:
            var objNeedRemove = action.product;
            var newArr = state.filter((info, i) => {
                return info.product.id !== objNeedRemove.product.id
            });
            localStorage.setItem("CART", JSON.stringify(newArr))
            return [...newArr]
        case types.UPDATE_PRODUCT_ON_CART:
            var objUpdate = action.product
            objUpdate.quantity = action.quantity
            localStorage.setItem("CART", JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}

function findProductInCart(state, id) {
    var index = -1
    if (state.length > 0) {
        for (var i = 0; i < state.length; i++) {
            if (state[i].product.id === id) {
                index = i
            }
        }
    }
    return index
}


export default cartReducer;