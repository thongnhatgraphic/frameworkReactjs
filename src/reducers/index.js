import { combineReducers } from "redux";
import products from "./products_Reducer";
import cartReducer from "./cart_Reducer";
import messageReducer from "./message_Reducer";
const myReducers = combineReducers({
    products: products,
    cartReducer: cartReducer,
    messageReducer: messageReducer
});


export default myReducers;