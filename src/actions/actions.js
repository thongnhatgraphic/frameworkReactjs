import * as types from "./../constants/actionsType";
// import * as noties from "./../constants/message"
export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}
export const actUpdateOnCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_ON_CART,
        product: product,
        quantity: quantity
    }
}
export const actCloseAllCart = (product) => {
    return {
        type: types.CLOSE_CART,
        product: product,
    }
}


// show message
// export const actShowMessageSuccesAddToCart = () => {
//     return {
//         type: types.MSG_ADD_TO_SUCCESS
//     }
// }