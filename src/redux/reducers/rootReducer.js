import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  products: productReducer,
  product: productReducer,
  user: authReducer,
  users: userReducer,
  orders: orderReducer,
});

export default rootReducer;
