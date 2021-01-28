import * as types from "./../constants/message";
import * as Types from "./../constants/actionsType"
var init = types.MSG_WELCOME;


const messageReducer = (state = init, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART:
            return types.MSG_ADD_TO_SUCCESS
        case Types.CLOSE_CART:
            return types.MSG_DELETE_PRODUCT_IN_CART_SUCCESS
        case Types.UPDATE_PRODUCT_ON_CART:
            return types.MSG_UPDATE_CART_TO_SUCCESS

        default: return state
    }
}
export default messageReducer;