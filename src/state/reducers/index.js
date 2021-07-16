import amountReducer from "./amountReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    amountReducer,
    cartReducer
});